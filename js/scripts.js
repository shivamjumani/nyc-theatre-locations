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
  .setText('Hi Web Mapping 2019 Class!');

var marker = new mapboxgl.Marker()
  .setLngLat([-74.008015,40.7090362])
  .setPopup(popup)
  .addTo(map);

studentPizzaShops.forEach(function(studentData) {

  var thisStudentsColor = 'steelblue';
  if (studentData.nyuprogram === 'wagner') thisStudentsColor = 'orange';
  if (studentData.nyuprogram === 'cusp') thisStudentsColor = 'purple';
  if (studentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
  if (studentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';

  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([studentData.lng, studentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${studentData.name} says their favorite pizza shop is ${studentData.favoritepizzashop}`))
    .addTo(map);
})
