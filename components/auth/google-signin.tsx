"use server";
import { Button } from "../ui/button";
import GoogleIcon from "../GoogleIcon";
import { signIn } from "@/lib/auth";

export const GoogleSignIn = async () => {
  return (
    <form
      action={async () => {
        await signIn("google");
      }}
    >
      <Button variant="secondary" className="w-full">
        <GoogleIcon className="mr-2 h-4 w-4" /> Google
      </Button>
    </form>
  );
};
