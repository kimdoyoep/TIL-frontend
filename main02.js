const cryptogram = "heloolohh";
const cryptogramArr = [...cryptogram];

if(cryptogramArr.length >= 1000){
  alert("error : 최대 1000자까지 입력할 수 있습니다.");
}

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