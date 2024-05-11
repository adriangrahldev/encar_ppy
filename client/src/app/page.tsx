"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { apiUrl } from "./services/config";
import { WeatherOfTheDay } from "@/components/weatherTfTheDay/WeatherTfTheDay";

export default function Home() {
	const [searchDepart, setSearchDepart] = useState<string>("");
	const [searchResults, setSearchResults] = useState([]);
	const [isFarheneit, setIsFarheneit] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent) => {
		e?.preventDefault();
		handleSearchDepartment();
	};

	const handleSearchDepartment = async () => {
		try {
			const response = await axios.get(
				`${apiUrl}/departamentos/search/${searchDepart}`
			);
			const results = await response.data;
			setSearchResults(results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<div className="flex item-center w-full justify-evenly p-4">
				<div className="w-20">
					<Image
						src="/encar_logo.png"
						alt="Logo"
						width="100"
						height="100"
					/>
				</div>
				<form
					onSubmit={handleSubmit}
					className="border-2 border-black p-2 w-2/6 flex justify-between"
				>
					<input
						className="focus:outline-none"
						type="text"
						placeholder="Buscar ubicación"
						value={searchDepart}
						onChange={(e) => setSearchDepart(e.target.value)}
					/>
					<button className="item-center" type="submit">
						<Image
							src="/search.png"
							alt="Search"
							width="20"
							height="20"
						/>
					</button>
				</form>

				<div className="w-1/12 text-center border-black flex border rounded-3xl">
					<button
						className={`rounded-l-3xl border-black flex-1 ${
							!isFarheneit ? "shadow-inner bg-gray-300" : ""
						}`}
						onClick={(e) => setIsFarheneit(false)}
					>
						C
					</button>
					<button
						className={`rounded-r-3xl border-black flex-1 ${
							isFarheneit ? "shadow-inner bg-gray-300" : ""
						}`}
						onClick={(e) => setIsFarheneit(true)}
					>
						F
					</button>
				</div>
			</div>

			<WeatherOfTheDay city={{ hola: "hola" }} />
		</main>
	);
}
