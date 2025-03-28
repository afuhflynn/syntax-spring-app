import type { Metadata } from "next";
import BlogPageComponent from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest articles about coding, programming languages, and software development.",
};

export default function BlogPage() {
  return <BlogPageComponent />;
}
