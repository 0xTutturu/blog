import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { REVIEW } from "../queries/queries";
import { normalize } from "../helpers/normalize";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Loading from "../components/Loading";
import { Alert } from "../lib/Primitives";

const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language={match[1]}
				PreTag='div'
				{...props}>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

const ReviewDetails = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(REVIEW, {
		variables: {
			id: id,
		},
	});

	if (loading || data == undefined) return <Loading />;
	if (error) return <Alert severity='' children={<p>An Error occured</p>} />;

	const normData = normalize({ ...data });
	console.log(normData);

	return (
		<div className='bg-base min-h-screen h-fit pt-10 w-full'>
			<div className='flex flex-col flex-1 items-center w-10/12 mx-auto'>
				<h2 className='text-textGreen text-2xl'>{normData.review.title}</h2>
				<h6 className='text-sm text-white/60'>
					{normData.review.publishedAt.split("T")[0]}
				</h6>
				<p className='text-white self-start'>
					Categories:{" "}
					{normData.review.categories.map((category) => (
						<Link
							className='hover:text-textGreen no-underline'
							to={`/category/${category.id}`}
							key={category.id}>
							{" "}
							{category.name}
						</Link>
					))}
				</p>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					components={CodeBlock}
					className='text-white/70 mt-10 markdown'>
					{normData.review.body}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default ReviewDetails;
