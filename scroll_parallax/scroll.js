const stickers = document.querySelectorAll('.sticker');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  stickers.forEach((sticker, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const speed = index * 0.02;
    const translateX = scrollPosition * speed * direction;
    sticker.style.transform = `translateX(${translateX}px)`;
  });
});
