import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, Code, Star } from "lucide-react";

interface ProfileDashboardProps {
  userData: any;
}

export function ProfileDashboard({ userData }: ProfileDashboardProps) {
  // Calculate progress to next level
  const levelProgress =
    ((userData.points - userData.level * 300) /
      ((userData.level + 1) * 300 - userData.level * 300)) *
    100;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Level</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{userData.level}</div>
          <div className="text-xs text-muted-foreground">
            {userData.points} / {userData.nextLevelPoints} points
          </div>
          <Progress className="mt-2 h-2" value={levelProgress} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Challenges</CardTitle>
          <Code className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {userData.completedChallenges}
          </div>
          <div className="text-xs text-muted-foreground">
            {Math.round(
              (userData.completedChallenges / userData.totalChallenges) * 100
            )}
            % completion rate
          </div>
          <Progress
            className="mt-2 h-2"
            value={
              (userData.completedChallenges / userData.totalChallenges) * 100
            }
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Streak</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{userData.streak} days</div>
          <div className="text-xs text-muted-foreground">
            Longest: {userData.longestStreak} days
          </div>
          <Progress
            className="mt-2 h-2"
            value={(userData.streak / userData.longestStreak) * 100}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Coding Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {userData.stats.totalTime.split(" ")[0]}
          </div>
          <div className="text-xs text-muted-foreground">
            This month: {userData.stats.challengesThisMonth} challenges
          </div>
          <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{
                width: `${(userData.stats.challengesThisMonth / 20) * 100}%`,
              }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
