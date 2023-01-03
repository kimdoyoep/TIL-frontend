const word = "i love you";

// ReverseWord = word => {
//   const normalWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   const copyNormalWord = [...normalWord];
//   const reverseWord = copyNormalWord.reverse();
//   const fnWord = [...word];

//   for(i = 0; i < normalWord.length; i++){
//     if(normalWord[i] !== reverseWord[i]){
//       normalWord[i] = reverseWord[i];
//     }
//   }
// }

const normalWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const copyNormalWord = [...normalWord];
  const reverseWord = copyNormalWord.reverse();
  const fnWord = [...word];

  for(i = 0; i < normalWord.length; i++){
    if(normalWord[i] !== reverseWord[i]){
      normalWord[i] = reverseWord[i];
    }
  }

console.log(normalWord)



