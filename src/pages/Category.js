import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { normalize } from "../helpers/normalize";
import { CATEGORY } from "../queries/queries";

import TerminalPost from "../components/TerminalPost";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Alert } from "../lib/Primitives";

const Category = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(CATEGORY, {
		variables: {
			id: id,
		},
	});

	if (loading || data == undefined) return <Loading />;
	if (error) return <Alert severity='' children={<p>An Error occured</p>} />;

	let normData = normalize({ ...data });

	return (
		<div className='flex flex-col bg-base'>
			<Header topic={`>> category/`} content={normData.category.name} />

			<div className='flex flex-col mx-auto w-8/12 min-h-screen h-fit'>
				{normData.category.reviews
					?.sort((a, b) => (a.id < b.id ? 1 : -1))
					.map((review) => (
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

export default Category;
