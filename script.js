// Tab Navigation (Zero-Scroll single-screen switching)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Update active tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Switch active pane smoothly
    tabPanes.forEach(pane => {
      pane.classList.remove('active');
      if (pane.id === `pane-${targetTab}`) {
        pane.classList.add('active');
      }
    });
  });
});
