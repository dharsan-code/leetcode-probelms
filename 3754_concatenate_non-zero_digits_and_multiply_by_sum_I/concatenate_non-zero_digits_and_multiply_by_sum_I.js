var sumAndMultiply = function(n) {
    let a = n.toString().split("");
    let res = [];
    let sum = 0;

    for(i =0; i<a.length;i++){
        if(a[i] > 0){
           res.push(parseInt(a[i]));
           sum += parseInt(a[i]);
        }
    }

    
    let res1 = res.join("")*sum;
    return res1;
};