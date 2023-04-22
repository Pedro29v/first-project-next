import React from "react";
import Link from "next/link";

function Navigations() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Algun lugar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigations;
