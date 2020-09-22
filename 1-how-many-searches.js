function binarySearch(array, value, start, end) {
	console.log(`value=${value}`);
    var start = start === undefined ? 0 : start;
	console.log(`start=${start}`);
    var end = end === undefined ? array.length : end;
	console.log(`end=${end}`);
    if (start > end) {return -1;}
    const index = Math.floor((start + end) / 2);
	console.log(`index=${index}`);
    const item = array[index];
	console.log(`item=${item}`);
    if (item == value) {
		console.log(`item == value`);
		// Returning index here is going to represent the number of search recursions.
        return index;  
    }
    else if (item < value) {
		console.log(`item < value`)
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
		console.log(`item > value`)
        return binarySearch(array, value, start, index - 1);
    }
}
// console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8)); // Sequence is: 12,6,8
console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16)); // Sequence is: 12,17,14,15,error
