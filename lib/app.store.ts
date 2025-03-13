import { create } from "zustand";

interface AppStoreTypes {
  challengeSlug: string;
  setChallengeSlug: (slug: string) => void;
}

const appStore = create<AppStoreTypes>((set, get) => ({
  challengeSlug: "",
  setChallengeSlug: (slug) => {
    set({ challengeSlug: slug });
  },
}));

export default appStore;
