import { GitHubSignIn } from "./github-signin";
import { GoogleSignIn } from "./google-signin";

export const AuthButtons = () => {
  return (
    <div className="flex space-x-2">
      <GitHubSignIn />
      <GoogleSignIn />
    </div>
  );
};
