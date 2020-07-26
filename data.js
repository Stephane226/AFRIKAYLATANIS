
//An onject to hold Country Data
var BurkinaFaso = {
    Cname:"Burkina Faso",
    flag:"images/countries/burkina/circle-cropped-6.png",
    textA:"Burkina Faso is a good and beautiful country.it is localated in the west of africa",
    img1:"images/countries/burkina/circle-cropped-6.png",
    img2:"images/countries/burkina/img2",
    img3:"images/countries/burkina/img3",
    img4:"images/countries/burkina/img4",

    lang:"Fransizcan",
    money:"Fransiz Frangin",
    gdp:"29.000.000$",
    rich:"Altinn",

}
//Function on clicking one Country on the list
document.getElementById("burkina").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = BurkinaFaso.Cname;
    document.getElementById("imgFlag").src = BurkinaFaso.flag;
    document.getElementById("textarea").innerHTML = BurkinaFaso.textA;
     //galery 4images change
    document.getElementById("img1").src = BurkinaFaso.img1;
    document.getElementById("img2").src = BurkinaFaso.img2;
    document.getElementById("img3").src = BurkinaFaso.img3;
    document.getElementById("img4").src = BurkinaFaso.img4;

    //changing od quick information
    document.getElementById("lang").innerHTML = BurkinaFaso.lang;
    document.getElementById("money").innerHTML = BurkinaFaso.money;
    document.getElementById("gdp").innerHTML = BurkinaFaso.gdp;
    document.getElementById("rich").innerHTML = BurkinaFaso.rich;

})