import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const About = () => {
	const [typed, setTyped] = useState("");

	const sentences = [
		`Hi, I'm 0xTutturu`,
		`I do smart contract development using Solidity and web development using React and TailwindCSS`,
	];

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (typed.length < sentences[0].length) {
				setTyped(sentences[0].slice(0, typed.length + 1));
			} else {
				setTyped(
					typed.slice(0, sentences[0].length) +
						sentences[1].slice(0, typed.length - sentences[0].length + 1)
				);
			}
		}, 25);

		return () => clearTimeout(timeout);
	}, [typed]);

	return (
		<div className='flex flex-col bg-base h-screen'>
			<Header topic={`>> /`} content={`About_Me`} />
			<div className='flex flex-col mx-auto w-8/12 text-textGreen pt-5'>
				<h2 className='text-2xl text-textGreen mb-0'>
					{`>> ` + typed.slice(0, sentences[0].length)}
				</h2>
				<p className='text-2xl m-0'>
					{`>> ` + typed.slice(sentences[0].length, typed.length)}
				</p>
			</div>
		</div>
	);
};

export default About;
