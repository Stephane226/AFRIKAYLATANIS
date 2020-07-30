
//An onject to hold Country Data
var BurkinaFaso = {
    Cname:"Burkina Faso",
    flag:"images/flags/burkina.png",
    
    img1:"countries/burkina/img1.jpg",
    img2:"countries/burkina/img2.jpg",
    img3:"countries/burkina/img3.jpg",
    img4:"countries/burkina/img4.jpg",
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
    flag:"images/flags/algeri.png",
 
    img1:"countries/algerie/img1.jpg",
    img2:"countries/algerie/img2.jpg",
    img3:"countries/algerie/img3.jpg",
    img4:"countries/algerie/img4.jpg",
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
    flag:"images/flags/angola.png",
    
    img1:"countries/Angola/img1.jpg",
    img2:"countries/Angola/img2.jpg",
    img3:"countries/Angola/img3.jpg",
    img4:"countries/Angola/img4.jpg",
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
    flag:"images/flags/benin.png",
    
img1:"images/countries/benin/img1.jpg",
img2:"images/countries/benin/img2.jpg",
img3:"images/countries/benin/img3.jpg",
img4:"images/countries/benin/img4.jpg",

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
    flag:"images/flags/botswana.png",
    
    img1:"countries/botsvana/img1.jpg",
    img2:"countries/botsvana/img2.jpg",
    img3:"countries/botsvana/img3.jpg",
    img4:"countries/botsvana/img4.jpg",
    
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
    flag:"images/flags/burundi.png",
    
    img1:"countries/burundi/img1.jpg",
    img2:"countries/burundi/img2.jpg",
    img3:"countries/burundi/img3.png",
    img4:"countries/burundi/img4.jpg",
    
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
    flag:"images/flags/capVert.png",
    
    img1:"countries/capvert/img1.jpg",
    img2:"countries/capvert/img2.jpg",
    img3:"countries/capvert/img3.jpg",
    img4:"countries/capvert/img4.jpg",
    
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
    flag:"images/flags/afriqueCentral.png",
    
    img1:"countries/ortaAfrika/img1.jpg",
    img2:"countries/ortaAfrika/img2.png",
    img3:"countries/ortaAfrika/img3.jpg",
    img4:"countries/ortaAfrika/img4.jpg",
    
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
    flag:"images/flags/",
    
    img1:"countries/cad/img1.jpg",
    img2:"countries/cad/img2.jpg",
    img3:"countries/cad/img3.jpg",
    img4:"countries/cad/img4.jpg",
    
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
    flag:"images/flags/congo.png",
    
    img1:"countries/kongo/img1.png",
    img2:"countries/kongo/img2.jpg",
    img3:"countries/kongo/img3.jpg",
    img4:"countries/kongo/img4.jpg",
    
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
    flag:"images/flags/congoR.png",
    
    img1:"countries/kongoDemo/img1.jpg",
    img2:"countries/kongoDemo/img2.jpg",
    img3:"countries/kongoDemo/img3.jpg",
    img4:"countries/kongoDemo/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Demokratik Kongo Cumhuriyeti\'nin (DR Kongo) yakın tarihte bir iç savaş ve yolsuzluk olaylarıyla baş etmek zorunda kalmıştır. Kongo muazzam ekonomik kaynaklara sahip geniş bir ülkeydi taki \“Afrika’nın Dünya Savaşı” çıkana kadar bu savaşın ülkeler üzerinde ciddi sonuçları oldu. Savaş sırasında savaşan ve o süreçte ortaya çıkan hastalık ve yetersiz beslenme nedeniyle altı milyona kadar insan öldü. Savaşın hem politik hem de ekonomik bir tarafı vardı. Savaşın en büyük sebebi ülkede bulunan bir çok doğal kaynaktır. Taraflar bunun bilincinde olarak kaynakları yağmalama amacı gütmüşlerdir. "
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
    Cname:"Cibuti",
    flag:"images/flags/djibouti.png",
    
    img1:"countries/cibuti/img1.jpg",
    img2:"countries/cibuti/img2.jpg",
    img3:"countries/cibuti/img3.jpg",
    img4:"countries/cibuti/img4.jpg",
    
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
    flag:"images/flags/egypt.png",
    
    img1:"countries/misir/img1.jpg",
    img2:"countries/misir/img2.jpg",
    img3:"countries/misir/img3.jpg",
    img4:"countries/misir/img4.jpg",
    
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
    flag:"images/flags/gEquoitorial.png",
    
    img1:"countries/ekvator/img1.jpg",
    img2:"countries/ekvator/img2.jpg",
    img3:"countries/ekvator/img3.jpg",
    img4:"countries/ekvator/img4.jpg",
    
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

//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Eritre  = {
    Cname:"Eritre",
    flag:"images/flags/eritre.png",
    
    img1:"countries/eritre/img1.jpg",
    img2:"countries/eritre/img2.jpg",
    img3:"countries/eritre/img3.jpg",
    img4:"countries/eritre/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Eritre, 30 yıllık bir savaştan sonra 1993 yılında Etiyopya\'dan bağımsızlığını kazandı, anca komşu ülkeleriyle hala gergin ilişkilere sahiptir. Sudan, Etiyopya ve Cibuti ile çevrili olan bölge, Afrika Boynuzu\'nda stratejik olarak önemli bir alanı kaplıyor Uzun süren çatışma ve şiddetli kuraklık, Eritre\'nin tarım ekonomisini olumsuz etkiledi ve Afrika\'nın en fakir ülkelerinden biri olmaya devam ediyor. Ülke ekonomisi ve istihdam yüksek oranda tarıma ve hayvancılığa bağlıdır. Ülkedeki sanayi oranı gerçekten çok düşüktür BM’nin açıklamış olduğu verilere göre, son yıllarda yüz binlerce Eritre vatandaşı ülkeden kaçarak Sahara ve Akdeniz\'den Avrupa\'ya kaçak yollardan tehlikeli yolculuklar yaptılar.  "
}
//Function on clicking one Country on the list
document.getElementById("ert").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Eritre.Cname;
    document.getElementById("imgFlag").src = Eritre.flag;
    document.getElementById("textarea").innerHTML = Eritre.text;
     //galery 4images change
    document.getElementById("img1").src = Eritre.img1;
    document.getElementById("img2").src = Eritre.img2;
    document.getElementById("img3").src = Eritre.img3;
    document.getElementById("img4").src = Eritre.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Eritre.capital;
    document.getElementById("money").innerHTML = Eritre.money;
    document.getElementById("dil").innerHTML = Eritre.lang;
    document.getElementById("richess").innerHTML = Eritre.riche;
    document.getElementById("pop").innerHTML = Eritre.pop;
    document.getElementById("sup").innerHTML = Eritre.sup;
    document.getElementById("gross").innerHTML = Eritre.gdp;
    document.getElementById("inde").innerHTML = Eritre.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var Etiyopya = {
    Cname:"Etiyopya",
    flag:"images/flags/ethiopie.png",
    
    img1:"countries/etyopya/img1.jpg",
    img2:"countries/etyopya/img2.jpg",
    img3:"countries/etyopya/img3.jpg",
    img4:"countries/etyopya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Etiyopya, Afrika\'nın en eski bağımsız ülkesi ve nüfus bakımından ikinci büyük ülkesidir. İtalya’nın beş yıllık işgali dışında hiçbir zaman sömürgeleştirilmedi. \“Etiyopya Ortodoks Kilisesi” ülkenin sahip olduğu eşsiz bir kültürel mirasdır. Kıtanın sömürge dönemi boyunca Etiyopya Afrika\'nın bağımsızlığının sembolize etti ve birçok uluslararası organizasyon için Birleşmiş Milletler ve Afrika üssünün kurucu bir üyesiydi. 2018\'den bu yana, Başbakan Abiy Ahmed siyasi bir liberalleşme kampanyası başlattı ve Etiyopya\'nın komşuları, özellikle Eritre ile olan anlaşmazlıkları sona erdirmeye çalıştı. "
}
//Function on clicking one Country on the list
document.getElementById("ety").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Etiyopya.Cname;
    document.getElementById("imgFlag").src = Etiyopya.flag;
    document.getElementById("textarea").innerHTML = Etiyopya.text;
     //galery 4images change
    document.getElementById("img1").src = Etiyopya.img1;
    document.getElementById("img2").src = Etiyopya.img2;
    document.getElementById("img3").src = Etiyopya.img3;
    document.getElementById("img4").src = Etiyopya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Etiyopya.capital;
    document.getElementById("money").innerHTML = Etiyopya.money;
    document.getElementById("dil").innerHTML = Etiyopya.lang;
    document.getElementById("richess").innerHTML = Etiyopya.riche;
    document.getElementById("pop").innerHTML = Etiyopya.pop;
    document.getElementById("sup").innerHTML = Etiyopya.sup;
    document.getElementById("gross").innerHTML = Etiyopya.gdp;
    document.getElementById("inde").innerHTML = Etiyopya.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Gabon  = {
    Cname:"Gabon",
    flag:"images/flags/gabon.png",
    
    img1:"countries/gabon/img1.jpg",
    img2:"countries/gabon/img2.jpg",
    img3:"countries/gabon/img3.jpg",
    img4:"countries/gabon/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Afrika\'nın batı kıyısında yer alan Gabon, bölgenin daha istikrarlı ülkelerinden biridir. 1960\'ta Fransa\'dan bağımsızlığından bu yana Gabon\'un sadece üç cumhurbaşkanı olmuştur. Rahmetli Cumhurbaşkanı Omar Bongo, 2009 yılındaki ölümüne kadar kırk yılı aşkın bir süredir iktidardaydı. Omar Bongo\'nun yönetimi sırasında Gabon, \"Francafrique\" olarak bilinen bir sistem altında Fransa ile yakın bir ilişki sürdürdü ve ticari iyilikler karşılığında hem siyasi hem de askeri destek aldı. Ancak oğlu Ali, 2009\'da tartışmalı bir seçim kazandığından ve Fransız yetkililer ailenin malvarlığı hakkında uzun süredir yolsuzluk soruşturması başlattı ve bu yüzden iki ülke arasındaki ilişkiler askıya alındı. Dünya Bankası\'na göre Gabon büyük bir petrol üreticisi ama nüfusunun üçte biri yoksulluk içinde yaşıyor. "
}
//Function on clicking one Country on the list
document.getElementById("gab").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Gabon.Cname;
    document.getElementById("imgFlag").src = Gabon.flag;
    document.getElementById("textarea").innerHTML = Gabon.text;
     //galery 4images change
    document.getElementById("img1").src = Gabon.img1;
    document.getElementById("img2").src = Gabon.img2;
    document.getElementById("img3").src = Gabon.img3;
    document.getElementById("img4").src = Gabon.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Gabon.capital;
    document.getElementById("money").innerHTML = Gabon.money;
    document.getElementById("dil").innerHTML = Gabon.lang;
    document.getElementById("richess").innerHTML = Gabon.riche;
    document.getElementById("pop").innerHTML = Gabon.pop;
    document.getElementById("sup").innerHTML = Gabon.sup;
    document.getElementById("gross").innerHTML = Gabon.gdp;
    document.getElementById("inde").innerHTML = Gabon.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Gambia  = {
    Cname:"Gambia",
    flag:"images/flags/gambie.png",
    
    img1:"countries/gambia/img1.jpg",
    img2:"countries/gambia/img2.jpg",
    img3:"countries/gambia/img3.jpg",
    img4:"countries/gambia/img4.png",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Gambiya, Afrika\'nın en küçük ülkelerinden biridir ve batı Afrika\'daki komşularının aksine, bağımsızlıktan bu yana uzun süre istikrar sağlamıştır. Cumhurbaşkanı Yahya Jammeh 1994\'tebir darbede iktidarı ele geçirdikten sonra ülkeyi diktatörce yönetti. 22 yıllık iktidarı , ana muhalefet adayı Adama Barrow tarafından şok seçim sonucu yenildiği 2016\'da sona erdi. Jammeh ancak komşu ülkelerin arabuluculuğu ve silahlı müdahale tehdidi sonrasında görevinden ayrıldı. Maalesef istikrar refah anlamına gelmemektedir. Ülkenin ortasından geçen Gambiya Nehri\'nin varlığına rağmen, arazinin sadece altıda biri ekilebilir halde ve kötü toprak kalitesi yüzünden tek bir fıstık türü yetişmektedir. Turizm ülkenin gelir kaynaklarındandır çoğu ziyaretçi Atlantik sahilinde tatil yapar.  "
}
//Function on clicking one Country on the list
document.getElementById("gam").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Gambia.Cname;
    document.getElementById("imgFlag").src = Gambia.flag;
    document.getElementById("textarea").innerHTML = Gambia.text;
     //galery 4images change
    document.getElementById("img1").src = Gambia.img1;
    document.getElementById("img2").src = Gambia.img2;
    document.getElementById("img3").src = Gambia.img3;
    document.getElementById("img4").src = Gambia.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Gambia.capital;
    document.getElementById("money").innerHTML = Gambia.money;
    document.getElementById("dil").innerHTML = Gambia.lang;
    document.getElementById("richess").innerHTML = Gambia.riche;
    document.getElementById("pop").innerHTML = Gambia.pop;
    document.getElementById("sup").innerHTML = Gambia.sup;
    document.getElementById("gross").innerHTML = Gambia.gdp;
    document.getElementById("inde").innerHTML = Gambia.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var Gana   = {
    Cname:"Gana",
    flag:"images/flags/ghana.png",
    
    img1:"countries/gana/img1.jpg",
    img2:"countries/gana/img2.jpg",
    img3:"countries/gana/img3.jpg",
    img4:"countries/gana/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Gana, 1992\'de çok partili demokrasiye geçişinden bu yana Batı Afrika\'daki daha istikrarlı ülkelerden biri olarak kabul edilmektedir. Eskiden Gold Coast olarak bilinen Gana, 1957\'de İngiltere\'den bağımsızlık kazandı ve sömürge yönetiminden kopan ilk Sahra altı ulus oldu. Altın, kakao ve son zamanlarda petrol, Gana ekonomisinin temel taşını oluşturuyor. "
}
//Function on clicking one Country on the list
document.getElementById("gan").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Gana.Cname;
    document.getElementById("imgFlag").src = Gana.flag;
    document.getElementById("textarea").innerHTML = Gana.text;
     //galery 4images change
    document.getElementById("img1").src = Gana.img1;
    document.getElementById("img2").src = Gana.img2;
    document.getElementById("img3").src = Gana.img3;
    document.getElementById("img4").src = Gana.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Gana.capital;
    document.getElementById("money").innerHTML = Gana.money;
    document.getElementById("dil").innerHTML = Gana.lang;
    document.getElementById("richess").innerHTML = Gana.riche;
    document.getElementById("pop").innerHTML = Gana.pop;
    document.getElementById("sup").innerHTML = Gana.sup;
    document.getElementById("gross").innerHTML = Gana.gdp;
    document.getElementById("inde").innerHTML = Gana.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var Gine   = {
    Cname:"Gine",
    flag:"images/flags/guine.png",
    
    img1:"countries/gine/img1.jpg",
    img2:"countries/gine/img2.jpg",
    img3:"countries/gine/img3.jpg",
    img4:"countries/gine/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Gine\'nin mineral zenginliği onu potansiyel olarak Afrika\'nın en zengin ülkelerinden biri haline getiriyor, ancak halkı Batı Afrika\'nın en fakirleri arasında. 2010 yılında yapılan seçimler sivil yönetimi başlattı, ancak şiddetli etnik çatışmalara da yol açtı. Ayrıca Liberya ve Sierra Leone\'den gelen yüz binlerce mülteci, Gine\'nin ekonomisini oldukça zorladı. İstikrarsızlık kuşkusuz ve etnik gerginliğin yanı sıra sınır saldırılarına teşebbüs edilmesi komşular arasındaki suçlamaları da beraberinde getirdi.  "
}
//Function on clicking one Country on the list
document.getElementById("gin").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Gine.Cname;
    document.getElementById("imgFlag").src = Gine.flag;
    document.getElementById("textarea").innerHTML = Gine.text;
     //galery 4images change
    document.getElementById("img1").src = Gine.img1;
    document.getElementById("img2").src = Gine.img2;
    document.getElementById("img3").src = Gine.img3;
    document.getElementById("img4").src = Gine.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Gine.capital;
    document.getElementById("money").innerHTML = Gine.money;
    document.getElementById("dil").innerHTML = Gine.lang;
    document.getElementById("richess").innerHTML = Gine.riche;
    document.getElementById("pop").innerHTML = Gine.pop;
    document.getElementById("sup").innerHTML = Gine.sup;
    document.getElementById("gross").innerHTML = Gine.gdp;
    document.getElementById("inde").innerHTML = Gine.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   GineBissau = {
    Cname:"Gine Bissau",
    flag:"images/flags/gBiso.png",
    
    img1:"countries/gineBiso/img1.jpg",
    img2:"countries/gineBiso/img2.jpg",
    img3:"countries/gineBiso/img3.jpg",
    img4:"countries/gineBiso/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Batı Afrika Gine-Bissau yüzyıllardır Portekiz İmparatorluğu\'nun bir parçasıydı. Bir zamanlar Afrika\'nın kalkınması için potansiyel bir model olarak düşünülen ülke şimdi dünyanın en fakir ülkelerinden biri. Kaju fıstığı Gine-Bissau\'nun çiftçileri için mütevazı bir yaşam sağlar ve ana döviz kaynağıdır. Ancak bugün ulusun büyük bir dış borcu ve büyük ölçüde dış yardıma dayanan bir ekonomisi var. Aynı zamanda Latin Amerika uyuşturucuları için aktarma noktası haline geldi. 1990\'ların sonunda ülke, Gine, Nijerya, Senegal ve Fransa\'da yaşanan ve cumhurbaşkanının sürgüne gönderilmesiyle sona eren bir kriz yaşadı.  "
}
//Function on clicking one Country on the list
document.getElementById("gin_b").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = GineBissau.Cname;
    document.getElementById("imgFlag").src = GineBissau.flag;
    document.getElementById("textarea").innerHTML = GineBissau.text;
     //galery 4images change
    document.getElementById("img1").src = GineBissau.img1;
    document.getElementById("img2").src = GineBissau.img2;
    document.getElementById("img3").src = GineBissau.img3;
    document.getElementById("img4").src = GineBissau.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = GineBissau.capital;
    document.getElementById("money").innerHTML = GineBissau.money;
    document.getElementById("dil").innerHTML = GineBissau.lang;
    document.getElementById("richess").innerHTML = GineBissau.riche;
    document.getElementById("pop").innerHTML = GineBissau.pop;
    document.getElementById("sup").innerHTML = GineBissau.sup;
    document.getElementById("gross").innerHTML = GineBissau.gdp;
    document.getElementById("inde").innerHTML = GineBissau.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var FildişiSahilleri   = {
    Cname:"Fildişi Sahili",
    flag:"images/flags/coteIvoir.png",
    
    img1:"countries/fildisi/img1.png",
    img2:"countries/fildisi/img2.jpg",
    img3:"countries/fildisi/img3.jpg",
    img4:"countries/fildisi/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Fildişi Sahili, Fransa\'dan bağımsızlığından sonra otuz yıldan fazla bir süredir dini ve etnik uyumu ve gelişmiş ekonomisi ile biliniyordu. Ancak 2002\'de silahlı bir isyan ülkeyi ikiye böldü. O zamandan bu yana, ülke anlaşmazlığın siyasi bir çözüm bulunamadığı için barış anlaşmaları şiddetle sonuçlanmıştır. Siyasi iç karışıklıklara rağmen, Fildişi Sahili dünyanın en büyük kakao çekirdeği ihracatçısıdır ve vatandaşları bölgedeki diğer ülkelere kıyasla nispeten yüksek bir gelir seviyesine sahiptir. "
}
//Function on clicking one Country on the list
document.getElementById("fil").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = FildişiSahilleri.Cname;
    document.getElementById("imgFlag").src = FildişiSahilleri.flag;
    document.getElementById("textarea").innerHTML = FildişiSahilleri.text;
     //galery 4images change
    document.getElementById("img1").src = FildişiSahilleri.img1;
    document.getElementById("img2").src = FildişiSahilleri.img2;
    document.getElementById("img3").src = FildişiSahilleri.img3;
    document.getElementById("img4").src = FildişiSahilleri.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = FildişiSahilleri.capital;
    document.getElementById("money").innerHTML = FildişiSahilleri.money;
    document.getElementById("dil").innerHTML = FildişiSahilleri.lang;
    document.getElementById("richess").innerHTML = FildişiSahilleri.riche;
    document.getElementById("pop").innerHTML = FildişiSahilleri.pop;
    document.getElementById("sup").innerHTML = FildişiSahilleri.sup;
    document.getElementById("gross").innerHTML = FildişiSahilleri.gdp;
    document.getElementById("inde").innerHTML = FildişiSahilleri.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Kenya = {
    Cname:"Kenya",
    flag:"images/flags/kenya.png",
    
    img1:"countries/kenya/img1.jpg",
    img2:"countries/kenya/img2.jpg",
    img3:"countries/kenya/img3.jpg",
    img4:"countries/kenya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Afrika\'nın doğu kıyısındaki ekvatorda bulunan Kenya, \"İnsanlığın Beşiği\" olarak tanımlanmıştır. Büyük Rift Vadisi\'nde paleontologlar, insanın atalarının en eski kanıtlarından bazılarını keşfettiler. Somali\'de aktif olan İslamcı militan El-Şebab hareketi, Nairobi\'deki 2013 Westgate alışveriş merkezi ve Kenya\'nın kuzeybatısındaki Garissa Üniversitesi Koleji\'ne 2015 saldırısı da dahil olmak üzere Kenya\'da giderek artan sayıda saldırı yaptı. Diğer acil zorluklar arasında yüksek işsizlik, suç ve yoksulluk sayılabilir. Kuraklık sıklıkla milyonlarca insanın hayatını riske atar. "
}
//Function on clicking one Country on the list
document.getElementById("ken").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Kenya.Cname;
    document.getElementById("imgFlag").src = Kenya.flag;
    document.getElementById("textarea").innerHTML = Kenya.text;
     //galery 4images change
    document.getElementById("img1").src = Kenya.img1;
    document.getElementById("img2").src = Kenya.img2;
    document.getElementById("img3").src = Kenya.img3;
    document.getElementById("img4").src = Kenya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Kenya.capital;
    document.getElementById("money").innerHTML = Kenya.money;
    document.getElementById("dil").innerHTML = Kenya.lang;
    document.getElementById("richess").innerHTML = Kenya.riche;
    document.getElementById("pop").innerHTML = Kenya.pop;
    document.getElementById("sup").innerHTML = Kenya.sup;
    document.getElementById("gross").innerHTML = Kenya.gdp;
    document.getElementById("inde").innerHTML = Kenya.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Lesotho = {
    Cname:"Lesotho",
    flag:"images/flags/lesotho.png",
    
    img1:"countries/lesoto/img1.jpg",
    img2:"countries/lesoto/img2.jpg",
    img3:"countries/lesoto/img3.jpg",
    img4:"countries/lesoto/img4.png",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Lesotho Krallığı çoğunlukla köylerin çoğuna sadece at sırtında, yaya ya da hafif uçaklarla ulaşılabilen yaylalardan oluşur. Yayla platosunun sert ortamının ve ovalardaki sınırlı tarımsal alanın bir sonucu olarak kaynaklar azdır. On yıllar boyunca binlerce işçi, kendi ülkelerinde is bulamadıkları için Güney Afrika madenlerinde iş bulmak zorunda bırakıldılar. Ülke’nin gelirlerinin, giderlerini karşılayamaması nedeniyle Lesotho krallığı Dünya Bankası, Avrupa Birliği gibi kurumlardan maddi destek elde eetmektedir.  "
}
//Function on clicking one Country on the list
document.getElementById("les").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Lesotho.Cname;
    document.getElementById("imgFlag").src = Lesotho.flag;
    document.getElementById("textarea").innerHTML = Lesotho.text;
     //galery 4images change
    document.getElementById("img1").src = Lesotho.img1;
    document.getElementById("img2").src = Lesotho.img2;
    document.getElementById("img3").src = Lesotho.img3;
    document.getElementById("img4").src = Lesotho.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Lesotho.capital;
    document.getElementById("money").innerHTML = Lesotho.money;
    document.getElementById("dil").innerHTML = Lesotho.lang;
    document.getElementById("richess").innerHTML = Lesotho.riche;
    document.getElementById("pop").innerHTML = Lesotho.pop;
    document.getElementById("sup").innerHTML = Lesotho.sup;
    document.getElementById("gross").innerHTML = Lesotho.gdp;
    document.getElementById("inde").innerHTML = Lesotho.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Liberya = {
    Cname:"Liberya",
    flag:"images/flags/liberia.png",
    
    img1:"countries/liberya/img1.jpg",
    img2:"countries/liberya/img2.jpg",
    img3:"countries/liberya/img3.jpg",
    img4:"countries/liberya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Liberya Afrika\'nın en eski cumhuriyeti, ancak 1990\'larda uzun süredir devam eden, yıkıcı iç savaşı ve komşu Sierra Leone\'deki bir isyandaki rolü ile tanındı. Liberya\'nın iç savaşında yaklaşık 250.000 kişi öldürüldü ve binlerce kişi savaştan kaçtı. Elektrik ve su sıkıntısını gidermek için büyük projeler devam etmektedir. Yolsuzluk yaygındır ve işsizlik ülke de oldukça yaygındır.  "
}
//Function on clicking one Country on the list
document.getElementById("lib").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Liberya.Cname;
    document.getElementById("imgFlag").src = Liberya.flag;
    document.getElementById("textarea").innerHTML = Liberya.text;
     //galery 4images change
    document.getElementById("img1").src = Liberya.img1;
    document.getElementById("img2").src = Liberya.img2;
    document.getElementById("img3").src = Liberya.img3;
    document.getElementById("img4").src = Liberya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Liberya.capital;
    document.getElementById("money").innerHTML = Liberya.money;
    document.getElementById("dil").innerHTML = Liberya.lang;
    document.getElementById("richess").innerHTML = Liberya.riche;
    document.getElementById("pop").innerHTML = Liberya.pop;
    document.getElementById("sup").innerHTML = Liberya.sup;
    document.getElementById("gross").innerHTML = Liberya.gdp;
    document.getElementById("inde").innerHTML = Liberya.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  libya  = {
    Cname:"Libya",
    flag:"images/flags/lybie.png",
    
    img1:"countries/libya/img1.jpg",
    img2:"countries/libya/img2.jpg",
    img3:"countries/libya/img3.jpg",
    img4:"countries/libya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Eski bir tarihe sahip, çoğunlukla çöl ve petrol zengini bir ülke olan Libya, yakın zamanda, cıva Albay Muammer Kaddafi\'nin ve onun ayrılışını takip eden kaosun 42 yılı ile tanınıyor. Libya, 1951\'de bağımsızlık kazanana kadar yüzyıllar boyunca yabancı hakimiyet altındaydı. Petrol keşfedildikten Libya muazzam bir servet kazandı. Albay Kaddafi 1969\'da iktidarı ele geçirdi ve Batı askeri müdahalesinin desteklediği silahlı bir isyanın ardından 2011 yılında devrilene kadar kırk yıl boyunca hüküm sürdü. "
}
//Function on clicking one Country on the list
document.getElementById("lb").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = libya.Cname;
    document.getElementById("imgFlag").src = libya.flag;
    document.getElementById("textarea").innerHTML = libya.text;
     //galery 4images change
    document.getElementById("img1").src = libya.img1;
    document.getElementById("img2").src = libya.img2;
    document.getElementById("img3").src = libya.img3;
    document.getElementById("img4").src = libya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = libya.capital;
    document.getElementById("money").innerHTML = libya.money;
    document.getElementById("dil").innerHTML = libya.lang;
    document.getElementById("richess").innerHTML = libya.riche;
    document.getElementById("pop").innerHTML = libya.pop;
    document.getElementById("sup").innerHTML = libya.sup;
    document.getElementById("gross").innerHTML = libya.gdp;
    document.getElementById("inde").innerHTML = libya.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Malavi = {
    Cname:"Malavi",
    flag:"images/flags/malawi.png",
    
    img1:"countries/malavi/img1.jpg",
    img2:"countries/malavi/img2.jpg",
    img3:"countries/malavi/img3.jpg",
    img4:"countries/malavi/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Büyük ölçüde tarımsal bir ülke olan Malavi, onlarca yıllık az gelişmişliğin üstesinden gelmek için çaba göstermektedir. Bağımsızlığın ilk 30 yılı boyunca Malavi, otoriter ve özlü bir Cumhurbaşkanı Hastings Kamuzu Banda tarafından yönetildi, ancak 1990\'ların ortasında iktidarı bıraktığından beri demokratik kurumlar tutuldu. Çoğu Malavi geçimlik çiftçiliğe güvenmektedir, ancak iklim nedeniyle gıda tedarik durumu güvencesizdir. Son yıllarda ülke önemli ekonomik büyüme kaydetti. "
}
//Function on clicking one Country on the list
document.getElementById("malw").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Malavi.Cname;
    document.getElementById("imgFlag").src = Malavi.flag;
    document.getElementById("textarea").innerHTML = Malavi.text;
     //galery 4images change
    document.getElementById("img1").src = Malavi.img1;
    document.getElementById("img2").src = Malavi.img2;
    document.getElementById("img3").src = Malavi.img3;
    document.getElementById("img4").src = Malavi.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Malavi.capital;
    document.getElementById("money").innerHTML = Malavi.money;
    document.getElementById("dil").innerHTML = Malavi.lang;
    document.getElementById("richess").innerHTML = Malavi.riche;
    document.getElementById("pop").innerHTML = Malavi.pop;
    document.getElementById("sup").innerHTML = Malavi.sup;
    document.getElementById("gross").innerHTML = Malavi.gdp;
    document.getElementById("inde").innerHTML = Malavi.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Madagaskar  = {
    Cname:"Madagaskar",
    flag:"images/flags/magadascar.png",
    
    img1:"countries/magadaskar/img1.jpg",
    img2:"countries/magadaskar/img2.jpg",
    img3:"countries/magadaskar/img3.jpg",
    img4:"countries/magadaskar/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Afrika\'nın güneydoğu kıyısında yer alan Madagaskar, dünyanın dördüncü büyük adasıdır. Madagaskar eşsiz vahşi yaşamı ile ünlüdür. Geleneksel olarak, Madagaskar ekonomisi çeltik pirinç, kahve, vanilya ve karanfil yetiştiriciliğine dayanmaktadır. Ancak, doğal kaynakların zenginliğine ve eşsiz ortamının yönlendirdiği bir turizm endüstrisine rağmen, ülke dünyanın en yoksullarından biri olmaya devam ediyor ve büyük ölçüde dışa bağımlı. 1960 yılında Fransız sömürüsünden kurtulmasından bu yana Madagaskar, darbeler, şiddetli huzursuzluk ve tartışmalı seçimler dahil olmak üzere tekrar tekrar siyasi istikrarsızlık yaşadı. En son 2009 yılında olan darbe beş yıllık siyasi kilitlenmeye yol açmıştır. "
}
//Function on clicking one Country on the list
document.getElementById("mag").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Madagaskar.Cname;
    document.getElementById("imgFlag").src = Madagaskar.flag;
    document.getElementById("textarea").innerHTML = Madagaskar.text;
     //galery 4images change
    document.getElementById("img1").src = Madagaskar.img1;
    document.getElementById("img2").src = Madagaskar.img2;
    document.getElementById("img3").src = Madagaskar.img3;
    document.getElementById("img4").src = Madagaskar.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Madagaskar.capital;
    document.getElementById("money").innerHTML = Madagaskar.money;
    document.getElementById("dil").innerHTML = Madagaskar.lang;
    document.getElementById("richess").innerHTML = Madagaskar.riche;
    document.getElementById("pop").innerHTML = Madagaskar.pop;
    document.getElementById("sup").innerHTML = Madagaskar.sup;
    document.getElementById("gross").innerHTML = Madagaskar.gdp;
    document.getElementById("inde").innerHTML = Madagaskar.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   mali = {
    Cname:"Mali",
    flag:"images/flags/mali.png",
    
    img1:"countries/mali/img1.jpg",
    img2:"countries/mali/img2.jpg",
    img3:"countries/mali/img3.jpg",
    img4:"countries/mali/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Bir zamanlar sömürge öncesi birçok imparatorluğa ev sahipliği yapan karada yaşayan, kurak Batı Afrika ülkesi Mali kıtanın en büyüklerinden biridir. Yüzyıllar boyunca, kuzeydeki Timbuktu kenti, İslami kültürün önemli bir bölgesel ticaret merkezi idi. Fakat bu önem uzun zamandır yok oldu. 1960\'ta Fransa\'dan bağımsız olduktan sonra Mali, 1992\'de demokratik seçimlere kadar kuraklık, isyan, darbe ve 23 yıllık askeri diktatörlük yaşadı. 2013 yılında Fransa, Konna kasabasının ve birliklerinin İslamcı kalelerini ele geçirmesinin ardından hükümetin isteği üzerine askeri müdahaleye müdahale etti. Yetkililer, 2015 yılında Tuareg ayrılıkçılarıyla Birleşmiş Milletler sponsorluğundaki ateşkes konusunda anlaştılar, ancak Tuareg isyancıları ara sıra aktif olan ülkenin bir kısmı gergin kaldı. Bu arada, El-Kaide bağlantılı militanlar saldırıları gerçekleştirirken, Mali\'nin kuzey ve orta bölgelerinde bir cihatçı ayaklanma devam ediyor. Mali, Afrika müziğinin bazı yıldızlarını, özellikle de Salif Keita\'yı ürettiği için dünyaca ünlüdür. "
}
//Function on clicking one Country on the list
document.getElementById("mli").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = mali.Cname;
    document.getElementById("imgFlag").src = mali.flag;
    document.getElementById("textarea").innerHTML = mali.text;
     //galery 4images change
    document.getElementById("img1").src = mali.img1;
    document.getElementById("img2").src = mali.img2;
    document.getElementById("img3").src = mali.img3;
    document.getElementById("img4").src = mali.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = mali.capital;
    document.getElementById("money").innerHTML = mali.money;
    document.getElementById("dil").innerHTML = mali.lang;
    document.getElementById("richess").innerHTML = mali.riche;
    document.getElementById("pop").innerHTML = mali.pop;
    document.getElementById("sup").innerHTML = mali.sup;
    document.getElementById("gross").innerHTML = mali.gdp;
    document.getElementById("inde").innerHTML = mali.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Moritanya  = {
    Cname:"Moritanya",
    flag:"images/flags/mauritanie.png",
    
    img1:"countries/moritanya/img1.jpeg",
    img2:"countries/moritanya/img2.jpg",
    img3:"countries/moritanya/img3.jpg",
    img4:"countries/moritanya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Afrika\'nın en yeni petrol üreticilerinden biri olan Moritanya İslam Cumhuriyeti, Arap Mağrip ve Batı Sahra altı Afrika arasında köprü kuruyor. Çoğunlukla çöl ülkesi, kuzeyde Arap-Berber nüfusu ve güneyde siyah Afrikalılar ile kültürel bir kontrast sunuyor. İnsanlarının çoğu göçebedir. Orta Çağ\'da Moritanya, İslam\'ı bölgeye yayan ve bir süre İspanya\'nın İslami bölümünü kontrol eden Almoravid hareketinin beşiğiydi. Avrupalı tüccarlar 15. yüzyılda Moritanya\'ya ilgi göstermeye başladı. Fransa 1817\'de kıyı bölgesinin kontrolünü ele geçirdi ve 1904\'te resmi bir Fransız koruma bölgesi topraklara yayıldı. Moritanya mineral kaynakları, özellikle demir ve cevher bakımından zengindir. Batı tarafından Sahel bölgesindeki İslamcı militanlıkla mücadelede değerli bir müttefik olarak görülüyor. "
}
//Function on clicking one Country on the list
document.getElementById("mor").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Moritanya.Cname;
    document.getElementById("imgFlag").src = Moritanya.flag;
    document.getElementById("textarea").innerHTML = Moritanya.text;
     //galery 4images change
    document.getElementById("img1").src = Moritanya.img1;
    document.getElementById("img2").src = Moritanya.img2;
    document.getElementById("img3").src = Moritanya.img3;
    document.getElementById("img4").src = Moritanya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Moritanya.capital;
    document.getElementById("money").innerHTML = Moritanya.money;
    document.getElementById("dil").innerHTML = Moritanya.lang;
    document.getElementById("richess").innerHTML = Moritanya.riche;
    document.getElementById("pop").innerHTML = Moritanya.pop;
    document.getElementById("sup").innerHTML = Moritanya.sup;
    document.getElementById("gross").innerHTML = Moritanya.gdp;
    document.getElementById("inde").innerHTML = Moritanya.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Mauritus  = {
    Cname:"Mauritius",
    flag:"images/flags/mauritus.png",
    
    img1:"countries/moritus/img1.jpg",
img2:"countries/moritus/img2.jpg",
img3:"countries/moritus/img3.jpg",
img4:"countries/moritus/img4.jpg",

    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Mauritius istikrarlı ve müreffeh bir Hint Okyanusu takımadalarıdır. Bir zamanlar şeker ihracatına bağımlı olan ada, önemli bir turizm endüstrisinin yanı sıra güçlü bir dış kaynak ve finansal hizmetler sektörü oluşturdu ve şimdi Afrika\'nın kişi başına en yüksek gelirlerinden birine sahip. Mauritius, yüzlerce adalı, 1960\'larda Diego Garcia adasında bir ABD askeri üssüne yol açmak için sınır dışı edilen İngiltere ile olan bir anlaşmazlıkta, Chagos Adaları üzerinde egemenlik iddia ediyor. "
}
//Function on clicking one Country on the list
document.getElementById("maur").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Mauritius.Cname;
    document.getElementById("imgFlag").src = Mauritius.flag;
    document.getElementById("textarea").innerHTML = Mauritius.text;
     //galery 4images change
    document.getElementById("img1").src = Mauritius.img1;
    document.getElementById("img2").src = Mauritius.img2;
    document.getElementById("img3").src = Mauritius.img3;
    document.getElementById("img4").src = Mauritius.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Mauritius.capital;
    document.getElementById("money").innerHTML = Mauritius.money;
    document.getElementById("dil").innerHTML = Mauritius.lang;
    document.getElementById("richess").innerHTML = Mauritius.riche;
    document.getElementById("pop").innerHTML = Mauritius.pop;
    document.getElementById("sup").innerHTML = Mauritius.sup;
    document.getElementById("gross").innerHTML = Mauritius.gdp;
    document.getElementById("inde").innerHTML = Mauritius.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Fas = {
    Cname:"Fas",
    flag:"images/flags/maroc.png",
    
    img1:"countries/fas/img1.jpg",
    img2:"countries/fas/img2.png",
    img3:"countries/fas/img3.jpg",
    img4:"countries/fas/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Fas Krallığı, Mağrip - Arap Batısı olarak bilinen Kuzey Afrika ülkelerinin en batısıdır. Atlantik ve Akdeniz kıyıları, engebeli bir dağ iç kısmı ve komşuları tarafından paylaşılmayan bir bağımsızlık tarihi vardır. Zengin kültürü Arap, Berber, Avrupa ve Afrika etkilerinin bir karışımıdır. Fas, Sultan Muhammed\'in kral olduğu 1912\'den 1956\'ya kadar bir Fransız koruyucusuydu. 1961\'de, 38 yıl boyunca hüküm süren ve Ortadoğu\'da barış arayışında önemli bir rol oynayan oğlu II. Hasan tarafından başarılı oldu. Ayrıca iç muhalefeti acımasızca bastırdı."
}
//Function on clicking one Country on the list
document.getElementById("fas").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Fas.Cname;
    document.getElementById("imgFlag").src = Fas.flag;
    document.getElementById("textarea").innerHTML = Fas.text;
     //galery 4images change
    document.getElementById("img1").src = Fas.img1;
    document.getElementById("img2").src = Fas.img2;
    document.getElementById("img3").src = Fas.img3;
    document.getElementById("img4").src = Fas.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Fas.capital;
    document.getElementById("money").innerHTML = Fas.money;
    document.getElementById("dil").innerHTML = Fas.lang;
    document.getElementById("richess").innerHTML = Fas.riche;
    document.getElementById("pop").innerHTML = Fas.pop;
    document.getElementById("sup").innerHTML = Fas.sup;
    document.getElementById("gross").innerHTML = Fas.gdp;
    document.getElementById("inde").innerHTML = Fas.ind;

})

//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Mozambik = {
    Cname:"Mozambik",
    flag:"images/flags/mozambique.png",
    
    img1:"countries/mozambik/img1.jpg",
    img2:"countries/mozambik/img2.jpg",
    img3:"countries/mozambik/img3.jpg",
    img4:"countries/mozambik/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" 1975\'te Portekiz\'den bağımsızlık kazanan Mozambik, 1992\'de sona eren 16 yıllık iç savaşın etkilerinden hala muzdarip. İktidardaki Frelimo partisi ile muhalefetteki eski isyancı hareket Renamo arasındaki gerginlik devam ediyor ve yolsuzluk önemli bir endişe haline geldi. 2011 yılında Mozambik sahilindeki gaz sahalarının keşfi, Afrika\'nın en fakir ülkelerinden olarak kabul edilen, ekonomisini değiştirmeye hazırlanıyor. Ancak son ekonomik büyümeye rağmen, Mozambik\'in 24 milyon insanının yarısından fazlası yoksulluk sınırının altında yaşamaya devam ediyor. "
}
//Function on clicking one Country on the list
document.getElementById("moz").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Mozambik.Cname;
    document.getElementById("imgFlag").src = Mozambik.flag;
    document.getElementById("textarea").innerHTML = Mozambik.text;
     //galery 4images change
    document.getElementById("img1").src = Mozambik.img1;
    document.getElementById("img2").src = Mozambik.img2;
    document.getElementById("img3").src = Mozambik.img3;
    document.getElementById("img4").src = Mozambik.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Mozambik.capital;
    document.getElementById("money").innerHTML = Mozambik.money;
    document.getElementById("dil").innerHTML = Mozambik.lang;
    document.getElementById("richess").innerHTML = Mozambik.riche;
    document.getElementById("pop").innerHTML = Mozambik.pop;
    document.getElementById("sup").innerHTML = Mozambik.sup;
    document.getElementById("gross").innerHTML = Mozambik.gdp;
    document.getElementById("inde").innerHTML = Mozambik.ind;

})

//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Namibya = {
    Cname:"Namibya",
    flag:"images/flags/namibie.png",
    
    img1:"countries/namibia/img1.jpg",
    img2:"countries/namibia/img2.jpg",
    img3:"countries/namibia/img3.jpg",
    img4:"countries/namibia/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Afrika\'nın güneybatı kıyısında büyük ve seyrek nüfuslu bir ülke olan Namibya, Güney Afrika\'nın yönetime karşı uzun bir mücadelesinden sonra 1990\'da bağımsızlık kazanmasından bu yana istikrar kazandı. Almanya, 1800\'lerin sonunda Güney Batı Afrika adını verdiği bölgenin kontrolünü ele geçirdi. 1908\'de elmasların keşfi Avrupalıların akınına neden oldu. Güney Afrika Birinci Dünya Savaşı sırasında ele geçirdi ve bir Milletler Cemiyeti görevinde yönetti. Namibyalılar 1990 yılında yaklaşık 25 yıllık bir çalılık savaşından sonra bağımsızlığa kavuştu. Irklar arası uzlaşma, ülkenin beyaz halkının kalmasını teşvik etti ve tarım ve diğer ekonomik sektörlerde hala önemli bir rol oynuyorlar.  "
}
//Function on clicking one Country on the list
document.getElementById("nam").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Namibya.Cname;
    document.getElementById("imgFlag").src = Namibya.flag;
    document.getElementById("textarea").innerHTML = Namibya.text;
     //galery 4images change
    document.getElementById("img1").src = Namibya.img1;
    document.getElementById("img2").src = Namibya.img2;
    document.getElementById("img3").src = Namibya.img3;
    document.getElementById("img4").src = Namibya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Namibya.capital;
    document.getElementById("money").innerHTML = Namibya.money;
    document.getElementById("dil").innerHTML = Namibya.lang;
    document.getElementById("richess").innerHTML = Namibya.riche;
    document.getElementById("pop").innerHTML = Namibya.pop;
    document.getElementById("sup").innerHTML = Namibya.sup;
    document.getElementById("gross").innerHTML = Namibya.gdp;
    document.getElementById("inde").innerHTML = Namibya.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  GuneySudan  = {
    Cname:"Güney Sudan",
    flag:"images/flags/sudSudan.png",
    
    img1:"countries/sudsudan/img1.jpg",
    img2:"countries/sudsudan/img2.jpg",
    img3:"countries/sudsudan/img3.jpg",
    img4:"countries/sudsudan/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Güney Sudan, Afrika\'nın en uzun süredir devam eden iç savaşını sona erdiren 2005 tarihli bir anlaşmanın sonucu olarak 9 Temmuz 2011\'de Sudan\'dan bağımsızlık kazandı. Sudan\'ın en güneydeki 10 eyaletinden oluşan Güney Sudan, Afrika\'nın en çeşitli ülkelerinden biridir. 60\'tan fazla farklı etnik gruba ev sahipliği yapıyor ve halkının çoğunluğu geleneksel dinleri takip ediyor. Bağımsızlık Güney Sudan\'da çatışmayı sona erdirmedi. İç savaş 2013\'te cumhurbaşkanının o zamanki başkan yardımcısıyla düştüğü zaman patlak verdi ve yaklaşık 4 milyon insanı yerinden eden bir çatışmaya yol açtı. Beş yıllık iç savaşı sona erdirmek için savaşan taraflar arasında Ağustos 2018\'de bir güç paylaşımı anlaşması imzalandı. "
}
//Function on clicking one Country on the list
document.getElementById("gsud").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = GuneySudan.Cname;
    document.getElementById("imgFlag").src = GuneySudan.flag;
    document.getElementById("textarea").innerHTML = GuneySudan.text;
     //galery 4images change
    document.getElementById("img1").src = GuneySudan.img1;
    document.getElementById("img2").src = GuneySudan.img2;
    document.getElementById("img3").src = GuneySudan.img3;
    document.getElementById("img4").src = GuneySudan.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = GuneySudan.capital;
    document.getElementById("money").innerHTML = GuneySudan.money;
    document.getElementById("dil").innerHTML = GuneySudan.lang;
    document.getElementById("richess").innerHTML = GuneySudan.riche;
    document.getElementById("pop").innerHTML = GuneySudan.pop;
    document.getElementById("sup").innerHTML = GuneySudan.sup;
    document.getElementById("gross").innerHTML = GuneySudan.gdp;
    document.getElementById("inde").innerHTML = GuneySudan.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var Nijer= {
    Cname:"Nijer",
    flag:"images/flags/j",
    
    img1:"countries/nijer/img1.jpg",
    img2:"countries/nijer/img2.jpg",
    img3:"countries/nijer/img3.jpg",
    img4:"countries/nijer/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Sahra çölünün kenarında geniş ve kurak bir devlet olan Nijer, BM tarafından dünyanın en az gelişmiş ülkelerinden biri olarak derecelendiriliyor. Nijer, 1960 yılında Fransa\'dan bağımsızlığının ardından bir dizi darbeye ve siyasi istikrarsızlığa kurban gitti. Bugün ülke sık sık kuraklık, isyan ve yaygın yoksulluk karşısında mücadele ediyor. Nijer, ekonomisini modernize etmek için artan petrol arama ve altın madenciliğine bahis yapıyor. Ancak, kölelik (yalnızca 2003\'te yasaklanmış ve hala sorun olmaya devam ediyor) ve yüksek okuma yazma eksiklik ve hastalık gibi temel haklar, inatçı zorluklar olmaya devam ediyor. ABD, ülkede İslamcı militanlarla savaşmayı amaçlayan önemli bir askeri varlığa sahip. Nijer, Avrupa\'ya giden göçmenler için önemli bir geçiş yolu olarak dikkat çekti. "
}
//Function on clicking one Country on the list
document.getElementById("njr").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Nijer.Cname;
    document.getElementById("imgFlag").src = Nijer.flag;
    document.getElementById("textarea").innerHTML = Nijer.text;
     //galery 4images change
    document.getElementById("img1").src = Nijer.img1;
    document.getElementById("img2").src = Nijer.img2;
    document.getElementById("img3").src = Nijer.img3;
    document.getElementById("img4").src = Nijer.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Nijer.capital;
    document.getElementById("money").innerHTML = Nijer.money;
    document.getElementById("dil").innerHTML = Nijer.lang;
    document.getElementById("richess").innerHTML = Nijer.riche;
    document.getElementById("pop").innerHTML = Nijer.pop;
    document.getElementById("sup").innerHTML = Nijer.sup;
    document.getElementById("gross").innerHTML = Nijer.gdp;
    document.getElementById("inde").innerHTML = Nijer.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Nijerya = {
    Cname:"Nijerya",
    flag:"images/flags/nigeria.png",
    
    img1:"countries/nijerya/img1.jpg",
    img2:"countries/nijerya/img2.jpg",
    img3:"countries/nijerya/img3.jpg",
    img4:"countries/nijerya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Bir askeri darbeden diğerine geçtikten sonra, Nijerya\'nın artık seçilmiş bir liderliği var. binlerce insan kuzeydoğudaki cihatçıların yol açtığı saldırılarda öldü. Ayrılıkçı özlemler de büyümektedir ve çeşitli kuzey eyaletlerinde İslam hukukunun uygulanması bölünmeleri gömmüş ve binlerce Hıristiyanın kaçmasına neden olmuştur. Nijerya\'nın güvensizliği, ekonomik sıkıntılarına yabancı yatırımları engelledi. Eski İngiliz kolonisi dünyanın en büyük petrol üreticilerinden biridir, ancak petrol üreten bölgeler de dahil olmak üzere az sayıda Nijeryalılar faydalanmıştır. "
}
//Function on clicking one Country on the list
document.getElementById("njrya").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Nijerya.Cname;
    document.getElementById("imgFlag").src = Nijerya.flag;
    document.getElementById("textarea").innerHTML = Nijerya.text;
     //galery 4images change
    document.getElementById("img1").src = Nijerya.img1;
    document.getElementById("img2").src = Nijerya.img2;
    document.getElementById("img3").src = Nijerya.img3;
    document.getElementById("img4").src = Nijerya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Nijerya.capital;
    document.getElementById("money").innerHTML = Nijerya.money;
    document.getElementById("dil").innerHTML = Nijerya.lang;
    document.getElementById("richess").innerHTML = Nijerya.riche;
    document.getElementById("pop").innerHTML = Nijerya.pop;
    document.getElementById("sup").innerHTML = Nijerya.sup;
    document.getElementById("gross").innerHTML = Nijerya.gdp;
    document.getElementById("inde").innerHTML = Nijerya.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Sahra  = {
    Cname:"Sahra",
    flag:"images/flags/",
    
    img1:"countries/",
    img2:"countries/",
    img3:"countries/",
    img4:"countries/",
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Sahra "
}
//Function on clicking one Country on the list
document.getElementById("sah").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Sahra.Cname;
    document.getElementById("imgFlag").src = Sahra.flag;
    document.getElementById("textarea").innerHTML = Sahra.text;
     //galery 4images change
    document.getElementById("img1").src = Sahra.img1;
    document.getElementById("img2").src = Sahra.img2;
    document.getElementById("img3").src = Sahra.img3;
    document.getElementById("img4").src = Sahra.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Sahra.capital;
    document.getElementById("money").innerHTML = Sahra.money;
    document.getElementById("dil").innerHTML = Sahra.lang;
    document.getElementById("richess").innerHTML = Sahra.riche;
    document.getElementById("pop").innerHTML = Sahra.pop;
    document.getElementById("sup").innerHTML = Sahra.sup;
    document.getElementById("gross").innerHTML = Sahra.gdp;
    document.getElementById("inde").innerHTML = Sahra.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var TomvePrncipe  = {
    Cname:" São Tomé ve Príncipe ",
    flag:"images/flags/saoTomePrincipe.png",
    
    img1:"countries/saoTomeprinsip/img1.jpg",
    img2:"countries/saoTomeprinsip/img2.jpg",
    img3:"countries/saoTomeprinsip/img3.jpg",
    img4:"countries/saoTomeprinsip/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"  Bir zamanlar önde gelen bir kakao üreticisi olan Sao Tome ve Principe, iki volkanik kökenli adadan ve Afrika kıyılarında yatan birkaç küçük adacıktan oluşuyor. 1400\'lerin sonlarından itibaren Portekiz Sao Tome\'da hükümlü yerleştirmeye ve anakaradaki kölelerin yardımıyla şeker tarlaları kurmaya başladı. Ada, köle aktarımında da önemliydi. Koloninin bağımsızlık beklentileri Portekiz\'deki 1974 darbesinden sonra tanındı ve ilk önce Sao Tome ve Principe\'in Kurtuluş Hareketi ülkenin tek siyasi partisiydi. Ancak 1990 anayasası çok partili bir demokrasi yarattı. Principe adası 1995 yılında özerklik kazandı. Ülke, açık deniz petrolünü kullanarak bağışçılara ve kakao ihracatına olan bağımlılığını azaltmayı umuyor."
}
//Function on clicking one Country on the list
document.getElementById("s_t_p").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = TomvePrncipe.Cname;
    document.getElementById("imgFlag").src = TomvePrncipe.flag;
    document.getElementById("textarea").innerHTML = TomvePrncipe.text;
     //galery 4images change
    document.getElementById("img1").src = TomvePrncipe.img1;
    document.getElementById("img2").src = TomvePrncipe.img2;
    document.getElementById("img3").src = TomvePrncipe.img3;
    document.getElementById("img4").src = TomvePrncipe.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = TomvePrncipe.capital;
    document.getElementById("money").innerHTML = TomvePrncipe.money;
    document.getElementById("dil").innerHTML = TomvePrncipe.lang;
    document.getElementById("richess").innerHTML = TomvePrncipe.riche;
    document.getElementById("pop").innerHTML = TomvePrncipe.pop;
    document.getElementById("sup").innerHTML = TomvePrncipe.sup;
    document.getElementById("gross").innerHTML = TomvePrncipe.gdp;
    document.getElementById("inde").innerHTML = TomvePrncipe.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Senegal = {
    Cname:"Senegal",
    flag:"images/flags/senegal.png",
    
    img1:"countries/senegal/img1.jpg",
    img2:"countries/senegal/img2.jpg",
    img3:"countries/senegal/img3.jpg",
    img4:"countries/senegal/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Uzun zamandır Afrika\'nın model demokrasilerinden biri olarak kabul edilen Batı Afrika ulusu Senegal, istikrarlı hükümetler ve sivil yönetim geleneğine sahiptir. Casamance\'nin güney bölgesinde yerel bir ayrılıkçı çatışmada yüzlerce Senegalli öldürüldü, ancak 2014 ateşkesinden bu yana şiddet azaldı. Ülkenin istikrarı, Kongo, Liberya ve Kosova\'ya barışı koruma birlikleri göndermesine izin verdi. 17. ve 18. yüzyıllarda kıyıdan fildişi ve altın köleler ihraç edildi ve şimdi ekonomi ağırlıklı olarak tarıma dayanıyor. Yurtdışında yaşayan Senegalli tarafından eve gönderilen para önemli bir gelir kaynağıdır."
}
//Function on clicking one Country on the list
document.getElementById("sen").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Senegal.Cname;
    document.getElementById("imgFlag").src = Senegal.flag;
    document.getElementById("textarea").innerHTML = Senegal.text;
     //galery 4images change
    document.getElementById("img1").src = Senegal.img1;
    document.getElementById("img2").src = Senegal.img2;
    document.getElementById("img3").src = Senegal.img3;
    document.getElementById("img4").src = Senegal.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Senegal.capital;
    document.getElementById("money").innerHTML = Senegal.money;
    document.getElementById("dil").innerHTML = Senegal.lang;
    document.getElementById("richess").innerHTML = Senegal.riche;
    document.getElementById("pop").innerHTML = Senegal.pop;
    document.getElementById("sup").innerHTML = Senegal.sup;
    document.getElementById("gross").innerHTML = Senegal.gdp;
    document.getElementById("inde").innerHTML = Senegal.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var SeyselAdalari   = {
    Cname:"Seysel Adalari",
    flag:"images/flags/seyshelle.png",
    
    img1:"countries/seysel/img1.jpg",
    img2:"countries/seysel/img2.jpg",
    img3:"countries/seysel/img3.jpg",
    img4:"countries/seysel/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"  Bir darbe, paralı askerlerin istilası, kürtaj ordusu isyanı ve birkaç darbe girişimi içeren uğursuz, bağımsızlık sonrası bir başlangıçtan sonra, Seyşeller istikrar ve refah elde etti. Bugün Hint Okyanusu takımadaları kişi başına yüksek gelir, iyi sağlık ve eğitime sahiptir. Eski İngiliz kolonisinin ekonomisi büyük ölçüde balıkçılık endüstrisine ve lüks turizme bağlıdır. Politikacıların, ünlülerin, kurumsal devlerin ve iş liderlerinin finansal ilişkilerini ortaya çıkaran Cennet Kağıtları olarak adlandırılan 2017 sızıntısında yer alıyor. Seyşel Adaları ayrıca dev kaplumbağalar ve deniz kaplumbağaları da dahil olmak üzere bir dizi vahşi hayata ev sahipliği yapmaktadır. Arazinin çoğu doğa rezervlerinin bir parçası olarak korunmaktadır."
}
//Function on clicking one Country on the list
document.getElementById("sey").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = SeyselAdalari.Cname;
    document.getElementById("imgFlag").src = SeyselAdalari.flag;
    document.getElementById("textarea").innerHTML = SeyselAdalari.text;
     //galery 4images change
    document.getElementById("img1").src = SeyselAdalari.img1;
    document.getElementById("img2").src = SeyselAdalari.img2;
    document.getElementById("img3").src = SeyselAdalari.img3;
    document.getElementById("img4").src = SeyselAdalari.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = SeyselAdalari.capital;
    document.getElementById("money").innerHTML = SeyselAdalari.money;
    document.getElementById("dil").innerHTML = SeyselAdalari.lang;
    document.getElementById("richess").innerHTML = SeyselAdalari.riche;
    document.getElementById("pop").innerHTML = SeyselAdalari.pop;
    document.getElementById("sup").innerHTML = SeyselAdalari.sup;
    document.getElementById("gross").innerHTML = SeyselAdalari.gdp;
    document.getElementById("inde").innerHTML = SeyselAdalari.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  SierraLeone  = {
    Cname:"Sierra Leone",
    flag:"images/flags/SieraLeonne.png",
    
    img1:"countries/sierraLeone/img1.jpg",
    img2:"countries/sierraLeone/img2.jpg",
    img3:"countries/sierraLeone/img3.jpg",
    img4:"countries/sierraLeone/img4.png",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Batı Afrika\'da bir ülke olan Sierra Leone, binlerce Batı Afrika esirinin kalkış noktası olarak transatlantik köle ticareti tarihinde özel bir öneme sahiptir. Başkent Freetown, 1787\'de ülkesine geri gönderilen eski kölelerin evi olarak kuruldu. Ancak ülkenin modern tarihi, İngiltere\'nin, eski sömürgeci gücün ve büyük Birleşmiş Milletler barışı koruma misyonunun yardımıyla 2002\'de sona eren acımasız bir iç savaşın gölgesinde kaldı. İç savaşın yıkıcı etkileri hissedilmeye devam etse de Sierra Leone son yıllarda önemli bir ekonomik büyüme yaşadı. Ülke ayrıca elmas ve diğer mineraller açısından da zengindir. Çatışmaların finanse edilmesindeki rolleri için \"kanlı elmaslar\" olarak bilinen yasadışı mücevher ticareti iç savaşı sürdürdü. Hükümet, ticareti bozmaya çalıştı. "
}
//Function on clicking one Country on the list
document.getElementById("sier").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = SierraLeone.Cname;
    document.getElementById("imgFlag").src = SierraLeone.flag;
    document.getElementById("textarea").innerHTML = SierraLeone.text;
     //galery 4images change
    document.getElementById("img1").src = SierraLeone.img1;
    document.getElementById("img2").src = SierraLeone.img2;
    document.getElementById("img3").src = SierraLeone.img3;
    document.getElementById("img4").src = SierraLeone.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = SierraLeone.capital;
    document.getElementById("money").innerHTML = SierraLeone.money;
    document.getElementById("dil").innerHTML = SierraLeone.lang;
    document.getElementById("richess").innerHTML = SierraLeone.riche;
    document.getElementById("pop").innerHTML = SierraLeone.pop;
    document.getElementById("sup").innerHTML = SierraLeone.sup;
    document.getElementById("gross").innerHTML = SierraLeone.gdp;
    document.getElementById("inde").innerHTML = SierraLeone.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Somali  = {
    Cname:"Somali",
    flag:"images/flags/somali.png",
    
    img1:"countries/somali/img1.jpg",
    img2:"countries/somali/img2.jpg",
    img3:"countries/somali/img3.jpg",
    img4:"countries/somali/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" 1960 yılında eski bir İngiliz himayesinden ve bir İtalyan kolonisinden kurulan Somali, 1991 yılında Cumhurbaşkanı Siad Barre\'nin askeri rejiminin devrilmesinin ardından anarşiye çöktü. Rakip savaş ağaları ülkeyi klan temelli inançlara ayırdıkça, 2000 yılında kurulan uluslararası destekli bir birlik hükümeti kontrol kurmak için mücadele etti ve Somaliland ve Puntland\'ın nispeten sakin iki kuzey bölgesi etkili bir şekilde ayrıldı. Başkent Mogadişu\'nun ve ülkenin güneyinin çoğunun 2006 yılında İslamcı şeriat mahkemeleri koalisyonu tarafından ele geçirilmesi Etiyopya ve daha sonra Afrika Birliği güçlerinin müdahalesini sağladı. Yeni uluslararası destekli bir hükümetin kurulduğu 2012 yılından bu yana, Somali istikrara doğru ilerliyor, ancak yeni yetkililer hala El Kaide uyumlu Al-Shabab isyancılarının zorluğu yaşıyor. "
}
//Function on clicking one Country on the list
document.getElementById("som").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Somali.Cname;
    document.getElementById("imgFlag").src = Somali.flag;
    document.getElementById("textarea").innerHTML = Somali.text;
     //galery 4images change
    document.getElementById("img1").src = Somali.img1;
    document.getElementById("img2").src = Somali.img2;
    document.getElementById("img3").src = Somali.img3;
    document.getElementById("img4").src = Somali.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Somali.capital;
    document.getElementById("money").innerHTML = Somali.money;
    document.getElementById("dil").innerHTML = Somali.lang;
    document.getElementById("richess").innerHTML = Somali.riche;
    document.getElementById("pop").innerHTML = Somali.pop;
    document.getElementById("sup").innerHTML = Somali.sup;
    document.getElementById("gross").innerHTML = Somali.gdp;
    document.getElementById("inde").innerHTML = Somali.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  GüneyAfrika  = {
    Cname:"Güney Afrika",
    flag:"images/flags/afriqueSud.png",
    
  img1:"countries/sAfrik/img1.jpg",
img2:"countries/sAfrik/img2.jpg",
img3:"countries/sAfrik/img3.jpg",
img4:"countries/sAfrik/img4.jpg",

    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Güney Afrika, kıtanın en büyük ve en gelişmiş ekonomilerinden birine sahiptir. 1994 yılına kadar ırk ayrımcılığı politikasıyla ırkların ayrılmasını zorunlu kılan beyaz bir azınlık hükümeti tarafından yönetildi. Apartheid hükümeti, onlarca yıl süren uluslararası tecrit, silahlı muhalefet ve kitlesel protestolardan sonra kendini iktidardan müzakere etti. Demokratik olarak seçilen liderlik uzlaşmayı teşvik etti ve sosyal dengesizliklerin giderilmesine başladı, ancak ekonomi mücadele etti."
}
//Function on clicking one Country on the list
document.getElementById("ga").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = GüneyAfrika.Cname;
    document.getElementById("imgFlag").src = GüneyAfrika.flag;
    document.getElementById("textarea").innerHTML = GüneyAfrika.text;
     //galery 4images change
    document.getElementById("img1").src = GüneyAfrika.img1;
    document.getElementById("img2").src = GüneyAfrika.img2;
    document.getElementById("img3").src = GüneyAfrika.img3;
    document.getElementById("img4").src = GüneyAfrika.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = GüneyAfrika.capital;
    document.getElementById("money").innerHTML = GüneyAfrika.money;
    document.getElementById("dil").innerHTML = GüneyAfrika.lang;
    document.getElementById("richess").innerHTML = GüneyAfrika.riche;
    document.getElementById("pop").innerHTML = GüneyAfrika.pop;
    document.getElementById("sup").innerHTML = GüneyAfrika.sup;
    document.getElementById("gross").innerHTML = GüneyAfrika.gdp;
    document.getElementById("inde").innerHTML = GüneyAfrika.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Sudan = {
    Cname:"Sudan",
    flag:"images/flags/soudan.png",
    
    img1:"countries/sudan/img1.jpg",
    img2:"countries/sudan/img2.jpg",
    img3:"countries/sudan/img3.jpg",
    img4:"countries/sudan/img4.jpg",
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Bir zamanlar Afrika\'nın en büyük ve coğrafi olarak en çeşitli eyaletlerinden biri olan Sudan, güney halkı bağımsızlık için oy verdikten sonra Temmuz 2011\'de iki ülkeye ayrıldı. Sudan hükümeti, çoğunlukla Hıristiyan ve Animist halkın onlarca yıldır Arap Müslüman kuzey tarafından yönetime karşı mücadele ettiği bağımsız bir Güney Sudan\'a nimet verdi. Bununla birlikte, muhtelif meseleler -özellikle paylaşılan petrol gelirleri ve sınır sınırlaması sorunu- ardıl iki devlet arasında gerginlik yaratmaya devam etmiştir. Sudan uzun zamandır çatışmalarla doludur. Kuzey-güney iç savaşının iki turu 1,5 milyon insanın hayatına mal oldu ve Darfur\'un batı bölgesinde devam eden bir çatışma iki milyon insanı evlerinden çıkardı ve 200.000\'den fazla insanı öldürdü. "
}
//Function on clicking one Country on the list
document.getElementById("sdn").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Sudan.Cname;
    document.getElementById("imgFlag").src = Sudan.flag;
    document.getElementById("textarea").innerHTML = Sudan.text;
     //galery 4images change
    document.getElementById("img1").src = Sudan.img1;
    document.getElementById("img2").src = Sudan.img2;
    document.getElementById("img3").src = Sudan.img3;
    document.getElementById("img4").src = Sudan.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Sudan.capital;
    document.getElementById("money").innerHTML = Sudan.money;
    document.getElementById("dil").innerHTML = Sudan.lang;
    document.getElementById("richess").innerHTML = Sudan.riche;
    document.getElementById("pop").innerHTML = Sudan.pop;
    document.getElementById("sup").innerHTML = Sudan.sup;
    document.getElementById("gross").innerHTML = Sudan.gdp;
    document.getElementById("inde").innerHTML = Sudan.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Swazilve  = {
    Cname:"Swazilve",
    flag:"images/flags/swazilang.png",
    
    img1:"countries/swazilve/img1.jpg",
    img2:"countries/swazilve/img2.jpg",
    img3:"countries/swazilve/img3.jpg",
    img4:"countries/swazilve/img4.jpg",
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" ESwatini krallığı, dünyanın kalan son mutlak monarşilerinden biridir. Kral, çoğu kırsal alanda yaşayan ve geleneksel yaşam tarzlarını takip eden milyon denek hakkında kararname ile yönetiyor. 2018\'de kral, şimdiye kadar Svaziland olarak bilinen ülkenin bundan böyle eSwatini olarak adlandırılacağını açıkladı, bir hareket eleştirmeni istişare olmadan yapıldığını ve anayasal bir değişikliğe ihtiyaç duyduğunu söyledi. Ülke şeker ihraç ediyor ve birçok Swazis Güney Afrika\'da çalışıyor ve kazançlarını eve gönderiyor. UNICEF\'e göre, eSwatini dünyadaki en yüksek HIV yaygınlık oranına sahiptir. HIV-Aids virüsü sayısız Swaziyi öldürdü ve binlerce yetimi bıraktı. Yaklaşık 210.000 kişinin HIV ile yaşadıkları tahmin edilmektedir. "
}
//Function on clicking one Country on the list
document.getElementById("swa").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Swazilve.Cname;
    document.getElementById("imgFlag").src = Swazilve.flag;
    document.getElementById("textarea").innerHTML = Swazilve.text;
     //galery 4images change
    document.getElementById("img1").src = Swazilve.img1;
    document.getElementById("img2").src = Swazilve.img2;
    document.getElementById("img3").src = Swazilve.img3;
    document.getElementById("img4").src = Swazilve.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Swazilve.capital;
    document.getElementById("money").innerHTML = Swazilve.money;
    document.getElementById("dil").innerHTML = Swazilve.lang;
    document.getElementById("richess").innerHTML = Swazilve.riche;
    document.getElementById("pop").innerHTML = Swazilve.pop;
    document.getElementById("sup").innerHTML = Swazilve.sup;
    document.getElementById("gross").innerHTML = Swazilve.gdp;
    document.getElementById("inde").innerHTML = Swazilve.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var Tanzanya   = {
    Cname:"Tanzanya",
    flag:"images/flags/tanzanie.png",
    
    img1:"countries/tanzanya/img1.jpg",
    img2:"countries/tanzanya/img2.jpg",
    img3:"countries/tanzanya/img3.jpg",
    img4:"countries/tanzanya/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Tanzanya, birçok Afrika devletini körükleyen iç çekişmeden kurtuldu. Bununla birlikte, iç istikrar Tanzanya için ekonomik refah anlamına gelmedi. Ülke bağışçıları ve yatırımcıları wooing konusunda bazı başarılara sahip olmasına rağmen, halkının çoğu Dünya Bankası yoksulluk sınırının altında yaşıyor. Tanzanya, Afrika\'nın en yüksek dağı, Kilimanjaro ve Serengeti gibi vahşi yaşam açısından zengin milli parklar olmak üzere iki ünlü turizm bölgesine ev sahipliği yapıyor ancak kaçak avcıların hedefi haline geldi. Korumacılar, şu andaki fildişi için öldürülmeye devam etmeleri durumunda, tüm fil nüfusunun on yılın sonunda ölebileceği konusunda uyardılar. "
}
//Function on clicking one Country on the list
document.getElementById("tnz").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Tanzanya.Cname;
    document.getElementById("imgFlag").src = Tanzanya.flag;
    document.getElementById("textarea").innerHTML = Tanzanya.text;
     //galery 4images change
    document.getElementById("img1").src = Tanzanya.img1;
    document.getElementById("img2").src = Tanzanya.img2;
    document.getElementById("img3").src = Tanzanya.img3;
    document.getElementById("img4").src = Tanzanya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Tanzanya.capital;
    document.getElementById("money").innerHTML = Tanzanya.money;
    document.getElementById("dil").innerHTML = Tanzanya.lang;
    document.getElementById("richess").innerHTML = Tanzanya.riche;
    document.getElementById("pop").innerHTML = Tanzanya.pop;
    document.getElementById("sup").innerHTML = Tanzanya.sup;
    document.getElementById("gross").innerHTML = Tanzanya.gdp;
    document.getElementById("inde").innerHTML = Tanzanya.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Togo  = {
    Cname:"Togo",
    flag:"images/flags/togo.png",
    
    img1:"countries/togo/img1.jpg",
    img2:"countries/togo/img2.jpg",
    img3:"countries/togo/img3.jpg",
    img4:"countries/togo/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Afrika\'nın batı kıyısındaki dar bir toprak şeridi olan Togo, yıllardır insan hakları kaydı ve siyasi yönetişim üzerine eleştirilerin hedefi olmuştur. 1960 yılında Fransa\'dan bağımsızlık kazanan Togo, istikrarlı bir ülke ve ekonomi inşa etmek için mücadele etti. Ülke, bölgenin başka bir yerinde haşlanmış fildişi için bir geçiş noktası olarak ün kazanmıştır. Son yıllarda kıtada kaçak avcılık, iyi silahlı suç çetelerinin boynuzları için dişleri ve gergedanlar için filler öldürdükleri, süslemelerde ve sözde tıbbında kullanılmak üzere Asya\'ya gönderilmeden önce arttı. Togo, gübrelerde kullanılan ancak fakir kalan ve dış yardıma bağımlı olan dünyanın ilk beş fosfat üreticisinden biridir. "
}
//Function on clicking one Country on the list
document.getElementById("tog").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Togo.Cname;
    document.getElementById("imgFlag").src = Togo.flag;
    document.getElementById("textarea").innerHTML = Togo.text;
     //galery 4images change
    document.getElementById("img1").src = Togo.img1;
    document.getElementById("img2").src = Togo.img2;
    document.getElementById("img3").src = Togo.img3;
    document.getElementById("img4").src = Togo.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Togo.capital;
    document.getElementById("money").innerHTML = Togo.money;
    document.getElementById("dil").innerHTML = Togo.lang;
    document.getElementById("richess").innerHTML = Togo.riche;
    document.getElementById("pop").innerHTML = Togo.pop;
    document.getElementById("sup").innerHTML = Togo.sup;
    document.getElementById("gross").innerHTML = Togo.gdp;
    document.getElementById("inde").innerHTML = Togo.ind;

})

//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Tunus  = {
    Cname:"Tunus",
    flag:"images/flags/tunisie.png",
    
    img1:"countries/tunus/img1.jpg",
    img2:"countries/tunus/img2.jpg",
    img3:"countries/tunus/img3.jpg",
    img4:"countries/tunus/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Kartaca antik kentine ev sahipliği yapan Tunus, Kuzey Afrika\'nın merkezindeki hayati nakliye rotalarına yakın konumu sayesinde bir zamanlar Akdeniz\'de önemli bir oyuncuydu. Romalılar, Araplar, Osmanlı Türkleri ve Fransızlar stratejik önemini fark ettiler ve bölge üzerinde kontrol merkezi haline getirdiler. Fransız sömürge yönetimi 1956\'da sona erdi ve Tunus, otuz yıl boyunca, başta kadınların kurtuluşu olan laik fikirler geliştiren Habib Bourguiba tarafından yönetildi. Tunus komşularından daha müreffeh. Tarım işgücünün büyük bir bölümünü istihdam etmektedir ve turizm kilit bir sektördür. Kitlesel protestolar Cumhurbaşkanı Ben Ali\'yi 2011 yılında yerinden etti - bölgeyi süpüren bir dizi popüler ayaklanmanın ilki. Ülkenin geçişi nispeten barışçıl oldu, ancak laik Tunuslular, özellikle kadınlar, aşırı muhafazakar İslamcıların artan etkisi konusunda endişeli. Ve 2015 yılında, çoğu yabancı olmak üzere 60 kişinin öldüğü saldırıların sorumluluğunu üstlenen İslamcı militanların ortaya çıkardığı bir zorluk var. "
}
//Function on clicking one Country on the list
document.getElementById("tns").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Tunus.Cname;
    document.getElementById("imgFlag").src = Tunus.flag;
    document.getElementById("textarea").innerHTML = Tunus.text;
     //galery 4images change
    document.getElementById("img1").src = Tunus.img1;
    document.getElementById("img2").src = Tunus.img2;
    document.getElementById("img3").src = Tunus.img3;
    document.getElementById("img4").src = Tunus.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Tunus.capital;
    document.getElementById("money").innerHTML = Tunus.money;
    document.getElementById("dil").innerHTML = Tunus.lang;
    document.getElementById("richess").innerHTML = Tunus.riche;
    document.getElementById("pop").innerHTML = Tunus.pop;
    document.getElementById("sup").innerHTML = Tunus.sup;
    document.getElementById("gross").innerHTML = Tunus.gdp;
    document.getElementById("inde").innerHTML = Tunus.ind;

})


//----------------------country of----------------------------------------
//An onject to hold Country Data
var  Uganda  = {
    Cname:"Uganda",
    flag:"images/flags/ouganda.png",
    
    img1:"countries/uganda/img1.jpg",
    img2:"countries/uganda/img2.jpg",
    img3:"countries/uganda/img3.jpg",
    img4:"countries/uganda/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"  Kara ile çevrili Uganda, kendisini sıkıntılı bir geçmişe sahip bir ülkeden göreceli istikrar ve refah düzeyine dönüştürdü. 1962\'de İngiltere\'den bağımsızlığından bu yana, Doğu Afrika ülkesi askeri bir darbeye katlandı, ardından 1979\'da sona eren acımasız bir askeri diktatörlük, 1980\'de seçimleri ve mevcut Başkan Yoweri Museveni\'yi 1986\'da iktidara getiren beş yıllık bir savaşı reddetti. Ülke ayrıca, Lord\'un Direniş Ordusu liderliğindeki kuzeyde 20 yıl süren vahşi bir ayaklanma ile mücadele etmek zorunda kaldı. Ülke, HIV / AIDS\'e karşı yürüttüğü güçlü kampanya için övgü kazanırken, LGBT topluluğuna karşı sert duruşundan dolayı uluslararası ilgi de çekti."
}
//Function on clicking one Country on the list
document.getElementById("ug").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Uganda.Cname;
    document.getElementById("imgFlag").src = Uganda.flag;
    document.getElementById("textarea").innerHTML = Uganda.text;
     //galery 4images change
    document.getElementById("img1").src = Uganda.img1;
    document.getElementById("img2").src = Uganda.img2;
    document.getElementById("img3").src = Uganda.img3;
    document.getElementById("img4").src = Uganda.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Uganda.capital;
    document.getElementById("money").innerHTML = Uganda.money;
    document.getElementById("dil").innerHTML = Uganda.lang;
    document.getElementById("richess").innerHTML = Uganda.riche;
    document.getElementById("pop").innerHTML = Uganda.pop;
    document.getElementById("sup").innerHTML = Uganda.sup;
    document.getElementById("gross").innerHTML = Uganda.gdp;
    document.getElementById("inde").innerHTML = Uganda.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var   zambiya = {
    Cname:"zambiya",
    flag:"images/flags/zambie.png",
    
    img1:"countries/zambia/img1.jpg",
    img2:"countries/zambia/img2.jpg",
    img3:"countries/zambia/img3.jpg",
    img4:"countries/zambia/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:"Zambiya, komşularının çoğundan farklı olarak, Afrika\'nın sömürge sonrası tarihinin çoğunu belirleyen savaş ve ayaklanmadan kaçınmayı başardı ve kendisini siyasi istikrar için bir ün kazandı. Denize kıyısı olmayan ülke, DR Kongo\'dan sonra Afrika\'nın ikinci büyük bakır üreticisi olarak son on yılda hızlı bir ekonomik büyüme yaşadı. Ancak bakıra aşırı bağımlılığı, onu emtia fiyatlarındaki düşüşe karşı savunmasız bıraktı. Zambiya ayrıca, BM\'nin nüfusunun 2050 yılına kadar üç katına çıkacağını öngördüğü ile dünyanın en hızlı büyüyen nüfuslarından birine sahip. Ancak ekonomik büyüme ve Çin\'e yapılan büyük yatırım çoğu Zambyalı\'nın hayatını iyileştiremedi ve üçte ikisi hala yoksulluk içinde yaşıyor.  "
}
//Function on clicking one Country on the list
document.getElementById("zam").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = zambiya.Cname;
    document.getElementById("imgFlag").src = zambiya.flag;
    document.getElementById("textarea").innerHTML = zambiya.text;
     //galery 4images change
    document.getElementById("img1").src = zambiya.img1;
    document.getElementById("img2").src = zambiya.img2;
    document.getElementById("img3").src = zambiya.img3;
    document.getElementById("img4").src = zambiya.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = zambiya.capital;
    document.getElementById("money").innerHTML = zambiya.money;
    document.getElementById("dil").innerHTML = zambiya.lang;
    document.getElementById("richess").innerHTML = zambiya.riche;
    document.getElementById("pop").innerHTML = zambiya.pop;
    document.getElementById("sup").innerHTML = zambiya.sup;
    document.getElementById("gross").innerHTML = zambiya.gdp;
    document.getElementById("inde").innerHTML = zambiya.ind;

})
//----------------------country of----------------------------------------
//An onject to hold Country Data
var   Zimbadve = {
    Cname:"Zimbadve",
    flag:"images/flags/zimbadwe.png",
    
    img1:"countries/zimbadve/img1.jpg",
    img2:"countries/zimbadve/img2.jpg",
    img3:"countries/zimbadve/img3.jpg",
    img4:"countries/zimbadve/img4.jpg",
    
    lang:"",
    money:"",
    gdp:" ",
    riche:"",
    capital:" ",
    control:"",
    pop:"",
    sup:"",
    ind:"",

    text:" Bağımsızlık, toprak ve güç mücadelesi Zimbabve\'nin modern tarihi boyunca devam eder. Kıdemli Başkan Robert Mugabe, 1980 yılında İngiltere\'den bağımsızlık kazanmasının ardından ülkenin siyasi sahnesine neredeyse kırk yıl boyunca hâkim oldu. Bölgenin ekmek sepeti, 2000 yılından bu yana Zimbabve, şiddetli kuraklıklar ve beyaz sahip çiftliklerin topraksız Zimbabweans\'e yeniden dağıtıldığını ve üretimde keskin düşüşler gördüğü bir toprak reform programının etkileri nedeniyle kendi halkını beslemek için mücadele etti. Robert Mugabe\'nin 2017\'deki düşüşü siyaseti ve medyayı serbest bıraktı, ancak ülke nakit sıkıntısı çekiyor ve fakirleşiyor. "
}
//Function on clicking one Country on the list
document.getElementById("zim").addEventListener("click", function(){
    
    document.getElementById("CountryName").innerHTML = Zimbadve.Cname;
    document.getElementById("imgFlag").src = Zimbadve.flag;
    document.getElementById("textarea").innerHTML = Zimbadve.text;
     //galery 4images change
    document.getElementById("img1").src = Zimbadve.img1;
    document.getElementById("img2").src = Zimbadve.img2;
    document.getElementById("img3").src = Zimbadve.img3;
    document.getElementById("img4").src = Zimbadve.img4;

    //changing od quick information
    document.getElementById("capital").innerHTML = Zimbadve.capital;
    document.getElementById("money").innerHTML = Zimbadve.money;
    document.getElementById("dil").innerHTML = Zimbadve.lang;
    document.getElementById("richess").innerHTML = Zimbadve.riche;
    document.getElementById("pop").innerHTML = Zimbadve.pop;
    document.getElementById("sup").innerHTML = Zimbadve.sup;
    document.getElementById("gross").innerHTML = Zimbadve.gdp;
    document.getElementById("inde").innerHTML = Zimbadve.ind;

})



