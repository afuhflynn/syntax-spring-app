export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  languages: string[];
  slug: string;
  examples?: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints?: string[];
  defaultCode?: {
    [key: string]: string;
  };
}

export const challenges: Challenge[] = [
  // Algorithms - Easy
  {
    id: "1",
    title: "Two Sum",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "two-sum",
    category: "Algorithms",
  },
  {
    id: "2",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "reverse-string",
    category: "Algorithms",
  },
  {
    id: "3",
    title: "FizzBuzz",
    description:
      "Write a program that outputs the string representation of numbers from 1 to n, but for multiples of three output 'Fizz', for multiples of five output 'Buzz', and for multiples of both three and five output 'FizzBuzz'.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "fizzbuzz",
    category: "Algorithms",
  },
  {
    id: "4",
    title: "Valid Palindrome",
    description:
      "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "valid-palindrome",
    category: "Algorithms",
  },

  // Algorithms - Medium
  {
    id: "5",
    title: "Container With Most Water",
    description:
      "Given n non-negative integers representing the heights of bars, find two lines that together with the x-axis form a container that holds the most water.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "container-with-most-water",
    category: "Algorithms",
  },
  {
    id: "6",
    title: "3Sum",
    description:
      "Given an array of integers, find all unique triplets in the array which gives the sum of zero.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "3sum",
    category: "Algorithms",
  },
  {
    id: "7",
    title: "Merge Intervals",
    description:
      "Given a collection of intervals, merge all overlapping intervals.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "merge-intervals",
    category: "Algorithms",
  },

  // Algorithms - Hard
  {
    id: "8",
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, find the median of the two sorted arrays.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "median-of-two-sorted-arrays",
    category: "Algorithms",
  },
  {
    id: "9",
    title: "Trapping Rain Water",
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "trapping-rain-water",
    category: "Algorithms",
  },

  // Data Structures - Easy
  {
    id: "10",
    title: "Implement Stack using Array",
    description:
      "Implement a stack data structure using an array with push, pop, top, and isEmpty operations.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "implement-stack-using-array",
    category: "Data Structures",
  },
  {
    id: "11",
    title: "Implement Queue using Array",
    description:
      "Implement a queue data structure using an array with enqueue, dequeue, front, and isEmpty operations.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "implement-queue-using-array",
    category: "Data Structures",
  },

  // Data Structures - Medium
  {
    id: "12",
    title: "Binary Tree Traversal",
    description:
      "Implement pre-order, in-order, and post-order traversal algorithms for a binary tree.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "binary-tree-traversal",
    category: "Data Structures",
  },
  {
    id: "13",
    title: "Implement Trie (Prefix Tree)",
    description:
      "Implement a trie with insert, search, and startsWith methods.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "implement-trie",
    category: "Data Structures",
  },
  {
    id: "14",
    title: "LRU Cache",
    description:
      "Design and implement a data structure for Least Recently Used (LRU) cache.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "lru-cache",
    category: "Data Structures",
  },

  // Data Structures - Hard
  {
    id: "15",
    title: "Implement a Min-Max Heap",
    description:
      "Implement a min-max heap data structure that supports both minimum and maximum operations efficiently.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "min-max-heap",
    category: "Data Structures",
  },

  // Dynamic Programming - Medium
  {
    id: "16",
    title: "Coin Change",
    description:
      "Given a set of coin denominations and a target amount, find the fewest number of coins needed to make up that amount.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "coin-change",
    category: "Dynamic Programming",
  },
  {
    id: "17",
    title: "Longest Increasing Subsequence",
    description:
      "Given an unsorted array of integers, find the length of longest increasing subsequence.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "longest-increasing-subsequence",
    category: "Dynamic Programming",
  },

  // Dynamic Programming - Hard
  {
    id: "18",
    title: "Dynamic Programming: Knapsack",
    description:
      "Solve the 0/1 knapsack problem using dynamic programming techniques.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "knapsack",
    category: "Dynamic Programming",
  },
  {
    id: "19",
    title: "Edit Distance",
    description:
      "Given two strings, find the minimum number of operations required to convert one string to another.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "edit-distance",
    category: "Dynamic Programming",
  },

  // Frontend - Easy
  {
    id: "20",
    title: "Interactive Button",
    description:
      "Create an interactive button with hover, focus, and active states using HTML, CSS, and JavaScript.",
    difficulty: "Easy",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "interactive-button",
    category: "Frontend",
  },
  {
    id: "21",
    title: "Responsive Card Layout",
    description:
      "Create a responsive card layout that adapts to different screen sizes using CSS Grid or Flexbox.",
    difficulty: "Easy",
    languages: ["HTML", "CSS"],
    slug: "responsive-card-layout",
    category: "Frontend",
  },

  // Frontend - Medium
  {
    id: "22",
    title: "Responsive Landing Page",
    description:
      "Create a responsive landing page using HTML, CSS, and JavaScript that works on all device sizes.",
    difficulty: "Medium",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "responsive-landing-page",
    category: "Frontend",
  },
  {
    id: "23",
    title: "Drag and Drop Interface",
    description:
      "Build a drag and drop interface that allows users to reorder items in a list.",
    difficulty: "Medium",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "drag-and-drop-interface",
    category: "Frontend",
  },
  {
    id: "24",
    title: "Form Validation",
    description:
      "Create a form with client-side validation for various input types including email, password, and phone number.",
    difficulty: "Medium",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "form-validation",
    category: "Frontend",
  },

  // Frontend - Hard
  {
    id: "25",
    title: "Interactive Data Visualization",
    description:
      "Create an interactive data visualization dashboard using D3.js or Chart.js.",
    difficulty: "Hard",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "interactive-data-visualization",
    category: "Frontend",
  },

  // React - Medium
  {
    id: "26",
    title: "React Todo App",
    description:
      "Build a todo application with React that allows adding, editing, and deleting tasks.",
    difficulty: "Medium",
    languages: ["React", "TypeScript"],
    slug: "react-todo-app",
    category: "Frontend",
  },
  {
    id: "27",
    title: "React Shopping Cart",
    description:
      "Build a shopping cart with React that allows users to add items, update quantities, and calculate totals.",
    difficulty: "Medium",
    languages: ["React", "TypeScript"],
    slug: "react-shopping-cart",
    category: "Frontend",
  },

  // Backend - Medium
  {
    id: "28",
    title: "RESTful API with Express",
    description:
      "Create a RESTful API with Express.js that supports CRUD operations for a resource.",
    difficulty: "Medium",
    languages: ["JavaScript", "Node.js"],
    slug: "restful-api-express",
    category: "Backend",
  },
  {
    id: "29",
    title: "Authentication System",
    description:
      "Implement a user authentication system with registration, login, and password reset functionality.",
    difficulty: "Medium",
    languages: ["JavaScript", "Node.js", "Python"],
    slug: "authentication-system",
    category: "Backend",
  },

  // Algorithms - Medium
  {
    id: "30",
    title: "Merge Sort Implementation",
    description:
      "Implement the merge sort algorithm and analyze its time and space complexity.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++", "Rust"],
    slug: "merge-sort",
    category: "Algorithms",
  },
  {
    id: "31",
    title: "Quick Sort Implementation",
    description:
      "Implement the quick sort algorithm and analyze its time and space complexity.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "quick-sort",
    category: "Algorithms",
  },

  // Database - Medium
  {
    id: "32",
    title: "SQL Query Challenges",
    description:
      "Solve a series of SQL query challenges involving joins, aggregations, and subqueries.",
    difficulty: "Medium",
    languages: ["SQL"],
    slug: "sql-query-challenges",
    category: "Database",
  },

  // System Design - Hard
  {
    id: "33",
    title: "Design a URL Shortener",
    description:
      "Design a URL shortening service like bit.ly, considering scalability and performance.",
    difficulty: "Hard",
    languages: ["System Design"],
    slug: "design-url-shortener",
    category: "System Design",
  },
  {
    id: "34",
    title: "Design a Chat Application",
    description:
      "Design a real-time chat application considering scalability, message delivery, and presence indicators.",
    difficulty: "Hard",
    languages: ["System Design"],
    slug: "design-chat-application",
    category: "System Design",
  },

  // DevOps - Medium
  {
    id: "35",
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Set up a continuous integration and deployment pipeline using GitHub Actions.",
    difficulty: "Medium",
    languages: ["YAML", "Shell"],
    slug: "cicd-github-actions",
    category: "DevOps",
  },
];

export function getChallengeBySlug(slug: string): Challenge | undefined {
  const challenge = challenges.find((challenge) => challenge.slug === slug);
  console.log(challenge);
  return challenge;
}
