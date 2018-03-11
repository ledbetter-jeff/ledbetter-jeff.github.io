
var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'scripts/franklinMN.json';

/*
var requestURL = 'http://api.wunderground.com/api/a4a4356fb4e85dd7/conditions/q/MN/Franklin.json';
*/
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
    var weatherDataText = request.response;
    var weatherData = JSON.parse(weatherDataText);
    showTownData(weatherData);
}
function showTownData(jsonObj) {
    var towns = jsonObj['members'];
    for(var i = 0; i < 4; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        myH2.textContent = towns[i].display_location.full;
        myPara1.textContent = 'Current temp: ' + towns[i].current_observation.temp_f;
        myPara2.textContent = 'Wind: ' + towns[i].current_observation.wind_string;
        myPara3.textContent = 'Feel like: ' + towns[i].current_observation.feelslike_string;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        section.appendChild(myArticle);
    }
}