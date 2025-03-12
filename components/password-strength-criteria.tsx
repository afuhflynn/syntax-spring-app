import { Check, X } from "lucide-react"; // Importing icons for visual feedback

/**
 * PasswordStrengthCriteria Component
 *
 * This component evaluates a given password against predefined security criteria.
 * It displays a checklist showing whether each requirement is met, using:
 *  ✅ (Check icon) for fulfilled criteria.
 *  ❌ (X icon) for unfulfilled criteria.
 *
 * @param {string} password - The password input provided by the user.
 */
const PasswordStrengthCriteria = ({ password }: { password: string }) => {
  // List of password strength criteria
  const criteria = [
    {
      id: 1,
      label: "At least 8 characters", // Ensures the password has a minimum length of 8 characters
      met: password.length >= 8,
    },
    {
      id: 2,
      label: "At least 1 lowercase character", // Checks for at least one lowercase letter (a-z)
      met: /[a-z]/.test(password),
    },
    {
      id: 3,
      label: "At least 1 uppercase character", // Checks for at least one uppercase letter (A-Z)
      met: /[A-Z]/.test(password),
    },
    {
      id: 4,
      label: "At least 1 numeric character", // Ensures at least one number (0-9) is included
      met: /[0-9]/.test(password),
    },
    {
      id: 5,
      label: "At least 1 special character", // Ensures at least one special character (!@#$%^&* etc.)
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <>
      <h4 className="text-muted-foreground text-sm my-0">Must include: </h4>
      <ul className="flex flex-col items-start gap-2 mb-4 list-none">
        {criteria.map((item, index) => (
          <li
            key={`${item.id}-${item.label}-${index}`} // Ensures unique keys for React list rendering
            className="text-sm flex flex-row items-center gap-2"
          >
            {/* Icon indicating whether the criterion is met */}
            <div>
              {item.met ? (
                <Check className="text-primary text-xs" /> // Green checkmark for met criteria
              ) : (
                <X className="text-red-500 text-xs" /> // Red X for unmet criteria
              )}
            </div>

            {/* Criterion label with dynamic text color */}
            <p className={item.met ? "text-primary" : "text-red-500"}>
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PasswordStrengthCriteria;
