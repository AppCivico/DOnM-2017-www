let map;

const initMap = function initMap() {
	map = new google.maps.Map(document.getElementById('map'), { // eslint-disable-line no-undef
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

	const myRequest = new Request('/dist/js/districts.json');

	fetch(myRequest, myInit)
		.then((response) => {
			const contentType = response.headers.get('content-type');

			if (contentType && contentType.includes('application/json')) {
				return response.json();
			}

			throw new TypeError("Oops, we haven't got JSON!");
		})
		.then((districtsList) => {
			for (let i = 0; i < districtsList.region.length; i += 1) {
				const district = districtsList.region[i];
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
			}
		})
		.catch((error) => {
			throw new TypeError(error);
		});
};

export { initMap as default };
