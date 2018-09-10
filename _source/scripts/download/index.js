export default function initDownload() {
	const $select = document.getElementById('js-download-select');
	const $displays = document.querySelectorAll('.js-download-display');
	const $buttons = document.querySelectorAll('.js-download-button');

	if ($select === null || $displays === null || $buttons === null) {
		return false;
	}

	function setDisplay(url) {
		$displays.forEach((_display) => {
			const display = _display;
			display.value = url;
		});
	}

	function setDownloadLink(url) {
		$buttons.forEach((_button) => {
			const button = _button;
			button.href = url;
		});
	}

	function handleChange() {
		const newUrl = $select.value;
		setDisplay(newUrl);
		setDownloadLink(newUrl);
	}

	return $select.addEventListener(
		'change',
		handleChange,
		false,
	);
}
