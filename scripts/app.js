


$(document).ready( function(){
  console.log("JS is Loaded!");
  // CODE IN HERE!

  $.ajax({
      method: 'GET',
      url: 'https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time',
      dataType: 'json',
      success: onSuccess
    });
});

//this function makes the data received into var qData and prints in console.
  function onSuccess(qData) {
    console.log(qData);
//this code says,
    qData.features.forEach( function(itemName){$("#info").append(`<p>${itemName.properties.title}</p>`)});
}
//outside doc ready function

//this function makes the 
function initMap() {
   var uluru = {lat: 37.6761097, lng: -122.092192};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 7,
     center: uluru
   });
   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });
 }
