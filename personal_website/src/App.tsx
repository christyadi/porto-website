import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"}>
			<Route index element={<Navigate to={"/home"} />} />
			<Route path={"home"} element={<HomePage />} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
