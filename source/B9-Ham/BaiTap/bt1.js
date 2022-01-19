
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



