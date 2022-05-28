window.addEventListener('load',bindEvents);
function bindEvents(){
    button=document.getElementById('btn');
    button.addEventListener('click',salary)
}
function salary(){
    var a=document.getElementById("Basic").value;
    var hra=(a*0.50);
    var ta=(a*0.40);
    var da=(a*0.20);
    var ma=(a*0.24);
    var pf=(a*0.10);
    var gs=+hra+ +ta+ +da+ +pf+ +ma;

    var tax;
    if(gs>500000 && gs<=700000){
        tax=a*0.1;
    }
    else if(gs>70000 && gs<900000){
        tax=a*0.2;
    }
    else if(gs>=900000){
        tax=a*0.3;
    }
    else{
        tax=a*0;
        console.log("No Tax");
    }
    console.log("Tax is",tax);
    var net=gs-tax-pf;
    document.getElementById("HRA").value=hra;
    document.getElementById("DA").value=da;
    document.getElementById("TA").value=ta;
    document.getElementById("MA").value=ma;
    document.getElementById("PF").value=pf;
    document.getElementById("GS").value=gs;
    document.getElementById("Tax").value=tax;
    document.getElementById("Net").value=net;
}