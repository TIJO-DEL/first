let til = prompt("Tilni tanlang : 1. Uzb, 2. Eng, 3. Rus");

if (til == 1) {
  let kartaRaqam = prompt("Karta raqamingiz:");

  if (kartaRaqam.length == 16) {
    let parol = prompt("Parolingizni kiriting:");
    if(parol.length == 4){
        let choose = prompt("Quyidagini bittasini tanlang: 1. Naqd pul olish, 2. Parolli o'zgartirish")
        if(choose == 1){
            let pul = prompt("Naqd pul miqdorini kiriting:")
            alert(pul + " so'm tayyor bo'ldi")
        }else if(choose == 2){
            let oldPass = prompt("Eski parolni kiriting")
            if(parol == oldPass){
                let newPass = prompt("Yangi parolni kiriting")
                alert("Parol o'zgartirildi")
            }else{
                alert("Xato parol kiritdingiz!")
            }
        }
    }
  }else {
    alert("Karta raqamda xatolik!")
  }
} else if (til == 2) {


    let kartaRaqam = promp( "Номер вашей карта:");

  if (kartaRaqam.length == 16) {
    let parol = prompt(":");
    if(parol.length == 4){
        let choose = prompt("Quyidagini bittasini tanlang: 1. Naqd pul olish, 2. Parolli o'zgartirish")
        if(choose == 1){
            let pul = prompt("Naqd pul miqdorini kiriting:")
            alert(pul + " so'm tayyor bo'ldi")
        }else if(choose == 2){
            let oldPass = prompt("Eski parolni kiriting")
            if(parol == oldPass){
                let newPass = prompt("Yangi parolni kiriting")
                alert("Parol o'zgartirildi")
            }else{
                alert("Xato parol kiritdingiz!")
            }
        }
    }
  }else {
    alert("Karta raqamda xatolik!")
  }
} else if (til == 3) {

    let kartaRaqam = prompt("Your card number:");

  if (kartaRaqam.length == 16) {
    let parol = prompt("Parolingizni kiriting:");
    if(parol.length == 4){
        let choose = prompt("Quyidagini bittasini tanlang: 1. Naqd pul olish, 2. Parolli o'zgartirish")
        if(choose == 1){
            let pul = prompt("Naqd pul miqdorini kiriting:")
            alert(pul + " so'm tayyor bo'ldi")
        }else if(choose == 2){
            let oldPass = prompt("Eski parolni kiriting")
            if(parol == oldPass){
                let newPass = prompt("Yangi parolni kiriting")
                alert("Parol o'zgartirildi")
            }else{
                alert("Xato parol kiritdingiz!")
            }
        }
    }
  }else {
    alert("Karta raqamda xatolik!")
  }
} else {
  alert("Ko'zizni kattaroq oching, Bitta tilni tanlang !!!!!!");
}
