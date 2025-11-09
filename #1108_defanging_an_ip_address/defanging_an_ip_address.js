var defangIPaddr = function(address) {
    address.split("");
    let arr = [];
    for(i=0;i<address.length;i++){
        if(address[i] === '.'){
            arr.push("[.]");
        }else{
            arr.push(address[i]);
        }
    }
    return arr.join("");
}