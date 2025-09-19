/*
 * Global UI Behaviors
 * -------------------
 * - Accessible collapsible sections (skills, experience, education, achievements)
 *   Uses aria-expanded, keyboard support, and keeps content visible if JS fails to load.
 */
(function initUI() {
  'use strict';

  const SECTION_CLASSES = [
    'resume-container__skills',
    'resume-container__experience',
    'resume-container__education',
    'resume-container__achievements'
  ];

  /**
   * Append visual +/- icon if not present.
   * @param {HTMLElement} titleEl
   */
  // Double chevron DOWN (expanded state). We'll rotate 180deg when collapsed.
  const ICON_CHEVRON_DOUBLE = '<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M6.7 7.7a1 1 0 0 1 1.4 0L12 11.6l3.9-3.9a1 1 0 1 1 1.4 1.4l-4.6 4.6a1 1 0 0 1-1.4 0L6.7 9.1a1 1 0 0 1 0-1.4Zm0 6a1 1 0 0 1 1.4 0L12 17.6l3.9-3.9a1 1 0 1 1 1.4 1.4l-4.6 4.6a1 1 0 0 1-1.4 0L6.7 15.1a1 1 0 0 1 0-1.4Z"/></svg>';

  /**
   * Append visual icon (double chevron) if not present.
   * @param {HTMLElement} titleEl
   */
  function ensureIcon(titleEl) {
    if (titleEl.querySelector('.section-title__icon')) return;
    const iconWrapper = document.createElement('span');
    iconWrapper.className = 'section-title__icon';
    iconWrapper.setAttribute('aria-hidden', 'true');
  iconWrapper.innerHTML = ICON_CHEVRON_DOUBLE;
    titleEl.appendChild(iconWrapper);
  }

  /**
   * Enhance a section element to become collapsible.
   * @param {HTMLElement} section
   */
  function enhanceSection(section) {
    section.classList.add('collapsible');
    const title = section.querySelector('.section-title');
    if (!title) return;
    title.classList.add('collapsible-trigger');
    if (!title.hasAttribute('role')) title.setAttribute('role', 'button');
    title.setAttribute('tabindex', '0');
    title.setAttribute('aria-expanded', 'true');
    ensureIcon(title);

  /** Toggle collapsed state */
    function toggle() {
      const collapsed = section.classList.toggle('collapsed');
      title.setAttribute('aria-expanded', String(!collapsed));
      // visual change handled by CSS rotation class on the section
    }

    title.addEventListener('click', toggle);
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  }

  /** Initialize all configured section classes */
  function init() {
    SECTION_CLASSES.forEach(cls => {
      document.querySelectorAll('.' + cls).forEach(enhanceSection);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
