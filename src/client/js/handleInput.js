import { updateWeather } from './updateWeather';
import { updateDetailsPanel } from './updateDetailsPanel';
import { updateForecast } from './updateForecast';
import { updateCurrentDate } from './updateCurrentDate';
import { updateImages } from './updateImages';
import { handleDate } from './handleDate';
import { clearInputs } from './clearInputs';

const handleInput = async () => {
    let long;
    let lat
    let city;
    let cityObj

    const userLocation = document.querySelector('#location').value;
    const userLocationValue = { userLocation };
    const startDate = document.querySelector('#trip-start'); 
    const endDate = document.querySelector('#trip-end');
    const endDateValue = endDate.value;
    const warningMsg = document.querySelector('.warning-message');



    if (userLocation === '' || endDateValue === '') {        
       warningMsg.classList.remove('d-none')
      } else { 
        warningMsg.classList.add('d-none')
        handleDate(startDate, endDate)               
        fetch('http://localhost:8080/location', {
                method: 'POST',
                credentials: 'same-origin',           
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLocationValue),
            })
              .then(res => res.json())
              .then(function (res) {            
                lat = res.postalcodes[0].lat;
                long = res.postalcodes[0].lng;
              }
            ).then(function() {               
                const latLong = { long, lat }
                fetch('http://localhost:8080/weather', {
                    method: 'POST',
                    credentials: 'same-origin',           
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(latLong),
                })
                  .then(res => res.json())
                  .then(function (res) {  
                      const data = res.data[0];                     
                      updateWeather(data);
                      updateDetailsPanel();                    
                      city = data.city_name;
                      updateCurrentDate();
                      clearInputs();
                  }
                ).then(function() {
                    cityObj = { city }
                    fetch('http://localhost:8080/forecast', {
                        method: 'POST',
                        credentials: 'same-origin',           
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(cityObj),
                    })
                      .then(res => res.json())
                      .then(function (res) { 
                        const data = res.data;             
                        updateForecast(data)
                      }
                    ); 
                }).then(function() {                 
                  fetch('http://localhost:8080/images', {
                      method: 'POST',
                      credentials: 'same-origin',           
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(userLocationValue),
                  })
                    .then(res => res.json())
                    .then(function (res) {                      
                      updateImages(res);
                    }
                  ); 
              });    
            })
        }
}



export { handleInput }