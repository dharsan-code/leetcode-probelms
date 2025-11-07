var twoSum = function(nums, target) {
    res=[];
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
           if(nums[i] + nums[j]==target){
              res.push(i,j);
              return res;
           }
        }
    }
};