import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="max-w-[960px] mx-auto flex justify-around">
      <Link className="nav" href="/">
        Home
      </Link>
      <Link className="nav" href="/about">
        about
      </Link>
      <Link className="nav" href="/report">
        report
      </Link>
      <Link className="nav" href="/todosCSR">
        todosCSR
      </Link>
      <Link className="nav" href="/todosSSR">
        todosSSR
      </Link>
    </div>
  );
};

export default Nav;
