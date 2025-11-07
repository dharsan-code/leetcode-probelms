var removeDuplicates = function(nums) {
    c=1
    li=[]
    li[0]=nums[0]
    for(i=1;i<nums.length;i++){
      if(li[li.length-1]!=nums[i]){
        li.push(nums[i])
        c++;
      }
      
    }
    
    for(i=0;i<li.length;i++){
        nums[i]=li[i]
    }
    console.log(c)
    return c
};