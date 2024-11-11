// Smooth scrolling for navigation
document.querySelector('.see-portfolio').addEventListener('click', () => {
  document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Button hover effects
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.opacity = '0.9';
  });
  button.addEventListener('mouseleave', () => {
      button.style.opacity = '1';
  });
});

// Project details button animation
const projectButtons = document.querySelectorAll('.project-details');
projectButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.querySelector('span').style.transform = 'translateX(5px)';
  });
  button.addEventListener('mouseleave', () => {
      button.querySelector('span').style.transform = 'translateX(0)';
  });
});