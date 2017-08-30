$(function(){

/*setup*/
var map
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(48.85231258484184, 2.3345088958740234),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

/*put marker with message*/
$("#LatLng").on("submit", function(event) {
  var lat = $("input[name=lat]").val();
  var lng = $("input[name=lng]").val();
  var msg = $("input[name=msg]").val();
  
  var coordinate = new google.maps.LatLng(lat, lng);
  
  var marker=new google.maps.Marker({
    position: coordinate,
    animation: google.maps.Animation.DROP
  })
  marker.setMap(map)

  var infoWindow = new google.maps.InfoWindow({
    content: '<div class="infoWindow">' + msg + '</div>'
  });
  
  infoWindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function(){ infoWindow.open(map,marker); });

  return false
});

});