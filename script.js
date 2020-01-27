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
        console.log(response.list[5].main.temp);
        var results = response.list;
        var resultsArray = [(results[5].main), (results[13].main), (results[21].main), (results[29].main), (results[37].main)]
        
        forecastTemp(resultsArray);
        forecastHumid(resultsArray);
      })

      $("#jumbo-city").text(givenCity + " " + moment().format('L'));
      $("#date1").text(moment().add(1, 'days').format('L'));
      $("#date2").text(moment().add(2, 'days').format('L'));
      $("#date3").text(moment().add(3, 'days').format('L'));
      $("#date4").text(moment().add(4, 'days').format('L'));
      $("#date5").text(moment().add(5, 'days').format('L'));
   
});

var tempIdArray = [$("#temp1"), $("#temp2"), $("#temp3"), $("#temp4"), $("#temp5")]
var humidIdArray = [$("#humid1"), $("#humid2"), $("#humid3"), $("#humid4"), $("#humid5"),]

function forecastTemp (arr) {

        for(var i = 0; i < arr.length; i++){
            tempIdArray[i].text(arr[i].temp)
        }

    }

function forecastHumid (arr) {
    
    for (var i = 0; i < arr.length; i++) {
        humidIdArray[i].text(arr[i].humidity);
    }
}    


});
