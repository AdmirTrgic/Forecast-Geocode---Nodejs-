const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=634ed640d5200659ef8bc4239d19aa07&query=' +
		latitude +
		',' +
		longitude +
		'&units=m';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (body.error) {
			callback('Unable to find location!', undefined);
		} else {
			callback(
				undefined,
				`Name: ${body.location.name}, Temperature: ${body.current.temperature}, Feelslike: ${body.current.feelslike}, WindSpeed: ${body.current.windspeed}, Local time: ${body.location.localtime}`
			);
		}
	});
};

module.exports = forecast;
