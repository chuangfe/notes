var searchInsert = function (nums, target) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      index = i;
      break;
    }
  }

  return target > nums[nums.length - 1] ? nums.length : index;
};

console.log(searchInsert([1, 3, 5, 6], 5));

console.log(searchInsert([1, 3, 5, 6], 2));

console.log(searchInsert([1, 3, 5, 6], 7));

console.log(searchInsert([1, 3, 5, 6], 0));
