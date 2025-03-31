"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/logo";
import { AuthButtons } from "@/components/auth/auth-buttons";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call your API to authenticate the user
    // For demo purposes, we'll just show a success message
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Logged in",
      description: "You've successfully logged in!",
    });
    router.push("/dashboard");
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
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
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Log in</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Username or Email</Label>
                <Input
                  id="email"
                  type="text"
                  name="username"
                  placeholder="Enter your username or email"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  name="password"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Log in
              </Button>
            </CardContent>
          </form>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-x">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <AuthButtons />
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
