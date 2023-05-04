import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="z-1000 sticky top-0 flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/brandeddavid"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/brandeddavid/"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          network="email"
          className="cursor-pointer"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
