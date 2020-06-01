// Animate skill loading
const skillsOffset = document.getElementById('skills').offsetTop;

window.addEventListener('scroll', () => {
  let y = document.documentElement.scrollTop;

  if (y + 400 > skillsOffset) {
    const skills = document.querySelectorAll('.skill__bar-fill');
    skills.forEach((skill) => skill.classList.add('load'));
  }
});
