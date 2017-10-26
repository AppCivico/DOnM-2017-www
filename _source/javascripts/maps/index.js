/* global google */
import mapStyles from './mapStyles';

let map;

const initMap = function initMap() {
	const mapElement = document.getElementById('map');

	let areasToDraw = 'all';

	if (mapElement.hasAttribute('data-district')) {
		areasToDraw = mapElement.getAttribute('data-district').split(' ').map(item => parseInt(item, 10));
	}

	map = new google.maps.Map(mapElement, {
		center: { lat: -23.55, lng: -46.633333 },
		zoom: 10,
		styles: mapStyles,
	});

	const myHeaders = new Headers();

	myHeaders.append('Content-Type', 'application/json');

	const myInit = {
		method: 'GET',
		headers: myHeaders,
		mode: 'cors',
		cache: 'default',
	};

	const myRequest = new Request('/dist/data/districts.json');

	const rootElement = 'regions';

	fetch(myRequest, myInit)
		.then((response) => {
			const contentType = response.headers.get('content-type');

			if (contentType && contentType.includes('application/json')) {
				return response.json();
			}

			throw new TypeError("Oops, we haven't got JSON!");
		})
		.then((areasList) => {
			function getArrayBounds(polyArray) {
				const bounds = new google.maps.LatLngBounds();
				let path;
				let paths;

				for (let polys = 0; polys < polyArray.length; polys += 1) {
					paths = polyArray[polys].getPaths();
					for (let l = 0; l < paths.getLength(); l += 1) {
						path = paths.getAt(l);

						for (let ii = 0; ii < path.getLength(); ii += 1) {
							bounds.extend(path.getAt(ii));
						}
					}
				}
				return bounds;
			}

			let areas = areasList[rootElement];

			if (areasToDraw !== 'all') {
				areas = areas.filter(x => areasToDraw.indexOf(x.id) !== -1);
			}

			const polygons = [];

			for (let i = 0; i < areas.length; i += 1) {
				const area = areas[i];
				const points = [];

				if (area.geo_json !== null) {
					const geoJSON = JSON.parse(area.geo_json);

					for (let j = 0; j < geoJSON.coordinates.length; j += 1) {
						const coord = geoJSON.coordinates[j];
						for (let k = 0; k < coord.length; k += 1) {
							const corner = coord[k];
							points[points.length] = {
								lat: corner[1],
								lng: corner[0],
							};
						}
					}
					// Construct the polygon.
					const areaToDraw = new google.maps.Polygon({
						paths: points,
						strokeColor: '#ff9145',
						strokeOpacity: 0.5,
						strokeWeight: 2,
						fillColor: '#ff9145',
						fillOpacity: 0.25,
					});

					areaToDraw.setMap(map);

					polygons.push(areaToDraw);
				}
			}

			const polygonsBounds = getArrayBounds(polygons) || null;

			if (polygonsBounds) {
				map.fitBounds(polygonsBounds);

				if (mapElement.getAttribute('data-zoom') === '+1') {
					google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
						map.setZoom(map.getZoom() + 1);
					});
				}
			}
		})
		.catch((error) => {
			throw new TypeError(error);
		});
};

export { initMap as default };
