/* global google */
import mapStyles from './mapStyles';

import * as polygonStyles from './polygonStyles';

import drawPolygon from './drawPolygon';

let map;

export default function initMap() {
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

			let polygonsToDraw = areasList[rootElement];

			if (areasToDraw !== 'all') {
				polygonsToDraw = polygonsToDraw.filter(x => areasToDraw.indexOf(x.id) !== -1);
			}

			const polygons = [];

			for (let i = 0; i < polygonsToDraw.length; i += 1) {
				const polygon = polygonsToDraw[i];

				if (polygon.geo_json !== null) {
					const geoJSON = JSON.parse(polygon.geo_json);

					const drawnPolygon = drawPolygon(geoJSON.coordinates, map);

					google.maps.event.addListener(drawnPolygon, 'mouseover', () => {
						drawnPolygon.setOptions(polygonStyles.toggle);
					});

					google.maps.event.addListener(drawnPolygon, 'mouseout', () => {
						drawnPolygon.setOptions(polygonStyles.initial);
					});

					polygons.push(drawnPolygon);
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
}
