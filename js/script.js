// Animate skill loading
const skillsOffset = document.getElementById('skills').offsetTop;

window.addEventListener('scroll', () => {
  let y = document.documentElement.scrollTop;

  if (y + 400 > skillsOffset) {
    const skills = document.querySelectorAll('.skill__bar-fill');
    skills.forEach((skill) => skill.classList.add('load'));

    const percentages = document.querySelectorAll('.skill__percentage');
    percentages.forEach((percentage) => (percentage.style.opacity = '1'));
  }

  if (y + 500 < skillsOffset) {
    const skills = document.querySelectorAll('.skill__bar-fill');
    skills.forEach((skill) => skill.classList.remove('load'));

    const percentages = document.querySelectorAll('.skill__percentage');
    percentages.forEach((percentage) => (percentage.style.opacity = '0'));
  }
});
