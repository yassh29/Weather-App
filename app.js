let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let namee = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");
let country = document.querySelector(".country");
let pressure = document.querySelector(".pressure");
let humidity = document.querySelector(".humidity");
let minTemp = document.querySelector(".minTemp");
let maxTemp = document.querySelector(".maxTemp");
// let body = document.getElementById("bd");
// var colors = [
// 	"#C39BD3, #C39BD3",
// 	"#D0ECE7",
// 	"#F9E79F",
// 	"#D7DBDD",
// 	"#229954",
// 	"#5DADE2",
// 	"#FADBD8",
// ];

button.addEventListener("click", function () {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			inputValue.value +
			"&appid=58cc21fc10611b5d581359d395953cbb"
	)
		.then((response) => response.json())
		.then((data) => {
			let nameValue = data["name"];
			let tempValue = data["main"]["temp"];
			let temperatue = parseFloat(tempValue - 273.15).toFixed(2);
			let descValue = data["weather"][0]["description"];
			let countryValue = data["sys"]["country"];
			// let pressureValue = data["main"]["pressure"];
			let humidValue = data["main"]["humidity"];
			let minTempV = data["main"]["temp_min"];
			let minTemperature = parseFloat(minTempV - 273.15).toFixed(2);
			let maxTempV = data["main"]["temp_max"];
			let maxTemperature = parseFloat(maxTempV - 273.15).toFixed(2);
			console.log(data);

			namee.innerHTML = "Location: " + nameValue;
			pressure.textContent = "Pressure: " + data["main"]["pressure"] + " hpa";
			desc.innerHTML = "Clouds: " + descValue;
			country.innerHTML = "Country code: " + countryValue;
			humidity.innerHTML = "Humidity: " + humidValue + "%";
			temp.innerHTML = "Temperature: " + temperatue + "°C";
			minTemp.innerHTML = "Min Temperature: " + minTemperature + "°C";
			maxTemp.innerHTML = "Max Temperature: " + maxTemperature + "°C";
			document.body.style.backgroundImage =
				"url('https://source.unsplash.com/1600x900/?" + nameValue + "')";
			console.log(nameValue);
		})

		.catch((err) => alert("Invalid city name"));
});

// var i = 0;
// button.addEventListener("click", function () {
// 	// i = 1 < colors.length ? ++i : 0;
// 	// body.style.background = colors[i];
// 	document.body.style.backgroundImage =
// 		"url('https://source.unsplash.com/1600x900/?" + namee + "')";
// });
