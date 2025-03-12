import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="./logo/fav-icon.png"
          alt="Syntax spring logo"
          width={40}
          height={40}
        />
        <span className="font-bold text-xl">
          Syntax<span className="text-primary">Spring</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
