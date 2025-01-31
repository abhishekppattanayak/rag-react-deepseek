import Upload from "@/pages/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function PageRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/upload"
						element={<Upload />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
