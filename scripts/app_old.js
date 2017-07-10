// define globals


let quakeEndpoint = "https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time"

$(document).ready(function() {
  console.log("JS Loaded");
  // CODE IN HERE!


  $.ajax({
    method: 'GET',
    url: 'quakeEndpoint',
    dataType: 'json',
    success: onSuccess
  });

});
/*// Inputs Lat Long Coordinates in Map. ------------------------------------------
function initMap() {
    var uluru = {lat: 37.676, lng: -122.092};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    //Adds the marker
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
*/

//

}

  function onSuccess(qData) {
    console.log(qData);
}
    qData.features.forEach(function(itemName) {
      $("#info").append(`<p>${itemName.properties.title}</p>`)
    });
}
