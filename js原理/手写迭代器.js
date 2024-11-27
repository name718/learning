Object.prototype[Symbol.iterator] = function () {
	const keys = Object.keys(this);
	const len = keys.length;
	let index = 0;
	return {
		next() {
			if (index < len) {
				const key = keys[index ++]
				return {
					value: this[key],
					done: false,
				};
			}
			return {
				done: true,
				value: undefined,
			};
		},
	};
};
