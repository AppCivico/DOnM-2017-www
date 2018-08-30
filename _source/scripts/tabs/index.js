export default function normalizeTabControllerClick() {
	const hashLinks = document.querySelectorAll(".js-tabs-control a[href^='#']");

	Array.prototype.forEach.call(hashLinks, (link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			window.history.pushState({}, '', link.href);

			// Update the URL again with the same hash, then go back
			window.history.pushState({}, '', link.href);
			window.history.back();
		});
	});
}
