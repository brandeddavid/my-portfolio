import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Nav from "./Nav";

type Props = {};

// TODO: Uncomment <BackgroundCircles /> afer investigating and fixing multiple reloads bug issue

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello, I am David", "A kick ass software engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      {/* <BackgroundCircles /> */}
      <Image
        src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/programmer.svg"
        width={32}
        height={32}
        alt=""
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
      />
      <div>
        <h2 className="pb-2 text-sm uppercase tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="scroll-px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="green" />
        </h1>
      </div>

      <div className="pt-5">
        <Nav />
      </div>
    </div>
  );
};

export default Hero;
