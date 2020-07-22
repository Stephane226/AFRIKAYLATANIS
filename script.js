//Function on mouse oversss & mouseout for BG CLRS

var initialColor0 = document.getElementById("lovebf").style.fill;
document.getElementById("lovebf").addEventListener("mouseover", function(){
    var initialColor = document.getElementById("lovebf").style.fill;
    document.getElementById("lovebf").style.fill = "white";
    document.getElementById("burkina").style.backgroundColor = initialColor;
})
document.getElementById("lovebf").addEventListener("mouseout", function(){
    document.getElementById("lovebf").style.fill = initialColor0;
    document.getElementById("burkina").style.backgroundColor = "#444";
})
                       //Function de la Liste Mouse over & Out Related to maps
document.getElementById("burkina").addEventListener("mouseover", function(){
    
    document.getElementById("lovebf").style.fill = "white";
})
document.getElementById("burkina").addEventListener("mouseout", function(){
 document.getElementById("lovebf").style.fill = initialColor0;

})


//Fin De La Founction

//Function on mouse oversss & mouseout for BG CLRS

var initialColor01 = document.getElementById("algerie").style.fill;
document.getElementById("algerie").addEventListener("mouseover", function(){
    var initialColor1 = document.getElementById("algerie").style.fill;
    document.getElementById("algerie").style.fill = "white";
    document.getElementById("cez").style.backgroundColor = initialColor1;
    
})
document.getElementById("algerie").addEventListener("mouseout", function(){
    document.getElementById("algerie").style.fill = initialColor01;
    document.getElementById("cez").style.backgroundColor = "#444";
})
                       //Function de la Liste Mouse over & Out Related to maps
document.getElementById("cez").addEventListener("mouseover", function(){
    
    document.getElementById("algerie").style.fill = "white";
})
document.getElementById("cez").addEventListener("mouseout", function(){
 document.getElementById("algerie").style.fill = initialColor0;

})


//Fin De La Founction
