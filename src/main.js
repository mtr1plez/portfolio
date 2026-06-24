import './style.css'

// ============================
// TRANSLATIONS
// ============================
const translations = {
  ru: {
    'nav.design': 'Дизайн',
    'nav.web': 'Веб и UI',
    'nav.content': 'Контент',
    'nav.about': 'Обо мне',
    'nav.cta': 'Написать',
    'lang.label': 'EN',
    'hero.eyebrow': 'Портфолио 2025—2026',
    'hero.subtitle': 'Графический дизайн · UI/UX · Контент',
    'hero.scroll': 'Листайте',
    'design.title': 'Графический дизайн',
    'design.desc': 'Айдентика брендов, визитки, меню и упаковка для клиентов из Казахстана и Словакии.',
    'design.cta': 'Нажмите, чтобы посмотреть все работы →',
    'tag.branding': 'Брендинг',
    'tag.packaging': 'Упаковка',
    'tag.print': 'Полиграфия',
    'tag.webdesign': 'Веб-дизайн',
    'tag.appdesign': 'Дизайн приложения',
    'web.title': 'Веб и UI',
    'web.desc': 'Дизайн интерфейсов и разработка приложений — от концептов в Figma до рабочего кода.',
    'web.monolith.tools': 'Figma · Бруталистский концепт',
    'content.title': 'Контент',
    'content.desc': 'Видеоэссе по анализу фильмов на YouTube — 50+ видео, 4K подписчиков, дизайн превью и видеомонтаж.',
    'yt.watch': 'Смотреть на YouTube →',
    'yt.videos': 'Видео',
    'yt.subs': 'Подписчиков',
    'about.title': 'Обо мне',
    'about.p1': 'Я Расул Батаев — дизайнер и контент-криейтор из <strong>Астаны, Казахстан</strong>.',
    'about.p2': 'Я создаю айдентику брендов, упаковку и цифровые интерфейсы. Параллельно делаю видеоэссе с анализом скрытых мотивов в кинематографе на YouTube.',
    'about.p3': 'Работаю в <strong>Figma, Photoshop, Premiere Pro, After Effects, Python</strong>, изучаю <strong>React</strong>.',
    'about.contact': 'Давайте работать вместе',
    'footer': '© 2025 Расул Батаев. Сделано с душой.',
  },
  en: {
    'nav.design': 'Design',
    'nav.web': 'Web & UI',
    'nav.content': 'Content',
    'nav.about': 'About',
    'nav.cta': 'Get in Touch',
    'lang.label': 'RU',
    'hero.eyebrow': 'Portfolio 2025—2026',
    'hero.subtitle': 'Graphic Design · UI/UX · Content Creation',
    'hero.scroll': 'Scroll',
    'design.title': 'Graphic Design',
    'design.desc': 'Brand identities, business cards, menus & packaging for clients across Kazakhstan and Slovakia.',
    'design.cta': 'Click to explore all work →',
    'tag.branding': 'Branding',
    'tag.packaging': 'Packaging',
    'tag.print': 'Print',
    'tag.webdesign': 'Web Design',
    'tag.appdesign': 'App Design',
    'web.title': 'Web & UI',
    'web.desc': 'Interface design and application development — from Figma concepts to working code.',
    'web.monolith.tools': 'Figma · Brutalist Concept',
    'content.title': 'Content Creation',
    'content.desc': 'Film analysis video essays on YouTube — 50+ videos, 4K subscribers, custom thumbnail design & video editing.',
    'yt.watch': 'Watch on YouTube →',
    'yt.videos': 'Videos',
    'yt.subs': 'Subscribers',
    'about.title': 'About Me',
    'about.p1': "I'm Rassul Batayev — a multidisciplinary designer and content creator based in <strong>Astana, Kazakhstan</strong>.",
    'about.p2': 'I design brand identities, product packaging, and digital interfaces. On the side, I produce video essays analyzing hidden motifs in cinema on my YouTube channel.',
    'about.p3': "I work with <strong>Figma, Photoshop, Premiere Pro, After Effects, Python</strong>, and I'm learning <strong>React</strong>.",
    'about.contact': "Let's work together",
    'footer': '© 2025 Rassul Batayev. Designed & Built with care.',
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'ru';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;

  // Update page title and meta
  if (lang === 'ru') {
    document.title = 'Расул Батаев — Дизайнер и Контент-Криейтор';
    document.querySelector('meta[name="description"]').content =
      'Портфолио Расула Батаева — Графический дизайнер, UI/UX дизайнер и контент-криейтор, Астана, Казахстан.';
  } else {
    document.title = 'Rassul Batayev — Designer & Content Creator';
    document.querySelector('meta[name="description"]').content =
      'Portfolio of Rassul Batayev — Graphic Designer, UI/UX Designer, and Content Creator based in Astana, Kazakhstan.';
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language
  applyLanguage(currentLang);

  // ============================
  // LANGUAGE TOGGLE
  // ============================
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    applyLanguage(newLang);
  });

  // ============================
  // NAVBAR HIDE ON SCROLL DOWN
  // ============================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ============================
  // LIGHTBOX
  // ============================
  const lightbox = document.getElementById('lightbox');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = lightbox.querySelector('.close-btn');
  const prevBtn = lightbox.querySelector('.lb-nav.prev');
  const nextBtn = lightbox.querySelector('.lb-nav.next');
  const overlay = lightbox.querySelector('.lightbox-overlay');
  const stage = lightbox.querySelector('.lightbox-stage');

  let currentImages = [];
  let currentIndex = 0;

  function openLightbox(card) {
    const imagesAttr = card.getAttribute('data-images');
    // Use language-specific title/desc
    const title = card.getAttribute(`data-title-${currentLang}`) || card.getAttribute('data-title') || '';
    const desc = card.getAttribute(`data-desc-${currentLang}`) || card.getAttribute('data-desc') || '';

    if (!imagesAttr) return;

    try {
      currentImages = JSON.parse(imagesAttr);
    } catch (e) {
      console.error('Failed to parse data-images:', e);
      return;
    }

    if (currentImages.length === 0) return;

    currentIndex = 0;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    showImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Attach click to ALL clickable cards
  document.querySelectorAll('[data-images]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openLightbox(card);
    });
  });

  function showImage() {
    if (currentImages.length === 0) return;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;

    const oldImg = stage.querySelector('img');
    const newImg = document.createElement('img');
    newImg.src = currentImages[currentIndex];
    newImg.alt = 'Project Image';
    newImg.id = 'lightbox-img';

    if (oldImg) {
      oldImg.replaceWith(newImg);
    } else {
      stage.insertBefore(newImg, nextBtn);
    }

    lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    const single = currentImages.length <= 1;
    prevBtn.style.display = single ? 'none' : 'flex';
    nextBtn.style.display = single ? 'none' : 'flex';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', closeLightbox);

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex++;
    showImage();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex--;
    showImage();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') { currentIndex++; showImage(); }
    if (e.key === 'ArrowLeft') { currentIndex--; showImage(); }
  });

  // ============================
  // MOBILE MENU TOGGLE
  // ============================
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
});
