import { gql } from "@apollo/client";

export const CATEGORY = gql`
	query GetCategory($id: ID!) {
		category(id: $id) {
			data {
				id
				attributes {
					name
					reviews {
						data {
							id
							attributes {
								title
								body
								publishedAt
								image {
									data {
										id
										attributes {
											url
										}
									}
								}
								categories {
									data {
										id
										attributes {
											name
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const CATEGORIES = gql`
	query GetCategories {
		categories {
			data {
				id
				attributes {
					name
				}
			}
		}
	}
`;

export const REVIEW = gql`
	query GetReview($id: ID!) {
		review(id: $id) {
			data {
				id
				attributes {
					title
					body
					publishedAt
					image {
						data {
							id
							attributes {
								url
							}
						}
					}
					categories {
						data {
							id
							attributes {
								name
							}
						}
					}
				}
			}
		}
	}
`;

export const REVIEWS = gql`
	query GetReviews {
		reviews {
			data {
				id
				attributes {
					title
					body
					publishedAt
					image {
						data {
							attributes {
								url
							}
						}
					}
					categories {
						data {
							id
							attributes {
								name
							}
						}
					}
				}
			}
		}
	}
`;
