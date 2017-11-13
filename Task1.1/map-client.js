
function initMap() {
    var current = {lat: 55.1769918, lng: 30.2252382};
    // Task 1.1.
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: current
    });
}
