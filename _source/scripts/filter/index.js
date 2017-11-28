export default function initFilter() {
	const filterableItems = document.querySelectorAll('.js-filterable__item');
	const filterableForm = document.getElementById('js-filterable__form');
	const filterableField = document.getElementById('js-filterable__field');
	const filterableCounter = document.getElementById('js-filterable__counter');
	let counter = filterableItems.length;

	if (filterableItems === null || filterableField === null) {
		return false;
	}

	filterableForm.submit = false;

	function filterBy() {
		const filterTerm = filterableField.value.toLowerCase().trim();

		for (let i = 0; i < filterableItems.length; i += 1) {
			if (filterTerm !== '' && filterableItems[i].textContent.toLowerCase().indexOf(filterTerm) === -1) {
				if (!filterableItems[i].hasAttribute('hidden')) {
					filterableItems[i].setAttribute('hidden', 'hidden');
					counter -= 1;
				}
			} else if (filterableItems[i].hasAttribute('hidden')) {
				filterableItems[i].removeAttribute('hidden');
				counter += 1;
			}
		}

		if (filterableCounter !== null) {
			filterableCounter.textContent = counter;
		}
	}

	return filterableField.addEventListener(
		'input',
		filterBy,
		false,
	);
}
