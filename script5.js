function musbatManfiy() {
  let son = Number(prompt("Sonni kiriting:"));

  if (son > 0) {
    alert("Bu son musbat.");
  } else if (son < 0) {
    alert("Bu son manfiy.");
  } else {
    alert("Bu son nolga teng.");
  }
}

musbatManfiy();


function juftYokiToq() {
  let son = Number(prompt("Sonni kiriting:"));

  if (son % 2 === 0) {
    alert("Bu son juft.");
  } else {
    alert("Bu son toq.");
  }
}

juftYokiToq();


function checkPassword(password) {
  const correctPassword = "12345"; // to'g'ri parol

  if (password === correctPassword) {
    console.log("Parol to'g'ri");
  } else {
    console.log("Parol noto'g'ri");
  }
}

// Tekshirish:
checkPassword("12345"); // Parol to'g'ri
checkPassword("abcde"); // Parol noto'g'ri


function haroratniTekshir() {
  let harorat = Number(prompt("Haroratni kiriting (°C):"));

  if (harorat > 15) {
    alert("Iliq");
  } else if (harorat < 5) {
    alert("Sovuq");
  } else {
    alert("O'rtacha");
  }
}

haroratniTekshir();


function faslniAniqla() {
  let oy = Number(prompt("Oy raqamini kiriting (1-12):"));

  if (oy >= 1 && oy <= 3) {
    alert("Qish");
  } else if (oy >= 4 && oy <= 6) {
    alert("Bahor");
  } else if (oy >= 7 && oy <= 9) {
    alert("Yoz");
  } else if (oy >= 10 && oy <= 12) {
    alert("Kuz");
  } else {
    alert("Xato: Oy raqami 1-12 oralig'ida bo'lishi kerak.");
  }
}

faslniAniqla();
