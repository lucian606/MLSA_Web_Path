import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
