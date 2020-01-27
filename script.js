$(document).ready(function(){

m = moment().format('L')

console.log("minneapolis");
$(".btn").on("click", function(){
    console.log("minneapolis");
    var givenCity = $("#city-input").val();
    console.log(givenCity)

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + givenCity + ",us&units=imperial&mode=json&appid=e9d14d7bd92938f37390ec154c374984"


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        console.log(response)
        $("#jumbo-temp").text("Temp: " + JSON.stringify(response.main.temp))
        $("#jumbo-humid").text("Humidity: " + JSON.stringify(response.main.humidity))
        $("#jumbo-wind").text("Wind Speed: " + JSON.stringify(response.wind.speed))
        
      })

      $("#jumbo-city").text(givenCity + " " + m);

   
});




});
