const twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (map.has(target - current)) {
            return [map.get(target - current), i]
        } else {
            map.set(current, i)
        }
    }
};


twoSum([2, 7, 11, 15], 9);
