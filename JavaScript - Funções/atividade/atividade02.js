function isEven(array){
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++){

        if (array[i] === 0){
            console.log("Já é zero");
        }else if (array[i] % 2 === 0){
            array[i] = 0;
        }
    }
    return array;
}

function write(expression){
    return console.log(expression);
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
let isVoid = []
let isNull = null;
let isFalse = false;
let isUndefined = undefined;

write(isEven(arr));
write(isEven(isVoid));
write(isEven(isNull));
write(isEven(isFalse));
write(isEven(isUndefined));
