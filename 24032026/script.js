// kullanıcıdan kaç sayı giricrğini öğrenin ve sonrasında belirlediği adette sayıyı kaydedin.
//girilen sayılar arasında 50den büyük olanları tespit ederk en son ekrana yazdır.


//sınav için çalışma sorusu 
// en küçük sayıyı en büyük sayıyı 50 den büyük olan sayıların adedini girilen sayıların ortalaması 
let adet = Number(prompt("kaç sayı girilcek?"));
let sayilar = [] ;
let sayi;
for (let i=0;i<adet;i++)
{
    sayi = prompt ((i+1)+". sayıyı giriniz");
    sayilar.push(sayi);
}
console.log("50 den büyük sayılar");
for (let i= 0;i<sayilar.length;i++)
{
    if ( sayilar [i]> 50)
    console.log((i +1)+":" +sayilar[i]);
}

// dizi oluşturma dizinin elemanlarını dolaşma giib  gibi şeyler sınavda cikabilir!
//kullanıcıdan sayı alma 
// değişken oluşturna 
// 
