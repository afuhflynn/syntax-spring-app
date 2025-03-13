"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Challenge } from "@/TYPES";
import { categoryFilter, difficultyFilter } from "@/constants/constants";
import Image from "next/image";

const initialCategoryFilterQuery = "Filter By Category";
const initialDifficultyFilterQuery = "Filter By Difficulty";
export default function ChallengesClient({
  challenges,
}: {
  challenges: Challenge[];
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilterQuery, setCategoryFilterQuery] = useState(
    initialCategoryFilterQuery
  );
  const [difficultyFilterQuery, setDifficultyFilterQuery] = useState(
    initialDifficultyFilterQuery
  );
  const [isCategoryFilterDropdown, setIsCategoryFilterDropDown] =
    useState(false);
  const [isDifficultyFilterDropdown, setIsDifficultyFilterDropDown] =
    useState(false);

  const [filteredChallenges, setFilteredChallenges] = useState(challenges);

  const handleSearchFilter = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    const filteredChallenges = challenges.filter(
      (challenge) =>
        challenge.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        challenge.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.languages.find((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        challenge.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChallenges(filteredChallenges);
  };

  const handleFilterToggle = (value: string) => {
    const filteredChallenges = challenges.filter(
      (challenge) =>
        challenge.category.toLowerCase() === value.toLowerCase() ||
        challenge.difficulty.toLowerCase() === value.toLowerCase()
    );
    setFilteredChallenges(filteredChallenges);
  };

  useEffect(() => {
    const checkAuth = async () => {
      // Replace this with your actual authentication check
      const auth = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(auth);
      setIsLoading(false);
      if (!auth) {
        router.push("/auth/log-in");
      }
    };
    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  if (!isAuthenticated) {
    return null;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-difficulty-easy/10 text-difficulty-easy border-difficulty-easy/20";
      case "Medium":
        return "bg-difficulty-medium/10 text-difficulty-medium border-difficulty-medium/20";
      case "Hard":
        return "bg-difficulty-hard/10 text-difficulty-hard border-difficulty-hard/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleRouting = (slug: string) => {
    router.push(`/play-ground/challenge/${slug}`);
  };

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          Search or filter Challenges
        </h1>
        {/* Search bar and filter bar */}
        <div className="w-full md:w-full h-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center justify-center md:gap-4 gap-3 md:my-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search a challenge..."
              className="pl-10 py-2"
              value={searchQuery}
              onChange={(e) => handleSearchFilter(e.target.value)}
            />
          </div>
          <div className="w-full grid grid-cols-2 grid-rows-1 items-center gap-4 md:gap-6">
            <div className="w-full flex flex-col items-center gap-2 h-auto relative">
              <Button
                variant="secondary"
                onClick={() => setIsCategoryFilterDropDown((prev) => !prev)}
                className="w-full card flex flex-row gap-2 items-center my-0 bg-card border-black border-[1px] shadow-md"
              >
                {categoryFilterQuery}{" "}
                {!isCategoryFilterDropdown ? <ChevronDown /> : <ChevronUp />}
              </Button>
              {isCategoryFilterDropdown && (
                <ul className="absolute top-14 bg-popover w-full h-auto rounded-md border-black border-opacity-20 border-[1px] shadow-md flex flex-col items-center justify-start gap-[0.1rem]">
                  {categoryFilter.map((item, index) => (
                    <li
                      className={`cursor-pointer hover:bg-gray-100 hover:bg-opacity-60 py-3 x-4 w-full h-auto rounded-md`}
                      key={`item-${item.id}-${index}-${item.data}`}
                      onClick={() => {
                        setIsCategoryFilterDropDown((prev) => !prev);
                        setCategoryFilterQuery(item.data);
                        setDifficultyFilterQuery(initialDifficultyFilterQuery);
                        handleFilterToggle(item.data);
                      }}
                    >
                      {item.data}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full flex flex-col items-center gap-2 h-auto relative">
              <Button
                variant="secondary"
                onClick={() => setIsDifficultyFilterDropDown((prev) => !prev)}
                className="w-full card flex flex-row gap-2 items-center my-0 bg-card border-black border-[1px] shadow-md"
              >
                {difficultyFilterQuery}{" "}
                {!isDifficultyFilterDropdown ? <ChevronDown /> : <ChevronUp />}
              </Button>
              {isDifficultyFilterDropdown && (
                <ul className="absolute top-14 bg-popover w-full h-auto rounded-md border-black border-opacity-20 border-[1px] shadow-md flex flex-col items-center justify-start gap-[0.1rem]">
                  {difficultyFilter.map((item, index) => (
                    <li
                      className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-60 py-3 x-4 w-full h-auto rounded-md"
                      key={`item-${item.id}-${index}-${item.data}`}
                      onClick={() => {
                        setIsDifficultyFilterDropDown((prev) => !prev);
                        setDifficultyFilterQuery(item.data);
                        setCategoryFilterQuery(initialCategoryFilterQuery);
                        handleFilterToggle(item.data);
                      }}
                    >
                      {item.data}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          filteredChallenges.length === 0
            ? "flex flex-1"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }`}
      >
        {filteredChallenges.length === 0 ? (
          <div className="text-center py-8 w-full">
            <p className="text-muted-foreground">
              No challenge found matching your search or filter. Try a different
              query.
            </p>
          </div>
        ) : (
          filteredChallenges.map((challenge) => (
            <Card
              key={challenge.id}
              onClick={() => handleRouting(challenge.slug)}
              className="flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <Badge
                    className={cn(
                      "border",
                      getDifficultyColor(challenge.difficulty)
                    )}
                  >
                    {challenge.difficulty}
                  </Badge>
                </div>
                {/* Languages icons */}
                <div className="flex flex-row w-full items-center justify-center gap-4 py-4">
                  {challenge.languageIcons &&
                    Object.values(challenge.languageIcons).map(
                      (iconUrl, index) => (
                        <Image
                          className="rounded-full h-[3.4rem] w-[3.4rem]"
                          key={`item-${index}-${iconUrl}`}
                          src={iconUrl}
                          alt={challenge.title}
                          width={14}
                          height={14}
                        />
                      )
                    )}
                </div>
                <CardDescription>
                  {challenge.description.substring(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {challenge.languages.map((language) => (
                    <Badge key={language} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleRouting(challenge.slug)}
                >
                  Solve Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
