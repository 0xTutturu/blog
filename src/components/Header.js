import React from "react";

const Header = ({ topic, content }) => {
	return (
		<div className='w-full p-1 bg-base text-white border-t-[1px] border-b-[1px] border-secondary'>
			<h2 className='m-2 text-2xl mx-auto w-8/12 text-textPink'>
				<span className='text-textGreen'>{topic}</span>
				{content}
			</h2>
		</div>
	);
};

export default Header;
