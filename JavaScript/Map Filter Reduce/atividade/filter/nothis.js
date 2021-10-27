const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = myArray.filter((x) => x % 2 === 0 && x !== 0)

console.log(newArray)
