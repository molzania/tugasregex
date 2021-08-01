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

let regex2 = /^[0-9]{10-12}$/

function Soal2(number) {
    if(regex2.test = true) {
        console.log("Terima kasih data sudah diterima");
    } else {
        console.log("Masukkan nomor hp hanya sebanyak 10-12 digit");
    }
}


//Soal 3 
// Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

//Soal 4 
//Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page.