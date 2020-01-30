$(document).ready(function(){

    m = moment().format('L')
    
    
    $(".btn").on("click", function(){
        var givenCity = $("#city-input").val();
        firstAjax(givenCity)
        secondAjax(givenCity)
        cardFiller()     
        cityList(givenCity)
    });

    $(document).on("click", "#rewind", function (){
        console.log("works");
        var newCity = $(this).text();
        firstAjax(newCity);
        secondAjax(newCity)
        cardFiller()
    })

    //Arrays and functions for creating the 5 day forecast
    
    var tempIdArray = [$("#temp1"), $("#temp2"), $("#temp3"), $("#temp4"), $("#temp5")]
    var humidIdArray = [$("#humid1"), $("#humid2"), $("#humid3"), $("#humid4"), $("#humid5")]
    var emojiIDArray = [$("#emoji1"), $("#emoji2"), $("#emoji3"), $("#emoji4"), $("#emoji5")]
  
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
    
    function forecastEmoji (arr) {
        for(var i = 0; i < arr.length; i++){
            if(arr[i].main === "Clouds" || arr[i.main === "Mist"]){
                emojiIDArray[i].text("☁️");
            }
            else if(arr[i].main === "Clear"){
                emojiIDArray[i].text("☀️");
            }
            else if(arr[i].main === "Rain"){
                emojiIDArray[i].text("☔")
            }
            else if(arr[i].main === "Snow"){
                emojiIDArray[i].text("❄️")
            }
        }
    }

    function weatherEmoji (res) {
        var jumboEmoji = "";
        
        switch (res){
         case "Clouds":
         case "Mist":
            jumboEmoji = ("☁️");
         break;
        case "Clear":
            jumboEmoji = ("☀️");
        break;
        case "Rain":
            jumboEmoji = ("☔");
        case "Snow":
            jumboEmoji = ("❄️");
        break;
        }
    
        return jumboEmoji;
    }
    
    function cityList (str) {
        var prevCity = $("<li>").text(str);
        prevCity.attr("type", "button")
        prevCity.attr("class", "list-group-item list-group-item-action")
        prevCity.attr("id", "rewind")
    
        $(".list-group").prepend(prevCity);
    }

    function firstAjax (str) {
        
        var dailyURL = "https://api.openweathermap.org/data/2.5/weather?q=" + str + ",us&units=imperial&mode=json&appid=e9d14d7bd92938f37390ec154c374984"
          
        $.ajax({
        url: dailyURL,
        method: "GET"
      }).then(function(response){

        $("#jumbo-temp").text("Temp: " + JSON.stringify(response.main.temp))
        $("#jumbo-humid").text("Humidity: " + JSON.stringify(response.main.humidity))
        $("#jumbo-wind").text("Wind Speed: " + JSON.stringify(response.wind.speed))

        var resultEmoji = response.weather[0].main;
        $("#jumbo-city").text(str + " " + moment().format('L') + " " + weatherEmoji(resultEmoji));

        
        
        
      })
   }

   function secondAjax (str) {
    
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + str + ",us&units=imperial&mode=json&appid=e9d14d7bd92938f37390ec154c374984"
    $.ajax({
        url: fiveDayURL,
        method: "GET"
      }).then(function(response){
       
        var results = response.list;
        var resultsArray = [(results[5].main), (results[13].main), (results[21].main), (results[29].main), (results[37].main)]
        var resultsWeatherArray = [(results[5].weather[0]), (results[13].weather[0]), (results[21].weather[0]), (results[29].weather[0]), (results[37].weather[0])]

        forecastTemp(resultsArray);
        forecastHumid(resultsArray);
        forecastEmoji(resultsWeatherArray)
      })
   }
    

   function cardFiller () {
    $("#date1").text(moment().add(1, 'days').format('L'));
    $("#date2").text(moment().add(2, 'days').format('L'));
    $("#date3").text(moment().add(3, 'days').format('L'));
    $("#date4").text(moment().add(4, 'days').format('L'));
    $("#date5").text(moment().add(5, 'days').format('L'));
   }

})

    

   
