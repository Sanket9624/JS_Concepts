const myArr = [1,2,3,4,5];

// console.log(myArr);

const newArr = new Array(1,2,3,4)

// console.log(newArr);
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, spice
// difference between slice and spice is that you can get piece of item from existing array without modifying existing array in slice but in spice it modify existing array and change it's value using removing,replacing or adding.

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// console.log(marvel_heros);
// console.log(dc_heros);


const all_new_heros = [...marvel_heros, ...dc_heros] //spread method
 
//you can add more than two array using spred method  and add two method there is two another methods push and concat.

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // It give a new array to transfer all sub array of array into one array.
console.log(real_another_array)
console.log(another_array)



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));