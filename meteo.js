        let all = document.getElementById('all');
        let img = document.getElementById('img');
        let wyre = document.querySelector('.wyre-cards')
        let btn = document.querySelector('.btn');
        let meteo = document.getElementById('meteo')
        let Mirriah = document.getElementById('Mirriah');
        let Madarounfa = document.getElementById('Madarounfa')
        let Gaya = document.getElementById('Gaya')
        let Bouza = document.getElementById('Bouza')
        let Dosso = document.getElementById('Dosso')
        let Niamey = document.getElementById('Niamey')

wyre.classList.remove('cachee');
 
        fetch('https://api.openweathermap.org/data/2.5/group?id=${id},2440921,2441194,2441217&units=metric&lang=fr&appid=916eb4c9c4d6b99c75d1ba8949f9ef38' )
        .then(res => res.json())
        .then(res => {
            console.log(res.list[0]);
            console.log(res.list[0].dt);
            console.log("Heure d'acquisition "+ convert(res.list[0].dt));
            console.log('localité :' + res.list[0].name);
            console.log('nébulosité :' + res.list[0].clouds.all);
            console.log('condition metéo :' + res.list[0].weather[0].description);
            console.log('illustration :' + res.list[0].weather[0].icon);
            console.log('température :' + res.list[0].main.temp +'°C');  
            console.log('température ressentie:' + res.list[0].main.feels_like +'°C');  
            console.log('humidité :' + res.list[0].main.humidity +'%');
            console.log('pression :' + res.list[0].main.pressure +'hPa');
            console.log('température mini :' + res.list[0].main.temp_min +'°C');
            console.log('température maxi :' + res.list[0].main.temp_max +'°C');
            console.log('levée du soleil :' + res.list[0].sys.sunrise);
            console.log('couché du soleil :' + res.list[0].sys.sunset);
            let levee = res.list[0].sys.sunrise;
            let couchee = res.list[0].sys.sunset;
            let dat = res.list[0].dt;

            console.log('angle:' + res.list[0].wind.deg +'deg');
            console.log('vitesse du vent :' + res.list[0].wind.speed +'m/s');
            console.log('levée du soleil :' + convert(levee));
            console.log('couchée du soleil :' + convert(couchee));

            //fonction de conversion du temps unix

            function convert(unixtime){
            // Tableau de Mois
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            // Convertir timestamp en milliseconds
        var date = new Date(unixtime*1000);
            // Année
        var year = date.getFullYear();
            // Mois
        var month = months_arr[date.getMonth()];
            // Jour
        var day = date.getDate();
            // Heures
        var hours = date.getHours();
            // Minutes
        var minutes = "0" + date.getMinutes();
            // Secondes
        var seconds = "0" + date.getSeconds();
            // Afficher Daye et Heure en format MM-dd-yyyy h:m:s 
        var convdataTime = day+'-'+month+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
              return convdataTime;

}
        

img.src = `http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`

        function affiche(zone){
                    zone.addEventListener('mouseover', (e) => {
                    zone.style.fill = '#6300ee6e'
                    meteo.innerHTML = `
                            <div class="row center-align ">
                                <div class="col s12 m7 section">
                                <div class="card-panel " style="padding-top:0 ; padding-bottom: 0;">
                                    <div class="row" style="top: 0;position: relative;">
                                        <div class="col s9 l9 white localites" >
                                            <h3 class="localite center-align">${res.list[0].name}</h3>
                                    </div>
                                        <div class="col s3 l3 heures ">
                                            <h3 class="heure center-align white-text">${convert(dat).substr(12, 4)}</h3>
                                    </div>
                                    </div>

                                <div class="row">
                                    <div class="col s6 l6">
                                        <img src="http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png" id="img" alt="" srcset="" style="width: 150px;">
                                    </div>
                                    <div class="col s6 l6">
                                        <h1 class="temperature center-align white-text">${res.list[0].main.temp +'°C'}</h1>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    `
                    let tp = zone.getBoundingClientRect().y;
                    let lt = zone.getBoundingClientRect().x;

                    meteo.style.top = e.pageY - 80 + "px"
                    meteo.style.left = e.pageX + "px"
                    meteo.style.position = "absolute"
            })
        }
affiche(Bouza);
 affiche(Gaya);
 affiche(Dosso);
 affiche(Madarounfa);
 affiche(Mirriah);
 affiche(Niamey);

 wyre.classList.add('cachee');
});



   
 









/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
    map.setCenter({lat:17.5968801 , lng:8.0828506});
    map.setZoom(14);
  }
  
  /**
   * Boilerplate map initialization code starts below:
   */
  
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    apikey: 'S4NJ4haf_Vc2IEOTxcSlVqA3Vo3HUFIkulP6MKXS9Nc'
  });
  var defaultLayers = platform.createDefaultLayers();
  
  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat:17, lng:8},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  window.onload = function () {
    moveMapToBerlin(map);
  }