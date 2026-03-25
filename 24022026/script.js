let tutulanSayi = Math.floor(Math.random()*10)+1;
let tahmin;
for (let hak=1;hak<=3;hak++)
    {
 tahmin=Number(prompt("tahmin giriniz"));
if(tahmin===tutulanSayi)
    {
    alert("Tebrikler");
     break;
    }
else
     {
    alert("tekrar deneyiniz kalan hakkınız:"+(3-hak));
     }
}
alert("Sayı:" +tutulanSayi);

