import 'aos/dist/aos.css';
import AOS from 'aos';

export const initAnimations = () => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    offset: 60,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });
};

const preset = (name, delay = '0') => ({
  'data-aos': name,
  'data-aos-delay': delay,
});

export const animations = {
  fadeUp: preset('fade-up'),
  fadeDown: preset('fade-down'),
  fadeLeft: preset('fade-left'),
  fadeRight: preset('fade-right'),

  slideUp: preset('slide-up'),
  slideDown: preset('slide-down'),
  slideLeft: preset('slide-left'),
  slideRight: preset('slide-right'),

  zoomIn: preset('zoom-in'),
  zoomOut: preset('zoom-out'),

  flipUp: preset('flip-up'),
  flipDown: preset('flip-down'),

  fadeUp200: preset('fade-up', '200'),
  fadeUp400: preset('fade-up', '400'),

  popUp: {
    'data-aos': 'zoom-in',
    'data-aos-easing': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  bounceIn: {
    'data-aos': 'fade-up',
    'data-aos-easing': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
};