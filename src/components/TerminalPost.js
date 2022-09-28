import React from "react";
import { Link } from "react-router-dom";

const TerminalPost = ({
	title,
	date,
	description,
	image,
	alt,
	page,
	categories,
}) => {
	return (
		<div className='w-full m-2'>
			<Link
				to={page}
				className='flex flex-col w-full p-5 ease-in-out duration-100 group no-underline'>
				<div className='flex flex-row text-textGreen'>
					<h4 className='text-textPink mr-2 hidden md:block'>
						{`0xTutturu/blog-posts/`}{" "}
					</h4>
					<h4 className='group-hover:animate-float-y group-hover:text-textPurple ease-in-out text-sm sm:text-[16px] sm:leading-6'>{`>> `}</h4>
					<h4 className='ml-2 text-sm hidden 500:block sm:text-[16px] sm:leading-6'>
						category/
					</h4>

					{categories.map((category) => (
						<h4
							key={category.id}
							className='flex-row hidden 500:flex text-textGreen text-sm sm:text-[16px] sm:leading-6'>
							<Link
								className='text-textPink underline hover:text-white'
								key={category.id}
								to={`/category/${category.id}`}>
								{category.name}
							</Link>
							/
						</h4>
					))}
					<h6 className='text-textGreen text-sm sm:text-[16px] sm:leading-6 ml-2 500:ml-0'>
						{date}/
					</h6>
					<h4 className='text-textGreen text-sm sm:text-[16px] sm:leading-6'>
						{title}/
					</h4>
				</div>

				<div className='flex flex-col text-comment flex-1 ml-10 mt-5 text-sm sm:text-[16px] sm:leading-6'>
					<h4 className='sm:text-lg'>{`---- description ----`}</h4>
					<p className='text-comment mr-5 500:mr-0'>
						{description.substring(0, 200)}...
					</p>
					<div className='flex flex-row 500:hidden'>
						Categories:{" "}
						{categories.map((category) => (
							<Link
								className='text-textPink underline hover:text-white text-sm sm:text-[16px] sm:leading-6 mx-1'
								key={category.id}
								to={`/category/${category.id}`}>
								{category.name}
							</Link>
						))}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TerminalPost;
