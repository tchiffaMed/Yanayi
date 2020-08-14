hereCreds = {
    JSKEY: "TociZs4J2oxsZn2dN9MwgmWyP-8fseNd4L_w2prVmwQ",
    RESTKEY: "baakvPZADWK_R2F5yjFneRX2L9KL8hMeR0w8HQ7fnhw"
}
const agadez = {
    lat: 16.97333,
    lng: 7.99111
}
const tahoua = {
    lat: 14.8888,
    lng: 5.2692
}
const maradi = {
    lat: 13.5,
    lng: 7.10174
}
const zinder = {
    lat: 13.80716,
    lng: 8.9881
}
const diffa = {
    lat: 13.31536,
    lng: 12.61135
}
const dosso = {
    lat: 13.049,
    lng: 3.1937
}
const niamey = {
    lat: 13.51366,
    lng: 2.1098
}
const tillaberi = {
    lat: 14.20711,
    lng: 1.45418
}

const mapContainer = document.getElementById('mapContainer')
var platform = new H.service.Platform({
    'apikey': hereCreds.JSKEY
});

var myPosition = {
    lat: 17.5968801,
    lng: 8.0828506
};

if (mapContainer.clientWidth <= 500) {
    zooom = 5.3
} else if (mapContainer.clientWidth <= 700) {
    zooom = 5.7
} else if (mapContainer.clientWidth <= 1024) {
    zooom = 5.9
} else {
    zooom = 6.4
}

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    mapContainer,
    defaultLayers.vector.normal.map, {
        zoom: zooom,
        center: myPosition
    });

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Enable the event system on the map instance:
//var mapEvents = new H.mapevents.MapEvents(map);
//var behavior = new H.mapevents.Behavior(mapEvents);



function cluster(number, position) {
    var dataPoints = [];
    for (var i = 0; i < number; i++) {
        dataPoints.push(new H.clustering.DataPoint(position.lat, position.lng));
    }
    var clusteredDataProvider = new H.clustering.Provider(dataPoints);

    // Create a layer that includes the data provider and its data points: 
    var layer = new H.map.layer.ObjectLayer(clusteredDataProvider);

    // Add the layer to the map:
    map.addLayer(layer);

}

cluster(500, niamey)
cluster(200, agadez)
cluster(50, tillaberi)
cluster(10, dosso)
cluster(5000, diffa)
cluster(900, tahoua)
cluster(100, maradi)
cluster(5, zinder)