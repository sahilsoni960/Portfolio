function initializeIntersectionObserver() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

export default initializeIntersectionObserver; 