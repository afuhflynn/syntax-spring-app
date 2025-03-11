import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getChallengeBySlug } from "@/lib/challenges";
import ChallengeClient from "./challenge-client";

export async function generateMetadata(params: {
  slug: string;
}): Promise<Metadata> {
  console.log(params.slug);
  const challenge = getChallengeBySlug(params.slug);
  // console.log(challenge);

  if (!challenge) {
    return {
      title: "Challenge Not Found",
    };
  }

  return {
    title: `${challenge.title} | Syntax Spring`,
    description: challenge.description.substring(0, 160),
  };
}

export default function ChallengePage(params: { slug: string }) {
  const challenge = getChallengeBySlug(params.slug);

  if (!challenge) {
    notFound();
  }

  return <ChallengeClient challenge={challenge} />;
}
