"use client";

import { notFound, useSearchParams } from "next/navigation";
import { getChallengeBySlug } from "@/lib/challenges";
import ChallengeClient from "./challenge-client";
import devLog from "@/lib/devLog";

export default function ChallengePage() {
  const params = useSearchParams();
  const slug = params.get("slug");
  devLog(slug);
  const challenge = getChallengeBySlug(slug as string);

  if (!challenge) {
    notFound();
  }
  return <ChallengeClient challenge={challenge} />;
}
