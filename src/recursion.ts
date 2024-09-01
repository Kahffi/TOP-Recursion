function addSum(num: number): number {
	return num === 0 ? num : num + addSum(num - 1);
}

function power(x: number, n: number): number {
	return n === 0 ? 1 : n * power(x, n - 1);
}

const allAreLessThanSeven = all([7, 2, 1], function (num: number) {
	return num < 7;
});

function all(arr: Array<number>, callBack: Function): boolean {
	if (arr.length === 0) {
		return true;
	}

	if (callBack(arr[0])) {
		arr.shift();
		return all(arr, callBack);
	} else {
		return false;
	}
}

function productOfArray(arr: Array<number>): number {
	if (arr.length === 1) return arr[0];

	arr[arr.length - 2] *= arr[arr.length - 1];
	arr.pop();
	return productOfArray(arr);
}
const obj: Object = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};

function contains(obj: Object, target: number | string): boolean {
	const values = Object.values(obj);

	// if (obj !== "object" || obj === null){
	// 	return obj === target
	// }
	for (let i = 0; i <= values.length; i++) {
		console.log(target, values[i]);

		if (values[i] === target) {
			return true;
		}

		// if (typeof values[i] !== "object") {
		// 	if (values[i] === target) return true;
		// }
		if (typeof values[i] === "object" && contains(values[i], target)) {
			return true;
		}
	}
	return false;
}

function collatz(n: number): number {
	if (n === 1) {
		return 0;
	}

	if (n === 0) {
		return 1;
	}

	if (n % 2 === 0) {
		return 1 + collatz(n / 2);
	} else {
		return 1 + collatz(3 * n + 1);
	}
}

function merge(left: Array<number>, right: Array<number>) {
	const result = [];

	let leftIndex = 0;
	let rightIndex = 0;

	while (result.length < left.length + right.length) {
		if (
			left[leftIndex] < right[rightIndex] ||
			right[rightIndex] === undefined
		) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result;
}

function mergeSort(arr: Array<number>): Array<number> {
	if (arr.length === 1) return arr;
	let left = arr.slice(0, Math.round(arr.length / 2));
	let right = arr.slice(Math.round(arr.length / 2) - arr.length);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
}

console.log(mergeSort([2, 0, 1, 9, 8, 10, 11]));
