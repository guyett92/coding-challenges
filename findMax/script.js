function findMax(arr){
    // This function returns the largest number in a given array.
        // Copy the array
        nums = arr.slice();

        // Base
        if (nums.length == 1) {
            return nums[0];
        }
    
        // Check the numbers and remove the smaller one
        if (nums[0] < nums[1]) {
            nums.splice(0,1);
        } else {
            nums.splice(1,1);
        }

        return findMax(nums);
}