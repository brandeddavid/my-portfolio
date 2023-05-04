import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/programmer.svg"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }} // Only animates when the image is in view
        viewport={{ once: true }} // Animate only on initial view
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Senior Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">Sandpiper Aviation</p>
        <div className="flex space-x-2">
          <Image
            src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/programmer.svg"
            width={10}
            height={10}
            alt=""
          />
        </div>
      </div>
      <p className="py-4 uppercase text-gray-300">Dates</p>
      <ul className="ml-5 list-disc space-y-4 text-lg">
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
