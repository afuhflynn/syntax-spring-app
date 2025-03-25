import type { Metadata } from "next"
import FAQsClient from "./faqs-client"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Syntax Spring and our coding challenge platform.",
}

const faqs = [
  {
    question: "What is Syntax Spring?",
    answer:
      "Syntax Spring is an interactive coding challenge platform designed to help developers improve their programming skills through hands-on practice. Our platform offers a wide range of challenges across multiple programming languages and difficulty levels.",
  },
  {
    question: "Is Syntax Spring free to use?",
    answer:
      "Yes, Syntax Spring offers a free tier that includes access to many coding challenges. We also offer premium subscriptions with additional features such as advanced challenges, personalized learning paths, and priority support.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "Syntax Spring supports a wide range of programming languages including JavaScript, Python, Java, C++, TypeScript, Ruby, Go, Rust, and more. We're constantly adding support for additional languages based on user feedback.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "Once you create an account, Syntax Spring automatically tracks your progress. You can view your completed challenges, current streak, earned badges, and overall statistics on your dashboard. This helps you monitor your improvement over time.",
  },
  {
    question: "Can I use Syntax Spring to prepare for technical interviews?",
    answer:
      "Many of our challenges are designed to simulate technical interview questions from top tech companies. We offer categories specifically focused on interview preparation, covering data structures, algorithms, system design, and more.",
  },
  {
    question: "How does the AI assistance work?",
    answer:
      "Our AI assistant can provide hints, explain concepts, review your code, and suggest improvements. It's designed to help you learn rather than just give you the answer. You can access the AI assistant from any challenge page by clicking the 'Ask AI for Help' button.",
  },
  {
    question: "Can I connect with other learners?",
    answer:
      "Yes, Syntax Spring has a community feature where you can connect with other learners, join study groups, participate in discussions, and even find study partners. We believe collaborative learning enhances the educational experience.",
  },
  {
    question: "How are the challenges created and verified?",
    answer:
      "Our challenges are created by a team of experienced developers and educators. Each challenge goes through a rigorous review process to ensure accuracy, clarity, and educational value. We also regularly update challenges based on user feedback and industry trends.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Currently, Syntax Spring is optimized for desktop and tablet use. We're working on mobile apps for iOS and Android that will be released in the near future. In the meantime, you can access our platform through your mobile browser for a responsive experience.",
  },
  {
    question: "How can I report a bug or suggest a feature?",
    answer:
      "We welcome your feedback! You can report bugs or suggest features through the 'Feedback' option in your account menu. Alternatively, you can email us directly at support@syntaxspring.com. We review all feedback and continuously work to improve the platform.",
  },
  {
    question: "Do you offer certificates of completion?",
    answer:
      "Yes, we offer certificates for completing certain learning paths or achieving specific milestones. These certificates can be shared on your LinkedIn profile or included in your resume to showcase your skills to potential employers.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. Navigate to 'Subscription' and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period. If you have any issues, please contact our support team.",
  },
]

export default function FAQsPage() {
  return <FAQsClient faqs={faqs} />
}

