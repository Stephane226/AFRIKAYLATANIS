//Function on mouse oversss & mouseout for BG CLRS

var initialColor0 = document.getElementById("lovebf").style.fill;
document.getElementById("lovebf").addEventListener("mouseover", function(){
    var initialColor = document.getElementById("lovebf").style.fill;
    document.getElementById("lovebf").style.fill = "white";
    document.getElementById("burkina").style.backgroundColor = initialColor;
})
document.getElementById("lovebf").addEventListener("mouseout", function(){

    var initialColor = document.getElementById("lovebf").style.fill;
    document.getElementById("lovebf").style.fill = initialColor0;
    document.getElementById("burkina").style.backgroundColor = "#444";
})
//Fin De La Founction
