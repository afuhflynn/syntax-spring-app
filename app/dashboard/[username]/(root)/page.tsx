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

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      <div className="col-span-2 space-y-6">
        {/* Streak Card */}
        <Card className="overflow-hidden bg-[#0f172a] text-white">
          <CardHeader className="pb-2">
            <h2 className="text-2xl font-bold">Afuh, your streak was broken</h2>
            <p className="text-sm text-gray-300">
              Your previous streak was broken{" "}
              <span className="inline-block">😞</span>. Upskill yourself for
              over <span className="font-bold">10 minutes</span> to start a new
              streak.
            </p>
          </CardHeader>
          <CardContent className="pb-0">
            <div className="flex items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-[#1e293b]">
                <span className="text-5xl font-bold">5</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between px-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                <div key={day} className="flex flex-col items-center">
                  <Zap className="mb-1 h-5 w-5" />
                  <span className="text-xs">Day {day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Course Enrollment Card */}
        <Card>
          <CardContent className="flex flex-col items-center p-6 sm:flex-row sm:items-start sm:gap-6">
            <div className="mb-4 shrink-0 sm:mb-0">
              <div className="h-32 w-32 rounded-md border bg-muted p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-monitor"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">
                You haven&apos;t enrolled in a course yet
              </h3>
              <p className="mt-2 text-muted-foreground">
                Accelerate your learning by starting a curated learning path
                that fits your interests.
              </p>
              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                Explore learning paths
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Resume Practice */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Resume your practice</h3>
          <div className="space-y-4">
            <Card>
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
                    <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
                    <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
                    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Hello Codedamn! feat. Python</h4>
                  <p className="text-sm text-muted-foreground">
                    Started a year ago
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
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
                    className="lucide lucide-atom text-blue-600"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Hello Codedamn! feat. React</h4>
                  <p className="text-sm text-muted-foreground">
                    Started a year ago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button variant="link" className="mt-4 px-0 text-indigo-600">
            Explore all problems
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Weekly Leaderboard */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Weekly Leaderboard</h3>
          </CardHeader>
          <CardContent className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Earn XP to start competing.{" "}
              <Link href="#" className="text-indigo-600 hover:underline">
                Explore problems
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* New Course */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">A New Course For You</h3>
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
              <h4 className="text-lg font-semibold">
                Learn the basics of web - Internet fundamentals
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a small course diving into some of the fundamentals and
                core of how HTTP works and how the overall web works giving you
                a solid understanding of underlying HTTP technology
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
