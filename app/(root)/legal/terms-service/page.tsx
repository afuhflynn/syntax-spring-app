import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing the use of Syntax Spring.",
};

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: March 13, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Syntax Spring (the "Service"), you agree to be
            bound by these Terms of Service ("Terms"). If you disagree with any
            part of the terms, you may not access the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Syntax Spring is an interactive coding challenge platform designed
            to help users improve their programming skills through practice
            exercises, tutorials, and community interaction.
          </p>

          <h2>3. Registration and Account Security</h2>
          <p>
            To use certain features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password. We encourage you to use "strong" passwords (passwords that
            use a combination of upper and lower case letters, numbers, and
            symbols) with your account.
          </p>

          <h2>4. User Content</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material ("Content"). You are responsible for the Content that you
            post on or through the Service, including its legality, reliability,
            and appropriateness.
          </p>
          <p>
            By posting Content on or through the Service, you represent and
            warrant that:
          </p>
          <ul>
            <li>
              The Content is yours (you own it) or you have the right to use it
              and grant us the rights and license as provided in these Terms.
            </li>
            <li>
              The posting of your Content on or through the Service does not
              violate the privacy rights, publicity rights, copyrights, contract
              rights or any other rights of any person.
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by
            users), features, and functionality are and will remain the
            exclusive property of Syntax Spring and its licensors. The Service
            is protected by copyright, trademark, and other laws of both
            Cameroon and foreign countries. Our trademarks and trade dress may
            not be used in connection with any product or service without the
            prior written consent of Syntax Spring.
          </p>

          <h2>6. User Code and Solutions</h2>
          <p>When you submit code solutions to challenges on our platform:</p>
          <ul>
            <li>You retain ownership of your code.</li>
            <li>
              You grant us a non-exclusive, worldwide, royalty-free license to
              use, copy, modify, publish, and distribute your code for the
              purposes of providing, improving, and promoting the Service.
            </li>
            <li>
              We may use anonymized versions of your code for educational
              purposes, such as showing example solutions to other users.
            </li>
          </ul>

          <h2>7. Subscription and Payments</h2>
          <p>
            Some aspects of the Service may be provided for a fee. You will be
            required to select a payment plan and provide accurate information
            regarding your billing method in{" "}
            <span className="font-bold">future updates</span>. You agree to pay
            all fees at the prices then in effect for your subscription.
          </p>
          <p>
            Automatic Renewal: Unless you notify us before the end of the
            applicable subscription period that you want to cancel, your
            subscription will automatically renew, and you authorize us to
            collect the then-applicable annual or monthly subscription fee using
            any credit card or other payment mechanism we have on record for
            you.
          </p>

          <h2>8. Refund Policy</h2>
          <p>
            Payments are non-refundable and there are no refunds or credits for
            partially used periods. Following any cancellation, however, you
            will continue to have access to the service through the end of your
            current billing period.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service or contact us to request account
            deletion.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall Syntax Spring, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from:
          </p>
          <ul>
            <li>
              Your access to or use of or inability to access or use the
              Service;
            </li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>
              Unauthorized access, use or alteration of your transmissions or
              content.
            </li>
          </ul>

          <h2>11. Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is
            provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the United States, without regard to its conflict of law
            provisions.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
