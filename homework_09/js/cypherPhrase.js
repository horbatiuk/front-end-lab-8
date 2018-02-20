function cypherPhrase(charactersMap, str) {
    function transform(ell) {
        for (var prop in charactersMap) {
            if(prop==ell) {
                return charactersMap[prop];
            }
        }
        return ell;
    }
    return getTransformedArray(str, transform).join('');
}


function forEach(arr, func) {
    for(var i = 0; i<arr.length; i++) {
        func(arr[i]);
    }
}

function getTransformedArray(arr, func) {
    var temp = [];
    forEach(arr, push);
    function push(num) {
        temp.push(func(num));
    }
   return temp;
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
console.log(cypherPhrase(charactersMap, 'kitty cat' )); // -> “kiggy dog”



    