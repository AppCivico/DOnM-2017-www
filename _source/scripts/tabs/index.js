export default function normalizeTabControllerClick() {
	const hashLinks = document.querySelectorAll(".js-tabs-control a[href^='#']");
	const firstLink = document.querySelector('.js-tabs-control > a');

	function setActiveLink(event) {
		Array.prototype.forEach.call(hashLinks, (link) => {
			link.classList.remove('active');
		});
		event.target.classList.add('active');
	}


	Array.prototype.forEach.call(hashLinks, (link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			setActiveLink(event);
			window.history.pushState({}, '', link.href);

			// Update the URL again with the same hash, then go back
			window.history.pushState({}, '', link.href);
			window.history.back();
		});
	});

	if (window.location.hash) return;
	if (firstLink) firstLink.click();
	if (firstLink) firstLink.classList.add('active');
}
