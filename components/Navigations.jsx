import React from "react";
import Link from "next/link";

function Navigations() {
  return (
    <nav className="bg-secondary flex flex-row items-center justify-center gap-6 p-4 text-white font-bold mb-12">
      <Link href="/about">About</Link>

      <Link href="/">Algun lugar</Link>
    </nav>
  );
}

export default Navigations;
