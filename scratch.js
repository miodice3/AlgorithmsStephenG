// function vowels(str){
//     let vowels = {"a": true,"e": true,"i": true,"o": true,"u": true}

//     let count = 0;

//     str.toLowerCase().split("").forEach(c=>{
//         if (vowels[c]){
//             count = count + 1
//         }
//     })

//     console.log(count);
//     return count;

// }

function vowels(str){

    let counter = 0;

    let variablesToCheck = "aeiou"

    str.toLowerCase().split("").forEach(n=>{
        if (variablesToCheck.includes(n)){
            counter += 1
        }
    })
    // console.log(counter)
    return counter;
}

vowels("HELLOS")
//write a function that returns the number of vowels used in a string.

// *************************
//pyramid steps - recursive solutin:
// function pyramid(n, orig = n){

//     if (n === 0){
//         return;
//     }

//     if (n === 1){
//         return console.log("#".repeat((1 + (orig-1)*2)))
//     }
//     let returnString = "";
//     returnString = " ".repeat(n-1)+"#".repeat((n==orig ? 1 : 1 + (orig-n)*2))+" ".repeat(n-1);
//     console.log(returnString)

//     pyramid(n-1, orig)
// }

// pyramid(5);

// "  #  "  1,2,X,4,5, 3-row# = spaces
// " ### "  1,X,X,X,5  3-row# = spaces
// "#####"  X,X,X,X,X  3-row# = spaces

//pyramid steps, non recursive, iterative solution.

// function pyramid(n){

//     for (let i = 1; i <= n; i++){
//         console.log(" ".repeat(n-i)+"#".repeat((i == 1 ? 1 : 1+(i-1)*2))+" ".repeat(n-i));
//     }

// }

// pyramid(7);
// "  #  "  1,2,X,4,5, 3-row# = spaces
// " ### "  1,X,X,X,5  3-row# = spaces
// "#####"  X,X,X,X,X  3-row# = spaces

// *************************

//recursive steps solution:
// function steps(n, orig = n){

//     if (n <= 0){
//         return;
//     }
//     console.log("#".repeat(orig-n+1)+" ".repeat(n-1))

//     steps(n-1, orig)

// }

// steps(5);

// recursion attempt:
// function count(n){
//     console.log(n);
//     if (n > 0){
//         count(n-1)}
// }

// count(5);

// *************************

// function steps(n){
//     for (let i = 1; i <= n; i++){
//         console.log("#".repeat(i) + " ".repeat(n-i))
//     }
// }

// steps(5);

// *************************

// function capitalize(str){
//     //string split on empty space into array
//     let ray = str.split(" ")
//     return ray.map(n=>{
//         return (n.charAt(0).toUpperCase()+ n.slice(1))
//     }).join(" ")
// }

// capitalize("this is a test sentence")

// *************************

// function anagrams(stringA, stringB){

//     let obj1 = string(stringA);
//     let obj2 = string(stringB);

//     let match = true
//     let end = false

//     if (Object.keys(obj1).length != Object.keys(obj2).length){
//         return false
//     }

//     for (let char in obj1){
//         if (obj1[char] !== obj2[char]){
//             return false
//         }
        
//     }
//     // console.log("anagram? ", match)
//     return match;
// }

// function string(string){
//     let obj = {};
//     string.replace(/[^\w]/g, "").toLowerCase().split("").forEach(n=>{
//         obj[n] = obj[n]++ || 1
//     })
//     return obj
// }

// anagrams("aaerbFcd", "aaezrbFcd")

// *************************

// function chunk(ray, size){
//     let returnRay = [];
//     let subArray = [];

//     ray.forEach((n, index)=>{
//         if (index % size === 0 && index !== 0){
//             returnRay.push(subArray);
//             subArray = [];
//             subArray.push(n);
//         } else {
//             subArray.push(n);
//         }
//     })

//     if (subArray.length >= 1){
//         returnRay.push(subArray)
//     }
//     return returnRay;
// }

// function chunk(ray, size){
//     let subArray = [];
//     let returnRay = [];
//     let firstIndex = 0;
//     let lastIndex = 0;

//     ray.forEach((n, index)=>{
//         if ((index + 1) % size === 0 && index !== 0){
//             firstIndex = index + 1 - size;
//             lastIndex = index + 1;
//             returnRay.push(ray.slice(firstIndex, lastIndex));
//             subArray = [];
//         } else {
//             subArray.push(n);
//         }
//     })

//     if (subArray.length >= 1){
//         returnRay.push(subArray)
//     }
//     return returnRay;
// }

// function chunk(ray, size){

//     let index = 0;
//     let returnRay = [];

//     while (index <= ray.length){
//         if (ray.slice(index, index+size).length >= 1){
//         returnRay.push(ray.slice(index, index+size))
//         }
//         index = index + size;
//     }
//     return returnRay;
// }

// chunk([1, 2, 3, 4], 2)
// chunk([1, 2, 3, 4, 5], 2)
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// chunk([1, 2, 3, 4, 5], 4)
// chunk([1, 2, 3, 4, 5], 10)



// *************************

// function fizzBuzz(n){
//     //console log 1 to n, multiple of 3 fizz, 5 buzz, of both fizzbuzz.

//     for (let i = 1; i <= n; i++){
//         if (i % 15 == 0){
//             console.log("fizzBuzz")
//         } else if (i % 5 == 0){
//             console.log("buzz")
//         } else if (i % 3 == 0){
//             console.log("fizz")
//         } else {
//             console.log(i)
//         }
//     }
// }


// fizzBuzz(30);


// *************************

// function maxChar(string){

//     let object = {};

//     string.split("").forEach(x=>{
//         object[x] = (object[x] || 0) + 1;
//     })
//     let mostFrequent = Object.keys(object).reduce((a, b)=>{ return object[a] > object[b] ? a :  b });
//     console.log(object, "most frequent char is: ", mostFrequent)
//     return mostFrequent;
// }

// function maxChar(string){

//     let charMap = {};

//     string.split("").forEach(x=>{
//         charMap[x] = (charMap[x] || 0) + 1;
//     })
//     let mostFrequent = "";
//     let currentHighest = 0;

//     Object.keys(charMap).forEach(x=>{
//         if (charMap[x] > currentHighest){
//             currentHighest = charMap[x];
//             mostFrequent = x;
//         }
//     })

//     console.log(charMap, "most frequent char is: ", mostFrequent)
//     console.log(Object.keys(charMap))
//     return mostFrequent;
// }


// maxChar("abcdefgaa1111111BBBBBBBBBBBb")
// maxChar("AAABBBCCC")
// maxChar("BBBCCCAAA")



// *************************

// function reverseInt(n){
//     // console.log(int)
//     if (n !== 0){
//         let stringReturn = n.toString().split("").reverse().join("");

//         if (Math.sign(n) === -1){
//             stringReturn = "-" + stringReturn
//         }
//         // console.log(stringReturn)
//         return parseInt(stringReturn);
//     } else {
//         return n;
//     }
  
//   }
  
  
//   console.log("test results:")
//   console.log(reverseInt(15) === 51)
//   console.log(reverseInt(981) === 189)
//   console.log(reverseInt(500) === 5)
//   console.log(reverseInt(-15) === -51)
//   console.log(reverseInt(-90) === -9)
//   console.log(reverseInt(0) === 0)

//   console.log(parseInt("00550000"))