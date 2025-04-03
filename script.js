// Funkcja, która sprawdza widoczność elementów i animuje karty
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

// Obserwacja kart
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  observer.observe(card);
});

// Funkcja, która pokaże odpowiedź w FAQ po najechaniu na pytanie
const faqQuestions = document.querySelectorAll('.faq-q');
faqQuestions.forEach(question => {
  question.addEventListener('mouseover', function() {
    this.nextElementSibling.style.display = "block";
  });
  question.addEventListener('mouseout', function() {
    this.nextElementSibling.style.display = "none";
  });
});
