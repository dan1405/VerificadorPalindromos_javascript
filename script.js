const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.querySelector("#result");

/*function palindrome(str){
  let regex = /[^A-Za-z0–9]/g; 
  let lowRegStr = str.replace(regex,'').toLowerCase();
  let reverseStr = lowRegStr.split('').reverse().join('');
  console.log(lowRegStr)
  return reverseStr === lowRegStr;
}*/

const checkPalindrome = (e) => {
 
  if(textInput.value.length == 0){
    alert("Please input a value");
    return false;
  } else {
    let stringRegex = textInput.value.trim().toLowerCase().replace (/[\W+|_\d]/g,""); //(/([^0-9a-z]|\s)/gi, ''); //(/[^A-Za-z0–9+|_]/g,""); //     
    if(stringRegex === stringRegex.split('').reverse().join('')){
      result.innerText = `${textInput.value} is a palindrome`;
    } else {
      result.innerText = `${textInput.value} is not a palindrome`;
    }
  }
}

function alertEmptyInput(){
  if(textInput.value.length == 0){
    alert("Please input a value");
    return false;
  }
}

checkBtn.addEventListener("click", checkPalindrome);
