const myArray = [1, 2, 3, 4, 5, 6]
const one = {
    value: 1
}
const two = {
    value: 2
}
const three = {
    value: 3
}
const tenpercent = {
    value: .1
}
const plusfifty = {
    value: 1.5
}

function mapThis(arr,arg){
    const newArray = arr.map((item) => item * arg.value)

    return newArray
}
console.log(mapThis(myArray,plusfifty))
