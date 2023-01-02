const cryptogram = "heloolohh";
const cryptogramArr = [...cryptogram];

console.log(cryptogramArr);

Del = (String) => {
  for(k = 0; k < String.length; k++){
    for(i = 0; i < String.length; i++){
      if(String[i] === String[i+1]){
        String.splice(i,2);
      }
    }
  }
  
  return String;
}

console.log(Del(cryptogramArr));