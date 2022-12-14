import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import "animate.css";

import { ReviewDetails, Homepage, Category, About, Projects } from "./pages";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";
import CodeFighters from "./components/CodeFighters";

// Apollo client
const client = new ApolloClient({
	uri: "https://glacial-eyrie-69394.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<HelmetProvider>
				<div className='font-anonymousPro min-h-screen'>
					<Navigation />
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/blog-posts/:id' element={<ReviewDetails />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/about' element={<About />} />
						{/* <Route path='/projects' element={<Projects />} /> */}
						{/* <Route path='/code-fighters' element={<CodeFighters />} /> */}

						<Route path='*' element={<div>404</div>} />
					</Routes>
				</div>
			</HelmetProvider>
		</ApolloProvider>
	);
}

export default App;
