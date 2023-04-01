import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
	const emailRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center">
			<div className="max-w-md w-full mx-auto">
				<div className="text-center font-medium text-xl">
					Create an account on
				</div>
				<div className="text-3xl font-bold text-gray-900 mt-2 text-center">
					Our App
				</div>
			</div>
			<div className="max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
				<form className="space-y-6">
					<div>
						<label className="text-sm xl:text-xl 2xl:text-2xl font-bold text-gray-900 block">
							Email
						</label>
						<input
							ref={emailRef}
							type="email"
							className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl  w-full p-2 border border-gray-300 rounded mt-1"
						/>
					</div>
					<div>
						<label className="text-sm xl:text-xl 2xl:text-2xl font-bold text-gray-900 block">
							Password
						</label>
						<input
							ref={passwordRef}
							type="password"
							className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl w-full p-2 border border-gray-300 rounded mt-1"
						/>
					</div>
					<div>
						<label className="text-sm xl:text-xl 2xl:text-2xl font-bold text-gray-900 block">
							Confirm Password
						</label>
						<input
							ref={passwordRef}
							type="password"
							className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl w-full p-2 border border-gray-300 rounded mt-1"
						/>
					</div>
					<div>
						<button className="w-full text-sm xl:text-xl 2xl:text-2xl p-2 mt-4 text-center text-white bg-blue-500 rounded hover:bg-blue-700 font-bold">
							Sign Up
						</button>
					</div>

					<div className="flex items-center justify-center">
						<NavLink
							to="/"
							className="text-sm md:text-sm xl:text-xl 2xl:text-2xl text-blue-500 hover:text-blue-700"
						>
							Already have an account? Login here
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
}
