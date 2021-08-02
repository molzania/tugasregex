//Soal 1//
// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’


let regex1 = /^[A-Z]/;

function Soal1(kata) {
    let jawabanSoal1 = document.getElementById("jawaban-soal-1");
    if (regex1.test(kata) == true) {
        jawabanSoal1.innerHTML = "Huruf pertama adalah huruf besar";

    } else {
        jawabanSoal1.innerHTML = "Huruf pertama adalah huruf kecil";
    }
}

//Soal 2
// Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit karakter

// let regex2 = /^[0-9]{10,12}$/

// function Soal2(number) {
//     if(regex2.test(number) == true) {
//         console.log("Terima kasih data sudah diterima");
//     } else {
//        console.log("Masukkan nomor hp hanya sebanyak 10-12 digit");
//     }
// } 

// Soal2(0812856);

let regex2 = /^[0-9]{10,12}$/

function Soal2() {
    let jawabanSoal2 = document.getElementById("jawaban-soal-2");
    let number = document.getElementById("number").value;
    if(regex2.test(number) == true) {
        jawabanSoal2.innerHTML = "Terima kasih data sudah diterima";
    } else {
       jawabanSoal2.innerHTML = "Masukkan nomor hp hanya sebanyak 10-12 digit angka";
    }
}



//Soal 3 
// Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

//  let search = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/
//  console.log(search.test("Status covid hari ini"));

// function searchTest() {

//      if (search.test("Bagaimana cara memulai usaha bisnis")) {
//          console.log("Cara memulai usaha bisnis ialah..");
//          return true;
//      } if (search.test("Bootcamp impact byte")) {
//          console.log("Bootcamp impact byte adalah sebuah kegiatan...");
//          return true;
//      } if(search.test("Status covid hari ini")) {
//          console.log("Jumlah penderita Covid di Indonesia terus bertambah.");
//          return true;
//      }
//  }

// searchTest("Bagaimana cara memulai usaha bisnis");

 let search = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/


function searchTest() {
    let kalimat = document.getElementById("kalimat").value;
    let jawabanSoal3 = document.getElementById("jawaban-soal-3");
     if (search.test("Bagaimana cara memulai usaha bisnis")) {
         jawabanSoal3.innerHTML = "Cara memulai usaha bisnis ialah..";
         return true;
     } if (search.test("Bootcamp impact byte")) {
         console.log("Bootcamp impact byte adalah sebuah kegiatan...");
         return true;
     } if(search.test("Status covid hari ini")) {
         console.log("Jumlah penderita Covid di Indonesia terus bertambah.");
         return true;
     }
 }

searchTest("Bagaimana cara memulai usaha bisnis");

//Soal 4 
//Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page.