"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Logo from "@/components/logo";

export default function VerifyEmailPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <div className="w-full h-auto flex flex-row items-center justify-center mt-8">
            <Logo />
          </div>
          <CardHeader className="space-y-1 text-center mb-2">
            <CardTitle className="text-2xl font-bold text-red-400">
              Delete your account
            </CardTitle>
            <CardDescription>
              Confirming the delete means you will no longer have an account.
              And you cannot undo this action.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <Button type="submit" className="w-full" variant="destructive">
                Delete Account
              </Button>
            </CardContent>
          </form>
          <CardFooter className="flex justify-center flex-col space-y-1 mt-2">
            Changed your mind?
            <Button variant="link">Return to Dashboard.</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
