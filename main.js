const API_KEY ="d8e6493d6b4d3895f2bdf26d8f616952";
const CITY = "Seoul";
const COUNTRY = "KR";

const updateTimeDocument = document.getElementById("update-time");
const cityDocument = document.getElementById("city");
const countryDocument = document.getElementById("country");
const temperatureDocument = document.getElementById("temperature");
const descriptionDocument = document.getElementById("description");
const weatherIconDocument = document.getElementById("weather-icon");
const tempMaxDocument = document.getElementById("temp-max");
const tempMinDocument = document.getElementById("temp-min");

const DaysArray = ["SUN","MON","TUE","WES","THU","FRI","SAT"];

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}, ${COUNTRY}&appid=${API_KEY}`)
.then(response => response.json())
.then(data => updateData(data))
.catch(error => console.warn(error));


function updateData(jsonData){
    console.log(jsonData);

    let today = new Date();
    let days = DaysArray[today.getDay()];
    let hours = today.getHours();
    let mins = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    
    updateTimeDocument.innerText = `${days} ${hours}:${mins}`;
    
    let cityData = jsonData["name"];
    let weahterData = jsonData["weather"];
    let countryData = jsonData["sys"]["country"];
    
    let descriptionData = weahterData[0]["description"];
    let weatherIcon = weahterData[0]["icon"];
    
    let mainData = jsonData["main"];
    let temperatureData = mainData["temp"]; 

    let tempMaxData = mainData["temp_max"];
    let tempMinData = mainData["temp_min"];

    cityDocument.innerText = cityData;
    countryDocument.innerText = countryData;

    weatherIconDocument.innerHTML = `<img src="icons/${weatherIcon}.png"/>`;
    temperatureDocument.innerText = `${Math.round(temperatureData - 273.15)}ºC`;
    
    descriptionDocument.innerText = descriptionData;

    tempMaxDocument.innerText = `MAX: ${Math.round(tempMaxData - 273.15)}º`;
    tempMinDocument.innerText = `MIN: ${Math.round(tempMinData - 273.15)}º`;
}
