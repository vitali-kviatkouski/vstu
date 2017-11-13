
function initMap() {
    var current = {lat: 55.1769918, lng: 30.2252382};
    var markers = [];
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: current
    });
    map.addListener('click', function(e) {
        $.post( 'http://localhost:8080/points?lat=' + e.latLng.lat() + '&lng=' + e.latLng.lng());        
        var marker = new google.maps.Marker({
          position: e.latLng,
          map: map
        });
        map.panTo(e.latLng);
        markers.push(marker);
    });
    $.get("http://localhost:8080/points", function(data) {
        $.each(data, function(idx, value) {
            var marker = new google.maps.Marker({
                position: value,
                map: map
            });
            markers.push(marker);
        });
    });
    $("#clear").click(function() {
        $.each(markers, function(idx, value) {
            value.setMap(null);
        });
    });
}
