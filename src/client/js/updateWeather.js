


const updateWeather = (data) => {
    const condition = document.querySelector('.condition');
    const temp = document.querySelector('#temperature');
    const humidity = document.querySelector('#humidity');
    const windSpeed = document.querySelector('#wind-speed');
    const pressure = document.querySelector('#pressure');
    const feelsLike = document.querySelector('#feels-like');

    const weatherCode = data.weather.code;
    const expr = weatherCode.toString().charAt(0);
    let weatherIcon;

    if (weatherCode === 800) {
        weatherIcon = `☀️`;
    } else {
        switch (expr) {
            case '2':
                weatherIcon = `⛈`;
              break;    
            case '3':
                weatherIcon = `🌧`;
              break;    
            case '5':
                weatherIcon = `🌦`;
              break;   
            case '6':
                weatherIcon = `🌨`;
              break;    
            case '7':
                weatherIcon = `💨`;
              break;  
            case '8':
                weatherIcon = `☁️`;
              break;                           
            default:
                weatherIcon = `☀️`;
          }
    }
    
    condition.innerHTML = `${data.weather.description} ${weatherIcon}`;
    temp.innerHTML = `${data.temp} °C`;
    humidity.innerHTML = `${Math.round(data.rh)} %`;
    windSpeed.innerHTML = `${Math.round(data.wind_spd)} m/s`;
    pressure.innerHTML = `${data.pres} mb`;
    feelsLike.innerHTML = `${data.app_temp} °C`;
}

export { updateWeather }