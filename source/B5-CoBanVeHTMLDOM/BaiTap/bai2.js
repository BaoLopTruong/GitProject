function Converts(){

    var money = parseFloat(document.querySelector("#amount").value);
    var change = document.getElementById("sl2").value;
    var current = document.getElementById("sl1").value;
  
    console.log(money + change + current);

if(current== "VND"){
    switch(change){
    case "USD": 
    
        var results = money * 0.000044;
        document.querySelector("#kqua").innerHTML = results+ " USD";
        console.log(results + " USD");
        break;
    
    case "VND":
       
            var results = money * 1;
            document.querySelector("#kqua").innerHTML = results+ " VND";
            console.log(results + " VND");
            break;
        
    }
}
else if(current == "USD"){

    switch(change){
        case "USD": 
        
            var results = money * 1;
            document.querySelector("#kqua").innerHTML = results+ " USD";
            console.log(results + " USD");
            break;
        
        case "VND":
           
                var results = money * 22.955;
                document.querySelector("#kqua").innerHTML = results+ " VND";
                console.log(results + " VND");
                break;
            
        }

}


// if(current == "VND" && change== "VND"){
//     var results = money * 1;
//             document.querySelector("#kqua").innerHTML = results;
//             console.log(results);
// }

}