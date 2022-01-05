function myfunction(){
    var input = document.getElementById('input').value;
    var count =0;
    var N = 2;

    while(count < input){
        if(N % 2 != 0){
           
            console.log(N + " ");
         
            document.getElementById('kqua').innerHTML += N + ", ";
            count ++;
        }
        
        N++;
    }

}