
//An onject to hold Country Data
var BurkinaFaso = {
    Cname:"Burkina Fasobhg",
    flag:"images/countries/burkina/circle-cropped-6.png",
    
    img1:"images/countries/burkina/circle-cropped-6.png",
    img2:"images/countries/burkina/img2",
    img3:"images/countries/burkina/img3",
    img4:"images/countries/burkina/img4",
    lang:"Fransizca",
    money:"Fransiz Frangi",
    gdp:"29.000.000$",
    riche:"Altin",
    capital:"Ouagadougou",
    control:"Cumhukjhghriyet",
    pop:"20.000.000",
    sup:"174.00km2",
    ind:"5 Agustos 1960",

    textA:"Batı Afrika standartlarına göre gelişmekte olan Burkina Faso,tekrarlayan kuraklık ve askeri darbelerden oldukça  mustaripti  Geçmişte Fransız sömürgesi olan ülke 1960 yılında  Yukarı Volta adıyla bağımsızlığa kavuşmuştur. 4 Ağustos 1983 tarihinde Afrika’nın en büyük liderleri arasında kabul ve saygı  gören  Thomas Sankara ülke yönetimini  ele almıştır. Ülkeyi yönetmeye başladığı andan itibaren bir çok yeni devrime imza atan Sankara ülkenin ismini Burkina Faso olarak değiştirmiştir. Onurlu insanların yaşadığı anayurt anlamına gelen Burkina Faso da, önemli altın rezervleri var, ancak bütün Afrika’nın geçmişte  derin  yaralar aldığı  sömürgecilik anlayışından  kaynaklı  ülkede hala rezervleri işletebilecek milli şirketler bulunmamaktadır"
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
    document.getElementById("capital").innerHTML = BurkinaFaso.capital;
    document.getElementById("money").innerHTML = BurkinaFaso.money;
    document.getElementById("dil").innerHTML = BurkinaFaso.lang;
    document.getElementById("richess").innerHTML = BurkinaFaso.riche;
    document.getElementById("pop").innerHTML = BurkinaFaso.pop;
    document.getElementById("sup").innerHTML = BurkinaFaso.sup;
    document.getElementById("gross").innerHTML = BurkinaFaso.gdp;
    document.getElementById("inde").innerHTML = BurkinaFaso.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data


var Algerie = {
    Cname:"Cezair",
    flag:"images/countries/",
    
    img1:"images/countries/",
    img2:"images/countries/",
    img3:"images/countries/",
    img4:"images/countries/",
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",
    text:'Coğrafi konum olarak Afrika ve Avrupa arasında bir kapı olan cezayir , gectigimiz yarım yüz yıl boyunca ağır bir şekilde sömürülmüş ve zarar görmüş bir ülkedir. Cezayir’in Fransız sömürge yönetimine karşı bağımsızlık mücadelesi sırasında ölenlerin sayısı ile ilgili çelişkili raporlar bulunmaktadır. Fransız tarihçiler 400.000 Cezayirlinin öldürüldüğünü tahmin ederken, Cezayir hükümeti bir milyondan fazla insanın öldüğünü açıklamıştır. Ülkede daha sonra iç çatışmalar ve karışıklıklar meydana gelmiştir. İslamcı kesimin kazanacağı düşünülen secim iptal edilmiştir ve bunun sonucu olarak hala küçük çaplı isyanlar ülkede hakimdir. Cezayir topraklarının yüzde 80’i çöl bölgesi Sahra’da yer almaktadır. Aynı zamanda Afrika kıtasının yüzölçümü olarak en büyük ülkesidir. Cezayir’de bulunan petrol ve gaz rezervleri 1950’lerde keşfedildi ,dünyanın en fazla petrol rezervine sahip ülkelerden biri olarak öne çıkıyor. 2)Angola Afrika\'nın en büyük petrol üreticilerinden Angola, bağımsızlığını kazandıktan sonra ülkeyi tahrip eden 27 yıllık bir iç savaşın fiziksel, sosyal ve politik mirasıyla mücadele etmeye çalışıyor. Angola’da ortaya çıkan iç savaş Angola\'nın Portekiz sömürgesinden 1974\'te kurtulması sonucu oluşmuş bir ihtilaftır. Afrika\'nın en uzun süren anlaşmazlığıdır. 2002 yılında resmen biten ve 27 yıl süren savaş, bitene kadar yarım milyon insanın ölümüne ve binlerce insanın da göçüne sebep olmuştur. Angola\'nın petrol zenginliğinin büyük kısmı, on yıllardır süren ayrılıkçı çatışmanın büyük çoğunluğunun yaşandığı Cabinda eyaletinde bulunmaktadır.'
    
}

    
   
//Function on clicking one Country on the list
document.getElementById("cez").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Algerie.Cname;
    document.getElementById("imgFlag").src = Algerie.flag;
    document.getElementById("textarea").innerHTML = Algerie.text;
     //galery 4images change
    document.getElementById("img1").src = Algerie.img1;
    document.getElementById("img2").src = Algerie.img2;
    document.getElementById("img3").src = Algerie.img3;
    document.getElementById("img4").src = Algerie.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Algerie.capital;
    document.getElementById("money").innerHTML = Algerie.money;
    document.getElementById("dil").innerHTML = Algerie.lang;
    document.getElementById("richess").innerHTML = Algerie.riche;
    document.getElementById("pop").innerHTML = Algerie.pop;
    document.getElementById("sup").innerHTML = Algerie.sup;
    document.getElementById("gross").innerHTML = Algerie.gdp;
    document.getElementById("inde").innerHTML = Algerie.ind;
    

})

