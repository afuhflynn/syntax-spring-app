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
    slug: "two-sum",
    title: "Two Sum",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
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
    id: "2",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "reverse-string",
    category: "Algorithms",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character",
      "Do it in-place with O(1) extra memory",
    ],
    defaultCode: {
      javascript: `/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    // Your solution here
}

// Example usage
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // Expected output: ["o","l","l","e","h"]
`,
      python: `def reverse_string(s):
    # Your solution here
    pass

# Example usage
s1 = ["h","e","l","l","o"]
reverse_string(s1)
print(s1)  # Expected output: ["o","l","l","e","h"]
`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Your solution here
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    void reverseString(std::vector<char>& s) {
        // Your solution here
    }
};
`,
    },
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
    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
      },
      {
        input: "n = 15",
        output:
          '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      },
    ],
    constraints: ["1 <= n <= 10^4"],
    defaultCode: {
      javascript: `/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    // Your solution here
}

// Example usage
console.log(fizzBuzz(15));
`,
      python: `def fizz_buzz(n):
    # Your solution here
    pass

# Example usage
print(fizz_buzz(15))
`,
      java: `class Solution {
    public List<String> fizzBuzz(int n) {
        // Your solution here
        return new ArrayList<>();
    }
}
`,
      cpp: `#include <vector>
#include <string>

class Solution {
public:
    std::vector<std::string> fizzBuzz(int n) {
        // Your solution here
        return {};
    }
};
`,
    },
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
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters",
    ],
    defaultCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Your solution here
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected output: true
console.log(isPalindrome("race a car")); // Expected output: false
`,
      python: `def is_palindrome(s):
    # Your solution here
    pass

# Example usage
print(is_palindrome("A man, a plan, a canal: Panama"))  # Expected output: True
print(is_palindrome("race a car"))  # Expected output: False
`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <string>

class Solution {
public:
    bool isPalindrome(std::string s) {
        // Your solution here
        return false;
    }
};
`,
    },
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
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The maximum area is obtained by choosing the 2nd and 8th bars, with heights 8 and 7, forming a container with area min(8, 7) * (8 - 1) = 7 * 7 = 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4",
    ],
    defaultCode: {
      javascript: `/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    // Your solution here
}

// Example usage
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected output: 49
`,
      python: `def max_area(height):
    # Your solution here
    pass

# Example usage
print(max_area([1,8,6,2,5,4,8,3,7]))  # Expected output: 49
`,
      java: `class Solution {
    public int maxArea(int[] height) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    int maxArea(std::vector<int>& height) {
        // Your solution here
        return 0;
    }
};
`,
    },
  },
  // Add more challenges with the same structure...
  // For brevity, I'm not including all challenges, but they should follow the same pattern
];

export function getChallengeBySlug(slug: string): Challenge | undefined {
  const challenge = challenges.find((challenge) => challenge.slug === slug);
  return challenge;
}
