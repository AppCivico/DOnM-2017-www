export default function gradientSteps(firstColor, lastColor, steps = 1) {
	let cMax;
	let cMin;
	let j = 1;

	const r = [];

	while (j <= steps) {
		let i = 0;
		const c = [];

		while (i < firstColor.length) {
			cMax = Math.max(firstColor[i], lastColor[i]);
			cMin = Math.min(firstColor[i], lastColor[i]);
			c.push(Math.round((((cMax - cMin) / (steps + 1)) * j) + cMin));
			i += 1;
		}

		r.push(c);
		j += 1;
	}

	return r;
}
