//current weather
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/<your api-key>/conditions/lang:<language code>/q/<country>/<city>.json", false);
weather.send(null);

var r = JSON.parse(weather.response);
var weather_str = r.current_observation.weather;
var temp = r.current_observation.temp_c; //change to .temp_f for fahrenheit
var hum = r.current_observation.relative_humidity;
var icon;
var icons = r.current_observation.icon;
switch (icons) {
    case "clear":
        icon = "wi wi-day-sunny";
        break;
    case "cloudy":
        icon = "wi wi-day-cloudy";
        break;
    case "flurries":
        icon = "wi wi-day-sleet";
        break;
    case "fog":
        icon = "wi wi-day-fog";
        break;
    case "hazy":
        icon = "wi wi-day-haze";
        break;
    case "mostlycloudy":
        icon = "wi wi-day-cloudy";
        break;
    case "mostlysunny":
        icon = "wi wi-day-sunny-overcast";
        break;
    case "sleet":
        icon = "wi wi-day-sleet";
        break;
    case "rain":
        icon = "wi wi-day-showers";
        break;
    case "snow":
        icon = "wi wi-day-snow";
        break;
    case "sunny":
        icon = "wi wi-day-sunny";
        break;
    case "tstorms":
        icon = "wi wi-day-thunderstorm";
        break;
    case "unknown":
        icon = "wi wi-day-thunderstorm";
        break;
    case "partlycloudy":
        icon = "wi wi-day-cloudy";
        break;
    case "nt_clear":
        icon = "wi wi-stars";
        break;
    case "nt_cloudy":
        icon = "wi wi-night-alt-cloudy";
        break;
    case "nt_flurries":
        icon = "wi wi-night-alt-sleet";
        break;
    case "nt_fog":
        icon = "wi wi-night-fog";
        break;
    case "nt_hazy":
        icon = "wi wi-night-haze";
        break;
    case "nt_mostlycloudy":
        icon = "wi wi-night-cloudy";
        break;
    case "nt_mostlysunny":
        icon = "wi wi-night-sunny-overcast";
        break;
    case "nt_sleet":
        icon = "wi wi-night-sleet";
        break;
    case "nt_rain":
        icon = "wi wi-night-showers";
        break;
    case "nt_snow":
        icon = "wi wi-night-snow";
        break;
    case "nt_sunny":
        icon = "wi wi-night-sunny";
        break;
    case "nt_tstorms":
        icon = "wi wi-night-thunderstorm";
        break;
    case "nt_unknown":
        icon = "wi wi-night-thunderstorm";
        break;
    case "nt_partlycloudy":
        icon = "wi wi-night-cloudy";
        break;
}

document.getElementById("icon").className = icon;
document.getElementById("weather_str").innerHTML = weather_str;
document.getElementById("temp").innerHTML = temp;
document.getElementById("hum").innerHTML = hum;
