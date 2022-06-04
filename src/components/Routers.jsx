import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopPage } from "./TopPage";

export const Routers = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TopPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
