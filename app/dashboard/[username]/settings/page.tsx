"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, Download, Trash2, Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useUserStore from "@/lib/user.store";

export default function AccountSettings() {
  const { toast } = useToast();
  const { user } = useUserStore();

  // Mock user data - replace with actual user data
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);

  const handleAccountUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account updated",
      description: "Your account has been updated successfully.",
    });
  };

  const handleCopyUsername = () => {
    navigator.clipboard.writeText(user?.username as string);
    toast({
      title: "Username copied",
      description: "Username has been copied to clipboard.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data export initiated",
      description:
        "Your data export has been initiated. You'll receive an email when it's ready.",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p className="text-muted-foreground">
          Manage your account information and preferences.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>
            Update your account details and personal information.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleAccountUpdate}>
          <CardContent className="space-y-6">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:items-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Avatar className="h-20 w-20 flex flex-row items-center justify-center">
                  <AvatarImage
                    src={user?.avatarUrl || ""}
                    alt={user?.username}
                  />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {user?.username.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" type="button">
                    <Upload className="mr-2 h-4 w-4" />
                    Change
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex">
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-l-none border-l-0"
                      onClick={handleCopyUsername}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your profile URL: https://syntaxspring.com/dashboard/
                    {user?.username}/profile
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    This email is used for notifications and account recovery.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Member since {user?.createdAt.toLocaleDateString()}
            </p>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data and Privacy</CardTitle>
          <CardDescription>
            Manage your data and privacy settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Export Account Data</Label>
              <p className="text-sm text-muted-foreground">
                Download a copy of your data, including your profile,
                submissions, and achievements.
              </p>
            </div>
            <Button variant="outline" onClick={handleExportData}>
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="space-y-2">
            <h4 className="font-medium text-destructive">Danger Zone</h4>
            <p className="text-sm text-muted-foreground">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <Button
              variant="destructive"
              onClick={() => {
                toast({
                  title: "Account deletion requested",
                  description:
                    "We've sent a confirmation email to verify this action.",
                });
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
