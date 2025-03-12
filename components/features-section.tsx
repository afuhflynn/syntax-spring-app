import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle, Code } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { fadeIn, features, staggerContainer } from "@/constants/constants";

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="md:col-span-2">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Everything You Need to Excel
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform provides all the tools you need to master coding
                and improve your skills
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((item, index) => (
                <motion.div
                  variants={fadeIn}
                  key={`item-${index}-${item.title}`}
                >
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <Code className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.content.map((value, index) => (
                          <li key={`item-${index}-${value.id}-${value.text}`}>
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{value.text}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href="/challenges">
                          {item.ctaText}{" "}
                          <item.CtaIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
