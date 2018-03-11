var fWeatherObject = new XMLHttpRequest();

fWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json',true);

fWeatherObject.send();

fWeatherObject.onload = function () {

    var fWeatherInfo = JSON.parse(fWeatherObject.responseText);
    document.getElementById('fCurrentDate').innerHTML = fWeatherInfo.current_observation.local_time_rfc822;
    document.getElementById('fPlace').innerHTML = fWeatherInfo.current_observation.display_location.full;
    document.getElementById('fTemp').innerHTML = fWeatherInfo.current_observation.temp_f;
    document.getElementById('fw_icon').src = fWeatherInfo.current_observation.icon_url;
} // End of onload