"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const cityWeather = {
	cod: "200",
	message: 0,
	departmentList: [
		{
			id: 11,
			name: "Central",
			population: 1866562,
			coordinates: {
				lat: -25.380646,
				lon: -57.602323,
			},

			extendedForecastList: [
				{
					dateTimeTxt: "2024-05-11 06:00:00",
					dayText: "hoy",
					mainInfo: {
						temp: 21.34,
						tempMin: 21.34,
						tempMax: 30.24,
						humidity: 100,
					},
					weather: [
						{
							id: 1,
							type: "rain",
							description: "lluvia",
						},
					],
					wind: {
						speed: 40.05,
						direction: 66,
					},
					visibility: 5000,
					precipitationProbability: 0.99,
					rain: {
						volume1h: 0.4,
					},
				},

				// Other forecast objects...
			],
		},
	],
};

interface Prop {
	city: object;
}

export const WeatherOfTheDay: React.FC<Prop> = ({ city }) => {

	const todayForecast = cityWeather.departmentList[0].extendedForecastList[0];

    /* const [todayForecast, setTodayForecast] = useState({})

    useEffect(() => {
        setTodayForecast(cityWeather.departmentList[0].extendedForecastList[0];)
    }, [city]) */
    
	return (
		<div >
			<div>
				<Image
					src={"/home-icono.png"}
					width={50}
					height={50}
					alt="home icon"
				/>
				<p> - {cityWeather.departmentList[0].name}</p>
			</div>

			<p>HOY, Sábado </p>

			<p>{todayForecast.dateTimeTxt.substring(0, 10)}</p>

			<h2>{todayForecast.mainInfo.temp}ºC</h2>

			<h3>Estado del tiempo</h3>

			<div>
				<p>Optimo</p>
			</div>

			<div>
				<p>Viento {todayForecast.wind.speed} km/h</p>
				<p>|</p>
				<p>Humedad {todayForecast.mainInfo.humidity}%</p>
				<p>|</p>
				<p>Precipitación {todayForecast.rain.volume1h} mm/h</p>
			</div>
		</div>
	);
};


