export default function initProgressHover() {
	const $progressHover = document.querySelectorAll('.js-progress-hover');

	if ($progressHover === null) {
		return false;
	}

	function showMe(event) {
		document.querySelector('.js-progress-more-info p').textContent = event.target.dataset.moreInfo;
	}

	function hideMe() {
		document.querySelector('.js-progress-more-info p').textContent = '';
	}

	$progressHover.forEach(button => button.addEventListener(
		'mouseleave',
		hideMe,
		false,
	));

	return $progressHover.forEach(button => button.addEventListener(
		'mouseover',
		showMe,
		false,
	));
}
