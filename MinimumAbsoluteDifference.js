// 1200. Minimum Absolute Difference

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Example 3:
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]


// Constraints:

// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6

// ---------------------------------------------------------------------------------

function minimumAbsDifference(arr) {
    let sortedArr = arr.quickSort(),
        min = +Infinity,
        result = [];

        console.log(sortedArr, "sorted");

    for (let i = 0; i < sortedArr.length - 1; i++) {
        let difference = Math.abs(sortedArr[i] - sortedArr[i + 1]);
        if (min > difference) {
            min = difference;
            // result = [];
            result.push([sortedArr[i], sortedArr[i + 1]]);
        } else if (min === difference) {
            result.push([sortedArr[i], sortedArr[i + 1]]);
        }
    }
    return result;
}

function quickSort(){
    
}

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
// console.log(minimumAbsDifference([1, 10, 11, 12, 13, 14, 16]));
