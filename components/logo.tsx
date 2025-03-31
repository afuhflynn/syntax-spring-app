import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={
            "https://res.cloudinary.com/duzg7l0eo/image/upload/v1742920199/fav-icon_mnoce0.png"
          }
          alt="Syntax spring logo"
          width={34}
          height={34}
        />
        <span className="font-bold text-xl hidden sm:block md:block">
          Syntax<span className="text-primary">Spring</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
