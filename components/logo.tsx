import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center space-x-2">
        <Code className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">
          Syntax<span className="text-primary">Spring</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
