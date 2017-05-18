function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "Value too large";
    } else if(document.getElementById("id1").value === ""){
        txt = "Ama bas niis nisi unio";
    }else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}