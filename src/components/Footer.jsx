import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black px-4"> {/* Added horizontal padding */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4"> {/* Increased gap for spacing */}
          <img
            src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <p className="text-center text-sm text-white leading-loose md:text-left">
            Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
