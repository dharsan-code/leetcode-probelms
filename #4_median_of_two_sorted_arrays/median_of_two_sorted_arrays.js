var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1.sort((a, b) => a - b);
    let len = nums1.length;

    if (len % 2 === 1){
        return nums1[Math.floor(len / 2)];
    }else{
        let a = nums1[len / 2 - 1];
        let b = nums1[len / 2];
        return (a+b)/2;
    }
};