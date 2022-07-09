// Copyright (c) 2022 by Adam (https://codepen.io/helloroman/pen/zYrQEwg)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  if (section.classList.contains('apartments')) return;
  gsap.fromTo(
    section.children,
    { y: '+=100', opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
      },
    },
  );
});

// https://www.youtube.com/watch?v=LuWdeuPMHps
gsap.fromTo(
  '#telephone-receiver',
  { strokeDasharray: 1363, strokeDashoffset: 1363 },
  {
    strokeDashoffset: 0,
    stagger: 0.2,
    duration: 3,
    delay: 0.5,
    ease: 'easeOut',
    scrollTrigger: {
      trigger: '#telephone-receiver',
      start: 'top 85%',
    },
  },
);
