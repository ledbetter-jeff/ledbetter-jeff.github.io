var cWeatherObject = new XMLHttpRequest();

cWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json',true);

cWeatherObject.send();

cWeatherObject.onload = function () {

    var cWeatherInfo = JSON.parse(cWeatherObject.responseText);
    console.log(cWeatherInfo);

    document.getElementById('location').innerHTML = cWeatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = cWeatherInfo.current_observation.temp_f;
    document.getElementById('currentConditions').innerHTML = cWeatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = cWeatherInfo.current_observation.icon_url;
    document.getElementById('windSpeed').innerHTML = cWeatherInfo.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = cWeatherInfo.current_observation.windchill_f;
    document.getElementById('fCurrentDate').innerHTML = cWeatherInfo.current_observation.local_time_rfc822;



} // End of onload

var fWeatherObject = new XMLHttpRequest();

fWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/forecast/q/MN/Franklin.json',true);

fWeatherObject.send();

fWeatherObject.onload = function () {

    var fWeatherInfo = JSON.parse(fWeatherObject.responseText);
    console.log(fWeatherInfo);

    document.getElementById('todayHigh').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('todayLow').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    document.getElementById('day1').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('day2').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('day3').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('day4').innerHTML = fWeatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;

} // End of onload


/*
var townObject = new XMLHttpRequest();

townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);

townObject.send();

townObject.onload = function () {

    var townInfo = JSON.parse(townObject.responseText);

    document.getElementById('fPop').innerHTML = townInfo.towns["0"].currentPopulation;
    document.getElementById('fFound').innerHTML = townInfo.towns["0"].yearFounded;
} // End of onload*/
