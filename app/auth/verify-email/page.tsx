"use client";

import type React from "react";

import { useEffect, useState } from "react";
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
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/logo";

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call your API to verify the email
    // For demo purposes, we'll just show a success message
    toast({
      title: "Email verified",
      description: "Your email has been successfully verified.",
    });
    router.push("/dashboard");
  };

  const resendVerificationEmail = async () => {
    // Here you would typically call your API to resend the verification email
    // For demo purposes, we'll just show a success message
    toast({
      title: "Verification email sent",
      description:
        "A new verification email has been sent to your email address.",
    });
    setSeconds(0);
    setMinutes(1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (seconds === 0 && minutes !== 0) {
        setSeconds(60);
        setMinutes(0);
      }
      if (seconds !== 0 && minutes === 0) {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

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
              Verify your email
            </CardTitle>
            <CardDescription>
              We've sent a 6 digit verification code to your email. Please enter
              the code below.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  type="number"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify Email
              </Button>
            </CardContent>
          </form>
          <CardFooter className="flex justify-center">
            <Button
              variant="link"
              onClick={resendVerificationEmail}
              disabled={seconds !== 0}
            >
              Resend email{" "}
              {seconds !== 0 && (
                <span className="ml-1 font-semibold text-[16px]">
                  {minutes > 9 ? minutes : `0${minutes}`} :{" "}
                  {seconds > 9 ? seconds : `0${seconds}`}s
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
