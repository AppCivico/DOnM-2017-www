/* global google */
import { throwIfMissing } from '../helpers';

import { initial as defaultStyles } from './polygonStyles';

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
	});

	polygon.setOptions(defaultStyles);

	polygon.setMap(map);

	return polygon;
}

