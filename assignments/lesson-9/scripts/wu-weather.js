

var fWeatherObject = new XMLHttpRequest();

fWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json',true);

fWeatherObject.send();

fWeatherObject.onload = function () {

    var fWeatherInfo = JSON.parse(fWeatherObject.responseText);
    console.log(fWeatherInfo);


    document.getElementById('fPlace').innerHTML = fWeatherInfo.current_observation.display_location.full;
    document.getElementById('fTemp').innerHTML = fWeatherInfo.current_observation.temp_f;
    document.getElementById('fw_icon').src = fWeatherInfo.current_observation.icon_url;
    document.getElementById('fCurrentDate').innerHTML = fWeatherInfo.current_observation.local_time_rfc822;

} // End of onload

var gWeatherObject = new XMLHttpRequest();

gWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/AL/Greenville.json',true);

gWeatherObject.send();

gWeatherObject.onload = function () {

    var gWeatherInfo = JSON.parse(gWeatherObject.responseText);
    console.log(gWeatherInfo);

    document.getElementById('gPlace').innerHTML = gWeatherInfo.current_observation.display_location.full;
    document.getElementById('gTemp').innerHTML = gWeatherInfo.current_observation.temp_f;
    document.getElementById('gw_icon').src = gWeatherInfo.current_observation.icon_url;

} // End of onload

var sWeatherObject = new XMLHttpRequest();

sWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MO/Springfield.json',true);

sWeatherObject.send();

sWeatherObject.onload = function () {

    var sWeatherInfo = JSON.parse(sWeatherObject.responseText);
    console.log(sWeatherInfo);

    document.getElementById('sPlace').innerHTML = sWeatherInfo.current_observation.display_location.full;
    document.getElementById('sTemp').innerHTML = sWeatherInfo.current_observation.temp_f;
    document.getElementById('sw_icon').src = sWeatherInfo.current_observation.icon_url;
} // End of onload



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

    document.getElementById('gPop').innerHTML = townInfo.towns["1"].currentPopulation;
    document.getElementById('gFound').innerHTML = townInfo.towns["1"].yearFounded;
    document.getElementById('gMotto').innerHTML = townInfo.towns["1"].motto;
    document.getElementById('gRain').innerHTML = townInfo.towns["1"].averageRainfall;
    document.getElementById('gE1').innerHTML = townInfo.towns["1"].events["0"];
    document.getElementById('gE2').innerHTML = townInfo.towns["1"].events["1"];
    document.getElementById('gE3').innerHTML = townInfo.towns["1"].events["2"];
    document.getElementById('gE4').innerHTML = townInfo.towns["1"].events["3"];

    document.getElementById('sPop').innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById('sFound').innerHTML = townInfo.towns["3"].yearFounded;
    document.getElementById('sMotto').innerHTML = townInfo.towns["3"].motto;
    document.getElementById('sRain').innerHTML = townInfo.towns["3"].averageRainfall;
    document.getElementById('sE1').innerHTML = townInfo.towns["3"].events["0"];
    document.getElementById('sE2').innerHTML = townInfo.towns["3"].events["1"];
    document.getElementById('sE3').innerHTML = townInfo.towns["3"].events["2"];

} // End of onload