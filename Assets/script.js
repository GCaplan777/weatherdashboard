$(document).ready(function () {
  // STARTING DATA ================
  //   var submitButton = $("#submitWeather");
  // API Key for string
  //   var APIKey = "feaada4b2efe0257a0c1c4eed38596f1";

  //   USER INTERACTION

  //   user enters city name
  // user hits "submit"

  $("#submitWeather").click(function () {
    console.log("check button");
    // i may not need b/c its button not form, but event.preventDefault
    event.preventDefault();
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
          var widget = show(data);
          $("#show").html(widget);
          console.log("show");
          $("#city").val("");
        },
      });
    } else {
      $("error").html("Field cannot be empty ");
    }
  });
});
function show(data) {
  return (
    "<h3>Weather</h3>: " + data.weather[0].main + "</h3" >
    +"<h3>Description</h3>: " +
      data.weather[0].description + 
      "</h3>" +
      "<h3>Temperature</h3>: " +
      data.main.temp +
      "</h3>"
  );
}

// $("#cityName").html(response.main.temp);
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
// user sees last searched city forecast
