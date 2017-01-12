//forecast
var forecast = new XMLHttpRequest();
forecast.open("GET", "http://api.wunderground.com/api/<your api-key>/forecast/lang:<language code>/q/<country>/<city>.json", false);
forecast.send(null);

var r = JSON.parse(forecast.response);
var forecast_str = r.forecast.txt_forecast.forecastday[2].fcttext_metric; //change to .fcttext for fahrenheit
var temp_high = r.forecast.simpleforecast.forecastday[1].high.celsius; //change to .fahrenheit for fahrenheit
var temp_low = r.forecast.simpleforecast.forecastday[1].low.celsius; //change to .fahrenheit for fahrenheit
var icon_f;
var icons_f = r.forecast.txt_forecast.forecastday[2].icon;
switch (icons_f) {
    case "clear":
        icon_f = "wi wi-day-sunny";
        break;
    case "cloudy":
        icon_f = "wi wi-day-cloudy";
        break;
    case "flurries":
        icon_f = "wi wi-day-sleet";
        break;
    case "fog":
        icon_f = "wi wi-day-fog";
        break;
    case "hazy":
        icon_f = "wi wi-day-haze";
        break;
    case "mostlycloudy":
        icon_f = "wi wi-day-cloudy";
        break;
    case "mostlysunny":
        icon_f = "wi wi-day-sunny-overcast";
        break;
    case "sleet":
        icon_f = "wi wi-day-sleet";
        break;
    case "rain":
        icon_f = "wi wi-day-showers";
        break;
    case "snow":
        icon_f = "wi wi-day-snow";
        break;
    case "sunny":
        icon_f = "wi wi-day-sunny";
        break;
    case "tstorms":
        icon_f = "wi wi-day-thunderstorm";
        break;
    case "unknown":
        icon_f = "wi wi-day-thunderstorm";
        break;
    case "partlycloudy":
        icon_f = "wi wi-day-cloudy";
        break;
    case "nt_clear":
        icon_f = "wi wi-stars";
        break;
    case "nt_cloudy":
        icon_f = "wi wi-night-alt-cloudy";
        break;
    case "nt_flurries":
        icon_f = "wi wi-night-alt-sleet";
        break;
    case "nt_fog":
        icon_f = "wi wi-night-fog";
        break;
    case "nt_hazy":
        icon_f = "wi wi-night-haze";
        break;
    case "nt_mostlycloudy":
        icon_f = "wi wi-night-cloudy";
        break;
    case "nt_mostlysunny":
        icon_f = "wi wi-night-sunny-overcast";
        break;
    case "nt_sleet":
        icon_f = "wi wi-night-sleet";
        break;
    case "nt_rain":
        icon_f = "wi wi-night-showers";
        break;
    case "nt_snow":
        icon_f = "wi wi-night-snow";
        break;
    case "nt_sunny":
        icon_f = "wi wi-night-sunny";
        break;
    case "nt_tstorms":
        icon_f = "wi wi-night-thunderstorm";
        break;
    case "nt_unknown":
        icon_f = "wi wi-night-thunderstorm";
        break;
    case "nt_partlycloudy":
        icon_f = "wi wi-night-cloudy";
        break;
}

document.getElementById("icon_f").className = icon_f;
document.getElementById("forecast_str").innerHTML = forecast_str;
document.getElementById("temp_high").innerHTML = temp_high;
document.getElementById("temp_low").innerHTML = temp_low;
