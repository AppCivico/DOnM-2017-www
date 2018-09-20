import defaultDiacriticsRemovalMap from './diacriticsMap.json';

export default function initFilter() {
	const filterableItems = document.querySelectorAll('.js-filterable__item');
	const filterableField = document.getElementById('js-filterable__field');
	const filterableInputs = document.querySelectorAll('.js-filterable__input');
	const resetButton = document.getElementById('js-reset-button');

	const filterableCounter = document.getElementById('js-filterable__counter');
	const diacriticsMap = {};

	if (filterableItems === null || filterableField === null) {
		return false;
	}

	if (filterableField.form !== null) {
		filterableField.form.onsubmit = () => false;
	}

	for (let i = 0; i < defaultDiacriticsRemovalMap.length; i += 1) {
		const { diacritics } = defaultDiacriticsRemovalMap[i];
		for (let j = 0; j < diacritics.length; j += 1) {
			diacriticsMap[diacritics[j]] = defaultDiacriticsRemovalMap[i].letter;
		}
	}

	function removeDiacritics(str) {
		return str.replace(/[^\\u0000-\\u007E]/g, a => diacriticsMap[a] || a);
	}

	for (let i = filterableItems.length - 1; i >= 0; i -= 1) {
		const normalizedContent = removeDiacritics(filterableItems[i].textContent.toLowerCase().replace(/\s+/g, ' ').trim());

		filterableItems[i].setAttribute('data-normalized-content', normalizedContent);
	}

	function setCounter(value) {
		if (filterableCounter !== null) {
			filterableCounter.textContent = value;
		}
	}

	function handleVisibility(list) {
		filterableItems.forEach((item) => {
			if (list.includes(item)) {
				item.removeAttribute('hidden');
			} else {
				item.setAttribute('hidden', 'hidden');
			}
		});
		return filterableItems;
	}

	function filterItems(filterTerm, filterWhere, filterList) {
		const filteredList = Array.prototype.filter.call(filterList, item =>
			item.getAttribute(filterWhere).indexOf(filterTerm) !== -1);

		return filteredList;
	}

	function handleFilter(event) {
		let filterTerm = '';
		let filteredList = '';
		const eventElement = event.target.nodeName.toLowerCase();
		const filterWhere = event.target.getAttribute('data-filter-by');

		if (eventElement === 'input') {
			filterTerm = filterableField.value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		}
		if (eventElement === 'select') {
			filterTerm = event.target.options[event.target.selectedIndex].value;
		}

		if (!filterTerm) {
			return;
		}

		filteredList = filterItems(filterTerm, filterWhere, filterableItems);

		filterableInputs.forEach((item) => {
			if (item.options[item.selectedIndex].defaultSelected) { return; }
			const filterWhereInput = item.getAttribute('data-filter-by');
			filterTerm = item.options[item.selectedIndex].value;
			filteredList = filterItems(filterTerm, filterWhereInput, filteredList);
		});

		handleVisibility(filteredList);
		setCounter(filteredList.length);
	}

	function clearFilters() {
		filterableItems.forEach((item) => {
			item.removeAttribute('hidden');
		});
		setCounter(filterableItems.length);
	}

	if (resetButton) {
		resetButton.addEventListener(
			'click',
			clearFilters,
			false,
		);
	}

	filterableField.addEventListener(
		'input',
		handleFilter,
		false,
	);

	filterableInputs.forEach(input => input.addEventListener(
		'change',
		handleFilter,
		false,
	));

	return true;
}
