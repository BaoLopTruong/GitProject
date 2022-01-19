

function isPalindrome(str) {

	let arr = str.split("");
  
  let firstCharacter = arr[0];
  let lastCharactor = arr[arr.length-1];
  
	if (firstCharacter === lastCharactor) {
    arr.shift();
  	arr.pop();
    if (isEnd(arr)) {
	  	return true;
	  } else {
      let newStr = arr.join("");
    	return isPalindrome(newStr);
    }
  }
  
  return false;
    
}

function isEnd(arr) {
	return arr.length === 0 || arr.length === 1;
}

function doixung(){
    let chuoi = document.getElementById('input').value;
    if(isPalindrome(chuoi)){
        alert("Chuỗi đối xứng");
    }
    else{
        alert("Chuỗi không đối xứng.")
    }
}