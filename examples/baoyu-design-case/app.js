(() => {
  const navLinks = [...document.querySelectorAll('.toc nav a')];
  const progress = document.getElementById('read-progress');
  const sectionIds = navLinks.map((link) => link.hash.slice(1));
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  function updateNav() {
    const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 160) || sections[0];
    if (!current) return;
    navLinks.forEach((link, index) => {
      if (link.hash === `#${current.id}`) {
        link.setAttribute('aria-current', 'location');
        if (progress) progress.textContent = `${String(index + 1).padStart(2, '0')} / ${String(navLinks.length).padStart(2, '0')}`;
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateNav(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copy);
      if (!target) return;
      const original = button.textContent;
      const value = target.textContent.trim();
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const temp = document.createElement('textarea');
          temp.value = value;
          temp.style.position = 'fixed';
          temp.style.opacity = '0';
          document.body.append(temp);
          temp.select();
          const copied = document.execCommand('copy');
          temp.remove();
          if (!copied) throw new Error('copy unavailable');
        }
        button.textContent = '已复制';
      } catch {
        // Browser permissions may block programmatic copy. Select the text for Cmd/Ctrl+C.
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = '已选中，请按 ⌘/Ctrl+C';
      }
      window.setTimeout(() => { button.textContent = original; }, 2200);
    });
  });
})();
