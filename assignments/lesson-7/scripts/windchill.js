
function doWC() {
    var windchill = windChill();

    document.getElementById('windchill').innerHTML = "<strong>Wind Chill:</strong> " + windchill + "&deg;F";
}
function windChill() {
    var t = (90 + 66) / 2;
    var s = 5;
    var sPow = Math.pow(s, .16);

    var fWC = (35.74 + (0.6215 * t) - (35.75 * sPow) + (0.4275 * t * sPow)).toFixed(0);

    return fWC;
}













