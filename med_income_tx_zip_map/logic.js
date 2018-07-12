// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'

mapboxgl.accessToken = 'pk.eyJ1IjoicG9uY2hvbXMiLCJhIjoiY2pnd3c4dzViMWM2OTMycGRzNHVrcHVpdSJ9.IY4f8LGRJykJgPz9P1AQZw';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/ponchoms/cjjde7hls7vpw2rqhmpzc11a8' // replace this with your style URL
  });


  map.on('load', function() {
  // the rest of the code will go in here
  var layers = ['$0 - $20k', '$20k - $30k', '$30k - $45k', '$45k - $60k', '$60k - $75k', '$75k - $90k', '$90k+'];
  var colors = ['#ffff79', '#cbe259', '#96c53b', '#5fa81f', '#3d9810', '#0b8a00', '#096b00'];
  map.fitBounds([[-106.6,25.8],[-93.5,36.5]]);


  for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}

});

map.on('mousemove', function(e) {
  var zips = map.queryRenderedFeatures(e.point, {
    layers: ['income-zipcode']
  });

  if (zips.length > 0) {
    document.getElementById('pd').innerHTML = '<h3><strong>$ <em>' + zips[0].properties['Avg. Income/H/hold'] + '</strong></h3><p><strong></em>' + '</h4>' +  zips[0].properties['City'] + ', ' + zips[0].properties['Zip Code'] ;
  }
});

map.getCanvas().style.cursor = 'default';
