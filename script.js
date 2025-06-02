document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please input the city first");
    }
});

function fetchWeather(city) {
    console.log(city, "city");
    const APY_KEY = "0d967c84ba87f1ce38172eef77ff13a2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APY_KEY}`;

    try {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data,"data")
                if (data.cod === 200) {
                    const weatherInfo = `
                    <h3>${data.name}</h3>
                    <p>Temperature: ${(data.main.temp - 273.15).toFixed(1)} °C</p>
                    <p>weather condition ${data.weather[0].description}</p>`;
                    document.getElementById("weather-result").innerHTML = weatherInfo;
                } else {
                    document.getElementById("weather-result").innerHTML = `<p>City is not found</p>`;
                }

            });
    } catch (error) {
        document.getElementById(
            "weather-result"
        ).innerHTML = `<p>Something went wrong</p>`;
    }

}









APY_KEY = "0d967c84ba87f1ce381"
