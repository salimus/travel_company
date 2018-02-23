
let apiKey = 'ff9d9fbe053d0e1c5b73a19097465ab4';

let cities = ['London', 'Paris', 'Rome', 'Madrid', 'Berlin', 'Amsterdam', 'Tokyo', 'Stockholm'];

// let tag = document.getElementsByClassName('card-img-top');

// let text = document.getElementById('text');

// function getCity() {
// 	let city = '';
// 	for (let i = 0; i < tag.length; i++) {
// 	tag[i].addEventListener('mouseover', function() {
// 		let alt = this.alt;
// 		text.textContent = alt;
// 	});

// 	tag[i].addEventListener('mouseleave', function() {
// 		text.textContent = '';
// 	});
// 	}
// }


// let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid='+apiKey;

// API call for London
let apiCallLondon = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[0]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallLondon, weatherCallbackL);

function weatherCallbackL(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponseLondon').append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
	// console.log(weatherData);
}

// API call for Paris
let apiCallParis = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[1]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallParis, weatherCallbackP);

function weatherCallbackP(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponseParis').append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Rome
let apiCallRome = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[2]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallRome, weatherCallbackR);

function weatherCallbackR(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponseRome').append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Madrid
let apiCallMadrid = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[3]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallMadrid, weatherCallbackM);

function weatherCallbackM(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponseMadrid').append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Berlin
let apiCallBerlin = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[4]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallBerlin, weatherCallbackB);

function weatherCallbackB(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponseBerlin').append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Amsterdam
let apiCallAmsterdam = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[5]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallAmsterdam, weatherCallbackA);

function weatherCallbackA(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponse'+cities[5]).append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Tokyo
let apiCallTokyo = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[6]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallTokyo, weatherCallbackT);

function weatherCallbackT(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponse'+cities[6]).append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}

// API call for Stockholm
let apiCallStockholm = 'http://api.openweathermap.org/data/2.5/weather?q='+cities[7]+'&units=imperial&appid='+apiKey;

$.getJSON(apiCallStockholm, weatherCallbackS);

function weatherCallbackS(weatherData) {
	let cityName = weatherData.name;
	let country = weatherData.sys.country;
	let description = weatherData.weather[0].description;
	let temp = weatherData.main.temp;
	let fTemp = temp.toFixed();
	let icon = '\u2109';

	function capitalize(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	$('.weatherResponse'+cities[7]).append('The weather in ' + cityName + ' ' + country + ' is currently ' + fTemp + icon + ' ' + capitalize(description));
}











































































































