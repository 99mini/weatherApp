const API_KEY ="d8e6493d6b4d3895f2bdf26d8f616952";
const CITY = "Seoul";
const COUNTRY = "KR";

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}, ${COUNTRY}&appid=${API_KEY}`)
.then(response => response.json())
.then(data => updateData(data))
.catch(error => console.warn(error));

function updateData(jsonData){
    console.log(jsonData);

    const cityDocument = document.getElementById("city");
    const countryDocument = document.getElementById("country");
    const temperatureDocument = document.getElementById("temperature");
    const descriptionDocument = document.getElementById("description");
    const weatherIconDocument = document.getElementById("weather-icon");

    let cityData = jsonData["name"];
    let weahterData = jsonData["weather"];
    let countryData = jsonData["sys"]["country"];
    
    let descriptionData = weahterData[0]["description"];
    let weatherIcon = weahterData[0]["icon"];
    
    let mainData = jsonData["main"];
    let temperatureData = mainData["temp"]; 
    temperatureData -= 273.15;
    temperatureData = temperatureData.toFixed(2);

    cityDocument.innerText = cityData;
    countryDocument.innerText = countryData;

    weatherIconDocument.innerHTML = `<img src="icons/${weatherIcon}.png"/>`;
    temperatureDocument.innerText = `${temperatureData}º`;
    
    descriptionDocument.innerText = descriptionData;




    
}
