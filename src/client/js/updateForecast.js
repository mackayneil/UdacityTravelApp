const updateForecast = (data) => {
    const months = { 
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    }

    const forecastCards = document.querySelector('.forecast-cards');
    forecastCards.innerHTML = ''; 
    for (let i = 1; i <= 5; i++) {
        let date = [...data[i].valid_date.slice(5).split('-')];
        let month = date[0];
        let day = date[1];

        const weatherCode = data[i].weather.code;
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
       
        forecastCards.innerHTML += `<div class="forecast-card">
                                        <div>
                                            <p class="forecast-date">${day} ${months[month]}</p>
                                            <p class="forecast-condition">${data[i].weather.description} ${weatherIcon}</p>
                                        </div>
                                        <p class="max-min">${Math.round(data[i].max_temp)} / ${Math.round(data[i].min_temp)} °C</p>
                                    </div>`
    }
}

export { updateForecast }