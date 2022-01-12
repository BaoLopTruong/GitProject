let x=0;
let array = Array();


function addsfunction(){
    array[x] = document.getElementById("input").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("input ").value = "";
}


function displayfunction(){
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}