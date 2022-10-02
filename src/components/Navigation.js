import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { WalletButton } from "../lib/Web3Connect";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [height, setHeight] = useState("0px");

	const contentSpace = useRef(null);

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
		setHeight(menuOpen ? "0px" : `${contentSpace.current.scrollHeight}px`);
	};

	return (
		<div className='w-full h-20 p-5 bg-base text-white/90'>
			<div className='flex flex-row items-center justify-between w-10/12 h-full mx-auto'>
				<Link
					className='text-4xl font-codeLight hover:text-textGreen no-underline'
					to='/'>
					Tutturu!
				</Link>

				<button
					className='flex sm:hidden w-10 h-10 items-center justify-center'
					onClick={toggleMenu}>
					<GiHamburgerMenu className='h-10 w-10' />
				</button>

				<div className='flex-row hidden sm:flex items-center gap-x-6 text-lg'>
					{/* <Link
						to='/code-fighters'
						className='flex flex-row hover:text-textGreen no-underline group'>
						<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
						Code Fighters
					</Link> */}

					<Link
						to='/about'
						className='flex flex-row hover:text-textGreen no-underline group'>
						<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
						About Me
					</Link>
					{/* <Link
						to='/projects'
						className='flex flex-row hover:text-textGreen no-underline group'>
						<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
						Projects
					</Link> */}
					<Link
						to='/'
						className='flex flex-row hover:text-textGreen  no-underline group'>
						<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
						Blog
					</Link>

					<WalletButton className='p-2 m-1 z-20 bg-textGreen font-codeBold rounded-md text-base uppercase hover:ring-1 ring-white'>
						Connect wallet
					</WalletButton>
				</div>
			</div>
			<div className='relative w-10/12 xl:w-8/12 mx-auto'>
				<div
					ref={contentSpace}
					style={{ maxHeight: `${height}` }}
					className='absolute top right-0 bg-black/80 shadow-lg text-white transition-max-height duration-700 ease-in-out overflow-hidden pl-5 pr-5 rounded-2xl'>
					<div className='flex flex-col gap-y-2 justify-center mb-1 items-center pb-5 pt-5 '>
						{/* <Link
							to='/code-fighters'
							className='flex flex-row hover:text-textGreen no-underline group'>
							<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
							Code Fighters
						</Link> */}
						<Link
							to='/about'
							className='flex flex-row hover:text-textGreen no-underline group'>
							<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
							About Me
						</Link>
						<Link
							to='/'
							className='flex flex-row hover:text-textGreen no-underline group'>
							<span className='group-hover:block group-hover:animate-float-y hidden mr-1 text-textGreen'>{`>>`}</span>
							Blog
						</Link>
						<WalletButton className='p-2 m-1 z-20 bg-textGreen font-codeBold rounded-md text-base uppercase hover:ring-1 ring-white'>
							Connect wallet
						</WalletButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
