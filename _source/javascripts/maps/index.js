let map;

const initMap = function initMap() {
	const mapElement = document.getElementById('map');

	map = new google.maps.Map(mapElement, { // eslint-disable-line no-undef
		center: { lat: -23.55, lng: -46.633333 },
		zoom: 10,
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

	fetch(myRequest, myInit)
		.then((response) => {
			const contentType = response.headers.get('content-type');

			if (contentType && contentType.includes('application/json')) {
				return response.json();
			}

			throw new TypeError("Oops, we haven't got JSON!");
		})
		.then((districtsList) => {
			function getArrayBounds(polyArray) {
				const bounds = new google.maps.LatLngBounds(); // eslint-disable-line no-undef
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

			let districts = districtsList.regions;

			if (mapElement.hasAttribute('data-district')) {
				const districtToDraw = mapElement.getAttribute('data-district').split(' ').map(item => parseInt(item, 10));

				districts = districts.filter(x => districtToDraw.indexOf(x.id) !== -1);
			}

			const polygons = [];

			for (let i = 0; i < districts.length; i += 1) {
				const district = districts[i];
				const points = [];
				const geoJSON = JSON.parse(district.geo_json);

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
				const districtToDraw = new google.maps.Polygon({ // eslint-disable-line no-undef
					paths: points,
					strokeColor: '#FF0000',
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: '#FF0000',
					fillOpacity: 0.35,
				});

				districtToDraw.setMap(map);

				polygons.push(districtToDraw);
			}

			const polygonsBounds = getArrayBounds(polygons) || null;

			if (polygonsBounds) {
				map.fitBounds(polygonsBounds);

				if (mapElement.getAttribute('data-zoom') === '+1') {
					google.maps.event.addListenerOnce(map, 'bounds_changed', () => { // eslint-disable-line no-undef
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
