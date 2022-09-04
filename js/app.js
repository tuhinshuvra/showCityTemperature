// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const loadTemperature = cityName => {

    const API_KEY = '2e1678c39b7628a41ffc74dddc0ff8b0';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

loadTemperature('dhaka');