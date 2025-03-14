"use client";

import { notFound, usePathname } from "next/navigation";
import { getChallengeBySlug } from "@/lib/challenges";
import ChallengeClient from "./challenge-client";

export default function ChallengePage() {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  const challenge = getChallengeBySlug(slug);

  if (!challenge) {
    notFound();
  }
  document.title = `${challenge.title} | Syntax Spring`;

  return <ChallengeClient challenge={challenge} />;
}
