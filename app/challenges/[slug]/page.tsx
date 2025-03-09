import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ChallengeEditor from "@/components/challenge-editor"

interface ChallengePageProps {
  params: {
    slug: string
  }
}

// This would typically come from a database or API
const challenges = [
  {
    slug: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    difficulty: "Easy",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Your solution here
}

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
`,
      python: `def two_sum(nums, target):
    # Your solution here
    pass

# Example usage
print(two_sum([2, 7, 11, 15], 9))  # Expected output: [0, 1]
`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        return new int[]{0, 0};
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // Your solution here
        return {0, 0};
    }
};
`,
    },
  },
  {
    slug: "responsive-landing-page",
    title: "Responsive Landing Page",
    description:
      "Create a responsive landing page using HTML, CSS, and JavaScript that works on all device sizes. The page should include a header, hero section, features section, and footer.",
    difficulty: "Medium",
    examples: [],
    constraints: [
      "Use semantic HTML5 elements",
      "Make the design responsive for mobile, tablet, and desktop",
      "Include at least one interactive element using JavaScript",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Landing Page</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->

  <script>
    // Your JavaScript here
  </script>
</body>
</html>
`,
    },
  },
]

export async function generateMetadata({ params }: ChallengePageProps): Promise<Metadata> {
  const challenge = challenges.find((c) => c.slug === params.slug)

  if (!challenge) {
    return {
      title: "Challenge Not Found",
    }
  }

  return {
    title: `${challenge.title} | Syntax Spring`,
    description: challenge.description.substring(0, 160),
  }
}

export default function ChallengePage({ params }: ChallengePageProps) {
  const challenge = challenges.find((c) => c.slug === params.slug)

  if (!challenge) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter mb-2">{challenge.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              challenge.difficulty === "Easy"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                : challenge.difficulty === "Medium"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {challenge.difficulty}
          </span>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="whitespace-pre-line">{challenge.description}</p>

          {challenge.examples && challenge.examples.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Examples</h2>
              {challenge.examples.map((example, index) => (
                <div key={index} className="mb-4 p-4 bg-muted rounded-md">
                  <p>
                    <strong>Input:</strong> {example.input}
                  </p>
                  <p>
                    <strong>Output:</strong> {example.output}
                  </p>
                  {example.explanation && (
                    <p>
                      <strong>Explanation:</strong> {example.explanation}
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {challenge.constraints && challenge.constraints.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Constraints</h2>
              <ul>
                {challenge.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <ChallengeEditor challenge={challenge} />
    </div>
  )
}

