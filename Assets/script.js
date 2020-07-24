// STARTING DATA ================
var cityName;
var cityArray = [];

storageCall();
// USER INTERACTION
function storageCall() {
  $(".saved-search").empty();
  var storage = JSON.parse(localStorage.getItem("cities"));
  if (storage !== null) {
    cityArray = storage;
  }

  cityArray.forEach((city) => {
    var newButton = $(`<button type="button"> ${city}</button>`);
    $(".saved-search").append(newButton);
  });
}

$("#submitWeather").on("click", function () {
  event.preventDefault();
  cityName = $("#city").val();
  console.log(cityName);
  // pushing city name into Array for local storage
  cityArray.push(cityName);

  localStorage.setItem("cities", JSON.stringify(cityArray));
  storageCall();
  currentWeather();
});

function currentWeather() {
  // selecting cityDisplay to update text
  $("#cityDisplay").text(cityName);
  // creating Date with moment method
  var date = moment().format("MMM Do YY");
  // console log
  console.log(date);
  // updating display with DATE
  $("#currentDate").text(date);
  // creating var to setup Ajax
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKey +
    "&units=imperial";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // create weather icon var
    var weathIcon = response.weather[0].icon;
    // console log
    console.log(weathIcon);
    // update display with icon
    var iconURl = "https://openweathermap.org/img/wn/" + weathIcon + "@2x.png";
    $("#weathIcon").attr("src", iconURl, (alt = "weather icon"));
    // create temperature var
    var temperture = response.main.temp;
    // console log
    console.log(temperture);
    // place data
    $("#temp").text("Temperature " + temperture + "°F");
    // create humidity var
    var humidity = response.main.humidity;
    // console log
    console.log(humidity);
    // place data
    $("#humid").text("Humidity " + humidity + "%");
    // create wind index var
    var windSpeed = response.wind.speed;
    // console log
    console.log(windSpeed);
    // place data
    $("#wind-speed").text("Wind Index " + windSpeed + "MPH");

    // create UV index var with NEW URL, SAME KEY
    var queryUvURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=" +
      APIKey +
      "&lat=" +
      response.coord.lat +
      "&lon=" +
      response.coord.lon;
    $.ajax({
      url: queryUvURL,
      method: "GET",
    }).then(function (response) {
      // console log
      console.log(response);
      // place data
      $("#uv").text(response.value);
    });

    var query5DayURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=" +
      APIKey +
      "&units=imperial";
    $.ajax({
      url: query5DayURL,
      method: "GET",
    }).then(function (response) {
      // console log
      console.log(response);
      // place data
      let j = 0;
      for (let i = 0; i < 40; i += 8) {
        const forecast = response.list[i];
        // create var for date
        var dateForecast =
          forecast.dt_txt[5] +
          forecast.dt_txt[6] +
          forecast.dt_txt[7] +
          forecast.dt_txt[8] +
          forecast.dt_txt[9];
        // updated display with date
        $("#5ddate" + j).text(dateForecast);
        console.log(dateForecast);
        //  create var for icon
        var iconForecast = forecast.weather[0].icon;
        // update display with icon
        var iconURl =
          "https://openweathermap.org/img/wn/" + iconForecast + "@2x.png";
        $("#5dicon" + j).attr("src", iconURl, (alt = "weather icon"));
        console.log(iconForecast);
        //  create var for temp
        var dateTemp = forecast.main.temp;
        console.log(dateTemp);
        // updated display with temp
        $("#5dtemp" + j).text("Temp " + dateTemp + "°F");
        //  create var for humidity
        var dateHumid = forecast.main.humidity;
        console.log(dateHumid);
        // updated display with humidity
        $("#5dhumid" + j).text("Humidity " + dateHumid + "%");
        j++;
      }
    });
  });
}

// SubSection = future conditions
// Left column is populated with search history

// Subsection displays 5 columns each with
// date
// 5-day forecast
// an icon representation of weather conditions,
// the temperature
// the humidity

// City name will be stored in left-hand column with it's DATA.
// WHEN user clicks on a city in the search history
// User is again presented with DATA for that city (could be updated if later in day and user is still in the same browser?)

// If the user closes and opens the weather dashboard,
// user sees last searched city
