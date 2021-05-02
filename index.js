const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var nama = "Briliando";
var nilai = 10;
let nilai2 = 10;
//var nilai3 = tambah();
let arrayA = [8,5,9,4,2,6,7,1,3];
let hewan = ["anjing","kucing","bebek","paus","jerapah"];

// for(let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// arrayA.forEach(satuan => {
//     console.log("Nomor "+satuan);
// });


// arrayA.forEach(function ulang(satuan) {
//     console.log("Nomor "+satuan);
// });

// const mapArrayA = arrayA.map(data => {
//     return data;
// })

//const mapArrayA = arrayA.map(data => data);
// console.log(mapArrayA);

//const mapArrayA = arrayA.map(data => console.log(data));

// console.log(arrayA.includes(3,0));

// function hitung(a,b){
//     return function kurang(a,b){
//         return a-b;
//     }
// }

// let a = hitung(5,2);
// console.log(a(5,2));

// {
//     let nilai2 = 5;
//     console.log(nilai2);
// }

// console.log(nilai2);

// function tambah() {
//     let nilai2 = 30;
//     return nilai+nilai2;
// }

// console.log(nilai3);

// console.log(hewan.includes("KUCING".toLowerCase())); //memeriksa seluruh value array apakah memiliki satu value "kucing"
// console.log(hewan.some(data => "kucing" == data)); //memeriksa seluruh value array apakah memiliki minimal satu value "kucing"
// console.log(arrayA.every(data => data > 0)); //memeriksa setiap value array apakah nilainya sesuai argumen yang diberikan

//----REDUCE: MENJUMLAHKAN SELURUH VALUE DALAM SATU ARRAY----//
// let reduce = arrayA.reduce((total, nilai) => {
//     total = total + nilai;
//     return total;
// }, 0)
// console.log(reduce);

// let reduce1 = arrayA.reduce((total, nilai) => total + nilai, 0);
// console.log(reduce1);

// let reduce2 = arrayA.reduce((total, nilai) => {
//     console.log("Total = " + total);
//     console.log("Nilai = " + nilai);
//     return total + nilai;
// });
// console.log(reduce2);
//----REDUCE: MENJUMLAHKAN SELURUH VALUE DALAM SATU ARRAY----//

// console.log(arrayA.sort((a, b) => a > b ? 1 : -1));
// console.log(arrayA.sort((a, b) => {
//     return a-b;
// }))
// console.log(hewan.sort());
// console.log(arrayA.sort());

// let sort = arrayA.sort((a, b) => {
//     console.log("Nilai a: " + a);
//     console.log("Nilai b: " + b);
//     console.log(a-b);
//     return a-b;
// })

// console.log(arrayA.concat("andi", "budi", 20, 30, hewan));

///----------------------DESTRUCTOR-----------------------///

// const kendaraan = {
//     type: "motor",
//     roda: "4",
//     merk: "toyota",
//     warna: "hitam",
//     tahun: 2013,
//     noMesin: 000
// }

// let type;
// let roda;
// ({type, roda} = kendaraan);
// type = "mobil";
// roda = "6";

// let {type, roda, merk, warna, tahun, noMesin} = kendaraan;
// kendaraan.noMesin = 1;
// type = "mobil";
// console.log("No. mesin: "+kendaraan.noMesin);
// console.log(`No. mesin ${kendaraan.noMesin}`);
// console.log(`Type: ${type}, Roda: ${roda}`);

// const{type:tipe, merk:merek, isMobil=false} = kendaraan;
// console.log("Tipe: "+tipe);
// console.log("Merek: "+merek);
// console.log("IsMobil: "+isMobil);

///----------------------DESTRUCTOR-----------------------///

///--------DESTRUCTURING ARRAY--------///
// const [Bayu, Aqil, Ilham] = arrayA;
// console.log("Bayu: "+Bayu,"\nAqil: "+Aqil,"\nIlham: "+Ilham);
// const [,,,Budi, Anto, Tono] = arrayA; //koma di depan berfungsi untuk mengambil value mulai dari index sebanyak koma
// console.log("Budi: "+Budi,"\nAnto: "+Anto,"\nTono: "+Tono);
///--------DESTRUCTURING ARRAY--------///

// const namaVariabel = (parameter) => { //arrow function
//   return parameter;
// }
// console.log(namaVariabel("Ini hasil Arrow Function"));

//REST PARAMETER
// console.log(...hewan); //rest parameter
// console.log(Math.max(...arrayA)); //math.max function mencari nilai terbesar hanya bisa dipakai dengan rest parameter
// function data(...item) { //function dengan rest parameter
//   for(let angka of item) { //iterasi setiap value pada parameter yang diberikan
//     console.log(angka);
//   }
// }
// data(...arrayA.sort()); //memasukkan parameter value berupa variabel array
// data(100,200,400,"data3","data4",900); //memasukkan parameter value berupa raw value
// const [Andi, Bono, Berlin, ...Qolby] = arrayA;
// console.log(arrayA)
// console.log(Andi)
// console.log(Aqil)
// console.log(Berlin)
// console.log(Qolby)
//REST PARAMETER

class Mahasiswa {
  constructor(nama, nim, alamat, status) {
    this.nama = nama;
    this.nim = nim;
    this.alamat = alamat;
    this._status = status;
  }

  getStatus(){
    return this._status;
  }
  dataMahasiswa(){
    console.log(`Nama: ${this.nama}`);
    console.log(`Nim: ${this.nim}`);
    console.log(`Alamat: ${this.alamat}`);
    //console.log(`Status: ${this._status}`);
  }
}
let classBaru = new Mahasiswa("Qolby", "202048099", "Jalan Supratman", "Aktif");
classBaru.dataMahasiswa();
setTimeout(() => {console.log(classBaru.getStatus())}, 3000);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});