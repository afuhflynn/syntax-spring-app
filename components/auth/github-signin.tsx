"use server";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { signIn } from "@/lib/auth";

export const GitHubSignIn = async () => {
  return (
    <form
      action={async () => {
        await signIn("github");
      }}
    >
      <Button variant="secondary" className="w-full">
        <Github className="mr-2 h-4 w-4" /> Github
      </Button>
    </form>
  );
};
