// Funkcja, która będzie sprawdzać, kiedy element jest widoczny
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Jeśli element jest widoczny w oknie
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);  // Przestajemy obserwować, bo animacja już została wykonana
    }
  });
}, {
  threshold: 0.5  // Element będzie uznany za "widoczny", gdy 50% elementu będzie w oknie
});

// Obserwowanie wszystkich pakietów i FAQ
const cards = document.querySelectorAll('.pricing-card, .faq-card'); 
cards.forEach(card => {
  observer.observe(card);
});
