function twoSum(nums, target) {
    const obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj.hasOwnProperty(target - nums[i])) {
            return [obj[target - nums[i]], i];            
        } else {
            obj[nums[i]] = i;
        }
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3,3], 9));