document.addEventListener('DOMContentLoaded', () => {
  const steps = [
    document.getElementById('tour-step-1'),
    document.getElementById('tour-step-2'),
    document.getElementById('tour-step-3'),
    document.getElementById('tour-step-4')
  ];
  const overlay = document.getElementById('tour-overlay');

  let currentStep = 0;

  function alignArrow(stepEl) {
    if (!stepEl) return;
    const arrow = stepEl.querySelector('.tour-arrow');
    const popover = stepEl.querySelector('.tour-popover');
    const btn = stepEl.querySelector('.btn-tool');

    if (arrow && popover && btn && window.innerWidth <= 600) {
      const btnRect = btn.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();
      const relativeCenter = btnRect.left + (btnRect.width / 2) - popoverRect.left;

      const minLeft = 14;
      const maxLeft = popoverRect.width - 14;
      const clampedLeft = Math.max(minLeft, Math.min(relativeCenter, maxLeft));

      arrow.style.left = `${clampedLeft}px`;
      arrow.style.transform = 'translateX(-50%) rotate(45deg)';
    } else if (arrow && window.innerWidth > 600) {
      arrow.style.left = '';
      arrow.style.transform = '';
    }
  }

  function showStep(index) {
    steps.forEach((el) => el && el.classList.remove('active-step'));

    if (steps[index]) {
      steps[index].classList.add('active-step');
      if (overlay) overlay.style.display = 'block';

      if (index < 3) {
        requestAnimationFrame(() => alignArrow(steps[index]));
      }
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

  const ackBtn = document.getElementById('rules-ack-btn');
  if (ackBtn) {
    ackBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      endTour();
    });
  }

  document.querySelectorAll('.tour-close-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentStep = 3;
      showStep(currentStep);
    });
  });

  window.addEventListener('resize', () => {
    if (currentStep < 3 && steps[currentStep]?.classList.contains('active-step')) {
      alignArrow(steps[currentStep]);
    }
  });

  showStep(0);
});
