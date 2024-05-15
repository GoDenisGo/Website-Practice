// function articleSlideIn observes when the articles appear on screen and animates them.
function articleSlideIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideIn-animation');
        return;
      }

      entry.target.classList.remove('slideIn-animation');
    });
  });

  const articles = document.querySelectorAll('article');
  articles.forEach(el => {
    observer.observe(el);
  });
}

articleSlideIn();
