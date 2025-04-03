function copyEmail() {
  navigator.clipboard.writeText("kontakt@velurea.pl").then(() => {
    alert("Skopiowano adres e-mail!");
  });
}
