// Write your code below

// let unique = true
// function hasUniqueChars(str){
//     const splitStr = str.split('')
//     for (i = 0; i < splitStr.length; i++){
//         for (j = 0; j < splitStr.length; j++){
//             if (splitStr[0] !== j) {
//                 if (i === j)
//                return unique = false 
//             }
//         }
//     }
// }

// Okay, so the above wasn't working and I realized it was totally different from the solution lol, so I did some more reading on sets and I think I'm good there now. 
// Out of curiosity, even though it's obviously not the most efficient way of writing the code, 
// I'd be interested to see if there *is* a way to make the ideas I was trying to mess above with work?


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    console.log(uniqueChars)
    return uniqueChars.size === word.length
    
  }
  

