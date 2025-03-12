import { useEffect } from "react";

/**
 * PasswordStrengthMeter Component
 *
 * This component visually represents the strength of a given password
 * using a progress bar with four segments.
 *
 * Strength levels:
 *  - 0 (Weak) → Red
 *  - 1 (Fair) → Yellow
 *  - 2 (Good) → Blue
 *  - 3 (Strong) → Green
 *
 * It also updates the global state `setIsPasswordValid` when the strongest level (3) is reached.
 *
 * @param {string} password - The password input provided by the user.
 */
const PasswordStrengthMeter = ({ password }: { password: string }) => {
  const setIsPasswordValid = (value: boolean) => {
    console.log(value);
  };

  /**
   * Evaluates password strength based on predefined rules.
   * @returns {number} A strength score ranging from 0 to 3.
   */
  const handleStrengthValue = (): number => {
    let strength = 0;

    if (password.length >= 6) strength++; // Length of at least 6 characters
    if (
      password.match(/[a-z]/) && // At least one lowercase letter
      password.match(/[A-Z]/) && // At least one uppercase letter
      password.match(/[\d]/) // At least one numeric digit
    ) {
      strength++;
    }
    if (password.match(/[^A-Za-z\d]/) && password.length >= 8) {
      // At least one special character and length of 8+
      strength++;
    }

    return strength;
  };

  /**
   * Determines the color of the strength meter segment based on the strength score.
   * @param {number} strength - The calculated password strength level.
   * @returns {string} TailwindCSS class for the background color.
   */
  const getColor = (strength: number) => {
    if (strength === 0) return "bg-red-500"; // Weak
    if (strength === 1) return "bg-yellow-500"; // Fair
    if (strength === 2) return "bg-green-500"; // Good
    if (strength === 3) return "bg-primary"; // Strong
  };

  useEffect(() => {
    // Updates the global state to mark the password as valid when it reaches maximum strength.
    if (handleStrengthValue() === 3) {
      setIsPasswordValid(true);
    }
  }, [password]);

  return (
    <div className="grid items-center w-full h-auto grid-cols-4 grid-rows-1 gap-4 mb-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`${
            index <= handleStrengthValue() // Fill bars based on strength level
              ? getColor(handleStrengthValue())
              : "bg-gray-300" // Default color for unfilled bars
          } h-[3px] rounded-full`}
        />
      ))}
    </div>
  );
};

export default PasswordStrengthMeter;
