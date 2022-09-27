import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";

const About = () => {
	const sentences = [
		`Hi, I'm 0xTutturu`,
		`I'm a freelance full stack and smart contract developer`,
		`I do audit contests on code4rena and Sherlock, as well as `,
	];

	const addParagraph = (text) => {
		const para = document.createElement("h4");
		const node = document.createTextNode(text);
		para.appendChild(node);
		const element = document.getElementById("permanent");
		element.appendChild(para);
	};

	return (
		<div className='flex flex-col bg-base h-screen'>
			<Header topic={`>> /`} content={`About_Me`} />
			<div className='flex flex-col mx-auto w-8/12 text-textGreen text-2xl pt-10'>
				<h4 className='pb-2'>Hi! I'm 0xTutturu.</h4>
				<h4 className='pb-2'>
					I'm a freelance full stack and smart contract developer that does
					audit contests on code4rena and Sherlock from time to time.
				</h4>
			</div>
		</div>
	);
};

export default About;
