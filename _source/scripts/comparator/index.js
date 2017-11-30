import apiSources from '../apiSources.json';

export default function initComparison() {
	const comparisonTable = document.getElementById('js-districts-comparison__table');
	const comparisonItems = document.querySelectorAll('.js-districts-comparison__value');
	const comparisonField = document.getElementById('js-districts-comparison__field');

	if (comparisonItems.length === 0 || comparisonField === null || comparisonTable === null) {
		return false;
	}

	function fillItems() {
		const districtToCompareId = parseInt(comparisonField[comparisonField.selectedIndex].value, 10);
		const districtToCompareName = comparisonField[comparisonField.selectedIndex].textContent;

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const myInit = {
			method: 'GET',
			headers: myHeaders,
			mode: 'cors',
			cache: 'default',
		};

		const endPointData = apiSources.filter(x => x.jsonRootElement === 'variables');

		const myRequest = new Request(endPointData[0].dataDest.replace('./static', ''));

		fetch(myRequest, myInit)
			.then((response) => {
				const contentType = response.headers.get('content-type');

				if (contentType && contentType.includes('application/json')) {
					return response.json();
				}

				throw new TypeError("Oops, we haven't got JSON!");
			})
			.then(response => response.variables)
			.then((variables) => {
				for (let i = comparisonItems.length - 1; i >= 0; i -= 1) {
					const varId = parseInt(comparisonItems[i].getAttribute('data-to-bind'), 10);

					comparisonItems[i].textContent = variables
						.filter(x => x.id === varId)
						.map(x => x.regions
							.filter(y => y.id === districtToCompareId)
							.map(y => y.value)
							.join('')).join('');
					comparisonItems[i].title = districtToCompareName;
				}
			});
	}

	return comparisonField.addEventListener(
		'change',
		fillItems,
		false,
	);
}