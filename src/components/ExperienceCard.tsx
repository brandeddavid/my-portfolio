import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/programmer.svg"
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }} // Only animates when the image is in view
				viewport={{ once: true }} // Animate only on initial view
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				alt=""
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Senior Software Engineer</h4>
				<p className="font-bold text-2xl mt-1">Sandpiper Aviation</p>
				<div className="flex space-x-2">
					<Image
						src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/programmer.svg"
						width={10}
						height={10}
						alt=""
					/>
				</div>
			</div>
			<p className="uppercase py-4 text-gray-300">Dates</p>
			<ul className="list-disc space-y-4 ml-5 text-lg">
				<li>Summary points</li>
				<li>Summary points</li>
				<li>Summary points</li>
				<li>Summary points</li>
				<li>Summary points</li>
			</ul>
		</article>
	);
};

export default ExperienceCard;
