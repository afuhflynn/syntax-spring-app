import { Challenge } from "@/TYPES";

export const challenges: Challenge[] = [
  {
    id: "1",
    slug: "two-sum",
    title: "Two Sum",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "2",
    title: "Reverse String",
    slug: "reverse-string",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "3",
    title: "FizzBuzz",
    slug: "fizzbuzz",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "4",
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "5",
    title: "Container With Most Water",
    slug: "container-with-most-water",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "6",
    title: "Merge Sorted Array",
    slug: "merge-sorted-array",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "7",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "8",
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "9",
    title: "Linked List Cycle",
    slug: "linked-list-cycle",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "10",
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "11",
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "12",
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "13",
    title: "Coin Change",
    slug: "coin-change",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "14",
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "15",
    title: "Binary Tree Inorder Traversal",
    slug: "binary-tree-inorder-traversal",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "16",
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "17",
    title: "Symmetric Tree",
    slug: "symmetric-tree",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "18",
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-of-binary-tree",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "19",
    title: "Convert Sorted Array to Binary Search Tree",
    slug: "convert-sorted-array-to-bst",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "20",
    title: "Balanced Binary Tree",
    slug: "balanced-binary-tree",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "21",
    title: "Lowest Common Ancestor of a Binary Tree",
    slug: "lowest-common-ancestor-of-a-binary-tree",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "22",
    title: "House Robber",
    slug: "house-robber",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "23",
    title: "Word Break",
    slug: "word-break",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "24",
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "25",
    title: "Subarray Sum Equals K",
    slug: "subarray-sum-equals-k",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "26",
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    category: "Algorithms",
    languages: ["js", "py", "java", "cpp"],
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
      Cpp: "https://example.com/icons/cpp.png",
    },
  },
  {
    id: "12",
    title: "Create a Responsive Navigation Bar",
    description:
      "Build a responsive navigation bar using HTML, CSS, and JavaScript. The navbar should collapse into a hamburger menu on smaller screens and expand on larger screens.",
    difficulty: "Easy",
    languages: ["html", "css", "js"],
    slug: "responsive-navbar",
    category: "Web Development",
    examples: [
      {
        input: "Clicking the menu icon should toggle the navigation links.",
        output: "Navigation links expand or collapse based on screen size.",
        explanation:
          "Use CSS media queries for responsiveness and JavaScript for toggling visibility.",
      },
    ],
    constraints: [
      "Navigation bar must be fully responsive.",
      "Use semantic HTML elements.",
      "Avoid using third-party CSS frameworks like Bootstrap.",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
    <style></style> <!-- Do not remove this line it is used to link to your css style -->
</head>
<body>
    <nav class='navbar'>
        <div class='logo'>Brand</div>
        <div class='menu-toggle' onclick='toggleMenu()'>☰</div>
        <ul class='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </nav>
    <script></script><!-- Do not remove this line it is used to link to your js script -->
</body>
</html>`,
      css: `.navbar { display: flex; justify-content: space-between; align-items: center; }`,
      javascript: `function toggleMenu() { document.querySelector('.nav-links').classList.toggle('active'); }`,
    },
  },
  {
    id: "15",
    title: "Design a CSS Grid Layout for a Portfolio",
    description:
      "Create a responsive portfolio grid layout using HTML and CSS. The layout should display portfolio items in a grid that adjusts the number of columns based on the screen width.",
    difficulty: "Medium",
    languages: ["html", "css"],
    slug: "portfolio-grid-layout",
    category: "Web Development",
    examples: [
      {
        input: "Resize the browser window",
        output:
          "Grid adjusts from 3 columns on large screens to 1 column on small screens",
        explanation:
          "Use CSS Grid properties like grid-template-columns and media queries to adjust the layout dynamically.",
      },
    ],
    constraints: [
      "Use CSS Grid for layout",
      "Implement responsive design with media queries",
      "Ensure semantic HTML structure",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style></style><!-- Do not remove this line it is used to link to your css style -->
</head>
<body>
  <section class="portfolio">
    <div class="item">Project 1</div>
    <div class="item">Project 2</div>
    <div class="item">Project 3</div>
    <div class="item">Project 4</div>
  </section>
</body>
</html>`,
      css: `.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.item {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}`,
    },
  },

  {
    id: "16",
    title: "Implement Dark Mode Toggle",
    description:
      "Create a dark mode toggle feature using HTML, CSS, and JavaScript. Users should be able to switch between light and dark themes, with the preference persisting across sessions.",
    difficulty: "Medium",
    languages: ["html", "css", "js"],
    slug: "dark-mode-toggle",
    category: "Web Development",
    examples: [
      {
        input: "User clicks the dark mode button",
        output: "The website theme switches to dark mode",
        explanation:
          "Toggle a CSS class on the body and store the user's choice in localStorage.",
      },
    ],
    constraints: [
      "Must use vanilla JavaScript",
      "Theme preference should persist using localStorage",
      "Ensure accessibility of the toggle button",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style></style><!-- Do not remove this line it is used to link to your css style -->
</head>
<body>
  <button id="toggle">Toggle Dark Mode</button>
  <script></script><!-- Do not remove this line it is used to link to your js script -->
</body>
</html>`,
      css: `body.dark {
  background-color: #121212;
  color: #ffffff;
}`,
      javascript: `const toggleButton = document.getElementById('toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});`,
    },
  },

  {
    id: "17",
    title: "Build a Simple Calculator App (Vanilla JS)",
    description:
      "Develop a basic calculator using HTML, CSS, and JavaScript. The calculator should support addition, subtraction, multiplication, and division.",
    difficulty: "Easy",
    languages: ["html", "css", "js"],
    slug: "simple-calculator",
    category: "Web Development",
    examples: [
      {
        input: "User enters 2 + 3",
        output: "5",
        explanation:
          "The calculator computes the result of the arithmetic operation correctly.",
      },
    ],
    constraints: [
      "Support basic arithmetic operations",
      "Build UI with semantic HTML and style with CSS",
      "Implement functionality using vanilla JavaScript",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style></style> <!-- Do not remove this line it is used to link to your css style -->
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" disabled>
    <div class="buttons">
      <button onclick="append('1')">1</button>
      <button onclick="append('2')">2</button>
      <button onclick="append('3')">3</button>
      <button onclick="operate('+')">+</button>
      <button onclick="calculate()">=</button>
      <button onclick="clearDisplay()">C</button>
    </div>
  </div>
  <script></style> <!-- Do not remove this line it is used to link to your js script -->
</body>
</html>`,
      css: `.calculator { width: 200px; margin: auto; }
#display { width: 100%; height: 40px; text-align: right; padding: 5px; }`,
      javascript: `let expression = '';
function append(value) {
  expression += value;
  document.getElementById('display').value = expression;
}
function operate(operator) {
  expression += operator;
  document.getElementById('display').value = expression;
}
function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}`,
    },
  },

  {
    id: "19",
    title: "Implement Form Validation (HTML, CSS, JS)",
    description:
      "Create an interactive form with client-side validation. Validate inputs like email and password, displaying appropriate error messages when validations fail.",
    difficulty: "Easy",
    languages: ["html", "css", "js"],
    slug: "form-validation",
    category: "Web Development",
    examples: [
      {
        input: "User submits form with an invalid email",
        output: "Error message appears next to the email field",
        explanation:
          "Use JavaScript to validate the email format and display an error if it doesn't match the required pattern.",
      },
    ],
    constraints: [
      "All validation must be performed on the client side",
      "Display clear and concise error messages",
      "Use semantic HTML for form elements",
    ],
    defaultCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style></style><!-- Do not remove this line it is used to link to your css style -->
</head>
<body>
  <form id="myForm">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <span class="error" id="emailError"></span>
    <button type="submit">Submit</button>
  </form>
  <script></script><!-- Do not remove this line it is used to link to your js script -->
</body>
</html>`,
      css: `.error { color: red; font-size: 0.8em; }`,
      javascript: `document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
    alert('Form submitted successfully!');
  }
});`,
    },
  },

  {
    id: "23",
    title: "Implement Binary Search",
    description:
      "Given a sorted array and a target value, implement the binary search algorithm to return the index of the target, or -1 if not found.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "binary-search",
    category: "Algorithms",
    examples: [
      {
        input: "array = [1, 2, 3, 4, 5], target = 3",
        output: "2",
        explanation: "Binary search returns index 2 for the target value 3.",
      },
    ],
    constraints: [
      "Array is sorted in ascending order.",
      "Time complexity should be O(log n).",
    ],
    defaultCode: {
      c: `#include <stdio.h>
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int index = binarySearch(arr, 5, 3);
    printf("%d\\n", index);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int binarySearch(const vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while(low <= high){
        int mid = low + (high - low) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
int main(){
    vector<int> arr = {1,2,3,4,5};
    cout << binarySearch(arr, 3);
    return 0;
}`,
      java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(arr[mid] == target) return mid;
            else if(arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        System.out.println(binarySearch(arr, 3));
    }
}`,
      python: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

if __name__ == '__main__':
    arr = [1,2,3,4,5]
    print(binary_search(arr, 3))`,
    },
  },

  {
    id: "24",
    title: "Stack Implementation",
    description:
      "Implement a stack data structure using an array. Support operations such as push, pop, and peek.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "stack-implementation",
    category: "Data Structures",
    examples: [
      {
        input: "Push 1, push 2, then pop",
        output: "2",
        explanation: "Stack operations should follow LIFO order.",
      },
    ],
    constraints: [
      "Use an array for storage.",
      "Implement push, pop, and peek operations.",
    ],
    defaultCode: {
      c: `#include <stdio.h>
#define MAX 100
int stack[MAX];
int top = -1;
void push(int value) {
    if(top < MAX - 1) stack[++top] = value;
}
int pop() {
    return (top >= 0) ? stack[top--] : -1;
}
int peek() {
    return (top >= 0) ? stack[top] : -1;
}
int main() {
    push(1); push(2);
    printf("%d\\n", pop());
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
class Stack {
    vector<int> data;
public:
    void push(int x) { data.push_back(x); }
    int pop() { int x = data.back(); data.pop_back(); return x; }
    int peek() { return data.back(); }
};
int main() {
    Stack s;
    s.push(1); s.push(2);
    cout << s.pop() << endl;
    return 0;
}`,
      java: `import java.util.Stack;
public class StackImpl {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        System.out.println(stack.pop());
    }
}`,
      python: `class Stack:
    def __init__(self):
        self.data = []
    def push(self, x):
        self.data.append(x)
    def pop(self):
        return self.data.pop() if self.data else None
    def peek(self):
        return self.data[-1] if self.data else None

if __name__ == '__main__':
    s = Stack()
    s.push(1)
    s.push(2)
    print(s.pop())`,
    },
  },

  {
    id: "25",
    title: "Queue Implementation",
    description:
      "Implement a queue data structure using an array. Support operations such as enqueue, dequeue, and front.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "queue-implementation",
    category: "Data Structures",
    examples: [
      {
        input: "Enqueue 1, enqueue 2, then dequeue",
        output: "1",
        explanation: "Queue operations should follow FIFO order.",
      },
    ],
    constraints: [
      "Use an array for storage.",
      "Implement enqueue, dequeue, and front operations.",
    ],
    defaultCode: {
      c: `#include <stdio.h>
#define MAX 100
int queue[MAX];
int front = 0, rear = -1;
void enqueue(int value) {
    if(rear < MAX - 1) queue[++rear] = value;
}
int dequeue() {
    return (front <= rear) ? queue[front++] : -1;
}
int main() {
    enqueue(1); enqueue(2);
    printf("%d\\n", dequeue());
    return 0;
}`,
      cpp: `#include <iostream>
#include <queue>
using namespace std;
int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    cout << q.front() << endl;
    q.pop();
    return 0;
}`,
      java: `import java.util.LinkedList;
import java.util.Queue;
public class QueueImpl {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(1);
        queue.offer(2);
        System.out.println(queue.poll());
    }
}`,
      python: `from collections import deque
q = deque()
q.append(1)
q.append(2)
print(q.popleft())`,
    },
  },

  {
    id: "26",
    title: "Merge Sort",
    description:
      "Implement the merge sort algorithm to sort an array of numbers.",
    difficulty: "Medium",
    languages: ["c", "cpp", "java", "py"],
    slug: "merge-sort",
    category: "Algorithms",
    examples: [
      {
        input: "array = [3, 1, 4, 1, 5, 9]",
        output: "[1, 1, 3, 4, 5, 9]",
        explanation:
          "Merge sort recursively divides the array and merges sorted subarrays.",
      },
    ],
    constraints: ["Time complexity should be O(n log n)."],
    defaultCode: {
      c: `#include <stdio.h>
void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for(i = 0; i < n1; i++) L[i] = arr[l + i];
    for(j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    i = 0, j = 0, k = l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while(i < n1) arr[k++] = L[i++];
    while(j < n2) arr[k++] = R[j++];
}
void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
int main() {
    int arr[] = {3, 1, 4, 1, 5, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    mergeSort(arr, 0, n-1);
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
void merge(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(arr.begin() + l, arr.begin() + m + 1);
    vector<int> R(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while(i < n1) arr[k++] = L[i++];
    while(j < n2) arr[k++] = R[j++];
}
void mergeSort(vector<int>& arr, int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
int main(){
    vector<int> arr = {3, 1, 4, 1, 5, 9};
    mergeSort(arr, 0, arr.size()-1);
    for(auto num : arr) cout << num << " ";
    return 0;
}`,
      java: `public class MergeSort {
    public static void mergeSort(int[] arr, int l, int r) {
        if(l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    public static void merge(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int[] L = new int[n1];
        int[] R = new int[n2];
        for(int i = 0; i < n1; i++) L[i] = arr[l + i];
        for(int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
        int i = 0, j = 0, k = l;
        while(i < n1 && j < n2) {
            if(L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while(i < n1) arr[k++] = L[i++];
        while(j < n2) arr[k++] = R[j++];
    }
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        mergeSort(arr, 0, arr.length - 1);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def merge(arr, l, m, r):
    L = arr[l:m+1]
    R = arr[m+1:r+1]
    i = j = 0
    k = l
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
    while i < len(L):
        arr[k] = L[i]
        i += 1; k += 1
    while j < len(R):
        arr[k] = R[j]
        j += 1; k += 1
def merge_sort(arr, l, r):
    if l < r:
        m = l + (r - l) // 2
        merge_sort(arr, l, m)
        merge_sort(arr, m+1, r)
        merge(arr, l, m, r)
if __name__ == '__main__':
    arr = [3, 1, 4, 1, 5, 9]
    merge_sort(arr, 0, len(arr)-1)
    print(arr)`,
    },
  },

  {
    id: "27",
    title: "Quick Sort",
    description:
      "Implement the quick sort algorithm to sort an array of numbers.",
    difficulty: "Medium",
    languages: ["c", "cpp", "java", "py"],
    slug: "quick-sort",
    category: "Algorithms",
    examples: [
      {
        input: "array = [3, 1, 4, 1, 5, 9]",
        output: "[1, 1, 3, 4, 5, 9]",
        explanation:
          "Quick sort partitions the array and recursively sorts the subarrays.",
      },
    ],
    constraints: ["Average time complexity should be O(n log n)."],
    defaultCode: {
      c: `#include <stdio.h>
void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }
int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int main() {
    int arr[] = {3, 1, 4, 1, 5, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) { i++; swap(arr[i], arr[j]); }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int main(){
    vector<int> arr = {3, 1, 4, 1, 5, 9};
    quickSort(arr, 0, arr.size()-1);
    for(auto num : arr) cout << num << " ";
    return 0;
}`,
      java: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if(low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for(int j = low; j < high; j++) {
            if(arr[j] < pivot) {
                i++;
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        int temp = arr[i+1]; arr[i+1] = arr[high]; arr[high] = temp;
        return i+1;
    }
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        quickSort(arr, 0, arr.length - 1);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
if __name__ == '__main__':
    arr = [3, 1, 4, 1, 5, 9]
    print(quick_sort(arr))`,
    },
  },

  {
    id: "28",
    title: "Dijkstra's Algorithm",
    description:
      "Implement Dijkstra's algorithm to find the shortest path from a starting node to all other nodes in a weighted graph.",
    difficulty: "Hard",
    languages: ["c", "cpp", "java", "py"],
    slug: "dijkstras-algorithm",
    category: "Algorithms",
    examples: [
      {
        input: "Graph as adjacency list, start node = 0",
        output: "Shortest path distances from node 0",
        explanation:
          "Dijkstra's algorithm calculates the minimum distance to each node from the start.",
      },
    ],
    constraints: [
      "Graph is represented as an adjacency list.",
      "Edge weights are non-negative.",
    ],
    defaultCode: {
      c: `#include <stdio.h>
#include <limits.h>
#define V 5
int minDistance(int dist[], int sptSet[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (!sptSet[v] && dist[v] <= min)
            min = dist[v], min_index = v;
    return min_index;
}
void dijkstra(int graph[V][V], int src) {
    int dist[V], sptSet[V] = {0};
    for (int i = 0; i < V; i++) dist[i] = INT_MAX;
    dist[src] = 0;
    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, sptSet);
        sptSet[u] = 1;
        for (int v = 0; v < V; v++)
            if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
    for (int i = 0; i < V; i++) printf("%d ", dist[i]);
}
int main() {
    int graph[V][V] = {
        {0, 9, 0, 0, 0},
        {9, 0, 6, 0, 0},
        {0, 6, 0, 5, 0},
        {0, 0, 5, 0, 2},
        {0, 0, 0, 2, 0}
    };
    dijkstra(graph, 0);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <limits>
using namespace std;
int minDistance(const vector<int>& dist, const vector<bool>& sptSet) {
    int min = numeric_limits<int>::max(), min_index;
    for (int v = 0; v < dist.size(); v++) {
        if (!sptSet[v] && dist[v] <= min) {
            min = dist[v], min_index = v;
        }
    }
    return min_index;
}
void dijkstra(const vector<vector<int>>& graph, int src) {
    int V = graph.size();
    vector<int> dist(V, numeric_limits<int>::max());
    vector<bool> sptSet(V, false);
    dist[src] = 0;
    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, sptSet);
        sptSet[u] = true;
        for (int v = 0; v < V; v++) {
            if (!sptSet[v] && graph[u][v] && dist[u] != numeric_limits<int>::max() && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
        }
    }
    for (int i = 0; i < V; i++) cout << dist[i] << " ";
}
int main(){
    vector<vector<int>> graph = {
        {0, 9, 0, 0, 0},
        {9, 0, 6, 0, 0},
        {0, 6, 0, 5, 0},
        {0, 0, 5, 0, 2},
        {0, 0, 0, 2, 0}
    };
    dijkstra(graph, 0);
    return 0;
}`,
      java: `import java.util.*;
public class DijkstrasAlgorithm {
    static final int V = 5;
    int minDistance(int[] dist, Boolean[] sptSet) {
        int min = Integer.MAX_VALUE, min_index = -1;
        for (int v = 0; v < V; v++) {
            if (!sptSet[v] && dist[v] <= min) {
                min = dist[v];
                min_index = v;
            }
        }
        return min_index;
    }
    void dijkstra(int[][] graph, int src) {
        int[] dist = new int[V];
        Boolean[] sptSet = new Boolean[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        Arrays.fill(sptSet, false);
        dist[src] = 0;
        for (int count = 0; count < V - 1; count++) {
            int u = minDistance(dist, sptSet);
            sptSet[u] = true;
            for (int v = 0; v < V; v++) {
                if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
                    dist[v] = dist[u] + graph[u][v];
            }
        }
        for (int i = 0; i < V; i++) System.out.print(dist[i] + " ");
    }
    public static void main(String[] args) {
        int[][] graph = {
            {0, 9, 0, 0, 0},
            {9, 0, 6, 0, 0},
            {0, 6, 0, 5, 0},
            {0, 0, 5, 0, 2},
            {0, 0, 0, 2, 0}
        };
        new DijkstrasAlgorithm().dijkstra(graph, 0);
    }
}`,
      python: `import sys
def dijkstra(graph, src):
    V = len(graph)
    dist = [sys.maxsize] * V
    dist[src] = 0
    sptSet = [False] * V
    for _ in range(V - 1):
        u = min((i for i in range(V) if not sptSet[i]), key=lambda i: dist[i])
        sptSet[u] = True
        for v in range(V):
            if (not sptSet[v] and graph[u][v] and dist[u] != sys.maxsize and dist[u] + graph[u][v] < dist[v]):
                dist[v] = dist[u] + graph[u][v]
    print(dist)
if __name__ == '__main__':
    graph = [
        [0, 9, 0, 0, 0],
        [9, 0, 6, 0, 0],
        [0, 6, 0, 5, 0],
        [0, 0, 5, 0, 2],
        [0, 0, 0, 2, 0]
    ]
    dijkstra(graph, 0)`,
    },
  },

  {
    id: "29",
    title: "Fibonacci Number",
    description:
      "Implement a function to compute the nth Fibonacci number using both recursive and iterative approaches.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "fibonacci-number",
    category: "Algorithms",
    examples: [
      {
        input: "n = 10",
        output: "55",
        explanation: "The 10th Fibonacci number is 55.",
      },
    ],
    constraints: ["Implement both recursive and iterative methods."],
    defaultCode: {
      c: `#include <stdio.h>
int fib_recursive(int n) {
    if (n <= 1) return n;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}
int fib_iterative(int n) {
    int a = 0, b = 1, c, i;
    if(n == 0) return a;
    for(i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
int main() {
    int n = 10;
    printf("Recursive: %d\\n", fib_recursive(n));
    printf("Iterative: %d\\n", fib_iterative(n));
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;
int fib_recursive(int n) {
    if(n <= 1) return n;
    return fib_recursive(n-1) + fib_recursive(n-2);
}
int fib_iterative(int n) {
    if(n == 0) return 0;
    int a = 0, b = 1, c;
    for(int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
int main(){
    int n = 10;
    cout << "Recursive: " << fib_recursive(n) << endl;
    cout << "Iterative: " << fib_iterative(n) << endl;
    return 0;
}`,
      java: `public class Fibonacci {
    public static int fibRecursive(int n) {
        if(n <= 1) return n;
        return fibRecursive(n-1) + fibRecursive(n-2);
    }
    public static int fibIterative(int n) {
        if(n == 0) return 0;
        int a = 0, b = 1, c;
        for(int i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
    public static void main(String[] args) {
        int n = 10;
        System.out.println("Recursive: " + fibRecursive(n));
        System.out.println("Iterative: " + fibIterative(n));
    }
}`,
      python: `def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)
def fib_iterative(n):
    if n == 0:
        return 0
    a, b = 0, 1
    for _ in range(2, n+1):
        a, b = b, a+b
    return b
if __name__ == '__main__':
    n = 10
    print("Recursive:", fib_recursive(n))
    print("Iterative:", fib_iterative(n))`,
    },
  },

  {
    id: "30",
    title: "Matrix Multiplication",
    description:
      "Implement matrix multiplication for two 2D arrays representing matrices.",
    difficulty: "Medium",
    languages: ["c", "cpp", "java", "py"],
    slug: "matrix-multiplication",
    category: "Algorithms",
    examples: [
      {
        input: "Matrix A: [[1,2],[3,4]], Matrix B: [[5,6],[7,8]]",
        output: "[[19,22],[43,50]]",
        explanation:
          "Multiply corresponding rows and columns to compute the product.",
      },
    ],
    constraints: [
      "Ensure the number of columns in A equals the number of rows in B.",
    ],
    defaultCode: {
      c: `#include <stdio.h>
void multiply(int A[2][2], int B[2][2], int C[2][2]) {
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            C[i][j] = 0;
            for (int k = 0; k < 2; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}
int main() {
    int A[2][2] = {{1,2},{3,4}};
    int B[2][2] = {{5,6},{7,8}};
    int C[2][2];
    multiply(A, B, C);
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {\n            printf("%d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<vector<int>> multiply(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int rows = A.size(), cols = B[0].size(), K = A[0].size();
    vector<vector<int>> C(rows, vector<int>(cols, 0));
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            for(int k = 0; k < K; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}
int main(){
    vector<vector<int>> A = {{1,2}, {3,4}};
    vector<vector<int>> B = {{5,6}, {7,8}};
    vector<vector<int>> C = multiply(A, B);
    for(auto &row : C) {
        for(auto num : row) cout << num << " ";
        cout << endl;
    }
    return 0;
}`,
      java: `public class MatrixMultiplication {
    public static int[][] multiply(int[][] A, int[][] B) {
        int rows = A.length, cols = B[0].length, K = A[0].length;
        int[][] C = new int[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                for (int k = 0; k < K; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return C;
    }
    public static void main(String[] args) {
        int[][] A = {{1,2},{3,4}};
        int[][] B = {{5,6},{7,8}};
        int[][] C = multiply(A, B);
        for (int[] row : C) {
            for (int num : row) System.out.print(num + " ");
            System.out.println();
        }
    }
}`,
      python: `def multiply(A, B):
    rows, cols, K = len(A), len(B[0]), len(A[0])
    C = [[0 for _ in range(cols)] for _ in range(rows)]
    for i in range(rows):
        for j in range(cols):
            for k in range(K):
                C[i][j] += A[i][k] * B[k][j]
    return C
if __name__ == '__main__':
    A = [[1,2],[3,4]]
    B = [[5,6],[7,8]]
    C = multiply(A, B)
    print(C)`,
    },
  },

  {
    id: "31",
    title: "Reverse a Linked List",
    description:
      "Given a singly linked list, reverse it and return the new head.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "reverse-linked-list",
    category: "Data Structures",
    examples: [
      {
        input: "Linked list: 1 -> 2 -> 3 -> null",
        output: "Linked list: 3 -> 2 -> 1 -> null",
        explanation: "The linked list is reversed in place.",
      },
    ],
    constraints: [
      "Implement in-place reversal.",
      "Time complexity should be O(n).",
    ],
    defaultCode: {
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node* next;
};
struct Node* reverse(struct Node* head) {
    struct Node *prev = NULL, *curr = head, *next = NULL;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
int main() {
    // Example usage; node creation omitted for brevity
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};
Node* reverse(Node* head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
int main() {
    // Example usage; node creation omitted for brevity
    return 0;
}`,
      java: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}
class Solution {
    public Node reverse(Node head) {
        Node prev = null, curr = head, next = null;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    public static void main(String[] args) {
        // Example usage; node creation omitted for brevity
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def reverse(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
if __name__ == '__main__':
    # Example usage; node creation omitted for brevity
    pass`,
    },
  },

  {
    id: "32",
    title: "Binary Search Tree Implementation",
    description:
      "Implement a Binary Search Tree (BST) with methods for insertion, search, and in-order traversal.",
    difficulty: "Medium",
    languages: ["c", "cpp", "java", "py"],
    slug: "binary-search-tree",
    category: "Data Structures",
    examples: [
      {
        input: "Insert values: 5, 3, 7, 2, 4, 6, 8",
        output: "In-order traversal returns: 2, 3, 4, 5, 6, 7, 8",
        explanation: "BST in-order traversal yields sorted order.",
      },
    ],
    constraints: [
      "No duplicate values allowed.",
      "Implement insertion, search, and in-order traversal.",
    ],
    defaultCode: {
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};
struct Node* newNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->left = node->right = NULL;
    return node;
}
struct Node* insert(struct Node* root, int data) {
    if (root == NULL) return newNode(data);
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);
    return root;
}
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
int main() {
    struct Node* root = NULL;
    root = insert(root, 5);
    insert(root, 3);
    insert(root, 7);
    insert(root, 2);
    insert(root, 4);
    insert(root, 6);
    insert(root, 8);
    inorder(root);
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int data): data(data), left(nullptr), right(nullptr) {}
};
Node* insert(Node* root, int data) {
    if (!root) return new Node(data);
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);
    return root;
}
void inorder(Node* root) {
    if (root) {
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }
}
int main() {
    Node* root = nullptr;
    root = insert(root, 5);
    insert(root, 3);
    insert(root, 7);
    insert(root, 2);
    insert(root, 4);
    insert(root, 6);
    insert(root, 8);
    inorder(root);
    return 0;
}`,
      java: `class Node {
    int data;
    Node left, right;
    Node(int data) { this.data = data; }
}
class BST {
    Node insert(Node root, int data) {
        if (root == null) return new Node(data);
        if (data < root.data)
            root.left = insert(root.left, data);
        else if (data > root.data)
            root.right = insert(root.right, data);
        return root;
    }
    void inorder(Node root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.data + " ");
            inorder(root.right);
        }
    }
    public static void main(String[] args) {
        BST tree = new BST();
        Node root = null;
        root = tree.insert(root, 5);
        tree.insert(root, 3);
        tree.insert(root, 7);
        tree.insert(root, 2);
        tree.insert(root, 4);
        tree.insert(root, 6);
        tree.insert(root, 8);
        tree.inorder(root);
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
def insert(root, data):
    if root is None:
        return Node(data)
    if data < root.data:
        root.left = insert(root.left, data)
    elif data > root.data:
        root.right = insert(root.right, data)
    return root
def inorder(root):
    if root:
        inorder(root.left)
        print(root.data, end=' ')
        inorder(root.right)
if __name__ == '__main__':
    root = None
    for val in [5, 3, 7, 2, 4, 6, 8]:
        root = insert(root, val)
    inorder(root)`,
    },
  },

  {
    id: "33",
    title: "Find Min and Max in an Array",
    description:
      "Write a function that finds the minimum and maximum elements in an unsorted array in a single pass.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "min-max-array",
    category: "Algorithms",
    examples: [
      {
        input: "array = [3, 1, 4, 1, 5, 9]",
        output: "{min: 1, max: 9}",
        explanation:
          "Traverse the array once to determine the min and max values.",
      },
    ],
    constraints: ["Traverse the array only once."],
    defaultCode: {
      c: `#include <stdio.h>
void findMinMax(int arr[], int n, int *min, int *max) {
    *min = *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}
int main() {
    int arr[] = {3, 1, 4, 1, 5, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    int min, max;
    findMinMax(arr, n, &min, &max);
    printf("min = %d, max = %d\\n", min, max);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
pair<int, int> findMinMax(const vector<int>& arr) {
    int minVal = arr[0], maxVal = arr[0];
    for (int num : arr) {
        if (num < minVal) minVal = num;
        if (num > maxVal) maxVal = num;
    }
    return {minVal, maxVal};
}
int main(){
    vector<int> arr = {3, 1, 4, 1, 5, 9};
    auto result = findMinMax(arr);
    cout << "min = " << result.first << ", max = " << result.second << endl;
    return 0;
}`,
      java: `public class MinMaxArray {
    public static int[] findMinMax(int[] arr) {
        int min = arr[0], max = arr[0];
        for (int num : arr) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        return new int[]{min, max};
    }
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        int[] result = findMinMax(arr);
        System.out.println("min = " + result[0] + ", max = " + result[1]);
    }
}`,
      python: `def find_min_max(arr):
    min_val = max_val = arr[0]
    for num in arr:
        if num < min_val:
            min_val = num
        if num > max_val:
            max_val = num
    return min_val, max_val
if __name__ == '__main__':
    arr = [3, 1, 4, 1, 5, 9]
    print(find_min_max(arr))`,
    },
  },

  {
    id: "34",
    title: "Cycle Detection in Linked List",
    description:
      "Determine if a given singly linked list contains a cycle using Floyd's Tortoise and Hare algorithm.",
    difficulty: "Medium",
    languages: ["c", "cpp", "java", "py"],
    slug: "cycle-detection-linked-list",
    category: "Data Structures",
    examples: [
      {
        input: "Linked list with cycle",
        output: "true",
        explanation:
          "Floyd's algorithm detects the cycle by using two pointers moving at different speeds.",
      },
    ],
    constraints: ["Use constant extra space."],
    defaultCode: {
      c: `#include <stdio.h>
#include <stdbool.h>
struct Node {
    int data;
    struct Node* next;
};
bool hasCycle(struct Node* head) {
    struct Node *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}
int main() {
    // Example usage; linked list creation omitted
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};
bool hasCycle(Node* head) {
    Node *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}
int main() {
    // Example usage; linked list creation omitted
    return 0;
}`,
      java: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}
class Solution {
    public boolean hasCycle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
    public static void main(String[] args) {
        // Example usage; linked list creation omitted
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
if __name__ == '__main__':
    # Example usage; linked list creation omitted
    pass`,
    },
  },

  {
    id: "35",
    title: "Balanced Parentheses Checker",
    description:
      "Write a function to check if a given string of parentheses is balanced.",
    difficulty: "Easy",
    languages: ["c", "cpp", "java", "py"],
    slug: "balanced-parentheses",
    category: "Algorithms",
    examples: [
      {
        input: '"(()())"',
        output: "true",
        explanation: "The parentheses are properly balanced.",
      },
      {
        input: '"(()"',
        output: "false",
        explanation: "The parentheses are not balanced.",
      },
    ],
    constraints: ["Only consider parentheses characters."],
    defaultCode: {
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>
bool isBalanced(char* str) {
    int count = 0;
    for (int i = 0; i < strlen(str); i++) {
        if (str[i] == '(') count++;
        else if (str[i] == ')') count--;
        if (count < 0) return false;
    }
    return count == 0;
}
int main() {
    char str1[] = "(()())";
    char str2[] = "(()";
    printf("%d\\n", isBalanced(str1));
    printf("%d\\n", isBalanced(str2));
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;
bool isBalanced(const string &str) {
    int count = 0;
    for (char c : str) {
        if (c == '(') count++;
        else if (c == ')') count--;
        if (count < 0) return false;
    }
    return count == 0;
}
int main() {
    cout << isBalanced("(()())") << endl;
    cout << isBalanced("(()") << endl;
    return 0;
}`,
      java: `public class BalancedParentheses {
    public static boolean isBalanced(String str) {
        int count = 0;
        for (char c : str.toCharArray()) {
            if (c == '(') count++;
            else if (c == ')') count--;
            if (count < 0) return false;
        }
        return count == 0;
    }
    public static void main(String[] args) {
        System.out.println(isBalanced("(()())"));
        System.out.println(isBalanced("(()"));
    }
}`,
      python: `def is_balanced(s):
    count = 0
    for c in s:
        if c == '(': count += 1
        elif c == ')': count -= 1
        if count < 0:
            return False
    return count == 0
if __name__ == '__main__':
    print(is_balanced("(()())"))
    print(is_balanced("(()"))`,
    },
  },
];

export function getChallengeBySlug(slug: string): Challenge | undefined {
  const challenge = challenges.find((challenge) => challenge.slug === slug);
  return challenge;
}
