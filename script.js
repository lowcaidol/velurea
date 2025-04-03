function toggleAbout() {
  const panel = document.getElementById("aboutPanel");
  panel.classList.toggle("open");
}

function copyEmail() {
  navigator.clipboard.writeText("kontakt@velurea.pl").then(() => {
    alert("📋 Skopiowano adres e-mail!");
  });
}
