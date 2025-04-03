import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-background w-full">
      <div className="container">
        <div className="mx-auto text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
            Ready to Level Up Your Coding Skills?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join a community of innovators who are improving their skills with
            Syntax Spring. Start coding today and see the difference.
          </p>
          <Button size="lg" asChild className="w-full md:w-auto">
            <Link
              href="/platform/challenges"
              className="flex flex-row items-center justify-center"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
