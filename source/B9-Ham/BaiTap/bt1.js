
function check(){
    let gets = document.getElementById('choose').value;
    if(gets == 'meters'){
        return true;
    }
    else{
        return false;
    }
}
check();
function MetersToFeet(foot){
    
  
    return foot= foot *3.279;
}



function FeetToMeters(meters)
{
   
    return meters = meters *0.305;
}

function show(){
    let getInput = parseFloat( document.getElementById('input').value);
    let gets = document.getElementById('choose').value;
    console.log(gets);
    if(gets == 'meters'){
       let S= FeetToMeters(getInput);
       console.log(S);
       document.getElementById('results').innerHTML = S ;
    }
    else if(gets == 'feet'){
        let S =MetersToFeet(getInput);
        console.log(S);
        document.getElementById('results').innerHTML = S ;
    }

}


let getInput = parseFloat( document.getElementById('input').value);
let gets = document.getElementById('choose').value;
console.log(gets);

function checkinput(value){
   if(value < 0 ){
      return false;
   }
   return true;
}

function Converts(){
    var value = parseFloat(document.querySelector("#amount").value);
    var change = document.getElementById("sl2").value;
    var current = document.getElementById("sl1").value;
  
    console.log(value  + current + change);

if(current== "met"){
    switch(change){
    case "feet": 
        let S= value *3.279;
        console.log(S);
        document.querySelector("#kqua").innerHTML = S ;
        break;
    
    case "met":
        
        document.querySelector("#kqua").innerHTML = value ;
        break;
        
    }
}
else if(current == "feet"){

    switch(change){
        case "feet": 
            
             document.querySelector("#kqua").innerHTML = value ;
            break;
        
        case "met":
            let S= value * 0.305;
            console.log(S);
            document.querySelector("#kqua").innerHTMLL = S ;
            break;
          
        
            
        }

}
}