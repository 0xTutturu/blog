import React from "react";
import { useQuery } from "@apollo/client";
import { REVIEWS } from "../queries/queries";
import { normalize } from "../helpers/normalize";

import TerminalPost from "../components/TerminalPost";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { Alert } from "../lib/Primitives";

const Homepage = () => {
	const { loading, error, data } = useQuery(REVIEWS);

	if (loading || data == undefined) return <Loading />;
	if (error) return <Alert severity='' children={<p>An Error occured</p>} />;

	const normData = normalize({ ...data });

	return (
		<div className='flex flex-col bg-base'>
			<Filter />
			<div className='flex flex-col mx-auto w-full 550:w-11/12 lg:w-9/12 min-h-screen h-fit'>
				{normData.reviews?.reverse().map((review) => (
					<TerminalPost
						key={review.id}
						title={review.title}
						description={review.body}
						date={review.publishedAt.split("T")[0]}
						page={`/blog-posts/${review.id}`}
						categories={review.categories}
					/>
				))}
			</div>
		</div>
	);
};

export default Homepage;
