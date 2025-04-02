import { Github } from "lucide-react";
import { Button } from "../ui/button";
import GoogleIcon from "../GoogleIcon";
import { FormEvent } from "react";
import { signIn } from "@/lib/auth";

export const AuthButtons = () => {
  return (
    <form
      className="flex space-x-2"
      action={async () => {
        "use server";
        signIn("github");
      }}
    >
      <Button variant="secondary" className="w-full">
        <Github className="mr-2 h-4 w-4" /> Github
      </Button>
      <Button variant="secondary" className="w-full">
        <GoogleIcon className="mr-2 h-4 w-4" /> Google
      </Button>
    </form>
  );
};
