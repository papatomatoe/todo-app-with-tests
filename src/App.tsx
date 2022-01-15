import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import FollowersPage from "pages/FollowersPage";
import NotFound from "pages/NotFound";
import "styles/globals.css";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="followers" element={<FollowersPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
