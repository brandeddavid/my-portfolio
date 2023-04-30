import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ["Hello, I am David", "A kick ass software engineer"],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div>
			<BackgroundCircles />
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="green" />
			</h1>
		</div>
	);
};

export default Hero;
