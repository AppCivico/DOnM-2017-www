const mapStyles = [
	{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#e29032',
			},
		],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#640b04',
			},
			{
				saturation: -40,
			},
		],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#640b04',
			},
			{
				weight: 0.5,
			},
		],
	},
	{
		featureType: 'landscape.man_made',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#f1f4ff',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffffff',
			},
		],
	},
	{
		featureType: 'landscape.natural.landcover',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#fbf2ff',
			},
		],
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#c1e8c3',
			},
		],
	},
	{
		featureType: 'poi.attraction',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#536a0d',
			},
		],
	},
	{
		featureType: 'poi.medical',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#d45d5f',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#77c173',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffc8b4',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#d0c8cf',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#bcb8b8',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#d6d2de',
			},
		],
	},
	{
		featureType: 'transit.station',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				lightness: 75,
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#99bdec',
			},
		],
	},
];

export { mapStyles as default };
