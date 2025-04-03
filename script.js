// Funkcja, która będzie sprawdzać, kiedy element jest widoczny
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");  // Dodaje klasę visible
      observer.unobserve(entry.target);  // Przestaje obserwować ten element po animacji
    }
  });
}, {
  threshold: 0.5  // Element będzie uznawany za "widoczny", gdy 50% elementu pojawi się na ekranie
});

// Obserwowanie wszystkich kart pakietów
const cards = document.querySelectorAll('.pricing-card'); 
cards.forEach(card => {
  observer.observe(card);  // Rozpoczyna obserwację
});
