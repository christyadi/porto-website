import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom";
import TestPage from "./Pages/Test";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"}>
			<Route index element={<Navigate to={"/home"} />} />
			<Route path={"home"} element={<TestPage />} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
