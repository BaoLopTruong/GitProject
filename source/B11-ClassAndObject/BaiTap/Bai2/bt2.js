html="";
let DoC = new Temperature(25);
html+="Độ C: " + DoC.doC;
html+="<br> Độ F: " + DoC.CsangF();
html+="<br> Độ K: " + DoC.CsangK();

document.getElementById('show').innerHTML = html;