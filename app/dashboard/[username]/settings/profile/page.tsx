"use client";

import type React from "react";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function ProfileSettings() {
  const { toast } = useToast();

  // Mock user data - replace with actual user data
  const [profileData, setProfileData] = useState({
    bio: "Software engineer passionate about algorithms and web development.",
    location: "San Francisco, CA",
    company: "Tech Innovations Inc.",
    jobTitle: "Senior Developer",
    education: "Computer Science, Stanford University",
    website: "https://johndoe.dev",
    github: "johndoe",
    twitter: "johndoedev",
    linkedin: "john-doe",
    showBadges: true,
    showActivity: true,
    showStats: true,
    showFollowers: true,
    showFollowing: true,
    showLanguages: true,
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <div className="p-6 space-y-8 h-screen overflow-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground">
          Customize your public profile information.
        </p>
      </div>

      <Separator />

      <form onSubmit={handleProfileUpdate}>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About You</CardTitle>
              <CardDescription>
                Share information about yourself with the community.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          location: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          website: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          company: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={profileData.jobTitle}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        jobTitle: e.target.value,
                      })
                    }
                    placeholder="Your role"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="education">Education</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="education"
                      value={profileData.education}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          education: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="Degree, Institution"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Connect your social profiles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="github">GitHub</Label>
                  <div className="relative">
                    <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="github"
                      value={profileData.github}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          github: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <div className="relative">
                    <Twitter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="twitter"
                      value={profileData.twitter}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          twitter: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="linkedin"
                      value={profileData.linkedin}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          linkedin: e.target.value,
                        })
                      }
                      className="pl-10"
                      placeholder="username"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
