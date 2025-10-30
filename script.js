
// Nav active highlight
const links = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150;
  document.querySelectorAll('section').forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      links.forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav a[href="#${section.id}"]`)?.classList.add('active');
    }
  });
});
