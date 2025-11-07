var reverse = function(x) {
    const Negative = x<0;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if (reversed > 2 ** 31 - 1){
        return 0;
    }

    return Negative ? -reversed : reversed;
    

};