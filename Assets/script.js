// STARTING DATA ================
var cityName;

// USER INTERACTION

$("#submitWeather").on("click", function () {
  event.preventDefault();
  cityName = $("#city").val();
  console.log(cityName);
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
    "http://api.openweathermap.org/data/2.5/weather?q=" +
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
    var iconURl = "http://openweathermap.org/img/wn/" + weathIcon + "@2x.png";
    $("#weathIcon").attr("src", iconURl, (alt = "weather icon"));
    // create temperature var
    var temperture = response.main.temp;
    // console log
    console.log(temperture);
    // place data
    $("#temp").text(temperture);
    // create humidity var
    var humidity = response.main.humidity;
    // console log
    console.log(humidity);
    // place data
    $("#humid").text(humidity);
    // create wind index var
    var windSpeed = response.wind.speed;
    // console log
    console.log(windSpeed);
    // place data
    $("#wind-speed").text(windSpeed);

    // create UV index var with NEW URL, SAME KEY
    var queryUvURL =
      "http://api.openweathermap.org/data/2.5/uvi?appid=" +
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
  });
}

//   var submitButton = $("#submitWeather");
// API Key for string
//   var APIKey = "feaada4b2efe0257a0c1c4eed38596f1";

//   USER INTERACTION

//   user enters city name
// user hits "submit"

// UPDATE DISPLAY

// Main section = current weather conditions
// function show(data){
//     return "$(."display-4") "
// }

// Main section display:
// Row1: city name, date, icon representing weather considetion
// temparture
// humidity
// wind speed
// UV index: featuring: color that indicates conditions favorable, moderate, or severe

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
