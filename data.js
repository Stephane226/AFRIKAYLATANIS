
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

//----------------------country of----------------------------------------
//An onject to hold Country Data
var Angola = {
    Cname:"Angola",
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

    text:"Afrika\'nın en büyük petrol üreticilerinden Angola, bağımsızlığını kazandıktan sonra ülkeyi tahrip eden 27 yıllık bir iç savaşın fiziksel, sosyal ve politik mirasıyla mücadele etmeye çalışıyor. Angola’da ortaya çıkan iç savaş Angola\'nın Portekiz sömürgesinden 1974\'te kurtulması sonucu oluşmuş bir ihtilaftır. Afrika\'nın en uzun süren anlaşmazlığıdır. 2002 yılında resmen biten ve 27 yıl süren savaş, bitene kadar yarım milyon insanın ölümüne ve binlerce insanın da göçüne sebep olmuştur. Angola\'nın petrol zenginliğinin büyük kısmı, on yıllardır süren ayrılıkçı çatışmanın büyük çoğunluğunun yaşandığı Cabinda eyaletinde bulunmaktadır."
}
//Function on clicking one Country on the list
document.getElementById("ang").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Angola.Cname;
    document.getElementById("imgFlag").src = Angola.flag;
    document.getElementById("textarea").innerHTML = Angola.text;

     //galery 4images change
    document.getElementById("img1").src = Angola.img1;
    document.getElementById("img2").src = Angola.img2;
    document.getElementById("img3").src = Angola.img3;
    document.getElementById("img4").src = Angola.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Angola.capital;
    document.getElementById("money").innerHTML = Angola.money;
    document.getElementById("dil").innerHTML = Angola.lang;
    document.getElementById("richess").innerHTML = Angola.riche;
    document.getElementById("pop").innerHTML = Angola.pop;
    document.getElementById("sup").innerHTML = Angola.sup;
    document.getElementById("gross").innerHTML = Angola.gdp;
    document.getElementById("inde").innerHTML = Angola.ind;

})

//----------------------country of----------------------------------------
//An onject to hold Country Data
var benin = {
    Cname:"Benin",
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

    text:"Eski ismiyle Dahomey olarak bilinen Benin, Afrika\'nın en istikrarlı ve sağlam demokrasilerinden biridir. İnsanlık tarihinde özellikle Batı Dünyası\'nın bir utanç kaynağı olan Köle Ticaretinin merkezi haline gelmesi nedeni ile bu coğrafya \"Köle Sahili\" olarak anılmıştır. Bölgeden kölelerin getirdiği kültür ve dinin unsur olan \“Voodoo\" şuan hala Benin\'de ülkenin yıllık Voodoo Günü\'nde kutlanmaktadır ve Amerika\'da da hala mevcuttur. Maalesef ekonomik açıdan bakıldığında Benin’de çok parlak bir tablo söz konusu değildir. Ülke ciddi ölçüde az gelişmiş olduğu için fakirlik oldukça yaygındır. Ülke son birkaç yılda ekonomik büyüme yaşamasına ve Afrika\'nın en büyük pamuk üreticilerinden biri olmasına rağmen, dünyanın en fakir ülkeleri arasında yer alıyor. "
}
//Function on clicking one Country on the list
document.getElementById("ben").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = benin.Cname;
    document.getElementById("imgFlag").src = benin.flag;
    document.getElementById("textarea").innerHTML = benin.text;
     //galery 4images change
    document.getElementById("img1").src = benin.img1;
    document.getElementById("img2").src = benin.img2;
    document.getElementById("img3").src = benin.img3;
    document.getElementById("img4").src = benin.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = benin.capital;
    document.getElementById("money").innerHTML = benin.money;
    document.getElementById("dil").innerHTML = benin.lang;
    document.getElementById("richess").innerHTML = benin.riche;
    document.getElementById("pop").innerHTML = benin.pop;
    document.getElementById("sup").innerHTML = benin.sup;
    document.getElementById("gross").innerHTML = benin.gdp;
    document.getElementById("inde").innerHTML = benin.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var Botswana = {
    Cname:"Botsvana",
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

    text:"Afrika\'nın en istikrarlı ülkelerinden biri olan Botsvana, kıtanın en uzun sürekli çok partili demokrasisidir. Nispeten yolsuzluktan uzaktır ve iyi bir insan hakları siciline sahiptir. Seyrek nüfuslu Botsvana, Afrika\'nın en büyük vahşi yaşam alanlarını sahiptir. Ülkede safari tabanlı turizm önemli bir gelir kaynağıdır. Botsvana dünyanın en büyük elmas üreticisidir ve elmas ihracatı sayesinde orta gelirli bir ülkeye dönüştürmüştür. Bir sürer önce dünyada ve özellikle Afrika’da yaygın olan HIV-AİDS enfeksiyonun dünyadaki en yüksek bir oranına sahipti. BM 2014 rakamları 15-49 yaş arası yetişkinler için yaygınlık oranının% 25 olduğunu göstermektedir. Bununla birlikte, ülke Afrika\'nın en gelişmiş tedavi programlarından birine sahiptir ve virüs için ilaç kolayca temin edilebilmektedir.  "
}
//Function on clicking one Country on the list
document.getElementById("bot").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Botswana.Cname;
    document.getElementById("imgFlag").src = Botswana.flag;
    document.getElementById("textarea").innerHTML = Botswana.text;
     //galery 4images change
    document.getElementById("img1").src = Botswana.img1;
    document.getElementById("img2").src = Botswana.img2;
    document.getElementById("img3").src = Botswana.img3;
    document.getElementById("img4").src = Botswana.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Botswana.capital;
    document.getElementById("money").innerHTML = Botswana.money;
    document.getElementById("dil").innerHTML = Botswana.lang;
    document.getElementById("richess").innerHTML = Botswana.riche;
    document.getElementById("pop").innerHTML = Botswana.pop;
    document.getElementById("sup").innerHTML = Botswana.sup;
    document.getElementById("gross").innerHTML = Botswana.gdp;
    document.getElementById("inde").innerHTML = Botswana.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var Burundi = {
    Cname:"Burundi",
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

    text:"Dünyanın en fakir ülkelerinden biri olan Burundi, 12 yıllık, etnik temelli bir iç savaştan çıkmaya çalışıyor. 1962\'de Belçika’dan bağımsızlıklarını geri aldıklarından bu yana, genellikle baskın Tutsi azınlığı ve Hutu çoğunluğu arasındaki gerginlikle boğuşmuştur. 1994 yılında kıvılcımlanan bir iç savaş, Burundi\'yi Afrika\'nın en zorlu ve kötü sonuçlara sahip olan iç karışıklığıyla yüz yüze bırakmıştır.  "
}
//Function on clicking one Country on the list
document.getElementById("bur").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Burundi.Cname;
    document.getElementById("imgFlag").src = Burundi.flag;
    document.getElementById("textarea").innerHTML = Burundi.text;
     //galery 4images change
    document.getElementById("img1").src = Burundi.img1;
    document.getElementById("img2").src = Burundi.img2;
    document.getElementById("img3").src = Burundi.img3;
    document.getElementById("img4").src = Burundi.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Burundi.capital;
    document.getElementById("money").innerHTML = Burundi.money;
    document.getElementById("dil").innerHTML = Burundi.lang;
    document.getElementById("richess").innerHTML = Burundi.riche;
    document.getElementById("pop").innerHTML = Burundi.pop;
    document.getElementById("sup").innerHTML = Burundi.sup;
    document.getElementById("gross").innerHTML = Burundi.gdp;
    document.getElementById("inde").innerHTML = Burundi.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var cap = {
    Cname:"Kap Verd",
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

    text:" Kuraklığa yatkın, az miktarda ekilebilir araziye sahip olmasından dolayı tarımsal kaynaklı bir ekonomi mevcut değildir. Cape Verde adaları siyasi ve ekonomik istikrarın sağlanmasıyla ün kazanmıştır . Eski Portekiz kolonisi, üçü dağlık olmak üzere 10 ada ve beş adacıktan oluşur. Takımadalar Afrika\'nın batı kıyısına yaklaşık 500 km uzaklıktadır. Bir zamanlar köle ticaretinin yapıldığı en önemli noktalardan biriydi. 20. yüzyıl boyunca şiddetli kuraklıklar 200.000 kişinin ölümüne neden oldu ve ağır göçlere yol açtı. Şuan da ülke içerisinde yaşayan yerli sayısı ülke dışında yaşayan yerli sayısından daha azdır.  "
}
//Function on clicking one Country on the list
document.getElementById("cap").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = cap.Cname;
    document.getElementById("imgFlag").src = cap.flag;
    document.getElementById("textarea").innerHTML = cap.text;
     //galery 4images change
    document.getElementById("img1").src = cap.img1;
    document.getElementById("img2").src = cap.img2;
    document.getElementById("img3").src = cap.img3;
    document.getElementById("img4").src = cap.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = cap.capital;
    document.getElementById("money").innerHTML = cap.money;
    document.getElementById("dil").innerHTML = cap.lang;
    document.getElementById("richess").innerHTML = cap.riche;
    document.getElementById("pop").innerHTML = cap.pop;
    document.getElementById("sup").innerHTML = cap.sup;
    document.getElementById("gross").innerHTML = cap.gdp;
    document.getElementById("inde").innerHTML = cap.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var ortaAfrika = {
    Cname:"Orta Afrika",
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

    text:" Orta Afrika Cumhuriyeti (CAR) 1960\'ta Fransa\'dan bağımsızlığından bu yana istikrarsız. Elmas, altın, petrol ve uranyum gibi doğal madenler bakımından oldukça zengindir, ancak dünyanın en fakir nüfuslarından birine sahiptir. Ülkede, 2012\'den sonra Müslümanların baskın olduğu Seleka grubu ile Hıristiyanlardan oluşan anti-Balaka silahlı grubu arasında çıkan iktidar nedenli çatışmalar, daha sonra Müslüman-Hıristiyan çatışmasına dönüştü. BM barışı koruma gücü ve Fransız misyonuna rağmen ülke aylarca sokaklarda şiddet uygulandı ve ülke feci bir şekilde bölündü. Şuan da ülke, anayasal referandumun yanı sıra cumhurbaşkanlığı ve parlamento seçimlerini içeren uluslararası denetimli bir geçiş sürecinden geçiyor."
}
//Function on clicking one Country on the list
document.getElementById("ortafr").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = ortaAfrika.Cname;
    document.getElementById("imgFlag").src = ortaAfrika.flag;
    document.getElementById("textarea").innerHTML = ortaAfrika.text;
     //galery 4images change
    document.getElementById("img1").src = ortaAfrika.img1;
    document.getElementById("img2").src = ortaAfrika.img2;
    document.getElementById("img3").src = ortaAfrika.img3;
    document.getElementById("img4").src = ortaAfrika.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = ortaAfrika.capital;
    document.getElementById("money").innerHTML = ortaAfrika.money;
    document.getElementById("dil").innerHTML = ortaAfrika.lang;
    document.getElementById("richess").innerHTML = ortaAfrika.riche;
    document.getElementById("pop").innerHTML = ortaAfrika.pop;
    document.getElementById("sup").innerHTML = ortaAfrika.sup;
    document.getElementById("gross").innerHTML = ortaAfrika.gdp;
    document.getElementById("inde").innerHTML = ortaAfrika.ind;

})

//----------------------country of----------------------------------------
//An onject to hold Country Data
var   cad = {
    Cname:"Cad",
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

    text:" Büyük ölçüde yarı çöl ülkesi olan Çad, altın ve uranyum bakımından zengindir ve petrol ihraç eden bir devlet olarak yakın zamanda büyük bir gelişim elde etmiştir. Çad\'ın bağımsızlık sonrası tarihi, çoğunlukla Arap-Müslümanlar ve Hristiyanlar arasında ortaya çıkan anlaşmazlıkları barındırmaktadır. Çad , 2003 yılında petrol sahalarını Atlantik sahilindeki terminallere bağlayan 4 milyar dolarlık bir boru hattının tamamlanmasıyla petrol üreten bir ülke oldu. Bununla birlikte, yetersiz altyapı ve iç çatışmadan dolayı yoksulluk yaygındır ve sağlık ve sosyal koşullar, bölgedeki diğer ülkelerle karşılaştırılamayacak kadar düşüktür. "
}
//Function on clicking one Country on the list
document.getElementById("cad").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = cad.Cname;
    document.getElementById("imgFlag").src = cad.flag;
    document.getElementById("textarea").innerHTML = cad.text;
     //galery 4images change
    document.getElementById("img1").src = cad.img1;
    document.getElementById("img2").src = cad.img2;
    document.getElementById("img3").src = cad.img3;
    document.getElementById("img4").src = cad.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = cad.capital;
    document.getElementById("money").innerHTML = cad.money;
    document.getElementById("dil").innerHTML = cad.lang;
    document.getElementById("richess").innerHTML = cad.riche;
    document.getElementById("pop").innerHTML = cad.pop;
    document.getElementById("sup").innerHTML = cad.sup;
    document.getElementById("gross").innerHTML = cad.gdp;
    document.getElementById("inde").innerHTML = cad.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Kongo  = {
    Cname:"Kongo",
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

    text:"Dünya Bankası\'na göre, Kongo Cumhuriyeti Afrika\'nın ana petrol üreticilerinden biri olmasına rağmen, nüfusun neredeyse yarısı yoksulluk içinde yaşıyor. Zengin yeraltı madenleri oldukça fazla olmasına rağmen ekonomiye herhangi bir katkısı yoktur . Tarımsal faaliyetler yok denecek kadar düşüktür. Ülkede petrolün dışında kahve, kakao ve şeker kamışı gibi tarımsal ürünler de az da olsa ihracat amacı ile üretilmektedir. Petrol ekonominin temel dayanağıdır ve ülke son yıllarda sektördeki finansal şeffaflığı artırmaya çalışmıştır."
}
//Function on clicking one Country on the list
document.getElementById("kon").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Kongo.Cname;
    document.getElementById("imgFlag").src = Kongo.flag;
    document.getElementById("textarea").innerHTML = Kongo.text;
     //galery 4images change
    document.getElementById("img1").src = Kongo.img1;
    document.getElementById("img2").src = Kongo.img2;
    document.getElementById("img3").src = Kongo.img3;
    document.getElementById("img4").src = Kongo.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Kongo.capital;
    document.getElementById("money").innerHTML = Kongo.money;
    document.getElementById("dil").innerHTML = Kongo.lang;
    document.getElementById("richess").innerHTML = Kongo.riche;
    document.getElementById("pop").innerHTML = Kongo.pop;
    document.getElementById("sup").innerHTML = Kongo.sup;
    document.getElementById("gross").innerHTML = Kongo.gdp;
    document.getElementById("inde").innerHTML = Kongo.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var DemokratikKongo   = {
    Cname:"Demokratik Kongo",
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

    text:"  "
}
//Function on clicking one Country on the list
document.getElementById("de_kon").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = DemokratikKongo .Cname;
    document.getElementById("imgFlag").src = DemokratikKongo .flag;
    document.getElementById("textarea").innerHTML = DemokratikKongo .text;
     //galery 4images change
    document.getElementById("img1").src = DemokratikKongo .img1;
    document.getElementById("img2").src = DemokratikKongo .img2;
    document.getElementById("img3").src = DemokratikKongo .img3;
    document.getElementById("img4").src = DemokratikKongo .img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = DemokratikKongo .capital;
    document.getElementById("money").innerHTML = DemokratikKongo .money;
    document.getElementById("dil").innerHTML = DemokratikKongo .lang;
    document.getElementById("richess").innerHTML = DemokratikKongo .riche;
    document.getElementById("pop").innerHTML = DemokratikKongo .pop;
    document.getElementById("sup").innerHTML = DemokratikKongo .sup;
    document.getElementById("gross").innerHTML = DemokratikKongo .gdp;
    document.getElementById("inde").innerHTML = DemokratikKongo .ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Cibuti   = {
    Cname:"",
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

    text:"Cibuti dünyanın en işlek nakliye rotalarından biri olan Süveyş Kanalı\'na bir geçit görevi görüyor. Ülkede bulunan liman bu çorak ülkede ki en büyük gelir ve istihdam kaynağıdır bu sayede bu liman ülke için ekonomide can damarı haline gelmiştir. Eski sömürge gücü Fransa askeri varlığını sürdürüyor. Ülke aynı zamanda Amerika\'nın Afrika\'daki en büyük askeri üssüne, Çin\'in ilk denizaşırı askeri üssüne ve Japonya\'nın İkinci Dünya Savaşı\'ndan bu yana ilk askeri üssüne ev sahipliği yapıyor. Cibuti, dev komşusu karayla çevrili Etiyopya için ticaret için ana kapı görevi görüyor. İç bölgelerde hayvancılık yaygındır özellikle koyun hayvancılığı. Ülkede ihracatı yapılan başlıca ürünler deri, odun kömürü ve posttur.  "
}
//Function on clicking one Country on the list
document.getElementById("cib").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Cibuti.Cname;
    document.getElementById("imgFlag").src = Cibuti.flag;
    document.getElementById("textarea").innerHTML = Cibuti.text;
     //galery 4images change
    document.getElementById("img1").src = Cibuti.img1;
    document.getElementById("img2").src = Cibuti.img2;
    document.getElementById("img3").src = Cibuti.img3;
    document.getElementById("img4").src = Cibuti.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Cibuti.capital;
    document.getElementById("money").innerHTML = Cibuti.money;
    document.getElementById("dil").innerHTML = Cibuti.lang;
    document.getElementById("richess").innerHTML = Cibuti.riche;
    document.getElementById("pop").innerHTML = Cibuti.pop;
    document.getElementById("sup").innerHTML = Cibuti.sup;
    document.getElementById("gross").innerHTML = Cibuti.gdp;
    document.getElementById("inde").innerHTML = Cibuti.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Misir  = {
    Cname:"Mısır",
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

    text:" Eski uygarlığıyla uzun zamandır bilinen Mısır en büyük Arap ülkesidir ve modern zamanlarda Orta Doğu siyasetinde merkezi bir rol oynamıştır. Ülkedeki tarımsal faaliyetler Nil nehrinin kıyısında yoğun bir şekilde yapılmaktadır. Çöller ülkede büyük bir alanı işgal etmektedir . Ekonomi, ağırlıklı olarak Suudi Arabistan ve Körfez ülkelerinde olmak üzere yurtdışında çalışan Mısırlıların tarım, turizm ve nakit havalelerine bağlıdır. "
}
//Function on clicking one Country on the list
document.getElementById("msr").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Misir.Cname;
    document.getElementById("imgFlag").src = Misir.flag;
    document.getElementById("textarea").innerHTML = Misir.text;
     //galery 4images change
    document.getElementById("img1").src = Misir.img1;
    document.getElementById("img2").src = Misir.img2;
    document.getElementById("img3").src = Misir.img3;
    document.getElementById("img4").src = Misir.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Misir.capital;
    document.getElementById("money").innerHTML = Misir.money;
    document.getElementById("dil").innerHTML = Misir.lang;
    document.getElementById("richess").innerHTML = Misir.riche;
    document.getElementById("pop").innerHTML = Misir.pop;
    document.getElementById("sup").innerHTML = Misir.sup;
    document.getElementById("gross").innerHTML = Misir.gdp;
    document.getElementById("inde").innerHTML = Misir.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   EkvadorGinesi = {
    Cname:"Ekvador Ginesi",
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

    text:"Ekvator Ginesi batı Afrika’da bulunan en küçük Afrika ülkelerinden biridir. Rio Muni adlı bir anakara bölgesinden ve başkent Malabo\'nun bulunduğu Bioko da dahil olmak üzere beş adadan oluşmaktadır. 1990\'ların ortalarından beri eski İspanyol kolonisi Sahra altı en büyük petrol üreticilerinden biri haline gelmesine rağmen hala nüfusun büyük bir kısmı hala yoksulluk içinde yaşıyor. İlk başkan Francisco Macias Nguema, 1968\'deki bağımsızlıktan 1979\'daki devrilmesine kadar olan kötü olan iktidarın yüzünden nüfusun üçte biri ülkeyi terk etti. İnsan hakları örgütleri, bağımsızlık sonrası iki lideri Afrika\'daki insan haklarının en kötü istismarcıları olarak tanımladılar.  "
}
//Function on clicking one Country on the list
document.getElementById("ekv").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = EkvadorGinesi.Cname;
    document.getElementById("imgFlag").src = EkvadorGinesi.flag;
    document.getElementById("textarea").innerHTML = EkvadorGinesi.text;
     //galery 4images change
    document.getElementById("img1").src = EkvadorGinesi.img1;
    document.getElementById("img2").src = EkvadorGinesi.img2;
    document.getElementById("img3").src = EkvadorGinesi.img3;
    document.getElementById("img4").src = EkvadorGinesi.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = EkvadorGinesi.capital;
    document.getElementById("money").innerHTML = EkvadorGinesi.money;
    document.getElementById("dil").innerHTML = EkvadorGinesi.lang;
    document.getElementById("richess").innerHTML = EkvadorGinesi.riche;
    document.getElementById("pop").innerHTML = EkvadorGinesi.pop;
    document.getElementById("sup").innerHTML = EkvadorGinesi.sup;
    document.getElementById("gross").innerHTML = EkvadorGinesi.gdp;
    document.getElementById("inde").innerHTML = EkvadorGinesi.ind;

})
