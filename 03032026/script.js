let tutar = Number(prompt("ücreti giriniz"));
let ogrenci = prompt("öğrenci misiniz evet/hayır ? ");

if (tutar > 1000) {
    indirim =20;
} else if (tutar >= 500 && tutar <= 999) {
    indirim = 10;
} else if (tutar < 500) {
    indirim = 5;
}

if (ogrenci === "evet" ||ogrenci === "e" ) {
    indirim += 5;    
}

let indirimTutari = tutar*indirim/100;  
let odenecekTutar = tutar - (indirimTutari);

alert(indirimTutari+ " kadar indirim kazandınız. ödenecek tutar: " + odenecekTutar);