/* global google */
import mapStyles from './mapStyles.json';

import * as polygonStyles from './polygonStyles.json';

import * as panel from './customInfoPanel';

import drawPolygon from './drawPolygon';

import apiSources from '../apiSources.json';

import { gradientSteps } from '../helpers';

let map;

export default function initMap() {
	const mapElement = document.getElementById('map');

	map = new google.maps.Map(mapElement, {
		center: { lat: -23.55, lng: -46.633333 },
		zoom: 10,
		styles: mapStyles,
		mapTypeControl: false,
		streetViewControl: false,
	});

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

	if (mapElement.hasAttribute('data-to-draw')) {
		const toDraw = mapElement.getAttribute('data-to-draw').split(' ');

		const polygonsBounds = apiSources
			.filter(endPoint => toDraw.indexOf(endPoint.jsonRootElement) !== -1)
			.map((endPointData) => {
				const rootElement = endPointData.jsonRootElement;

				const myHeaders = new Headers();

				myHeaders.append('Content-Type', 'application/json');

				const myInit = {
					method: 'GET',
					headers: myHeaders,
					mode: 'cors',
					cache: 'default',
				};

				const myRequest = new Request(endPointData.dataDest.replace('./static', ''));

				return fetch(myRequest, myInit)
					.then((response) => {
						const contentType = response.headers.get('content-type');

						if (contentType && contentType.includes('application/json')) {
							return response.json();
						}

						throw new TypeError("Oops, we haven't got JSON!");
					})
					.then((areasList) => {
						let polygonsToDraw = areasList[rootElement];

						if (mapElement.hasAttribute(`data-${rootElement}-to-draw`)) {
							const areasToDraw = mapElement.getAttribute(`data-${rootElement}-to-draw`).split(' ')
								.map(item => parseInt(item, 10));
							polygonsToDraw = polygonsToDraw.filter(x => areasToDraw.indexOf(x.id) !== -1);
						}

						let fills;

						const distributeBy = mapElement.hasAttribute(`data-${rootElement}-distribute-by`)
							? mapElement.getAttribute(`data-${rootElement}-distribute-by`)
							: null;

						if (distributeBy != null) {
							fills = gradientSteps([255, 144, 68], [255, 83, 66], polygonsToDraw.length);
							polygonsToDraw.sort((a, b) => a[distributeBy] - b[distributeBy]);
						}

						const polygons = [];

						for (let i = 0; i < polygonsToDraw.length; i += 1) {
							const polygon = polygonsToDraw[i];

							const initialStyles = distributeBy != null
								? Object.assign(polygonStyles.initial, { fillColor: `rgb(${fills[i].join(', ')})` })
								: polygonStyles.initial;

							if (polygon.geo_json !== null) {
								const geoJSON = JSON.parse(polygon.geo_json);

								const drawnPolygon = drawPolygon(geoJSON.coordinates);

								drawnPolygon.setOptions(initialStyles);
								drawnPolygon.initialStyles = initialStyles;
								drawnPolygon.setMap(map);

								if (rootElement === 'cities') {
									drawnPolygon.setOptions(polygonStyles.city);
								} else {
									google.maps.event.addListener(drawnPolygon, 'mouseover', () => {
										const previousStyles = {};

										Object.keys(polygonStyles.toggle)
											.map((styleRule) => {
												previousStyles[styleRule] = drawnPolygon[styleRule];
												return previousStyles[styleRule];
											});

										drawnPolygon.previousStyles = previousStyles;

										drawnPolygon.setOptions(polygonStyles.toggle);
									});

									google.maps.event.addListener(drawnPolygon, 'mouseout', () => {
										drawnPolygon.setOptions(drawnPolygon.previousStyles);
									});
								}

								if (mapElement.hasAttribute('data-link-for')) {
									const linkFor = mapElement.getAttribute('data-link-for').split(' ');

									if (linkFor.indexOf(rootElement) !== -1) {
										if (endPointData.contentFolder != null && polygon.slug != null) {
											google.maps.event.addListener(drawnPolygon, 'click', () => {
												window.location = `${endPointData.contentFolder.replace('./content', '')}/${polygon.slug}`;
											});
										}
									}
								}

								if (mapElement.hasAttribute('data-info-panel-for')) {
									const infoPanelFor = mapElement.getAttribute('data-info-panel-for').split(' ');

									if (infoPanelFor.indexOf(rootElement) !== -1) {
										drawnPolygon.panelContent = `${polygon.name}`;

										if (drawnPolygon.panelContent !== null) {
											google.maps.event.addListener(drawnPolygon, 'mouseover', (e) => {
												panel.insertInfoPanel(e, drawnPolygon.panelContent);
											});

											google.maps.event.addListener(drawnPolygon, 'mouseout', () => {
												panel.deleteInfoPanel();
											});

											google.maps.event.addListener(drawnPolygon, 'mousemove', (e) => {
												panel.moveInfoPanel(e);
											});
										}
									}
								}

								polygons.push(drawnPolygon);
							}
						}
						return getArrayBounds(polygons) || null;
					})
					.catch((error) => {
						throw new TypeError(error);
					});
			});

		Promise.all(polygonsBounds).then((results) => {
			if (results[0]) {
				map.fitBounds(results[0]);
			}

			if (mapElement.getAttribute('data-zoom') === '+1') {
				google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
					map.setZoom(map.getZoom() + 1);
				});
			}
		});
	}
}
