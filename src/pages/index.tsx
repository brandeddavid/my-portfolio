import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Head>
				<title>David&apos;s Portfolio</title>
			</Head>
			<Header />
			<section id="hero">
				<Hero />
			</section>
		</main>
	);
}
