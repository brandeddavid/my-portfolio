import React from "react";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <>
      <Link href="#about">
        <button className="navigationButton">About</button>
      </Link>
      <Link href="#experience">
        <button className="navigationButton">Experience</button>
      </Link>

      <Link href="#skills">
        <button className="navigationButton">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="navigationButton">Projects</button>
      </Link>
    </>
  );
};

export default Nav;
