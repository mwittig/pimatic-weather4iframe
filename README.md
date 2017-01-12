# pimatic-weather4iframe
Little Website to visualize the current weather and forecast. Specially designed for the pimatic iframe plugin. To use this little website, you need a wunderground account and a api key (see [https://www.wunderground.com/weather/api/](https://www.wunderground.com/weather/api/) to get yours).
## Installation
Either use a webserver on your Raspberry Pi or upload the files to your personal webspace.
## Usage
The first thing you have to do, is to edit the weather.js and the forecast.js file. In line 3 you can find the url, which is used to get the current conditions and the weather forecast. You have to edit the sections:
- `<your api-key>`
- `<language code>`
- `<country>`
- `<city>`

For the language codes have a look at [https://www.wunderground.com/weather/api/d/docs?d=language-support](https://www.wunderground.com/weather/api/d/docs?d=language-support).

To change the units from Celcius to Fahrenheit, you have to edit the following code:

In weather.js:
- line 8 from `var temp = r.current_observation.temp_c;`to `var temp = r.current_observation.temp_f;`

In forecast.js:
- line 7 from `var forecast_str = r.forecast.txt_forecast.forecastday[2].fcttext_metric;` to `var forecast_str = r.forecast.txt_forecast.forecastday[2].fcttext;`
- line 8 from `var temp_high = r.forecast.simpleforecast.forecastday[1].high.celsius` to `var temp_high = r.forecast.simpleforecast.forecastday[1].high.fahrenheit`
- line 9 from `var temp_low = r.forecast.simpleforecast.forecastday[1].low.celsius;` to `var temp_low = r.forecast.simpleforecast.forecastday[1].low.fahrenheit;`.

In index.html:
- line 30, 50 and 52 edit the text `&deg;C`


**Note:** The css is optimized for the mobile-frontend. Feel free to change the code.

## Special thanks
Thanks to the guys from @pimatic/pimatic for the great work and @Oitzu/pimatic-iframe for the pimatic-iframe plugin!
