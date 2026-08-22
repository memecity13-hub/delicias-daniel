(() => {
  const run = () => {
    const box = document.querySelector('.review-box');
    if (!box) return;

    const note = box.querySelector('.google-review-note');
    if (note) {
      note.textContent = 'Open our Google Business Profile to read reviews. The direct one-click review link will be added once Google’s full review URL is copied from the Business Profile.';
    }

    const actions = box.querySelector('.review-actions');
    if (!actions) return;

    const buttons = [...actions.querySelectorAll('a')];
    if (buttons[0]) {
      buttons[0].textContent = 'Open Google Business Profile';
      buttons[0].setAttribute('aria-label', 'Open Delicias Daniel Google Business Profile');
    }
    if (buttons[1]) buttons[1].remove();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
