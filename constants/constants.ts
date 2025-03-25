import { ArrowRight, Terminal, Zap } from "lucide-react";

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const features = [
  {
    title: "In-Browser Editor",
    description:
      "Write and test code directly in your browser with our Monaco-powered editor",
    content: [
      {
        id: 1,
        text: "Support for multiple languages",
      },
      {
        id: 2,
        text: "Syntax highlighting and auto-completion",
      },
      {
        id: 3,
        text: "Customizable editor settings",
      },
    ],
    ctaText: "Try it out",
    CtaIcon: ArrowRight,
  },
  {
    title: "Live Execution",
    description:
      "Execute your code and see results instantly with our integrated runtime",
    content: [
      {
        id: 1,
        text: "Powered by the Piston API for secure execution",
      },
      {
        id: 2,
        text: "Real-time output and error handling",
      },
      {
        id: 3,
        text: "Live preview for web languages",
      },
    ],
    ctaText: "See it in action",
    CtaIcon: Terminal,
  },
  {
    title: "AI Assistance",
    description:
      "Get help from our AI assistant when you're stuck on a challenge",
    content: [
      {
        id: 1,
        text: "Contextual hints and guidance",
      },
      {
        id: 2,
        text: "Code explanations and best practices",
      },
      {
        id: 3,
        text: "Personalized learning experience",
      },
    ],
    ctaText: "Get help",
    CtaIcon: Zap,
  },
];

// category: "Algorithms",
// difficulty: "Easy",

export const categoryFilter = [
  {
    id: 1,
    data: "Algorithms",
  },
  {
    id: 2,
    data: "Web",
  },
  {
    id: 3,
    data: "Block Chain",
  },
  {
    id: 4,
    data: "UI/UX",
  },
];

export const difficultyFilter = [
  {
    id: 1,
    data: "Easy",
  },
  {
    id: 2,
    data: "Medium",
  },
  {
    id: 3,
    data: "Hard",
  },
];
