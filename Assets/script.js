$(document).ready(function () {
  // STARTING DATA ================
  //   var submitButton = $("#submitWeather");
  // API Key for string
  //   var APIKey = "feaada4b2efe0257a0c1c4eed38596f1";

  $("#submitWeather").click(function () {
    console.log("check button");
    var city = $("#city").val();
    if (city != "") {
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial" +
          "&APPID=feaada4b2efe0257a0c1c4eed38596f1",
        type: "GET",
        dateType: "jsonp",
        success: function (data) {
          console.log(data);
        },
      });
    } else {
      $("error").html("Field cannot be empty ");
    }
  });
});

// // AJAX Call
// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function (response) {

//   HELPER FUNCTIONS ==================

// We have a website featuring weather
// user types in search form for city
//  click "search" button

// $(document).on("click", ".saveBtn", function () {
// event.preventDefault();
// console.log("im here");
// var city = $(this).attr("data-person");
// var queryURL =
//     "api.openweathermap.org/data/2.5/weather?q=Boston&appid=" +
//     APIKey +
//     "&units=imperial";

// });

// search function is run through API
// site displays weather conditions from API
// Main section = current weather conditions
// SubSection = future conditions
// Left column is populated with search history

// Main section display:
// Row1: city name, date, icon representing weather considetion
// temparture
// humidity
// wind speed
// UV index: featuring: color that indicates conditions favorable, moderate, or severe

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
// user sees last searched city forecast
