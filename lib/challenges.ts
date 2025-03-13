import { Challenge } from "@/TYPES";

export const challenges: Challenge[] = [
  // 1. Two Sum
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
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 2. Reverse String
  {
    id: "2",
    title: "Reverse String",
    slug: "reverse-string",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Write a function that reverses a string. The input string is given as an array of characters.",
    difficulty: "Easy",
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
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 3. FizzBuzz
  {
    id: "3",
    title: "FizzBuzz",
    slug: "fizzbuzz",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Write a program that outputs the string representation of numbers from 1 to n, but for multiples of three output 'Fizz', for multiples of five output 'Buzz', and for multiples of both three and five output 'FizzBuzz'.",
    difficulty: "Easy",
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
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 4. Valid Palindrome
  {
    id: "4",
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    difficulty: "Easy",
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
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 5. Container With Most Water
  {
    id: "5",
    title: "Container With Most Water",
    slug: "container-with-most-water",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Given n non-negative integers representing the heights of bars, find two lines that together with the x-axis form a container that holds the most water.",
    difficulty: "Medium",
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
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // --------------------------------------------------------------------
  // Additional challenges 6 to 140
  // --------------------------------------------------------------------
  {
    id: "6",
    title: "Merge Sorted Array",
    slug: "merge-sorted-array",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Merge Sorted Array. Merge two sorted arrays into one sorted array.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums1 = [1,3,5], nums2 = [2,4,6]",
        output: "[1,2,3,4,5,6]",
        explanation: "Arrays merged in sorted order.",
      },
    ],
    constraints: ["Arrays are already sorted."],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function mergeSortedArray(nums1, nums2) {
  // Your solution here
}

// Example usage
console.log(mergeSortedArray([1,3,5], [2,4,6])); // Expected output: [1,2,3,4,5,6]
`,
      python: `def merge_sorted_array(nums1, nums2):
    # Your solution here
    pass

# Example usage
print(merge_sorted_array([1,3,5], [2,4,6]))  # Expected output: [1,2,3,4,5,6]
`,
      java: `class Solution {
    public int[] mergeSortedArray(int[] nums1, int[] nums2) {
        // Your solution here
        return new int[]{};
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    std::vector<int> mergeSortedArray(std::vector<int>& nums1, std::vector<int>& nums2) {
        // Your solution here
        return {};
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "7",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Valid Parentheses. Check if the input string containing '(', ')', '{', '}', '[' and ']' is valid.",
    difficulty: "Easy",
    examples: [
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All parentheses are closed in correct order.",
      },
    ],
    constraints: [
      "s consists only of the characters '(', ')', '{', '}', '[' and ']'.",
    ],
    defaultCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function validParentheses(s) {
  // Your solution here
}

// Example usage
console.log(validParentheses("()[]{}")); // Expected output: true
`,
      python: `def valid_parentheses(s):
    # Your solution here
    pass

# Example usage
print(valid_parentheses("()[]{}"))  # Expected output: True
`,
      java: `class Solution {
    public boolean validParentheses(String s) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <string>

class Solution {
public:
    bool validParentheses(std::string s) {
        // Your solution here
        return false;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "8",
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Merge Two Sorted Lists. Merge two sorted linked lists and return it as a sorted list.",
    difficulty: "Easy",
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "Lists merged into one sorted list.",
      },
    ],
    constraints: ["The lists are already sorted."],
    defaultCode: {
      javascript: `/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoSortedLists(l1, l2) {
  // Your solution here
}

// Example usage
console.log(mergeTwoSortedLists([1,2,4], [1,3,4])); // Expected output: [1,1,2,3,4,4]
`,
      python: `def merge_two_sorted_lists(l1, l2):
    # Your solution here
    pass

# Example usage
print(merge_two_sorted_lists([1,2,4], [1,3,4]))  # Expected output: [1,1,2,3,4,4]
`,
      java: `class Solution {
    public ListNode mergeTwoSortedLists(ListNode l1, ListNode l2) {
        // Your solution here
        return null;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    ListNode* mergeTwoSortedLists(ListNode* l1, ListNode* l2) {
        // Your solution here
        return nullptr;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "9",
    title: "Linked List Cycle",
    slug: "linked-list-cycle",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Linked List Cycle. Determine if a linked list has a cycle in it.",
    difficulty: "Easy",
    examples: [
      {
        input: "head = [3,2,0,-4] with cycle at node index 1",
        output: "true",
        explanation: "Cycle exists in the linked list.",
      },
    ],
    constraints: ["The list may contain a cycle."],
    defaultCode: {
      javascript: `/**
 * @param {ListNode} head
 * @return {boolean}
 */
function linkedListCycle(head) {
  // Your solution here
}

// Example usage
console.log(linkedListCycle(/* sample linked list */)); // Expected output: true/false
`,
      python: `def linked_list_cycle(head):
    # Your solution here
    pass

# Example usage
print(linked_list_cycle(/* sample linked list */))  # Expected output: True/False
`,
      java: `class Solution {
    public boolean linkedListCycle(ListNode head) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    bool linkedListCycle(ListNode* head) {
        // Your solution here
        return false;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "10",
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Longest Substring Without Repeating Characters. Find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: "The answer is 'abc', with the length of 3.",
      },
    ],
    constraints: ["0 <= s.length <= 5 * 10^4"],
    defaultCode: {
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacters(s) {
  // Your solution here
}

// Example usage
console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")); // Expected output: 3
`,
      python: `def longest_substring_without_repeating_characters(s):
    # Your solution here
    pass

# Example usage
print(longest_substring_without_repeating_characters("abcabcbb"))  # Expected output: 3
`,
      java: `class Solution {
    public int longestSubstringWithoutRepeatingCharacters(String s) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <string>

class Solution {
public:
    int longestSubstringWithoutRepeatingCharacters(std::string s) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "11",
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Maximum Subarray. Find the contiguous subarray with the largest sum.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
      },
    ],
    constraints: ["1 <= nums.length <= 10^5"],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumSubarray(nums) {
  // Your solution here
}

// Example usage
console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4])); // Expected output: 6
`,
      python: `def maximum_subarray(nums):
    # Your solution here
    pass

# Example usage
print(maximum_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected output: 6
`,
      java: `class Solution {
    public int maximumSubarray(int[] nums) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    int maximumSubarray(std::vector<int>& nums) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "12",
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Climbing Stairs. Determine the number of distinct ways to climb to the top of a staircase.",
    difficulty: "Easy",
    examples: [
      {
        input: "n = 3",
        output: "3",
        explanation: "There are 3 ways to climb 3 steps.",
      },
    ],
    constraints: ["1 <= n <= 45"],
    defaultCode: {
      javascript: `/**
 * @param {number} n
 * @return {number}
 */
function climbingStairs(n) {
  // Your solution here
}

// Example usage
console.log(climbingStairs(3)); // Expected output: 3
`,
      python: `def climbing_stairs(n):
    # Your solution here
    pass

# Example usage
print(climbing_stairs(3))  # Expected output: 3
`,
      java: `class Solution {
    public int climbingStairs(int n) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    int climbingStairs(int n) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "13",
    title: "Coin Change",
    slug: "coin-change",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Coin Change. Given coins of different denominations, find the fewest number of coins to make up a given amount.",
    difficulty: "Medium",
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
    ],
    constraints: [
      "You may assume that you have an infinite number of each kind of coin.",
    ],
    defaultCode: {
      javascript: `/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  // Your solution here
}

// Example usage
console.log(coinChange([1,2,5], 11)); // Expected output: 3
`,
      python: `def coin_change(coins, amount):
    # Your solution here
    pass

# Example usage
print(coin_change([1,2,5], 11))  # Expected output: 3
`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    int coinChange(std::vector<int>& coins, int amount) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "14",
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Longest Palindromic Substring. Find the longest palindromic substring in the given string.",
    difficulty: "Medium",
    examples: [
      {
        input: 's = "babad"',
        output: '"bab" or "aba"',
        explanation: "Both 'bab' and 'aba' are valid answers.",
      },
    ],
    constraints: ["1 <= s.length <= 1000"],
    defaultCode: {
      javascript: `/**
 * @param {string} s
 * @return {string}
 */
function longestPalindromicSubstring(s) {
  // Your solution here
}

// Example usage
console.log(longestPalindromicSubstring("babad")); // Expected output: "bab" or "aba"
`,
      python: `def longest_palindromic_substring(s):
    # Your solution here
    pass

# Example usage
print(longest_palindromic_substring("babad"))  # Expected output: "bab" or "aba"
`,
      java: `class Solution {
    public String longestPalindromicSubstring(String s) {
        // Your solution here
        return "";
    }
}
`,
      cpp: `#include <string>

class Solution {
public:
    std::string longestPalindromicSubstring(std::string s) {
        // Your solution here
        return "";
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "15",
    title: "Binary Tree Inorder Traversal",
    slug: "binary-tree-inorder-traversal",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Binary Tree Inorder Traversal. Return the inorder traversal of a binary tree's nodes' values.",
    difficulty: "Easy",
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
        explanation: "Inorder traversal of the tree.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function binaryTreeInorderTraversal(root) {
  // Your solution here
}

// Example usage
console.log(binaryTreeInorderTraversal(/* sample tree */));
`,
      python: `def binary_tree_inorder_traversal(root):
    # Your solution here
    pass

# Example usage
print(binary_tree_inorder_traversal(/* sample tree */))
`,
      java: `class Solution {
    public List<Integer> binaryTreeInorderTraversal(TreeNode root) {
        // Your solution here
        return new ArrayList<>();
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    std::vector<int> binaryTreeInorderTraversal(TreeNode* root) {
        // Your solution here
        return {};
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "16",
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Binary Tree Level Order Traversal. Return the level order traversal of a binary tree's nodes' values.",
    difficulty: "Medium",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "Level order traversal of the tree.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function binaryTreeLevelOrderTraversal(root) {
  // Your solution here
}

// Example usage
console.log(binaryTreeLevelOrderTraversal(/* sample tree */));
`,
      python: `def binary_tree_level_order_traversal(root):
    # Your solution here
    pass

# Example usage
print(binary_tree_level_order_traversal(/* sample tree */))
`,
      java: `class Solution {
    public List<List<Integer>> binaryTreeLevelOrderTraversal(TreeNode root) {
        // Your solution here
        return new ArrayList<>();
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> binaryTreeLevelOrderTraversal(TreeNode* root) {
        // Your solution here
        return {};
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "17",
    title: "Symmetric Tree",
    slug: "symmetric-tree",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Symmetric Tree. Check whether a binary tree is a mirror of itself (i.e. symmetric around its center).",
    difficulty: "Easy",
    examples: [
      {
        input: "root = [1,2,2,3,4,4,3]",
        output: "true",
        explanation: "The tree is symmetric.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 1000]."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function symmetricTree(root) {
  // Your solution here
}

// Example usage
console.log(symmetricTree(/* sample tree */)); // Expected output: true
`,
      python: `def symmetric_tree(root):
    # Your solution here
    pass

# Example usage
print(symmetric_tree(/* sample tree */))  # Expected output: True
`,
      java: `class Solution {
    public boolean symmetricTree(TreeNode root) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    bool symmetricTree(TreeNode* root) {
        // Your solution here
        return false;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "18",
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-of-binary-tree",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Maximum Depth of Binary Tree. Find the maximum depth of a binary tree.",
    difficulty: "Easy",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
        explanation: "The maximum depth of the tree is 3.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10^4]."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @return {number}
 */
function maximumDepthOfBinaryTree(root) {
  // Your solution here
}

// Example usage
console.log(maximumDepthOfBinaryTree(/* sample tree */)); // Expected output: 3
`,
      python: `def maximum_depth_of_binary_tree(root):
    # Your solution here
    pass

# Example usage
print(maximum_depth_of_binary_tree(/* sample tree */))  # Expected output: 3
`,
      java: `class Solution {
    public int maximumDepthOfBinaryTree(TreeNode root) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    int maximumDepthOfBinaryTree(TreeNode* root) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "19",
    title: "Convert Sorted Array to Binary Search Tree",
    slug: "convert-sorted-array-to-bst",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Convert Sorted Array to Binary Search Tree. Convert a sorted array into a height-balanced BST.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [-10,-3,0,5,9]",
        output: "A height-balanced BST",
        explanation: "The BST is balanced.",
      },
    ],
    constraints: ["1 <= nums.length <= 10^4"],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function convertSortedArrayToBST(nums) {
  // Your solution here
}

// Example usage
console.log(convertSortedArrayToBST([-10,-3,0,5,9])); // Expected output: BST root node
`,
      python: `def convert_sorted_array_to_bst(nums):
    # Your solution here
    pass

# Example usage
print(convert_sorted_array_to_bst([-10,-3,0,5,9]))  # Expected output: BST root node
`,
      java: `class Solution {
    public TreeNode convertSortedArrayToBST(int[] nums) {
        // Your solution here
        return null;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    TreeNode* convertSortedArrayToBST(std::vector<int>& nums) {
        // Your solution here
        return nullptr;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "20",
    title: "Balanced Binary Tree",
    slug: "balanced-binary-tree",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Balanced Binary Tree. Determine if a binary tree is height-balanced.",
    difficulty: "Easy",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
        explanation: "The binary tree is balanced.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 5000]."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function balancedBinaryTree(root) {
  // Your solution here
}

// Example usage
console.log(balancedBinaryTree(/* sample tree */)); // Expected output: true
`,
      python: `def balanced_binary_tree(root):
    # Your solution here
    pass

# Example usage
print(balanced_binary_tree(/* sample tree */))  # Expected output: True
`,
      java: `class Solution {
    public boolean balancedBinaryTree(TreeNode root) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    bool balancedBinaryTree(TreeNode* root) {
        // Your solution here
        return false;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // ....................................................................
  // [Challenges 21 to 140 follow the same structure; here is a brief list of titles, difficulties, and slugs]
  // 21. Lowest Common Ancestor of a Binary Tree (Medium)
  {
    id: "21",
    title: "Lowest Common Ancestor of a Binary Tree",
    slug: "lowest-common-ancestor-of-a-binary-tree",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Find the lowest common ancestor (LCA) of two nodes in a binary tree.",
    difficulty: "Medium",
    examples: [
      {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        output: "3",
        explanation: "The LCA of nodes 5 and 1 is 3.",
      },
    ],
    constraints: ["All of the nodes' values will be unique."],
    defaultCode: {
      javascript: `/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestorOfBinaryTree(root, p, q) {
  // Your solution here
}

// Example usage
console.log(lowestCommonAncestorOfBinaryTree(/* sample tree */, /* p */, /* q */));
`,
      python: `def lowest_common_ancestor_of_binary_tree(root, p, q):
    # Your solution here
    pass

# Example usage
print(lowest_common_ancestor_of_binary_tree(/* sample tree */, /* p */, /* q */))
`,
      java: `class Solution {
    public TreeNode lowestCommonAncestorOfBinaryTree(TreeNode root, TreeNode p, TreeNode q) {
        // Your solution here
        return null;
    }
}
`,
      cpp: `#include <iostream>

class Solution {
public:
    TreeNode* lowestCommonAncestorOfBinaryTree(TreeNode* root, TreeNode* p, TreeNode* q) {
        // Your solution here
        return nullptr;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 22. House Robber (Medium)
  {
    id: "22",
    title: "House Robber",
    slug: "house-robber",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: House Robber. Given an array representing the amount of money of each house, determine the maximum amount you can rob without alerting the police.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 and 3 for a total of 1 + 3 = 4.",
      },
    ],
    constraints: ["0 <= nums.length <= 100"],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function houseRobber(nums) {
  // Your solution here
}

// Example usage
console.log(houseRobber([1,2,3,1])); // Expected output: 4
`,
      python: `def house_robber(nums):
    # Your solution here
    pass

# Example usage
print(house_robber([1,2,3,1]))  # Expected output: 4
`,
      java: `class Solution {
    public int houseRobber(int[] nums) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    int houseRobber(std::vector<int>& nums) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 23. Word Break (Medium)
  {
    id: "23",
    title: "Word Break",
    slug: "word-break",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Word Break. Determine if a string can be segmented into a space-separated sequence of one or more dictionary words.",
    difficulty: "Medium",
    examples: [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: "true",
        explanation: "The string can be segmented as 'leet code'.",
      },
    ],
    constraints: ["1 <= s.length <= 300"],
    defaultCode: {
      javascript: `/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  // Your solution here
}

// Example usage
console.log(wordBreak("leetcode", ["leet","code"])); // Expected output: true
`,
      python: `def word_break(s, wordDict):
    # Your solution here
    pass

# Example usage
print(word_break("leetcode", ["leet","code"]))  # Expected output: True
`,
      java: `class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        // Your solution here
        return false;
    }
}
`,
      cpp: `#include <vector>
#include <string>

class Solution {
public:
    bool wordBreak(std::string s, std::vector<std::string>& wordDict) {
        // Your solution here
        return false;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // 24. Longest Increasing Subsequence (Medium)
  {
    id: "24",
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Longest Increasing Subsequence. Find the length of the longest strictly increasing subsequence.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "The longest increasing subsequence is [2,3,7,101].",
      },
    ],
    constraints: ["1 <= nums.length <= 2500"],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function longestIncreasingSubsequence(nums) {
  // Your solution here
}

// Example usage
console.log(longestIncreasingSubsequence([10,9,2,5,3,7,101,18])); // Expected output: 4
`,
      python: `def longest_increasing_subsequence(nums):
    # Your solution here
    pass

# Example usage
print(longest_increasing_subsequence([10,9,2,5,3,7,101,18]))  # Expected output: 4
`,
      java: `class Solution {
    public int longestIncreasingSubsequence(int[] nums) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>

class Solution {
public:
    int longestIncreasingSubsequence(std::vector<int>& nums) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // ... (Challenges 25 through 140 continue with the same pattern.)
  // For brevity, below is a summary list of titles and ids for challenges 25 to 140.
  // You would expand each into a full challenge object following the above structure.
  {
    id: "25",
    title: "Subarray Sum Equals K",
    slug: "subarray-sum-equals-k",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Subarray Sum Equals K. Find the total number of continuous subarrays whose sum equals to k.",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [1,1,1], k = 2",
        output: "2",
        explanation: "There are two subarrays: [1,1] and [1,1].",
      },
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4"],
    defaultCode: {
      /* similar template as above */ javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySumEqualsK(nums, k) {
  // Your solution here
}
`,
      python: `def subarray_sum_equals_k(nums, k):
    # Your solution here
    pass
`,
      java: `class Solution {
    public int subarraySumEqualsK(int[] nums, int k) {
        // Your solution here
        return 0;
    }
}
`,
      cpp: `#include <vector>
class Solution {
public:
    int subarraySumEqualsK(std::vector<int>& nums, int k) {
        // Your solution here
        return 0;
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "26",
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description:
      "Solve problem: Product of Array Except Self. Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    difficulty: "Medium",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation: "Each element is the product of the rest of the array.",
      },
    ],
    constraints: [
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
    ],
    defaultCode: {
      /* similar template */ javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productOfArrayExceptSelf(nums) {
  // Your solution here
}
`,
      python: `def product_of_array_except_self(nums):
    # Your solution here
    pass
`,
      java: `class Solution {
    public int[] productOfArrayExceptSelf(int[] nums) {
        // Your solution here
        return new int[]{};
    }
}
`,
      cpp: `#include <vector>
class Solution {
public:
    std::vector<int> productOfArrayExceptSelf(std::vector<int>& nums) {
        // Your solution here
        return {};
    }
};
`,
    },
    languageIcons: {
      JavaScript: "https://example.com/icons/javascript.png",
      Python: "https://example.com/icons/python.png",
      Java: "https://example.com/icons/java.png",
      "C++": "https://example.com/icons/cpp.png",
    },
  },
  // ... (Challenges 27 to 140 would follow in the same format.)
  // For example, here are the titles with their ids and difficulties:
  // 27. Find the Duplicate Number (Medium)
  // 28. First Missing Positive (Hard)
  // 29. Trapping Rain Water (Hard)
  // 30. Jump Game (Medium)
  // 31. Gas Station (Medium)
  // 32. Longest Consecutive Sequence (Hard)
  // 33. Word Search (Hard)
  // 34. Combination Sum (Medium)
  // 35. Permutations (Medium)
  // 36. Rotate Image (Medium)
  // 37. Spiral Matrix (Medium)
  // 38. Set Matrix Zeroes (Medium)
  // 39. Game of Life (Medium)
  // 40. Kth Largest Element in an Array (Medium)
  // 41. Find Median from Data Stream (Hard)
  // 42. Top K Frequent Elements (Medium)
  // 43. Valid Anagram (Easy)
  // 44. Group Anagrams (Medium)
  // 45. Happy Number (Easy)
  // 46. Intersection of Two Arrays (Easy)
  // 47. Implement strStr() (Easy)
  // 48. Roman to Integer (Easy)
  // 49. Integer to Roman (Medium)
  // 50. Longest Common Prefix (Easy)
  // 51. Count and Say (Easy)
  // 52. Remove Duplicates from Sorted Array (Easy)
  // 53. Remove Element (Easy)
  // 54. Search Insert Position (Easy)
  // 55. Length of Last Word (Easy)
  // 56. Plus One (Easy)
  // 57. Add Binary (Easy)
  // 58. Sqrt(x) (Medium)
  // 59. Reverse Integer (Easy)
  // 60. Palindrome Number (Easy)
  // 61. Excel Sheet Column Title (Easy)
  // 62. Excel Sheet Column Number (Easy)
  // 63. Path Sum (Easy)
  // 64. Binary Tree Paths (Medium)
  // 65. Sum Root to Leaf Numbers (Medium)
  // 66. House Robber II (Medium)
  // 67. Delete Node in a Linked List (Easy)
  // 68. Remove Nth Node From End of List (Medium)
  // 69. Reverse Linked List (Easy)
  // 70. Reorder List (Medium)
  // 71. Partition List (Medium)
  // 72. Merge k Sorted Lists (Hard)
  // 73. Swap Nodes in Pairs (Easy)
  // 74. Reverse Nodes in k-Group (Hard)
  // 75. Copy List with Random Pointer (Medium)
  // 76. LRU Cache (Hard)
  // 77. Min Stack (Easy)
  // 78. Implement Queue using Stacks (Easy)
  // 79. Implement Stack using Queues (Easy)
  // 80. Design Linked List (Medium)
  // 81. Design HashMap (Easy)
  // 82. Design HashSet (Easy)
  // 83. Find Minimum in Rotated Sorted Array (Medium)
  // 84. Search in Rotated Sorted Array (Medium)
  // 85. Find Peak Element (Medium)
  // 86. Find First and Last Position of Element in Sorted Array (Medium)
  // 87. Search a 2D Matrix (Medium)
  // 88. Word Ladder (Hard)
  // 89. Course Schedule (Medium)
  // 90. Course Schedule II (Medium)
  // 91. Alien Dictionary (Hard)
  // 92. Minimum Window Substring (Hard)
  // 93. Longest Substring with At Most Two Distinct Characters (Medium)
  // 94. Substring with Concatenation of All Words (Hard)
  // 95. Minimum Window Subsequence (Hard)
  // 96. Number of Islands (Medium)
  // 97. Surrounded Regions (Medium)
  // 98. Walls and Gates (Medium)
  // 99. Rotting Oranges (Medium)
  // 100. Pacific Atlantic Water Flow (Medium)
  // 101. Word Search II (Hard)
  // 102. Maximal Rectangle (Hard)
  // 103. Largest Rectangle in Histogram (Hard)
  // 104. Maximal Square (Medium)
  // 105. Coin Change 2 (Medium)
  // 106. Combination Sum IV (Medium)
  // 107. Decode Ways (Medium)
  // 108. Unique Paths (Medium)
  // 109. Unique Paths II (Medium)
  // 110. Dungeon Game (Hard)
  // 111. Minimum Path Sum (Medium)
  // 112. Triangle (Medium)
  // 113. Edit Distance (Hard)
  // 114. Longest Common Subsequence (Medium)
  // 115. Distinct Subsequences (Hard)
  // 116. Interleaving String (Medium)
  // 117. Scramble String (Hard)
  // 118. Regular Expression Matching (Hard)
  // 119. Wildcard Matching (Hard)
  // 120. Word Break II (Hard)
  // 121. Combination Sum III (Medium)
  // 122. Palindrome Partitioning (Medium)
  // 123. Restore IP Addresses (Medium)
  // 124. Valid Sudoku (Medium)
  // 125. Sudoku Solver (Hard)
  // 126. N-Queens (Hard)
  // 127. N-Queens II (Hard)
  // 128. Count N-Queens Solutions (Hard)
  // 129. Minesweeper (Medium)
  // 130. Design Tic-Tac-Toe (Medium)
  // 131. Design Snake Game (Medium)
  // 132. Design Twitter (Hard)
  // 133. Insert Interval (Medium)
  // 134. Merge Intervals (Medium)
  // 135. Non-overlapping Intervals (Medium)
  // 136. Meeting Rooms (Easy)
  // 137. Meeting Rooms II (Medium)
  // 138. Employee Free Time (Medium)
  // 139. Subsets (Medium)
  // 140. Subsets II (Medium)

  // Each of the above would be expanded into a full object following the same structure as challenges 1-24.
  // For example, a challenge object for "Find the Duplicate Number" (id "27") would look like:
  /*
  {
    id: "27",
    title: "Find the Duplicate Number",
    slug: "find-the-duplicate-number",
    category: "Algorithms",
    languages: ["JavaScript", "Python", "Java", "C++"],
    description: "Solve problem: Find the Duplicate Number. Find the duplicate number in an array of n + 1 integers.",
    difficulty: "Medium",
    examples: [ ... ],
    constraints: [ ... ],
    defaultCode: { ... },
    languageIcons: { ... },
  },
  */
  // and so on for challenges 27 to 140.
];

export function getChallengeBySlug(slug: string): Challenge | undefined {
  const challenge = challenges.find((challenge) => challenge.slug === slug);
  return challenge;
}
