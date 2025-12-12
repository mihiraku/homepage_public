import { gsap } from 'gsap'

const svg = document.querySelector('#page_wakegaku > object');
svg.addEventListener('load', () => {
  const doc = svg.getSVGDocument();
  const arrows = doc.querySelector('#background-arrows');
  gsap.to(arrows, {
    rotation: -360,
    duration: 100,
    ease: 'none',
    repeat: -1,
    transformOrigin: '50% 50%',
  });
});
