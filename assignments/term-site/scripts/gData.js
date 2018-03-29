var gWeatherObject = new XMLHttpRequest();

gWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/forecast/q/TX/Greenville.json',true);

gWeatherObject.send();

gWeatherObject.onload = function () {

    var gWeatherInfo = JSON.parse(gWeatherObject.responseText);
    console.log(gWeatherInfo);


    document.getElementById('location').innerHTML = gWeatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = gWeatherInfo.current_observation.temp_f;
    document.getElementById('currentConditions').innerHTML = gWeatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = gWeatherInfo.current_observation.icon_url;
    document.getElementById('windSpeed').innerHTML = gWeatherInfo.current_observation.wind_mph;
    // document.getElementById('windChill').innerHTML = gWeatherInfo.current_observation.windchill_f;

    document.getElementById('todayHigh').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('todayLow').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('CurrentDate').innerHTML = gWeatherInfo.current_observation.local_time_rfc822;

    document.getElementById('day1').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('day2').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('day3').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('day4').innerHTML = gWeatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;

}; // End of onload


var townObject = new XMLHttpRequest();

townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);
townObject.send();

townObject.onload = function () {
    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('gPop').innerHTML = townInfo.towns["1"].currentPopulation;
    document.getElementById('gFound').innerHTML = townInfo.towns["1"].yearFounded;
    document.getElementById('gMotto').innerHTML = townInfo.towns["1"].motto;
    document.getElementById('gRain').innerHTML = townInfo.towns["1"].averageRainfall;
    document.getElementById('gE1').innerHTML = townInfo.towns["1"].events["0"];
    document.getElementById('gE2').innerHTML = townInfo.towns["1"].events["1"];
    document.getElementById('gE3').innerHTML = townInfo.towns["1"].events["2"];
    document.getElementById('gE4').innerHTML = townInfo.towns["1"].events["3"];

}; // End of onload