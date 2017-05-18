function funkcija122(){
    var broj = Math.random();
    if (broj >= 0 && broj <= 200){
        document.getElementById("id2").style.color = "blue";
    } else if(broj >= 201 && broj <=400){
        document.getElementById("id2").style.color = "red";
    } else if(broj >= 401 && broj <=600){
        document.getElementById("id2").style.color = "green";
    }else if(broj >= 601 && broj <=1000){
        document.getElementById("id2").style.color = "black";
    }
}