// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const loadTemperature = cityName => {

    const API_KEY = '2e1678c39b7628a41ffc74dddc0ff8b0';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => displayTemperature(data));
}

const setInnerTextById = (id, text) => {
    const idTextField = document.getElementById(id);
    idTextField.innerText = text;
}

const displayTemperature = (temperature) => {
    console.log(temperature);
    const { main, name, rain, clouds, weather } = temperature;
    // const { temp, temp_max, temp_min } = main;
    // const { main: temStat, description } = weather[1];
    setInnerTextById('tem-unit', main.temp);
    setInnerTextById('tem-status', weather[1].main);
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    setInnerTextById('tem-city', cityName)
    loadTemperature(cityName);
    console.log(cityName);
})

loadTemperature('dhaka');