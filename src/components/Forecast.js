import _01d from '../assets/icons/fill/openweathermap/01d.svg';
import _01n from '../assets/icons/fill/openweathermap/01n.svg';
import _02d from '../assets/icons/fill/openweathermap/02d.svg';
import _02n from '../assets/icons/fill/openweathermap/02n.svg';
import _03d from '../assets/icons/fill/openweathermap/03d.svg';
import _03n from '../assets/icons/fill/openweathermap/03n.svg';
import _04d from '../assets/icons/fill/openweathermap/04d.svg';
import _04n from '../assets/icons/fill/openweathermap/04n.svg';
import _09d from '../assets/icons/fill/openweathermap/09d.svg';
import _09n from '../assets/icons/fill/openweathermap/09n.svg';
import _10d from '../assets/icons/fill/openweathermap/10d.svg';
import _10n from '../assets/icons/fill/openweathermap/10n.svg';
import _11d from '../assets/icons/fill/openweathermap/11d.svg';
import _11n from '../assets/icons/fill/openweathermap/11n.svg';
import _13d from '../assets/icons/fill/openweathermap/13d.svg';
import _13n from '../assets/icons/fill/openweathermap/13n.svg';
import _50d from '../assets/icons/fill/openweathermap/50d.svg';
import _50n from '../assets/icons/fill/openweathermap/50n.svg';

const Forecast = (props) => {
    const renderForecastItems = () => {
        if (!props.weatherData || !props.weatherData.list) {
            return null;
        }

        const today = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', weekday: 'short' });

        const groupedForecasts = {};
        props.weatherData.list.forEach(forecast => {
            const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', weekday: 'short' });

            if (date !== today) {
                if (!groupedForecasts[date]) {
                    groupedForecasts[date] = [];
                }
                groupedForecasts[date].push(forecast);
            }
        });


        return Object.keys(groupedForecasts).map(date => {
            const dayForecasts = groupedForecasts[date].filter(forecast => forecast.weather[0].icon.endsWith('d'));


            if (dayForecasts.length > 0) {
                const forecast = dayForecasts[0];
                const weatherCondition = forecast.weather[0].main;
                const weatherIcon = getWeatherIcon(forecast.weather[0].icon);

                return (
                    <div className='forecast-item' key={date}>

                        <h1>{date}</h1>
                        <div className='forecast-icon-div'>
                            <img src={weatherIcon} alt={weatherCondition} className='forecast-icon' />
                        </div>
                        <h1>{weatherCondition}</h1>
                    </div>
                );
            } else {
                return null;
            }
        });
    };
    const getWeatherIcon = (iconCode) => {
        switch (iconCode) {
            case '01d':
                return _01d;
            case '01n':
                return _01n;
            case '02d':
                return _02d;
            case '02n':
                return _02n;
            case '03d':
                return _03d;
            case '03n':
                return _03n;
            case '04d':
                return _04d;
            case '04n':
                return _04n;
            case '09d':
                return _09d;
            case '09n':
                return _09n;
            case '10d':
                return _10d;
            case '10n':
                return _10n;
            case '11d':
                return _11d;
            case '11n':
                return _11n;
            case '13d':
                return _13d;
            case '13n':
                return _13n;
            case '50d':
                return _50d;
            case '50n':
                return _50n;
            default:
                return defaultWeatherIcon;
        }
    };

    const defaultWeatherIcon = '';

    return (
        <>
            {renderForecastItems()}
        </>
    );
};

export default Forecast;
