document.addEventListener('DOMContentLoaded', () => {
  const steps = [
    document.getElementById('tour-step-1'),
    document.getElementById('tour-step-2'),
    document.getElementById('tour-step-3'),
  ];
  const overlay = document.getElementById('tour-overlay');

  let currentStep = 0;

  function showStep(index) {
    steps.forEach((el) => el && el.classList.remove('active-step'));

    if (steps[index]) {
      steps[index].classList.add('active-step');
      if (overlay) overlay.style.display = 'block';
    } else {
      endTour();
    }
  }

  function endTour() {
    steps.forEach((el) => el && el.classList.remove('active-step'));
    if (overlay) overlay.style.display = 'none';
  }

  document.querySelectorAll('.tour-next-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentStep++;
      showStep(currentStep);
    });
  });

  document.querySelectorAll('.tour-done-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      endTour();
    });
  });

  document.querySelectorAll('.tour-close-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      endTour();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      endTour();
    }
  });

  showStep(0);
});
