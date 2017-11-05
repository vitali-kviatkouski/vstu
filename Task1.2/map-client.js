
function initMap() {
    var current = {lat: 55.1776271, lng: 30.2252502};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: current
    });
    map.addListener('click', function(e) {
        var marker = new google.maps.Marker({
          position: e.latLng,
          map: map
        });
        map.panTo(e.latLng);
    });
}
