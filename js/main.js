// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
// // Change code above this line
//      console.log(words);
//   return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let totalPrice;
//     totalPrice = Number(message.split(' ').length) * pricePerWord;
//     // totalPrice = Number(message.lenghth.split(' ')) * pricePerWord;
//     console.log(totalPrice);
//     return totalPrice;
//     // console.log(Number(totalPrice.length) * pricePerWord);
    

//     // for (let i = 0, i < message.length; i+=1){
        
//     // }


//    // Change code above this line
// }
// function slugify(title) {
//   // Change code below this line
//     let titleNormal = title.toLowerCase();
//     const slug = titleNormal.split(' ').join('-');
//     console.log(slug);


//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// console.log(nonExtremeEls);


// const lastThreeEls = fruits.slice(-3);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray).slice(0,maxLength);
//     console.log(newArray);

        
    
//     // if newArray.length === maxLength{
//     //   return newArray;
//     // }
//     // if newArray.length >= maxLength {
//     //   newArray = firstArray.concat(secondArray).slice(0,maxLength);
//     //   return newArray;

//     // }
    


//     // Change code above this line
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray();
// console.log('Проверка 2');
const arr = ['first', 'second', 'third longish item'];

let lgth = 0;
let longest;

for(let i=0; i < arr.length; i+=1){
    if (arr[i].length > lgth) {
        
        lgth = arr[i].length;
        console.log(lgth);
        longest = arr[i];
    }      
} 

console.log(longest);



// function findLongestWord(string) {
//     let arrayString = string.split(" ");
//     console.log(arrayString);

//     for (let i = 0; i < arrayString.length; i += 1) {
//         console.log(arrayString[i].length);
//     }
//     for ( )
// }
    
// findLongestWord("Google do a roll");
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function calculateTotal(number) {
//     // Change code below this line
//     // console.log('ghbdtn');
//     // const numberNumber = Number(number);
//     let summaNumber = 0;

//     // console.log(number);

//     //     for (let i = 0; i <= number; i += 1){
//     //         summaNumber += i;
//     //     }
        
//     //         for (let i = 0; i <= target; i += 1) {
//     //   sum += i;
//     // }

//     // console.log(sum);
   

//     // if ( )

//     for (let i = 1; i <= number; i += 1) {
//         summaNumber += i;
    
//         // }
//     }
//         console.log(summaNumber);
// }


//   // Change code above this line


// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);