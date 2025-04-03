import { User } from "@/types/TYPES";
import axios from "axios";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  isCheckingAuth: boolean;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  checkAuth: () => void;
}

const dummyUser = {
  username: "AfuhFlynn",
  avatarUrl: "",
  password: "123",
  email: "flyinnsafuh@gmail.com",
};
const useUserStore = create<UserStore>((set, _) => ({
  user: dummyUser,
  isCheckingAuth: false,
  isAuthenticated: true,
  setUser: (user) => {
    set({ user });
  },
  checkAuth: async () => {
    set({
      isCheckingAuth: true,
    });
    try {
      const res = await axios.get<{ user: User; message: string }>(
        "/api/user/auth/check-auth"
      );
      if (!res.data.user) {
        return;
      }
      set({
        user: res.data.user,
        isCheckingAuth: false,
        isAuthenticated: true,
      });
    } catch (error: unknown) {
      set({
        isCheckingAuth: false,
      });
      console.log(error);
    } finally {
      set({
        isCheckingAuth: false,
      });
    }
  },
}));

export default useUserStore;
