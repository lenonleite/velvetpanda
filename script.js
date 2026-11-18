const dialog = document.querySelector('#media-dialog');
const content = document.querySelector('#media-content');
const title = document.querySelector('#media-title');
const source = document.querySelector('#media-source');
let trigger;
function openMedia(link, type) {
  if (typeof dialog.showModal !== 'function') return false;
  trigger = link;
  content.replaceChildren();
  if (type === 'video') {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1&rel=0`;
    frame.title = link.dataset.title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    title.textContent = link.dataset.title;
    content.append(frame);
    source.textContent = 'Watch on YouTube ↗';
  } else {
    const image = document.createElement('img');
    image.src = link.dataset.photo;
    image.alt = link.querySelector('img').alt;
    title.textContent = 'Velvet Panda · Press portrait';
    content.append(image);
    source.textContent = 'Open full-resolution photo ↗';
  }
  source.href = link.href;
  dialog.showModal();
  syncBackground();
  return true;
}
document.querySelectorAll('[data-video]').forEach(link => link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (openMedia(link, 'video')) event.preventDefault();
}));
document.querySelectorAll('[data-photo]').forEach(link => link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (openMedia(link, 'photo')) event.preventDefault();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  content.replaceChildren();
  trigger?.focus();
  syncBackground();
});
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-lang]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#bio-en').hidden = button.dataset.lang !== 'en';
  document.querySelector('#bio-pt').hidden = button.dataset.lang !== 'pt';
}));

// Each decorative film keeps its own visibility and pause preference.
function createBackgroundPlayer(section) {
  const background = section.querySelector('video');
  const toggle = section.querySelector('button');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let userPaused = motionPreference.matches;
  background.muted = true;
  toggle.hidden = false;
  function updateButton() {
    toggle.textContent = background.paused ? 'Play background video' : 'Pause background video';
  }
  function sync() {
    if (!visible || userPaused || document.hidden || dialog.open) {
      background.pause();
      updateButton();
      return;
    }
    if (!background.getAttribute('src')) background.src = background.dataset.src;
    background.play().catch(updateButton);
  }
  background.addEventListener('play', updateButton);
  background.addEventListener('pause', updateButton);
  background.addEventListener('error', () => {
    toggle.hidden = true;
    background.removeAttribute('src');
    background.load();
  });
  toggle.addEventListener('click', () => {
    userPaused = !background.paused;
    sync();
  });
  motionPreference.addEventListener('change', () => {
    userPaused = motionPreference.matches;
    sync();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0.15 }).observe(section);
  } else {
    visible = true;
    userPaused = true;
  }
  return { sync };
}
const backgroundPlayers = [...document.querySelectorAll('[data-background-section]')].map(createBackgroundPlayer);
function syncBackground() {
  backgroundPlayers.forEach(player => player.sync());
}
document.addEventListener('visibilitychange', syncBackground);
