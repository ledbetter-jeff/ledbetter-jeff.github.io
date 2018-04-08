
var pricingDataObject = new XMLHttpRequest();

pricingDataObject.open('GET','scripts/data.json ',true);

pricingDataObject.send();

pricingDataObject.onload = function () {

    var pricingDataInfo = JSON.parse(pricingDataObject.responseText);
    console.log(pricingDataInfo);

    document.getElementById('bfPrice').innerHTML = pricingDataInfo.Services["0"].Price;
    document.getElementById('ftPrice').innerHTML = pricingDataInfo.Services["1"].Price;
    document.getElementById('tuPrice').innerHTML = pricingDataInfo.Services["2"].Price;
    document.getElementById('ohPrice').innerHTML = pricingDataInfo.Services["3"].Price;
}; // End of onload



