"use client";

import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a
        className={`mr-4 ${
          pathname === "/retrieval" ? "text-white border-b" : ""
        }`}
        href="/"
      >
        Home
      </a>
      {/* <a
        className={`mr-4 ${
          pathname === "/retrieval" ? "text-white border-b" : ""
        }`}
        href="https://github.com/siddAhmed/LawGPT"
        target="_blank"
      >
        <FaGithub className="inline-block mr-2" />
        GitHub
      </a> */}
    </nav>
  );
}
