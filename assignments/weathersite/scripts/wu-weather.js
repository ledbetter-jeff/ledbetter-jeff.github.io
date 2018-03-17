
//test

var franklinWeatherObject = new XMLHttpRequest();

franklinWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json', true);
franklinWeatherObject.send();
franklinWeatherObject.onload = function () {

    var franklinWeatherInfo = JSON.parse(franklinWeatherObject.responseText);
    console.log(franklinWeatherInfo);


    document.getElementById('fPlace').innerHTML = franklinWeatherInfo.current_observation.display_location.full;
    document.getElementById('fTemp').innerHTML = franklinWeatherInfo.current_observation.temp_f;
    document.getElementById('fw_icon').src = franklinWeatherInfo.current_observation.icon_url;
    document.getElementById('fCurrentDate').innerHTML = franklinWeatherInfo.current_observation.local_time_rfc822;

}; // End of onload

var greenWeatherObject = new XMLHttpRequest();

greenWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/TX/Greenville.json', true);
greenWeatherObject.send();
greenWeatherObject.onload = function () {

    var greenWeatherInfo = JSON.parse(greenWeatherObject.responseText);
    console.log(greenWeatherInfo);

    document.getElementById('gPlace').innerHTML = greenWeatherInfo.current_observation.display_location.full;
    document.getElementById('gTemp').innerHTML = greenWeatherInfo.current_observation.temp_f;
    document.getElementById('gw_icon').src = greenWeatherInfo.current_observation.icon_url;

}; // End of onload

var placerWeatherObject = new XMLHttpRequest();

placerWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/CA/Placerville.json', true);
placerWeatherObject.send();
placerWeatherObject.onload = function () {

    var placerWeatherInfo = JSON.parse(placerWeatherObject.responseText);
    console.log(placerWeatherInfo);

    // document.getElementById('pPlace').innerHTML = placerWeatherInfo.current_observation.display_location.full;
    document.getElementById('pTemp').innerHTML = placerWeatherInfo.current_observation.temp_f;
    document.getElementById('pw_icon').src = placerWeatherInfo.current_observation.icon_url;

}; // End of onload

var springWeatherObject = new XMLHttpRequest();

springWeatherObject.open('GET','http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MO/Springfield.json', true);
springWeatherObject.send();
springWeatherObject.onload = function () {

    var springWeatherInfo = JSON.parse(springWeatherObject.responseText);
    console.log(springWeatherInfo);

    document.getElementById('sPlace').innerHTML = springWeatherInfo.current_observation.display_location.full;
    document.getElementById('sTemp').innerHTML = springWeatherInfo.current_observation.temp_f;
    document.getElementById('sw_icon').src = springWeatherInfo.current_observation.icon_url;
}; // End of onload



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

    document.getElementById('pPop').innerHTML = townInfo.towns["2"].currentPopulation;
    document.getElementById('pFound').innerHTML = townInfo.towns["2"].yearFounded;
    document.getElementById('pMotto').innerHTML = townInfo.towns["2"].motto;
    document.getElementById('pRain').innerHTML = townInfo.towns["2"].averageRainfall;
    document.getElementById('pE1').innerHTML = townInfo.towns["2"].events["0"];
    document.getElementById('pE2').innerHTML = townInfo.towns["2"].events["1"];

    document.getElementById('sPop').innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById('sFound').innerHTML = townInfo.towns["3"].yearFounded;
    document.getElementById('sMotto').innerHTML = townInfo.towns["3"].motto;
    document.getElementById('sRain').innerHTML = townInfo.towns["3"].averageRainfall;
    document.getElementById('sE1').innerHTML = townInfo.towns["3"].events["0"];
    document.getElementById('sE2').innerHTML = townInfo.towns["3"].events["1"];
    document.getElementById('sE3').innerHTML = townInfo.towns["3"].events["2"];

}; // End of onload