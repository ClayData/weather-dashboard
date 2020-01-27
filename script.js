$(document).ready(function(){
console.log("minneapolis");
$(".btn").on("click", function(){
    console.log("minneapolis");
    var givenCity = $("#city-input").val();
    console.log(givenCity)

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + givenCity + ",us&mode=json&appid=e9d14d7bd92938f37390ec154c374984"


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        console.log(response)

      })

   
});
});
