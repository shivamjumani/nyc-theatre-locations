// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFtOTk3IiwiYSI6ImNqdWQ5ZDBicDB3bmE0ZHJ2NzF0Zjd4MHAifQ.klvBSqkgGNt7aNjxU7x0Gg';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.966999,40.739584],
  zoom: 11.5,
});

//add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
    // if (marker.properties.theatre_review_count > '20') el.className = 'blue-marker';
    // if (marker.properties.theatre_review_count > 20) el.className = 'blue-marker';
    // if (marker.properties.theatre_review_count > 20) el.className = 'blue-marker';
    // if (marker.properties.theatre_review_count > 20) el.className = 'blue-marker';
    el.className = 'marker';



  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 5 }) // add popups
      .setHTML('<h3>' + marker.properties.theatre_name + '</h3><p>' + "Rating: " +
        marker.properties.theatre_rating + " out of 5" + '</p><p>' + "No. of reviews: " +
        marker.properties.theatre_review_count + '</p>' ))
    .addTo(map);
});

//Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// var popup = new mapboxgl.Popup({ offset: 0 })
//   .setText('Hello!!');
//
// var marker = new mapboxgl.Marker()
//   .setLngLat([-74.008015,40.7090362])
//   .setPopup(popup)
//   .addTo(map);
//
// theatres.forEach(function(theatreData) {
//
//   var thisTheatreColor = 'steelblue';
//   if (theatreData.theatre_review_count > 20) thisTheatreColor = 'orange';
//   if (theatreData.theatre_review_count > 50) thisTheatreColor = 'purple';
//   if (theatreData.theatre_review_count > 150) thisTheatreColor = 'green';
//   if (theatreData.theatre_review_count > 500) thisTheatreColor = 'yellow';
//
//   new mapboxgl.Marker({
//     color: thisTheatreColor,
//   })
//     .setLngLat([theatreData.theatre_coordinates_longitude, theatreData.theatre_coordinates_latitude])
//     .setPopup(new mapboxgl.Popup({ offset: 40 })
//       .setText(`${theatreData.theatre_name} has a rating of ${theatreData.theatre_rating} out of 5 on Yelp`))
//     .addTo(map);
// })
