class Draw {
    constructor(panjang, tinggi){
        this.panjang = panjang;
        this.tinggi = tinggi;
    }
    gambarKotak(){
        console.log("Gambar Kotak")
        for(let i = 0; i < this.tinggi; i++) {
            for (let j = 0; j < this.panjang; j++) {
                process.stdout.write("*");
            }
            console.log("")
        }
    }
    gambarSegitiga(){
        console.log("Gambar Segitiga")
        for(let i = 0; i < this.tinggi; i++) {
            for (let j = 0; j < this.panjang; j++) {
                if(j <= i) {
                    process.stdout.write("*");
                }
            }
            console.log("")
        }
    }
    gambarSegitigaTerbalik(){
        console.log("Gambar Segitiga Terbalik")
        for(let i = 0; i < this.tinggi; i++) {
            for (let j = 0; j < this.panjang; j++) {
                if(j >= i) {
                    process.stdout.write("*");
                }
            }
            console.log("")
        }
    }
    gambarSelangSeling(){
        console.log("Gambar Selang Seling")
        let cont = 0;
        for(let i = 0; i < this.tinggi; i++) {
            for (let j = 0; j < this.panjang; j++) {
                cont++;
                if (cont%2 == 0) {
                    process.stdout.write("!");
                } else {
                    process.stdout.write("*");
                }
                // if (i%2 == 0) {
                //     if (j%2 == 0) {
                //         process.stdout.write("*");
                //     } else {
                //         process.stdout.write("!");
                //     }
                // } else {
                //     if (j%2 == 0) {
                //         process.stdout.write("!");
                //     } else {
                //         process.stdout.write("*");
                //     }
                // }

            }
            console.log("")
        }
    }
    gambarKotakPola(){
        console.log("Gambar Kotak Pola")
        for(let i = 1; i <= this.tinggi; i++) {
            for (let j = 1; j <= this.panjang; j++) {
                let cekTengah = this.panjang%2;
                let tengah = parseInt(this.panjang/2);
                if (i%2 == 0) {
                    if (cekTengah == 0) {
                        if (j == tengah)  {
                            process.stdout.write("!");
                        } else {
                            process.stdout.write("*");
                        }
                    } else {
                        if (j == tengah+1)  {
                            process.stdout.write("!");
                        } else {
                            process.stdout.write("*");
                        }
                    }
                } else {
                    if (cekTengah == 0) {
                        if (j == tengah-1)  {
                            process.stdout.write("!");
                        } else {
                            process.stdout.write("*");
                        }
                    } else {
                        if (j == tengah)  {
                            process.stdout.write("!");
                        } else {
                            process.stdout.write("*");
                        }
                    }
                }
            }
            console.log("")
        }
    }
}

let Gambar = new Draw(5,5);
Gambar.gambarKotak();
Gambar.gambarSegitiga();
Gambar.gambarSegitigaTerbalik();
Gambar.gambarSelangSeling();
Gambar.gambarKotakPola();