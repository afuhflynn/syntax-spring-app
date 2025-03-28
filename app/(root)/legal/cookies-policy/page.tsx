import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Learn about how Syntax Spring uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">
          Cookies Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: March 13, 2025
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They are widely used to make websites work more
            efficiently and provide information to the owners of the site.
            Cookies enhance user experience by allowing websites to remember
            your preferences and understand how you use their services.
          </p>

          <h2>How we use cookies</h2>
          <p>Syntax Spring uses cookies for several purposes, including:</p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These cookies are necessary
              for the website to function properly. They enable core
              functionality such as security, network management, and account
              access.
            </li>
            <li>
              <strong>Functionality cookies:</strong> These cookies allow us to
              remember choices you make and provide enhanced, more personal
              features. For example, they may be used to remember your login
              details or language preferences.
            </li>
            <li>
              <strong>Performance cookies:</strong> These cookies collect
              information about how you use our website, such as which pages you
              visit most often. They help us understand how visitors interact
              with our site, enabling us to continually improve it.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These cookies allow us to
              recognize and count the number of visitors and see how visitors
              move around our website. This helps us improve the way our website
              works.
            </li>
          </ul>

          <h2>Specific cookies we use</h2>
          <p>The following cookies may be placed on your device:</p>
          <ul>
            <li>
              <strong>Authentication cookies:</strong> Used to identify you when
              you log in to our platform.
            </li>
            <li>
              <strong>Preference cookies:</strong> Used to remember settings
              such as theme preference (light/dark mode) and code editor
              configurations.
            </li>
            <li>
              <strong>Progress tracking cookies:</strong> Used to track your
              progress through challenges and maintain your streak information.
            </li>
            <li>
              <strong>Session cookies:</strong> Temporary cookies that are
              erased when you close your browser.
            </li>
          </ul>

          <h2>Managing cookies</h2>
          <p>
            Most web browsers allow you to manage your cookie preferences. You
            can set your browser to refuse cookies, or to alert you when cookies
            are being sent. The methods for doing so vary from browser to
            browser, and from version to version. You can however obtain
            up-to-date information about blocking and deleting cookies via these
            links:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
          </ul>
          <p>
            Please note that restricting cookies may impact the functionality of
            our website.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update our Cookies Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the{" "}
            <span className="font-bold">"Last updated"</span> date.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about our Cookies Policy, please contact
            us at{" "}
            <a href="mailto:syntaxspring@gmail.com">syntaxspring@gmail.com</a>.
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
