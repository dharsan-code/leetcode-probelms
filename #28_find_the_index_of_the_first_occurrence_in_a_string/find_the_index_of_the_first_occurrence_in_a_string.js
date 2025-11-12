var strStr = function(haystack, needle) {
    for(i=0; i <= haystack.length - needle.length; i++){
        let equals = true;
        for(j=0;j<needle.length; j++){
            if(haystack[i+j] !== needle[j]){
                equals = false;
            }
        }
        if(equals){
            return i;
        }
    }
    return -1;
};