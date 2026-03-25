let alisveris = []; 
for (let i=0;i<5;i++)
{
    let urun = prompt("listeye ürün ekle ");
    alisveris.push(urun);// döngü 3 kere çalışıcak 3 tane öğrenci adı alıcak her
    //  seferinde isim değişkenine atıcak push dediginde psuh diye ogerenci dizisine atıyor
}
console.log("alışveriş Listesi" );
for (let i= 0;i<alisveris.length;i++)
{
    console.log((i +1)+":" +alisveris[i]);
}