import React from "react";
import Link from "next/link";

function Navigations() {
  return (
    <nav className="text-secondary flex flex-row items-center justify-center gap-6 p-4  font-bold mb-12">
      <Link href="/">INICIO</Link>
      <Link href="/about">ABOUT</Link>
    </nav>
  );
}

export default Navigations;
