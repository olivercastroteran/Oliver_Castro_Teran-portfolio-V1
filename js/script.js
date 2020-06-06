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

// Filter Projects functionality
const filterBtns = document.querySelectorAll('.section-projects__filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-target');

    projects.forEach((project) => {
      project.style.opacity = '.5';
      project.style.transform = 'scale(0.5)';
      project.style.pointerEvents = 'none';

      if (project.getAttribute('data-id') === target) {
        project.style.opacity = '1';
        project.style.transform = 'scale(1)';
        project.style.pointerEvents = 'all';

        project.addEventListener('mouseover', () => {
          project.style.transform = 'scale(1.05)';
          project.style.boxShadow = '7px 12px 12px rgba(0, 0, 0, 0.12)';
        });

        project.addEventListener('mouseout', () => {
          project.style.transform = 'scale(1)';
          project.style.boxShadow = '5px 10px 10px rgba(0, 0, 0, 0.07)';
        });
      }

      if (target === 'all') {
        project.style.opacity = '1';
        project.style.transform = 'scale(1)';
        project.style.pointerEvents = 'all';

        project.addEventListener('mouseover', () => {
          project.style.transform = 'scale(1.05)';
          project.style.boxShadow = '7px 12px 12px rgba(0, 0, 0, 0.12)';
        });

        project.addEventListener('mouseout', () => {
          project.style.transform = 'scale(1)';
          project.style.boxShadow = '5px 10px 10px rgba(0, 0, 0, 0.07)';
        });
      }
    });
  });
});

// Easter Egg
window.addEventListener('load', () => {
  console.log('Vigenère Cipher');
  console.log(
    'Yceqnokehokskbj! iki wsciio eh fep, bfg hskc iobo cfvkp diyfstdo hfqahyon :)'
  );
  console.log('key: work');
  console.log('hint: js - forfun');
});
