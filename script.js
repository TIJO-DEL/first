// 1. Ism so'rash va salom berish
function salomBerish() {
  let ism = prompt("Ismingizni kiriting:");
  alert("Salom, " + ism + "!");
}

// 2. Yoshni so'rab, kelasi yildagi yoshni chiqarish
function keyingiYilYosh() {
  let yosh = prompt("Yoshingizni kiriting:");
  let natija = parseInt(yosh) + 1;
  alert("Kelasi yili siz " + natija + " yoshda bo'lasiz.");
}

// 3. Ikkita sonni kiritib, yig'indisini chiqarish
function sonYigindi() {
  let son1 = prompt("1-sonni kiriting:");
  let son2 = prompt("2-sonni kiriting:");
  let yigindi = parseFloat(son1) + parseFloat(son2);
  alert("Yig'indisi: " + yigindi);
}

// 4. Tug'ilgan yildan hozirgi yoshni hisoblash
function yoshHisoblash() {
  let yil = prompt("Tug‘ilgan yilingizni kiriting:");
  let hozirgiYil = new Date().getFullYear();
  let yosh = hozirgiYil - parseInt(yil);
  alert("Siz " + yosh + " yoshdasiz.");
}

// 5. To‘liq salomlashuv (ism + yosh)
function toliqSalomlashuv() {
  let ism = prompt("Ismingizni kiriting:");
  let yosh = prompt("Yoshingizni kiriting:");
  alert("Assalomu alaykum, " + ism + ". Siz " + yosh + " yoshda ekansiz.");
}
