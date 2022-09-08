import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { normalize } from "../helpers/normalize";
import { CATEGORIES } from "../queries/queries";

const Filter = () => {
	const { loading, error, data } = useQuery(CATEGORIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const normData = normalize({ ...data });

	return (
		<div className='w-full p-2 bg-base text-white border-t-[1px] border-b-[1px] border-secondary'>
			<div className='flex flex-row items-center justify-between w-10/12 h-full mx-auto'>
				<nav>
					<span className='text-sm sm:text-[16px] sm:leading-6'>
						Filter reviews by category:
					</span>
					<br className='block 500:hidden' />
					{normData.categories.map((category) => (
						<Link
							className='pr-2 500:px-2 text-sm sm:text-[16px] sm:leading-6 no-underline hover:text-textGreen'
							key={category.id}
							to={`/category/${category.id}`}>
							{category.name}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Filter;
