"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import useUserStore from "@/lib/user.store";
import { getChallengeBySlug } from "@/lib/challenges";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { user } = useUserStore();
  const currentDate = new Date();
  // TODO: Change later to actual user data
  const currentScore = 40;
  const dummyChallenge = getChallengeBySlug("two-sum");

  // Redirect to home page if there is no user data
  if (!user) {
    redirect("/");
  }
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      <div className="col-span-2 space-y-6">
        {/* Streak Card */}
        <Card className="overflow-hidden bg-[#0f172a] text-white">
          <CardHeader className="pb-2">
            <h2 className="text-2xl font-bold">
              {user && user.name ? user.name.split(" ")[0] : "Hey"},
            </h2>
            {user && user.submissions && user.submissions.length > 0 ? (
              <p className="text-sm text-gray-300 text-center">
                Upskill yourself{" "}
                <span className="font-bold">
                  right away with a new challenge
                </span>{" "}
                to increase your score.
              </p>
            ) : (
              <p className="text-sm text-gray-300 text-center">
                You don&apos;t have any score yet.
                <span className="inline-block">😞</span>. Take a challenge now{" "}
                <span className="font-bold">to increase your score.</span>
              </p>
            )}
          </CardHeader>
          <CardContent className="pb-0">
            <div className="flex items-center flex-col justify-center">
              <span className="py-2">Your current score for this week.</span>
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-[#1e293b]">
                <div className="relative flex h-full w-full items-center justify-center rounded-full">
                  <span className="text-5xl font-bold">{currentScore}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between md:px-24 pb-4">
              {[...Array(5)].map((day) => (
                <div key={day} className="flex flex-col items-center ">
                  <Zap className="mb-1 h-5 w-5 fill-yellow-400 border-yellow-500 " />
                  <span className="text-xs">Day {day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resume Challenges or preview completed challenges */}
        <div>
          <h3 className="mb-2 text-xl font-bold">Resume your practice</h3>
          <div className="space-y-4">
            {user &&
              user.authoredChallenges &&
              user.authoredChallenges.map((item, index) => (
                <Card
                  key={`${item.id}-${item.author}-${item.createdAt}-${index}`}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-python text-blue-600"
                      >
                        <path d="M12 9H5a2 2 0 0 0-2 2v4a2 0 2 0 0 2 2h3" />
                        <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
                        <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 2 1 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Started{" "}
                        {currentDate.getFullYear() -
                          item.createdAt.getFullYear()}{" "}
                        {currentDate.getFullYear() -
                          item.createdAt.getFullYear() >
                        1
                          ? "years"
                          : "year"}{" "}
                        ago
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <Button variant="link" className="mt-2 px-0 text-primary" asChild>
            <Link href={`/dashboard/${user?.username}/challenges`}>
              Explore all challenges
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-6 flex flex-col items-center justify-center w-full md:w-auto">
        {/* Weekly Leaderboard */}
        <Card className="w-full md:w-auto">
          <CardHeader>
            <h3 className="text-xl font-bold">Weekly Leaderboard</h3>
          </CardHeader>
          <CardContent className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                🥇
              </div>
              <Avatar className="h-10 w-10 border bg-orange-500 text-white">
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">Prakruthi</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="India flag"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="font-medium">5.67k XP</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-xs font-bold text-white">
                🥈
              </div>
              <Avatar className="h-10 w-10 border bg-green-600 text-white">
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">Ram</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="India flag"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="font-medium">5.42k XP</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                🥇
              </div>
              <Avatar className="h-10 w-10 border bg-green-600 text-white">
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">Pragalbha</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="India flag"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="font-medium">5.17k XP</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                4th
              </div>
              <Avatar className="h-10 w-10 border bg-blue-500 text-white">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">Chandralekha</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="India flag"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="font-medium">5.16k XP</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                5th
              </div>
              <Avatar className="h-10 w-10 border">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Ishita"
                />
                <AvatarFallback>I</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">Ishita</span>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="India flag"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="font-medium">5.15k XP</div>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="/platform/challenges"
              className="text-primary hover:underline"
            >
              Try out a new challenge.
            </Link>
          </CardFooter>
        </Card>

        {/* TODO: Generate a random index in actual challenges array and select it as a suggested challenge */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">A New Challenge For You</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Web Basics"
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{dummyChallenge?.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {dummyChallenge?.description.substring(0, 179)}...
              </p>
            </div>
            <Button asChild>
              <Link
                href={`/play-ground/challenge?slug=${dummyChallenge?.slug}&id=${dummyChallenge?.id}`}
              >
                Start challenge.
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
