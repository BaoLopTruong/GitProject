function checkaddfunction(){
    let soA = parseInt( document.getElementById('soA').value);
    let soB = parseInt(document.getElementById('soB').value);
    
    let result = (soA + soB < 4) ? 'Below' : 'Over';
    alert(result);
}

function messagefunction(){
    let chuoi =  document.getElementById('chuoi').value;
     let message = (chuoi == 'Employee') ? 'Hello' : (chuoi == 'Director') ?  'Greetings' :(chuoi == '') ? 'No login' :  '';
     alert(message);
}