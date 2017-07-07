// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!


});


$.ajax({
method: 'GET',
url: 'https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time',
dataType: 'json',
success: onSuccess
});


  function onSuccess(qData) {
    console.log(qData);


//var quakeList = responseData;

//var dataTitle =

//for

qData.data.forEach(function(v,i) {
  $(".eqList").append($(`
    <li>v.data[2].properties.title</li>
    `));
})
}
