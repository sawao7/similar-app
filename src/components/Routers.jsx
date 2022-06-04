import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { TopPage } from "./TopPage";

export const Routers = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<TopPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
