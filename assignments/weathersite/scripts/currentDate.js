var cWeatherObject = new XMLHttpRequest();
cWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json',true);
cWeatherObject.send();
cWeatherObject.onload = function () {

    var cWeatherInfo = JSON.parse(cWeatherObject.responseText);
    console.log(cWeatherInfo);

     document.getElementById('fCurrentDate').innerHTML = cWeatherInfo.current_observation.local_time_rfc822;
};