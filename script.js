$(document).ready(function(){

m = moment().format('L')

console.log("minneapolis");
$(".btn").on("click", function(){
    console.log("minneapolis");
    var givenCity = $("#city-input").val();
    console.log(givenCity)

    var dailyURL = "https://api.openweathermap.org/data/2.5/weather?q=" + givenCity + ",us&units=imperial&mode=json&appid=e9d14d7bd92938f37390ec154c374984"
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + givenCity + ",us&units=imperial&mode=json&appid=e9d14d7bd92938f37390ec154c374984"

    $.ajax({
        url: dailyURL,
        method: "GET"
      }).then(function(response){

        console.log(response)
        $("#jumbo-temp").text("Temp: " + JSON.stringify(response.main.temp))
        $("#jumbo-humid").text("Humidity: " + JSON.stringify(response.main.humidity))
        $("#jumbo-wind").text("Wind Speed: " + JSON.stringify(response.wind.speed))
        
      })


    $.ajax({
        url: fiveDayURL,
        method: "GET"
      }).then(function(response){
        console.log(response);

      })

      $("#jumbo-city").text(givenCity + " " + m);
      $("#date1").text(moment().add(1, 'days').format('L'));
      $("#date2").text(moment().add(2, 'days').format('L'));
      $("#date3").text(moment().add(3, 'days').format('L'));
      $("#date4").text(moment().add(4, 'days').format('L'));
      $("#date5").text(moment().add(5, 'days').format('L'));
   
});




});
