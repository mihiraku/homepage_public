const svgs = document.querySelectorAll('.slides-content object.slide');

for (let svg of svgs) {
  svg.style.visibility = 'hidden';
  svg.addEventListener('load', () => {
    // setTimeout(() => {
      svg.style.visibility = 'visible';
    // }, 3000);
  });
}
