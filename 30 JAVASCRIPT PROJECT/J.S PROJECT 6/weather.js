document.getElementById("getBtn").addEventListener("click", function () {
    let city = document.getElementById("city").value;
    let apiKey = "0bdb7055ded80cd80c9a240370a74ce5";
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          document.getElementById("weatherInfo").innerHTML = "City not found!";
        } else {
          let temp = data.main.temp;
          let weather = data.weather[0].main;
          document.getElementById("weatherInfo").innerHTML =
            `Temperature in ${data.name}: ${temp}°C <br> Weather: ${weather}`;
        }
      })
      .catch(error => {
        document.getElementById("weatherInfo").innerHTML = "Error fetching data.";
      });
  });
  