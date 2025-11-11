var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let a = s.split("");

    for (let i = 0; i < a.length; i++) {
        let b = [];

        for (let j = i; j < a.length; j++) {
            if (b.includes(a[j])) {
                break;
            } else {
                b.push(a[j]);
                if(max < b.length){
                    max = b.length;
                }
            }
        }
    }

    return max;
};