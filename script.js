const kotaks = document.querySelectorAll(".kotakKecil");
const reset = document.querySelector(".reset");

let kotakSatu, kotakDua;
let lagiMuter = false;
let sama = 0;

function resetPermainan(){
    kocokKartu();
}

function flip(kotak) {
    let kartuKlik = kotak.target;
    if (kotakSatu !== kartuKlik && !lagiMuter){
        kartuKlik.classList.add("balik");
        if(!kotakSatu){
            return kotakSatu = kartuKlik;
        }
        kotakDua = kartuKlik;
        lagiMuter = true;
        let kotakSatuGambar = kotakSatu.querySelector(".jawaban img").src;
        let kotakDuaGambar = kotakDua.querySelector(".jawaban img").src;
        if (kotakSatuGambar === kotakDuaGambar){
            sama++;
            kotakSatu.removeEventListener("click", flip);
            kotakDua.removeEventListener("click", flip);
            kotakSatu = "";
            kotakDua = "";
            lagiMuter=false;
        }
        else {
            setTimeout(() => {
                kotakSatu.classList.remove("balik");
                kotakDua.classList.remove("balik");
                lagiMuter=false;
                kotakSatu = "";
                kotakDua = "";  
            }, 600);
        }
        
    }
}

function kocokKartu() {
    sama = 0;
    kotakSatu = "";
    kotakDua = "";
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    kotaks.forEach(kotak => {
        kotak.classList.remove("balik");
    });
    setTimeout(() => {
        kotaks.forEach((kotak, i) => {
        let gambar = kotak.querySelector(".jawaban img");
        gambar.src = `chibi${array[i]}.png`;
        kotak.addEventListener("click", flip);
    }); 
    }, 1000);
    
}

kocokKartu();

reset.addEventListener("click", resetPermainan);

kotaks.forEach(kotak => {
    kotak.addEventListener("click", flip);
});
