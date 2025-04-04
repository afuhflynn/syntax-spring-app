import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how Syntax Spring collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: March 13, 2025
          </p>

          <h2>Introduction</h2>
          <p>
            At Syntax Spring, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website and use our services. Please
            read this privacy policy carefully. If you do not agree with the
            terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Register for an account</li>
            <li>Complete a profile</li>
            <li>Participate in coding challenges</li>
            <li>Communicate with us</li>
            <li>Subscribe to our newsletter</li>
            <li>Request customer support</li>
          </ul>

          <p>The types of information we may collect include:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              profile picture.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, and
              account preferences.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              platform, including completed challenges, performance metrics, and
              learning progress.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and cookies.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including
            to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>
              Send you technical notices, updates, security alerts, and support
              messages
            </li>
            <li>Respond to your comments, questions, and requests</li>
            <li>
              Personalize your experience and deliver content relevant to your
              interests
            </li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our services
            </li>
            <li>
              Detect, investigate, and prevent fraudulent transactions and other
              illegal activities
            </li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li>
              <strong>With Service Providers:</strong> We may share your
              information with third-party vendors, service providers,
              contractors, or agents who perform services for us.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal
              information for any other purpose with your consent.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information where required to do so by law or in response to valid
              requests by public authorities.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, please also remember that we cannot
            guarantee that the internet itself is 100% secure. Although we will
            do our best to protect your personal information, transmission of
            personal information to and from our services is at your own risk.
          </p>

          <h2>Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>The right to access personal data we hold about you</li>
            <li>
              The right to request that we correct any personal data if it is
              found to be inaccurate or out of date
            </li>
            <li>
              The right to request that your personal data be erased where it is
              no longer necessary for us to retain such data
            </li>
            <li>
              The right to withdraw your consent to the processing at any time,
              where we rely on your consent to process your personal information
            </li>
            <li>
              The right to request that we provide you with your personal data
              and where possible, to transmit that data directly to another data
              controller
            </li>
            <li>
              The right, where there is a dispute in relation to the accuracy or
              processing of your personal data, to request a restriction is
              placed on further processing
            </li>
            <li>The right to object to the processing of personal data</li>
            <li>The right to lodge a complaint with a supervisory authority</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our service is not directed to anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13.
          </p>
          <p>
            If you are a parent or guardian and you think your child is
            responsible and curious to learn, then we recommend the child uses
            your details for the account creation.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date. You are advised to review this
            Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:syntaxspring1516@gmail.com">
              syntaxspring1516@gmail.com
            </a>
            .
          </p>

          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
