function initMap() {
  const map = new google.maps.Map(
    document.getElementById('map'),
    { zoom: 1,
      center: { lat: 52.37403, lng: 4.88969 }
    })

  var icons = {
    beer: {
      icon: './beer-pin.00e7e96a.png'
    }
  }

  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.22630),
      type: 'beer'
    }, {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: 'beer'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}

initMap()
