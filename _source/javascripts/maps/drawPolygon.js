/* global google */
import { throwIfMissing } from '../helpers';

export default function drawPolygon(coordinates, map = throwIfMissing()) {
	const points = [];
	for (let j = 0; j < coordinates.length; j += 1) {
		const coord = coordinates[j];
		for (let k = 0; k < coord.length; k += 1) {
			const corner = coord[k];
			points[points.length] = {
				lat: corner[1],
				lng: corner[0],
			};
		}
	}
	// Construct the polygon.
	const polygon = new google.maps.Polygon({
		paths: points,
		strokeColor: '#fff',
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: '#1b0863',
		fillOpacity: 0.15,
	});

	polygon.setMap(map);

	google.maps.event.addListener(polygon, 'mouseover', function polygonIn() {
		const currentPolygon = this;
		currentPolygon.setOptions({ fillOpacity: 0.35 });
	});

	google.maps.event.addListener(polygon, 'mouseout', function polygonOut() {
		const currentPolygon = this;
		currentPolygon.setOptions({ fillOpacity: 0.15 });
	});

	return polygon;
}

