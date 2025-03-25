import { PrismaClient, Difficulty, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.userAchievement.deleteMany({});
  await prisma.achievement.deleteMany({});
  await prisma.testResult.deleteMany({});
  await prisma.submission.deleteMany({});
  await prisma.progress.deleteMany({});
  await prisma.challengeBookmark.deleteMany({});
  await prisma.challengeLike.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.challengeTag.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.testCase.deleteMany({});
  await prisma.challenge.deleteMany({});
  await prisma.user.deleteMany({});

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      username: "admin",
      email: "admin@syntaxspring.com",
      password: adminPassword,
      role: UserRole.ADMIN,
      emailVerified: new Date(),
    },
  });

  // Create regular user
  const userPassword = await bcrypt.hash("user123", 10);
  const user = await prisma.user.create({
    data: {
      name: "Test User",
      username: "testuser",
      email: "user@syntaxspring.com",
      password: userPassword,
      role: UserRole.USER,
      emailVerified: new Date(),
    },
  });

  // Create tags
  const tags = await Promise.all([
    prisma.tag.create({
      data: {
        name: "Arrays",
        description: "Problems involving arrays and lists",
        color: "#3498db",
      },
    }),
    prisma.tag.create({
      data: {
        name: "Strings",
        description: "Problems involving string manipulation",
        color: "#2ecc71",
      },
    }),
    prisma.tag.create({
      data: {
        name: "Dynamic Programming",
        description: "Problems solved using dynamic programming",
        color: "#e74c3c",
      },
    }),
    prisma.tag.create({
      data: {
        name: "Algorithms",
        description: "General algorithmic problems",
        color: "#9b59b6",
      },
    }),
    prisma.tag.create({
      data: {
        name: "Data Structures",
        description: "Problems focusing on data structures",
        color: "#f39c12",
      },
    }),
  ]);

  // Create challenges
  const validPalindrome = await prisma.challenge.create({
    data: {
      title: "Valid Palindrome",
      slug: "valid-palindrome",
      description: `
# Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.

## Example 1:

**Input:** s = "A man, a plan, a canal: Panama"
**Output:** true
**Explanation:** "amanaplanacanalpanama" is a palindrome.

## Example 2:

**Input:** s = "race a car"
**Output:** false
**Explanation:** "raceacar" is not a palindrome.

## Constraints:

- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters.
      `,
      difficulty: Difficulty.EASY,
      starterCode: `function isPalindrome(s) {
  // Your code here
  
}`,
      solutionCode: `function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the string is the same forwards and backwards
  for (let i = 0; i < Math.floor(cleanString.length / 2); i++) {
    if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}`,
      isPublished: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
  });

  // Add tags to the challenge
  await prisma.challengeTag.createMany({
    data: [
      {
        challengeId: validPalindrome.id,
        tagId: tags[1].id, // Strings
      },
      {
        challengeId: validPalindrome.id,
        tagId: tags[3].id, // Algorithms
      },
    ],
  });

  // Add test cases
  await prisma.testCase.createMany({
    data: [
      {
        challengeId: validPalindrome.id,
        input: '"A man, a plan, a canal: Panama"',
        expectedOutput: "true",
        isHidden: false,
        order: 1,
      },
      {
        challengeId: validPalindrome.id,
        input: '"race a car"',
        expectedOutput: "false",
        isHidden: false,
        order: 2,
      },
      {
        challengeId: validPalindrome.id,
        input: '" "',
        expectedOutput: "true",
        isHidden: false,
        order: 3,
      },
      {
        challengeId: validPalindrome.id,
        input: '"A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8S9t0U1v2W3x4Y5z6"',
        expectedOutput: "false",
        isHidden: true,
        order: 4,
      },
      {
        challengeId: validPalindrome.id,
        input: '"A1b2C3c2b1A"',
        expectedOutput: "true",
        isHidden: true,
        order: 5,
      },
    ],
  });

  // Create a second challenge
  const twoSum = await prisma.challenge.create({
    data: {
      title: "Two Sum",
      slug: "two-sum",
      description: `
# Two Sum

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example 1:

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

## Example 2:

**Input:** nums = [3,2,4], target = 6
**Output:** [1,2]

## Example 3:

**Input:** nums = [3,3], target = 6
**Output:** [0,1]

## Constraints:

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.
      `,
      difficulty: Difficulty.EASY,
      starterCode: `function twoSum(nums, target) {
  // Your code here
  
}`,
      solutionCode: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null; // No solution found
}`,
      isPublished: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
  });

  // Add tags to the challenge
  await prisma.challengeTag.createMany({
    data: [
      {
        challengeId: twoSum.id,
        tagId: tags[0].id, // Arrays
      },
      {
        challengeId: twoSum.id,
        tagId: tags[3].id, // Algorithms
      },
      {
        challengeId: twoSum.id,
        tagId: tags[4].id, // Data Structures
      },
    ],
  });

  // Add test cases
  await prisma.testCase.createMany({
    data: [
      {
        challengeId: twoSum.id,
        input: "[2,7,11,15], 9",
        expectedOutput: "[0,1]",
        isHidden: false,
        order: 1,
      },
      {
        challengeId: twoSum.id,
        input: "[3,2,4], 6",
        expectedOutput: "[1,2]",
        isHidden: false,
        order: 2,
      },
      {
        challengeId: twoSum.id,
        input: "[3,3], 6",
        expectedOutput: "[0,1]",
        isHidden: false,
        order: 3,
      },
      {
        challengeId: twoSum.id,
        input: "[1,2,3,4,5,6,7,8,9,10], 19",
        expectedOutput: "[8,9]",
        isHidden: true,
        order: 4,
      },
      {
        challengeId: twoSum.id,
        input: "[-1,-2,-3,-4,-5], -8",
        expectedOutput: "[2,4]",
        isHidden: true,
        order: 5,
      },
    ],
  });

  // Create achievements
  await prisma.achievement.createMany({
    data: [
      {
        name: "First Blood",
        description: "Solve your first challenge",
        icon: "🩸",
        points: 10,
      },
      {
        name: "Streak Master",
        description: "Solve challenges for 7 consecutive days",
        icon: "🔥",
        points: 50,
      },
      {
        name: "Algorithm Apprentice",
        description: "Solve 10 algorithm challenges",
        icon: "🧠",
        points: 100,
      },
      {
        name: "Data Structure Guru",
        description: "Solve 10 data structure challenges",
        icon: "📊",
        points: 100,
      },
      {
        name: "Speed Demon",
        description: "Solve a challenge in under 5 minutes",
        icon: "⚡",
        points: 30,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
