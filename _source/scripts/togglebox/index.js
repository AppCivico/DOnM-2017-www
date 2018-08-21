export default function initToggleBox() {
	const $buttons = document.querySelectorAll('[data-js="togglebox-button"]');

	if ($buttons === null) {
		return false;
	}

	function toggle(event) {
		event.target.closest('.togglebox__content').classList.toggle('togglebox__content--opened');
	}

	return $buttons.forEach(button => button.addEventListener(
		'click',
		toggle,
		false,
	));
}
