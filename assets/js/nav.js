(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var brand = nav.querySelector('.site-nav__brand');
  var toggle = nav.querySelector('.site-nav__toggle');
  var panel = nav.querySelector('.site-nav__panel');

  function setMastheadHeight() {
    var masthead = document.querySelector('.masthead');
    if (!masthead) return;
    document.documentElement.style.setProperty('--aw-masthead-height', masthead.offsetHeight + 'px');
  }

  function measurePanelWidth() {
    var clone = panel.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.display = 'flex';
    clone.style.width = 'auto';
    clone.style.maxWidth = 'none';
    clone.style.pointerEvents = 'none';
    clone.style.flexDirection = 'row';
    clone.style.alignItems = 'center';
    clone.style.gap = '0.25rem';
    nav.appendChild(clone);
    var width = clone.scrollWidth;
    clone.remove();
    return width;
  }

  function updateNav() {
    var available = nav.clientWidth - brand.offsetWidth - 24;
    var needed = measurePanelWidth();
    var shouldCollapse = window.innerWidth < 900 || needed > available;

    nav.classList.toggle('is-collapsed', shouldCollapse);
    if (!shouldCollapse) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    setMastheadHeight();
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  window.addEventListener('resize', updateNav);
  window.addEventListener('load', updateNav);
  document.addEventListener('DOMContentLoaded', updateNav);
})();
