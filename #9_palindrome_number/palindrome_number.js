var isPalindrome = function(x) {

    s=x.toString()
    d=s.split('').reverse().join('')
    if(s==d){
        return true
    }
    console.log(d);
    return false;
};