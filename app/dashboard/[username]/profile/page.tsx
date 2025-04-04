"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  MapPin,
  Briefcase,
  Calendar,
  Edit,
  Award,
  Code,
  GitPullRequest,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileDashboard } from "@/components/profile-dashboard";
import { RecommendedChallenges } from "./recommended-challenges";
import useUserStore from "@/lib/user.store";

export default function ProfilePage() {
  const [streakData, setStreakData] = useState<number[]>([]);
  const { user } = useUserStore();

  // Mock user data - replace with actual user data
  const userData = {
    name: "John Doe",
    username: "johndoe",
    image: null,
    bio: "Software engineer passionate about algorithms and web development. Building cool stuff with React, Next.js, and TypeScript.",
    location: "San Francisco, CA",
    company: "Tech Innovations Inc.",
    jobTitle: "Senior Developer",
    website: "https://johndoe.dev",
    github: "johndoe",
    twitter: "johndoedev",
    linkedin: "john-doe",
    joinedDate: "January 15, 2023",
    followers: 128,
    following: 75,
    streak: 42,
    longestStreak: 67,
    totalChallenges: 87,
    completedChallenges: 64,
    points: 3750,
    level: 12,
    nextLevelPoints: 4000,
    rank: 342,
    badges: [
      {
        id: 1,
        name: "Early Adopter",
        description: "Joined during beta",
        icon: "🚀",
      },
      {
        id: 2,
        name: "Streak Master",
        description: "30-day streak",
        icon: "🔥",
      },
      {
        id: 3,
        name: "Problem Solver",
        description: "Solved 50 challenges",
        icon: "🧩",
      },
      {
        id: 4,
        name: "JavaScript Guru",
        description: "Mastered JavaScript challenges",
        icon: "⚡",
      },
      {
        id: 5,
        name: "React Pioneer",
        description: "Completed all React challenges",
        icon: "⚛️",
      },
      {
        id: 6,
        name: "Helpful Mentor",
        description: "Helped 10 community members",
        icon: "🤝",
      },
    ],
    languages: [
      { name: "JavaScript", proficiency: 92 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Python", proficiency: 78 },
      { name: "React", proficiency: 90 },
      { name: "Node.js", proficiency: 82 },
    ],
    recentActivity: [
      {
        id: 1,
        type: "challenge",
        name: "React State Management",
        date: "2 days ago",
        status: "completed",
      },
      {
        id: 2,
        type: "badge",
        name: "React Pioneer",
        date: "3 days ago",
        status: "earned",
      },
      {
        id: 3,
        type: "challenge",
        name: "TypeScript Generics",
        date: "5 days ago",
        status: "completed",
      },
      {
        id: 4,
        type: "comment",
        name: "Helped with async/await question",
        date: "1 week ago",
        status: "posted",
      },
      {
        id: 5,
        type: "challenge",
        name: "CSS Grid Layout",
        date: "1 week ago",
        status: "completed",
      },
    ],
    stats: {
      challengesThisMonth: 12,
      averageScore: 92,
      topLanguage: "JavaScript",
      fastestSolution: "2m 34s",
      totalTime: "87h 23m",
    },
  };

  // Generate random streak data for visualization
  useEffect(() => {
    const generateStreakData = () => {
      const data = [];
      for (let i = 0; i < 30; i++) {
        data.push(Math.floor(Math.random() * 5));
      }
      setStreakData(data);
    };

    generateStreakData();
  }, []);

  return (
    <div className="space-y-6 p-6 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Profile Dashboard</h2>
        <p className="text-muted-foreground">
          View and manage your coding profile, progress, and achievements.
        </p>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col gap-8">
        {/* User Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={userData.image || ""} alt={userData.name} />
                  <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex space-x-4 mt-2">
                  {userData.github && (
                    <a
                      href={`https://github.com/${userData.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}

                  {userData.twitter && (
                    <a
                      href={`https://twitter.com/${userData.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  )}

                  {userData.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${userData.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h2 className="text-2xl font-bold">{userData.name}</h2>
                      <p className="text-muted-foreground">
                        @{userData.username}
                      </p>
                    </div>
                    <div className="flex justify-center md:justify-end gap-2">
                      <Badge variant="outline" className="ml-2">
                        Rank #{userData.rank}
                      </Badge>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/dashboard/settings/profile">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">{userData.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    {userData.company && (
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>
                          {userData.jobTitle} at {userData.company}
                        </span>
                      </div>
                    )}

                    {userData.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{userData.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {userData.website && (
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a
                          href={userData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {userData.website.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Joined {userData.joinedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Stats */}
        <ProfileDashboard userData={userData} />

        {/* Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Activity (Last 30 Days)</CardTitle>
            <CardDescription>
              Your daily coding activity and contributions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end space-x-1 h-24">
              {streakData.map((value, index) => (
                <div
                  key={index}
                  className={`w-full rounded-sm ${
                    value === 0
                      ? "bg-muted h-2"
                      : value === 1
                      ? "bg-emerald-200 dark:bg-emerald-900 h-1/4"
                      : value === 2
                      ? "bg-emerald-300 dark:bg-emerald-800 h-2/4"
                      : value === 3
                      ? "bg-emerald-400 dark:bg-emerald-700 h-3/4"
                      : "bg-emerald-500 dark:bg-emerald-600 h-full"
                  }`}
                  title={`${value} contributions`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Challenges */}
        <RecommendedChallenges />

        {/* Learning Resources */}
        {/* <LearningResources /> */}

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GitPullRequest className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your recent activity on Syntax Spring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start pb-4 last:pb-0 last:border-0 border-b"
                >
                  <div
                    className={`mr-4 mt-1 rounded-full p-1 ${
                      activity.type === "challenge"
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                        : activity.type === "badge"
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
                        : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {activity.type === "challenge" ? (
                      <Code className="h-4 w-4" />
                    ) : activity.type === "badge" ? (
                      <Award className="h-4 w-4" />
                    ) : (
                      <GitPullRequest className="h-4 w-4" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.status === "completed"
                        ? "Completed"
                        : activity.status === "earned"
                        ? "Earned"
                        : "Posted"}{" "}
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/dashboard/activity">View All Activity</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
