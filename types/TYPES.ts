// Enums
enum UserRole {
  USER,
  DEVELOPER,
  ADMIN,
}

enum SubmissionStatus {
  PENDING,
  ACCEPTED,
  WRONG_ANSWER,
  TIME_LIMIT_EXCEEDED,
  MEMORY_LIMIT_EXCEEDED,
  RUNTIME_ERROR,
  COMPILATION_ERROR,
}

enum Difficulty {
  EASY,
  MEDIUM,
  HARD,
  EXPERT,
}

enum ProgressStatus {
  NOT_STARTED,
  IN_PROGRESS,
  COMPLETED,
}

// Models, schemas and general types

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  emailVerified: Date;
  password: string;
  bio: string;
  avatarUrl: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  submissions: Submission[];
  comments: Comment[];
  progress: Progress[];
  achievements: UserAchievement[];
  authoredChallenges: Challenge[]; // @relation("ChallengeAuthor")
  likes: ChallengeLike[];
  bookmarks: ChallengeBookmark[];
}

interface Submission {
  id: string;
  code: string;
  language: string;
  status: SubmissionStatus;
  runtime: number;
  memory: number;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  user: User;
  userId: string;
  challenge: Challenge;
  challengeId: string;
  testResults: TestResult[];
}

interface Challenge {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  starterCode: string;
  solutionCode: string;
  timeLimit: number;
  memoryLimit: number;
  isPublished: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  author: User;
  authorId: string;
  testCases: TestCase[];
  submissions: Submission[];
  tags: ChallengeTag[];
  comments: Comment[];
  progress: Progress[];
  likes: ChallengeLike[];
  bookmarks: ChallengeBookmark[];
}

interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  challenge: Challenge;
  challengeId: string;
}

interface ChallengeTag {
  id: string;
  createdAt: Date;

  // Relations
  challenge: Challenge;
  challengeId: string;
  tag: Tag;
  tagId: string;
}

interface Tag {
  id: string;
  name: string;
  description?: string;
  color?: string;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  challenges: ChallengeTag[];
}

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  user: User;
  userId: string;
  challenge: Challenge;
  challengeId: string;

  // Self-relation for nested comments - Fixed with proper referential actions
  parentId?: string; // For nested comments
  parent?: Comment;
  replies: Comment[];
}

interface Progress {
  id: string; // Use cuid for unique IDs
  status: ProgressStatus;
  lastAttemptAt?: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  user: User;
  userId: string;
  challenge: Challenge;
  challengeId: string;
}

interface ChallengeLike {
  id: string; // Use cuid for unique IDs
  createdAt: Date;

  // Relations
  user: User;
  userId: string;
  challenge: Challenge;
  challengeId: string;
}

interface ChallengeBookmark {
  id: string; // Use cuid for unique IDs
  createdAt: Date;

  // Relations
  user: User;
  userId: string;
  challenge: Challenge;
  challengeId: string;
}

interface UserAchievement {
  id: string; // Use cuid for unique IDs
  unlockedAt: Date;

  // Relations
  user: User;
  userId: string;
  achievement: Achievement;
  achievementId: string;
}

interface Achievement {
  id: string; // Use cuid for unique IDs
  name: string;
  description: string;
  icon?: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

interface TestResult {
  id: string; // Use cuid for unique IDs
  passed: boolean;
  output?: string;
  error?: string;
  runtime: number; // Runtime in milliseconds
  memory: number; // Memory usage in KB
  createdAt: Date;

  // Relations
  submission: Submission;
  submissionId: string;
  testCaseId: string; // We don't create a direct relation to TestCase to preserve results even if test cases change
}
