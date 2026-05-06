console.log("J");

import { animate, splitText, stagger } from 'animejs';

splitText('p', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(200),
  loop: true,
  loopDelay: 500,
}));

const split = splitText(target, params);

split.addEffect(({ lines, words, chars }) => animate([lines, words, chars], {
  opacity: { from: 0 },
}));

split.revert(); // This also reverts the animation declared with addEffect




