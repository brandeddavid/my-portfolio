import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ["Hello, I am David", "A kick ass software engineer"],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/eatcodesleep.jpg"
				width={32}
				height={32}
				alt=""
				className="rounded-full relative h-32 w-32 mx-auto object-cover"
			/>
			<div>
				<h2 className="text-sm uppercase pb-2 tracking-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="green" />
				</h1>
			</div>
		</div>
	);
};

export default Hero;
