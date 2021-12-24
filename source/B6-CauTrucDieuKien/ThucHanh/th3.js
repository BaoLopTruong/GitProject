// bài 1:
function checkbrower(){
    let browser = document.getElementById('browser').value;
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}
}

function numberfunction(){
    let a = parseInt( document.getElementById('numbers').value );
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }
}

function checknumberfunction(){

    let value = parseInt( document.getElementById('numberss').value);
    if (value > 0) {
        alert(1);
    } else if (value < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

