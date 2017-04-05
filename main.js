var mapOptions = {
  center: new google.maps.LatLng(29.9792, 31.1342),
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
  position: new google.maps.LatLng(29.9792, 31.1342)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);
