function myfunction(){
    var input = document.getElementById('input').value;
    var count =0;
    var N = 2;
    document.write("Result: " );
    while(count < input){
        if(N % 2 != 0){
           
            console.log(N + " ");
            document.write (N + " ");
            //document.getElementById('kqua').innerHTML = N + ", ";
        }
        count ++;
        N++;
    }

    // for(;count < input ; count++){
    //     if(N % 2 != 0){
          
    //         document.getElementById('kqua').innerHTML = "Kết quả" + N + ", ";
           
    //     }
    //     N++;
    // }
}