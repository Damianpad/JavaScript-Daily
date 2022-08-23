/* Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
*/

var isPowerOfFour = function (n) {
    return console.log(Number.isInteger(Math.log(n) / Math.log(4)))

};

isPowerOfFour(16);
isPowerOfFour(5);
isPowerOfFour(1);
isPowerOfFour(0);
isPowerOfFour(2);

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
nums = [2, 7, 11, 15];
target = 9;

var twoSum = function (nums, target) {

};

for (i = 0; i < nums.length; i++) {
    console.log(nums.values());
}