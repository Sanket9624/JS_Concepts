// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// Map has unique value
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //it don't consider this bcoz it repeated


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); //It won't work bcoz it is obj can not iterate throgh for of loop.
    
// }


//for in loop

const myObject1 = {
            js: 'javascript',
            cpp: 'C++',
            rb: "ruby",
            swift: "swift by apple"
        }
        
        for (const key in myObject1) {
            console.log(`${key} shortcut is for ${myObject1[key]}`);
        }
        
        const programming = ["js", "rb", "py", "java", "cpp"]
        
        for (const key in programming) {
            // console.log(programming[key]);
        }
        
// We can not iterate Map through for..in loop


        // const map1 = new Map()
        // map1.set('IN', "India")
        // map1.set('USA', "United States of America")
        // map1.set('Fr', "France")
        // map1.set('IN', "India")
        
        // for (const key in map1) {
        //     console.log(key);
        // }

