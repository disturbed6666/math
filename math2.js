function ProvjeraIspis() {
    var ime=document.getElementById("prvi").value;
    var godine=document.getElementById("drugi").value;
    if(godine<18){
        alert("Upišite veću godinu");
    }
    else if(godine>99){
        alert("Upišite manju godinu");
    }
    else {
        document.getElementById("novip").innerHTML += godine + " ";
    }
    if(ime.length<10){
        alert("Upišite dulje ime");
    }
    else {
        document.getElementById("novip").innerHTML += ime + " ";
    }

}