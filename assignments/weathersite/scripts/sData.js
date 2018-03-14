var sWeatherObject = new XMLHttpRequest();

sWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/forecast/q/OR/Springfield.json',true);
sWeatherObject.send();
sWeatherObject.onload = function () {

    var sWeatherInfo = JSON.parse(sWeatherObject.responseText);
    console.log(sWeatherInfo);

    document.getElementById('location').innerHTML = sWeatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = sWeatherInfo.current_observation.temp_f;
    document.getElementById('currentConditions').innerHTML = sWeatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = sWeatherInfo.current_observation.icon_url;
    document.getElementById('windSpeed').innerHTML = sWeatherInfo.current_observation.wind_mph;
    // document.getElementById('windChill').innerHTML = sWeatherInfo.current_observation.windchill_f;

    document.getElementById('todayHigh').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('todayLow').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('CurrentDate').innerHTML = sWeatherInfo.current_observation.local_time_rfc822;

    document.getElementById('day1').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('day2').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('day3').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('day4').innerHTML = sWeatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;

}; // End of onload


var townObject = new XMLHttpRequest();

townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);
townObject.send();

townObject.onload = function () {

    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('sPop').innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById('sFound').innerHTML = townInfo.towns["3"].yearFounded;
    document.getElementById('sMotto').innerHTML = townInfo.towns["3"].motto;
    document.getElementById('sRain').innerHTML = townInfo.towns["3"].averageRainfall;
    document.getElementById('sE1').innerHTML = townInfo.towns["3"].events["0"];
    document.getElementById('sE2').innerHTML = townInfo.towns["3"].events["1"];
    document.getElementById('sE3').innerHTML = townInfo.towns["3"].events["2"];
};