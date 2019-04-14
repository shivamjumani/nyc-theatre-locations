// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFtOTk3IiwiYSI6ImNqdWQ5ZDBicDB3bmE0ZHJ2NzF0Zjd4MHAifQ.klvBSqkgGNt7aNjxU7x0Gg';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 0 })
  .setText('Hello!!');

var marker = new mapboxgl.Marker()
  .setLngLat([-74.008015,40.7090362])
  .setPopup(popup)
  .addTo(map);

theatres.forEach(function(theatreData) {

  var thisTheatreColor = 'steelblue';
  if (theatreData.theatre_review_count > 20) thisTheatreColor = 'orange';
  if (theatreData.theatre_review_count > 50) thisTheatreColor = 'purple';
  if (theatreData.theatre_review_count > 150) thisTheatreColor = 'green';
  if (theatreData.theatre_review_count > 500) thisTheatreColor = 'yellow';

  new mapboxgl.Marker({
    color: thisTheatreColor,
  })
    .setLngLat([theatreData.theatre_coordinates_longitude, theatreData.theatre_coordinates_latitude])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${theatreData.theatre_name} has a rating of ${theatreData.theatre_rating} out of 5 on Yelp`))
    .addTo(map);
})
