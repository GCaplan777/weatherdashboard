// STARTING DATA ================
var cityName;

$("#submitWeather").on("click", function () {
  event.preventDefault();
  cityName = $("#city").val();
  console.log(cityName);
  currentWeather();
});

function currentWeather() {
  $("#cityDisplay").text(cityName);
  var date = moment().format("MMM Do YY");
  console.log(date);
  $("#currentDate").text(date);
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var weathIcon = response.weather[0].icon;
    console.log(weathIcon);
    var iconURl = "http://openweathermap.org/img/wn/" + weathIcon + "@2x.png";
    $("#weathIcon").attr("src", iconURl, (alt = "weather icon"));
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
