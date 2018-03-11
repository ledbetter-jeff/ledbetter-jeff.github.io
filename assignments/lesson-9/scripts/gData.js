var gWeatherObject = new XMLHttpRequest();

gWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/AL/Greenville.json',true);

gWeatherObject.send();

gWeatherObject.onload = function () {

    var gWeatherInfo = JSON.parse(gWeatherObject.responseText);
    document.getElementById('gCurrentDate').innerHTML = gWeatherInfo.current_observation.local_time_rfc822;
    document.getElementById('gPlace').innerHTML = gWeatherInfo.current_observation.display_location.full;
    document.getElementById('gTemp').innerHTML = gWeatherInfo.current_observation.temp_f;
    document.getElementById('gw_icon').src = gWeatherInfo.current_observation.icon_url;
} // End of onload