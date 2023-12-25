"use strict";
var qrCodeinput = document.getElementById("qrCodeInput");
var qrCodeGerado = document.querySelector(".qrcode-gerado");
var btn = document.getElementById("btn");
var success = document.querySelector(".success");

qrCodeinput.addEventListener("change", function (e) {
  gerarQrCode(e.target.value);
});

btn.addEventListener("click", gerarQrCode);

var gerarQrCode = (value) => {
  if (!value) {
    qrCodeGerado.classList.remove("active");
    return;
  }
 
  qrCodeGerado.classList.add("active");
  imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  success.style.display = "block";

  setTimeout(() => {
    success.style.display = "none";
  }, 2500);
};
