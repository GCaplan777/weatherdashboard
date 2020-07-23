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
      // style conditions favorable, moderate, or severe
      // if ($("#uv")<= 2) {
      //   style = "background-color": "green"})
      // }else if ($("#uv") > 2 && < 6) {
      //   style = $("#uv").css({"background-color": "yellow"});
      // } else {
      //   style = "background-color": "green"})
      // }
    });
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
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
      for (let i = 0; i < 5; i += 8) {
        const forecast = response.list[i];
        var dateForecast = response.list.dt_txt;
        var iconForecast = response.list.weather[0].icon;
        // update display with icon
        var iconURl =
          "http://openweathermap.org/img/wn/" + weathIcon + "@2x.png";
        $("#weathIcon").attr("src", iconURl, (alt = "weather icon"));
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
