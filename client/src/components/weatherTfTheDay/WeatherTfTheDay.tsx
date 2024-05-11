"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Prop {
	cityWeather: object;
}

export const WeatherOfTheDay: React.FC<Prop> = ({ cityWeather }) => {

	const [todayForecast, setTodayForecast] = useState({})

    useEffect(() => {
        setTodayForecast(cityWeather.departmentList[0].extendedForecastList[0];)
    }, [cityWeather])

	return (
		<div className="flex w-full item-center justify-center">
			<div
				className="p-4"
				style={{ background: "#CFD4FE", borderRadius: 16 }}
			>
				<div className="flex gap-2 item-center">
					<Image
						src={"/home-icono.png"}
						width={25}
						height={25}
						alt="home icon"
					/>
					<p> - Asucion {cityWeather.departmentList[0].name}</p>
				</div>

				<p>HOY, Sábado </p>

				<p>{todayForecast.dateTimeTxt.substring(0, 10)}</p>

				<h2 style={{ fontSize: "2em" }}>{todayForecast.mainInfo.temp}ºC</h2>

				<h3>Estado del tiempo</h3>

				<div>
					<p>Optimo</p>
				</div>

				<div className="flex gap-2">
					<p>Viento {todayForecast.wind.speed} km/h</p>
					<p>|</p>
					<p>Humedad {todayForecast.mainInfo.humidity}%</p>
					<p>|</p>
					<p>Precipitación {todayForecast.rain.volume1h} mm/h</p>
				</div>
			</div>
		</div>
	);
};
