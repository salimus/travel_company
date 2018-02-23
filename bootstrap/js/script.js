
let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=ff9d9fbe053d0e1c5b73a19097465ab4';

let apiKey = 'ff9d9fbe053d0e1c5b73a19097465ab4';

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	
	$('.weatherResponse').append('The weather in ' + cityName + ' ' + country + ' is currently ' + description);
}

// function weatherCallback(weatherData) {
// 	console.log(weatherData);
// }