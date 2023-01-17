// const word = "I love you and I want to be with you in the cold December snow";

// ReverseWord = word => {
//   const normalWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   const copyNormalWord = [...normalWord];
//   const reverseWord = copyNormalWord.reverse();
  
//   const normalWordCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   const copyNormalWordCap = [...normalWordCap];
//   const reverseWordCap = copyNormalWordCap.reverse();

//   const fnWord = [...word];

//   for(k = 0; k < fnWord.length; k++){
//     for(i = 0; i < normalWord.length; i++){
//       if(fnWord[k] === normalWord[i]){
//         fnWord[k] = reverseWord[i];
//         break;
//       }else if(fnWord[k] === normalWordCap[i]){
//         fnWord[k] = reverseWordCap[i];
//         break;
//       }else if(fnWord[k] === ' '){
//         fnWord[k] = ' ';
//         break;
//       }else{
//         continue;
//       }
//     }
//   }
//   return fnWord.join("");
// }

// console.log(`word : "${word}}"`)
// console.log(`result : "${ReverseWord(word)}"`);
