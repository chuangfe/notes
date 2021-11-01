/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arr = [];
  let indexOne, indexTwo;

  for (let i = 0; i < nums.length; i++) {
    if (indexOne && indexTwo) break;

    for (let k = 0; k < nums.length; k++) {
      if (i === k) continue;

      if (nums[i] + nums[k] === target) {
        indexOne = i;
        indexTwo = k;
        break;
      }
    }
  }

  arr.push(indexOne, indexTwo);
  arr.sort((a, b) => a - b);
  return arr;
};

const re = twoSum([2, 7, 11, 15], 9);

console.log(re);
