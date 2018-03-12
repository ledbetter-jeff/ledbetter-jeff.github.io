var sWeatherObject = new XMLHttpRequest();

sWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MO/Springfield.json',true);

sWeatherObject.send();

sWeatherObject.onload = function () {

    var sWeatherInfo = JSON.parse(sWeatherObject.responseText);
    document.getElementById('sCurrentDate').innerHTML = sWeatherInfo.current_observation.local_time_rfc822;
    document.getElementById('windchill').innerHTML = sWeatherInfo.current_observation.display_location.full;
    document.getElementById('sPlace').innerHTML = sWeatherInfo.current_observation.display_location.full;
    document.getElementById('sTemp').innerHTML = sWeatherInfo.current_observation.temp_f;
    document.getElementById('sw_icon').src = sWeatherInfo.current_observation.icon_url;
}; // End of onload