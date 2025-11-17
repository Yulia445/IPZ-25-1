const sortedArr = [0,3,5,8,9,10,30,41,44,45,70,100,102];



function binarySearch(arr, value) {
    let minIndex;
    let startIndex = 0;
    let endIndex = arr.length
    let found = false;
    let position = -1; 
    while (found === false && startIndex <= endIndex) {
        minIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[minIndex] === value) {
            found = true;
            position = minIndex;
            return position;
}
        if (value < arr[minIndex]) {
            endIndex = minIndex - 1;
        }   else {
                startIndex = minIndex + 1;
            }
        console.log(startIndex, endIndex, minIndex)
    }
    return position
}
const a = binarySearch(sortedArr, 19)
console.log(a)