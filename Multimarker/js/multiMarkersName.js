//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray = [];
var markersNameArray = [];

AFRAME.registerComponent('markers_start', {
    init: function() {
        console.log('Add markers to the scene');

        var sceneEl = document.querySelector('a-scene');

        //list of the markers
        for (var i = 1; i < 10; i++) {
            var url = "resources/markers/pattern-Individual_Blocks-" + i + ".patt";
            markersURLArray.push(url);
            markersNameArray.push('Marker_' + i);
            //console.log(url);
        }

        for (var k = 0; k < 9; k++) {
            var markerEl = document.createElement('a-marker');
            markerEl.setAttribute('type', 'pattern');
            markerEl.setAttribute('url', markersURLArray[k]);
            // markerEl.setAttribute('id', markersNameArray[k]);

            markerEl.setAttribute('registerevents', '');
            sceneEl.appendChild(markerEl);

            //Adding text to each marker
            var planeEl = document.createElement('a-plane');

            planeEl.setAttribute('id', 'plane-'.k);
            planeEl.setAttribute('width', 1);
            planeEl.setAttribute('height', 1);
            planeEl.setAttribute('color', '#7BC8A4');
            planeEl.object3D.position.set(0, 0.7, 0);
            planeEl.object3D.rotation.set(-85, 0, 0);

            markerEl.appendChild(planeEl);
        }
    }
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
    init: function() {
        const marker = this.el;

        marker.addEventListener("markerFound", () => {
            var markerId = marker.id;
            console.log('Marker Found: ', markerId);
        });

        marker.addEventListener("markerLost", () => {
            var markerId = marker.id;
            console.log('Marker Lost: ', markerId);
        });
    },
});