
function reverseString(str){
    var newString ="";
    for(var i = str.length -1; i >= 0; i-- ){
        newString += str[i];
    }
    return newString;
}


function myfunction(){
    var daoso=  document.getElementById('input').value;
    // var news = reverseString(daoso);
    // console.log(news);
    var newString ="";
    for(var i = daoso.length -1; i >= 0; i-- ){
        newString += daoso[i];
    }
    
   console.log(newString);
    document.getElementById('kqua').innerHTML = "Kết quả: " + newString;
 
}

