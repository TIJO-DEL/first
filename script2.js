function yigindi() {
  let a = Number(prompt("Birinchi sonni kiriting:"));
  let b = Number(prompt("Ikkinchi sonni kiriting:"));
  let natija = a + b;
  alert("Yig'indisi: " + natija);
}
yigindi();

function kopaytma() {
  let a = Number(prompt("Birinchi sonni kiriting:"));
  let b = Number(prompt("Ikkinchi sonni kiriting:"));
  let natija = a * b;
  alert("Ko'paytma: " + natija);
}
kopaytma();

function arifmetikOrtacha() {
  let a = Number(prompt("Birinchi sonni kiriting:"));
  let b = Number(prompt("Ikkinchi sonni kiriting:"));
  let natija = (a + b) / 2;
  alert("Arifmetik o'rtacha: " + natija);
}
arifmetikOrtacha();

function kvadrat() {
  let a = Number(prompt("Sonni kiriting:"));
  let natija = a * a;
  alert("Kvadrati: " + natija);
}
kvadrat();


function qoldiq() {
  let a = Number(prompt("a sonini kiriting:"));
  let b = Number(prompt("b sonini kiriting:"));
  let natija = a % b;
  alert("Qoldiq: " + natija);
}
qoldiq();
