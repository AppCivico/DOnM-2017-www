export default function initToggleBox() {
	const $button = document.querySelector('.js-togglebox-toggle');
	const $moreItems = document.querySelector('.togglebox__more-items');

	if ($button === null || $moreItems === null) {
		return false;
	}

	function toggle() {
		if ($moreItems.hasAttribute('hidden')) {
			$moreItems.removeAttribute('hidden');
			$button.textContent = 'Ver menos';
		} else {
			$moreItems.setAttribute('hidden', 'hidden');
			$button.textContent = 'Ver mais';
		}
	}

	return $button.addEventListener(
		'click',
		toggle,
		false,
	);
}
