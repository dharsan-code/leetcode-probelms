var sortColors = function(nums) {
    for(i=0;i<=nums.length;i++){
        for(j=i + 1;j<=nums.length;j++){
            if(nums[i]>nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
};