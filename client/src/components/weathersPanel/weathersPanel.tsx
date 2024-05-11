
const WeathersPanel = ({ weathers }: {weathers: any}) => {

    return (
        <div className="weathers-panel">
            {/* {weathers.map((weather: any, index: number) => (
                <div key={index} className="weather">
                    <div className="weather-date">{weather.date}</div>
                    <div className="weather-temperature">{weather.temperature}°C</div>
                    <div className="weather-description">{weather.description}</div>
                </div>
            ))} */}
        </div>
    );  

}

export default WeathersPanel;