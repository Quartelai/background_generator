const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
    const numsMap = {};
    console.log({numsMap})

    for(let p = 0; p < nums.length; p++) {
        console.log({ p, value: nums[p] });
        const currentMapVal = numsMap[nums[p]];

        console.log({ currentMapVal });

        if(currentMapVal >= 0) {
          return [currentMapVal, p];
        } else {
          const numberToFind = target - nums[p];
          console.log({ numberToFind });
          numsMap[numberToFind] = p;
          console.log({ numsMap });
        }
    }

    return null;
}

console.log(findTwoSum(numsArray,targetToFind));