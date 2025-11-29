var isValid = function(s) {
    let array = [];

    for(i=0;i<s.length;i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            array.push(s[i])
        }else if(s[i] == ')' || s[i] == ']' || s[i] == '}'){
            if(array.length == 0){
                return false;
            }
            let current = array.pop();
            if(current == '(' && s[i] !== ')' ||
               current == '[' && s[i] !== ']' ||
               current == '{' && s[i] !== '}'){
                return false
            }
        }
    }
    return array.length == 0;
};