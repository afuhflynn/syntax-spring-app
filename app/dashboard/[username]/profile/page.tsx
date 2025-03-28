"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data - replace with actual user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    bio: "Software engineer passionate about algorithms and web development.",
    image: null,
    notifications: {
      email: true,
      challenges: true,
      achievements: true,
      comments: false,
      newsletter: true,
    },
    preferences: {
      theme: "system",
      codeEditorTheme: "vs-dark",
      fontSize: "14",
      tabSize: "2",
      autoSave: true,
      wordWrap: true,
    },
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully.",
    });
  };

  const handleNotificationUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification preferences updated",
      description:
        "Your notification preferences have been updated successfully.",
    });
  };

  const handlePreferencesUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Preferences updated",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs
        defaultValue="profile"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile information and public details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={userData.image || ""}
                        alt={userData.name}
                      />
                      <AvatarFallback className="text-2xl">
                        {userData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={userData.bio}
                        onChange={(e) =>
                          setUserData({ ...userData, bio: e.target.value })
                        }
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="mt-6">
          <Card>
            <form onSubmit={handlePasswordUpdate}>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Update Password</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <form onSubmit={handleNotificationUpdate}>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={userData.notifications.email}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        notifications: {
                          ...userData.notifications,
                          email: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="challenge-notifications">
                      Challenge Updates
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new challenges and updates
                    </p>
                  </div>
                  <Switch
                    id="challenge-notifications"
                    checked={userData.notifications.challenges}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        notifications: {
                          ...userData.notifications,
                          challenges: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="achievement-notifications">
                      Achievement Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you earn badges and achievements
                    </p>
                  </div>
                  <Switch
                    id="achievement-notifications"
                    checked={userData.notifications.achievements}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        notifications: {
                          ...userData.notifications,
                          achievements: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="comment-notifications">
                      Comment Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when someone comments on your solutions
                    </p>
                  </div>
                  <Switch
                    id="comment-notifications"
                    checked={userData.notifications.comments}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        notifications: {
                          ...userData.notifications,
                          comments: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newsletter-notifications">Newsletter</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive our monthly newsletter with tips and updates
                    </p>
                  </div>
                  <Switch
                    id="newsletter-notifications"
                    checked={userData.notifications.newsletter}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        notifications: {
                          ...userData.notifications,
                          newsletter: checked,
                        },
                      })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Preferences</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-6">
          <Card>
            <form onSubmit={handlePreferencesUpdate}>
              <CardHeader>
                <CardTitle>Editor Preferences</CardTitle>
                <CardDescription>
                  Customize your coding environment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="theme">Theme</Label>
                  <select
                    id="theme"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={userData.preferences.theme}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          theme: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="editor-theme">Code Editor Theme</Label>
                  <select
                    id="editor-theme"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={userData.preferences.codeEditorTheme}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          codeEditorTheme: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="vs-dark">VS Dark</option>
                    <option value="vs-light">VS Light</option>
                    <option value="hc-black">High Contrast Dark</option>
                    <option value="hc-light">High Contrast Light</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="font-size">Font Size</Label>
                  <select
                    id="font-size"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={userData.preferences.fontSize}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          fontSize: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="12">12px</option>
                    <option value="14">14px</option>
                    <option value="16">16px</option>
                    <option value="18">18px</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tab-size">Tab Size</Label>
                  <select
                    id="tab-size"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={userData.preferences.tabSize}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          tabSize: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="2">2 spaces</option>
                    <option value="4">4 spaces</option>
                    <option value="8">8 spaces</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-save">Auto Save</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save your code as you type
                    </p>
                  </div>
                  <Switch
                    id="auto-save"
                    checked={userData.preferences.autoSave}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          autoSave: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="word-wrap">Word Wrap</Label>
                    <p className="text-sm text-muted-foreground">
                      Wrap long lines of code to fit in the editor
                    </p>
                  </div>
                  <Switch
                    id="word-wrap"
                    checked={userData.preferences.wordWrap}
                    onCheckedChange={(checked) =>
                      setUserData({
                        ...userData,
                        preferences: {
                          ...userData.preferences,
                          wordWrap: checked,
                        },
                      })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Preferences</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
