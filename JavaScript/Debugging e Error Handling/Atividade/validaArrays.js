function validaArray(arr,num){

    try {
        if (!arr && !num) throw new ReferenceError("parameters not send")

        if(typeof arr !== 'object') throw new TypeError(`${arr} is not an object. An object is expected`);

        if(typeof num !== 'number') throw new TypeError(`${num} is not a number. A number is expected`)

        if (arr.length !== num) throw new RangeError(`array length differs from number.`);

        return arr;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("This is a ReferenceError")
            console.log(error.message)
        }else if(error instanceof TypeError){
            console.log("This is a TypeError")
            console.log(error.message)
        }else if(error instanceof RangeError){
            console.log("This is a RangeError")
            console.log(error.message)
        }else{
            "Unknown error type: " + error;
        }
    }
}

console.log(validaArray());
console.log(validaArray(5,5));
console.log(validaArray([5],"a"));
console.log(validaArray([5],2));
console.log(validaArray([5,1],2));
