var townObject = new XMLHttpRequest();

townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);

townObject.send();

townObject.onload = function () {

    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('fPop').innerHTML = townInfo.towns["0"].currentPopulation;
    document.getElementById('fFound').innerHTML = townInfo.towns["0"].yearFounded;

    document.getElementById('gPop').innerHTML = townInfo.towns["1"].currentPopulation;
    document.getElementById('gFound').innerHTML = townInfo.towns["1"].yearFounded;

    document.getElementById('sPop').innerHTML = townInfo.towns["3"].currentPopulation;
    document.getElementById('sFound').innerHTML = townInfo.towns["3"].yearFounded;

}; // End of onload