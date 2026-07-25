import './styles.css';
import { fetchPosts } from './api/blogApi.js';
import { createPageMarkup } from './components/renderContent.js';
import { renderBlogLoading, renderBlogPosts } from './components/renderBlog.js';
import { siteData } from './data/siteData.js';

function applyMeta(meta) {
  document.documentElement.lang = 'ru';
  document.title = meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');

  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description);
  }
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = mobileNav?.querySelectorAll('a') ?? [];

  if (!toggle || !mobileNav) {
    return;
  }

  const setMenuState = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.hidden = !isOpen;
    document.body.classList.toggle('menu-open', isOpen);
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      setMenuState(false);
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');

      if (!targetId || targetId === '#') {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

async function initBlog() {
  const blogGrid = document.getElementById('blog-grid');
  const blogStatus = document.getElementById('blog-status');

  if (!blogGrid || !blogStatus) {
    return;
  }

  renderBlogLoading(blogGrid, blogStatus);

  const { posts, source, error } = await fetchPosts();
  renderBlogPosts(blogGrid, blogStatus, posts, source, error);
}

function bootstrap() {
  applyMeta(siteData.meta);
  document.getElementById('app').innerHTML = createPageMarkup(siteData);
  initMobileMenu();
  initSmoothScroll();
  initBlog();
}

bootstrap();
