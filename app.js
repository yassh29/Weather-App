let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")
let namee = document.querySelector(".name")
let desc = document.querySelector(".desc")
let temp = document.querySelector(".temp")

button.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +
        '&appid=58cc21fc10611b5d581359d395953cbb')
    .then(response => response.json())
        .then(data => {
            let nameValue = data["name"];
            let tempValue = data["main"]["temp"];
            let temperatue = parseFloat(tempValue - 273.15).toFixed(2)
            let descValue = data["weather"][0]["description"];
            console.log(data);

            namee.innerHTML = nameValue;
            temp.innerHTML = temperatue + "°C";
            desc.innerHTML = descValue; 
    })

        
    .catch(err => alert("Invalid city name"))
})


