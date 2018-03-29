
// var cWeatherObject = new XMLHttpRequest();
// var url = 'http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/forecast/q/MN/Franklin.json';
//
// function callOtherDomain() {
//     if(cWeatherObject) {
//         cWeatherObject.open('GET', url, true);
//         cWeatherObject.onreadystatechange = handler;
//         cWeatherObject.send();
//     }
// }
//
// cWeatherObject.onload = function () {
//
//     var cWeatherInfo = JSON.parse(cWeatherObject.responseText);
//     console.log(cWeatherInfo);
//
//     document.getElementById('location').innerHTML = cWeatherInfo.current_observation.display_location.full;
//     document.getElementById('currentTemp').innerHTML = cWeatherInfo.current_observation.temp_f;
//     document.getElementById('currentConditions').innerHTML = cWeatherInfo.current_observation.weather;
//     document.getElementById('w_icon').src = cWeatherInfo.current_observation.icon_url;
//     document.getElementById('windSpeed').innerHTML = cWeatherInfo.current_observation.wind_mph;
//     document.getElementById('windChill').innerHTML = cWeatherInfo.current_observation.windchill_f;
//     document.getElementById('fCurrentDate').innerHTML = cWeatherInfo.current_observation.local_time_rfc822;
//
//     document.getElementById('todayHigh').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
//     document.getElementById('todayLow').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
//
//     document.getElementById('day1').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
//     document.getElementById('day2').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
//     document.getElementById('day3').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
//     document.getElementById('day4').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
//
// }; // End of onload

var cWeatherObject = new XMLHttpRequest();

cWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/forecast/q/MN/Franklin.json',true);

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

    document.getElementById('todayHigh').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('todayLow').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    document.getElementById('day1').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('day2').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('day3').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('day4').innerHTML = cWeatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;


}; // End of onload*/


var townObject = new XMLHttpRequest();

townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);

townObject.send();
townObject.onload = function () {
    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('fPop').innerHTML = townInfo.towns["0"].currentPopulation;
    document.getElementById('fFound').innerHTML = townInfo.towns["0"].yearFounded;
    document.getElementById('fMotto').innerHTML = townInfo.towns["0"].motto;
    document.getElementById('fRain').innerHTML = townInfo.towns["0"].averageRainfall;
    document.getElementById('fE1').innerHTML = townInfo.towns["0"].events["0"];
    document.getElementById('fE2').innerHTML = townInfo.towns["0"].events["1"];
    document.getElementById('fE3').innerHTML = townInfo.towns["0"].events["2"];

}; // End of onload