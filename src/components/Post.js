import React from "react";
import { Link } from "react-router-dom";

const Post = ({ title, date, description, image, alt, page, categories }) => {
	return (
		<div className='w-full m-2'>
			<Link
				to={page}
				className='flex flex-row w-full p-10 hover:bg-base ease-in-out duration-100 shadow-black'>
				<img
					src={image}
					alt={alt}
					className='flex max-w-[300px] max-h-[300px] rounded-md my-auto'
				/>
				<div className='flex flex-col flex-1 items-center ml-10'>
					<h2 className='text-white/80 text-2xl'>{title}</h2>
					<h6 className='text-sm text-white/60'>{date}</h6>
					<p className='text-white/70 mt-10'>
						{description.substring(0, 200)}...
					</p>
					<p className='text-white/80'>
						Categories:{" "}
						{categories.map((category) => (
							<Link
								className='px-2 hover:text-white'
								key={category.id}
								to={`/category/${category.id}`}>
								{category.name}
							</Link>
						))}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Post;
