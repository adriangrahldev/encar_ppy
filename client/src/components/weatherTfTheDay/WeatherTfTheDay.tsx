"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


interface Prop {
	departamento: any;
}

export const WeatherOfTheDay: React.FC<Prop> = ({ departamento }) => {
	 const [todayForecast, setTodayForecast] = useState(departamento?.pronostico_extendido_list)

    useEffect(() => {
        setTodayForecast(departamento?.pronostico_extendido_list[0])
    }, [departamento]) 

	return (
		<div className="flex w-full item-center justify-center">
			<div
				className="p-6"
				style={{ background: "#CFD4FE", borderRadius: 16 }}
			>
				<div className="flex gap-2 item-center">
					<Image
						src={"/home-icono.png"}
						width={25}
						height={25}
						alt="home icon"
					/>
					<p> - {departamento?.nombre}</p>
				</div>

				<p>HOY, Sábado </p>

				<p>{todayForecast?.fecha_hora_txt.split("")[0]}</p>

				<h2 style={{ fontSize: "2em" }}>{todayForecast?.main.temp}ºC</h2>

				<h3>Estado del tiempo</h3>

				<div>
					<p>Optimo</p>
				</div>

				<div className="flex gap-2">
					<p>Viento {todayForecast?.viento.velocidad} km/h</p>
					<p>|</p>
					<p>Humedad {todayForecast?.main.humedad}%</p>
					<p>|</p>
					<p>Precipitación {todayForecast?.lluvia.volumen_1h} mm/h</p>
				</div>
			</div>
		</div>
	);
};
