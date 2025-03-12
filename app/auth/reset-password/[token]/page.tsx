"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/logo";
import PasswordStrengthCriteria from "@/components/password-strength-criteria";
import PasswordStrengthMeter from "@/components/password-strength-meter";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    // Here you would typically call your API to reset the password
    // For demo purposes, we'll just show a success message
    toast({
      title: "Password reset successful",
      description:
        "Your password has been reset. You can now log in with your new password.",
    });
    router.push("/auth/log-in");
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
            <CardTitle className="text-2xl font-bold">
              Reset your password
            </CardTitle>
            <CardDescription>Enter your new password below</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  required
                />
              </div>
              {formData.password.trim() !== "" && (
                <PasswordStrengthMeter password={formData.password} />
              )}
              {formData.password.trim() !== "" && (
                <PasswordStrengthCriteria password={formData.password} />
              )}
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </CardContent>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
