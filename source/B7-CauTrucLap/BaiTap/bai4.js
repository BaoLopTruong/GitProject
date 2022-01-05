let html = "";

for(let i =1; i <= 10; i++){

    html +="<tr>";
    for(let j = 2; j <10; j++){
        html += "<td>";
        html += j+ " * " + i + " =" + j*i;
        html += "</td>";
    }
    
    html += "</tr>";
}

document.getElementById('bangcuuchuong').innerHTML = html;