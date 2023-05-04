import React from "react";

type Props = {};

const About = (props: Props) => {
	return (
		<div className="h-screen flex flex-col relative text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
				About
			</h3>
		</div>
	);
};

export default About;
