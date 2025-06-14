import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS with default settings
export const initAnimations = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // Animation only happens once
    mirror: false, // Don't animate out while scrolling up
  });
};

// Animation presets
export const animations = {
  // Fade animations
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-delay': '0',
  },
  fadeDown: {
    'data-aos': 'fade-down',
    'data-aos-delay': '0',
  },
  fadeLeft: {
    'data-aos': 'fade-left',
    'data-aos-delay': '0',
  },
  fadeRight: {
    'data-aos': 'fade-right',
    'data-aos-delay': '0',
  },
  
  // Slide animations
  slideUp: {
    'data-aos': 'slide-up',
    'data-aos-delay': '0',
  },
  slideDown: {
    'data-aos': 'slide-down',
    'data-aos-delay': '0',
  },
  slideLeft: {
    'data-aos': 'slide-left',
    'data-aos-delay': '0',
  },
  slideRight: {
    'data-aos': 'slide-right',
    'data-aos-delay': '0',
  },
  
  // Zoom animations
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-delay': '0',
  },
  zoomOut: {
    'data-aos': 'zoom-out',
    'data-aos-delay': '0',
  },
  
  // Flip animations
  flipUp: {
    'data-aos': 'flip-up',
    'data-aos-delay': '0',
  },
  flipDown: {
    'data-aos': 'flip-down',
    'data-aos-delay': '0',
  },
  
  // Custom animations with delays
  fadeUp200: {
    'data-aos': 'fade-up',
    'data-aos-delay': '200',
  },
  fadeUp400: {
    'data-aos': 'fade-up',
    'data-aos-delay': '400',
  },
  
  // Special effects
  popUp: {
    'data-aos': 'zoom-in',
    'data-aos-easing': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  bounceIn: {
    'data-aos': 'fade-up',
    'data-aos-easing': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  }
};