function renderNavLinks(items) {
  return items
    .map(
      (item) => `
        <li><a href="${item.href}">${item.label}</a></li>
      `,
    )
    .join('');
}

function renderStats(items) {
  return items
    .map(
      (item) => `
        <div class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `,
    )
    .join('');
}

function renderValues(items) {
  return items
    .map(
      (item) => `
        <article class="feature-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
}

function renderServices(items) {
  return items
    .map(
      (item) => `
        <article class="service-card">
          <div class="service-card__top">
            <span class="pill">${item.badge}</span>
            <strong>${item.price}</strong>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="button button--secondary" href="${item.actionHref}">${item.actionLabel}</a>
        </article>
      `,
    )
    .join('');
}

function renderSteps(items) {
  return items
    .map(
      (item) => `
        <article class="step-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
}

function renderTestimonials(items) {
  return items
    .map(
      (item) => `
        <article class="quote-card">
          <p>“${item.quote}”</p>
          <span>${item.name}</span>
        </article>
      `,
    )
    .join('');
}

function renderFaq(items) {
  return items
    .map(
      (item, index) => `
        <article class="faq-item">
          <button
            class="faq-trigger"
            type="button"
            aria-expanded="false"
            aria-controls="faq-panel-${index}"
            id="faq-trigger-${index}"
          >
            <span>${item.question}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div
            class="faq-panel"
            id="faq-panel-${index}"
            role="region"
            aria-labelledby="faq-trigger-${index}"
            hidden
          >
            <p>${item.answer}</p>
          </div>
        </article>
      `,
    )
    .join('');
}

function renderContacts(data) {
  return `
    <div class="contact-card">
      <span class="contact-card__label">Email</span>
      <a href="mailto:${data.email}">${data.email}</a>
    </div>
    <div class="contact-card">
      <span class="contact-card__label">Telegram</span>
      <a href="${data.telegram}" target="_blank" rel="noreferrer">Написать в Telegram</a>
    </div>
    <div class="contact-card">
      <span class="contact-card__label">Instagram</span>
      <a href="${data.instagram}" target="_blank" rel="noreferrer">Открыть Instagram</a>
    </div>
    <div class="contact-card">
      <span class="contact-card__label">WhatsApp</span>
      <a href="${data.whatsapp}" target="_blank" rel="noreferrer">Написать в WhatsApp</a>
    </div>
  `;
}

function renderSocials(items) {
  return items
    .map(
      (item) => `
        <a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>
      `,
    )
    .join('');
}

export function createPageMarkup(data) {
  return `
    <div class="page-shell">
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="#hero" aria-label="Перейти к началу страницы">
            <span class="brand__mark">AM</span>
            <span>
              <strong>${data.specialist.name}</strong>
              <small>${data.specialist.role}</small>
            </span>
          </a>

          <button
            class="menu-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-navigation"
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="desktop-nav" aria-label="Основная навигация">
            <ul>${renderNavLinks(data.navigation)}</ul>
          </nav>

          <a class="button button--small header-cta" href="${data.contacts.bookingUrl}">
            Записаться
          </a>
        </div>

        <nav
          class="mobile-nav"
          id="mobile-navigation"
          aria-label="Мобильная навигация"
          hidden
        >
          <div class="container">
            <ul>${renderNavLinks(data.navigation)}</ul>
            <a class="button" href="${data.contacts.bookingUrl}">Записаться</a>
          </div>
        </nav>
      </header>

      <main>
        <section class="hero section" id="hero">
          <div class="container hero__layout">
            <div class="hero__content">
              <span class="eyebrow">${data.specialist.heroTag}</span>
              <h1>${data.specialist.heroTitle}</h1>
              <p class="hero__lead">${data.specialist.heroSubtitle}</p>
              <p class="hero__text">${data.specialist.heroDescription}</p>

              <div class="hero__actions">
                <a class="button" href="${data.specialist.primaryCta.href}">
                  ${data.specialist.primaryCta.label}
                </a>
                <a class="button button--ghost" href="${data.specialist.secondaryCta.href}">
                  ${data.specialist.secondaryCta.label}
                </a>
              </div>

              <div class="hero__meta">
                <span>${data.specialist.name}</span>
                <span>${data.specialist.credentials}</span>
              </div>
            </div>

            <div class="hero__visual">
              <div class="hero-card">
                <div class="hero-card__media">
                  <img
                    src="${data.specialist.avatarUrl}"
                    alt="${data.specialist.avatarAlt}"
                    class="hero-card__image"
                  />
                </div>
                <div class="hero-card__body">
                  <span class="pill">Онлайн по всему миру</span>
                  <h2>${data.specialist.role}</h2>
                  <p>${data.about.story}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="container stats-grid">
            ${renderStats(data.specialist.stats)}
          </div>
        </section>

        <section class="section" id="about">
          <div class="container section-grid">
            <div class="section-copy">
              <span class="eyebrow">${data.about.sectionLabel}</span>
              <h2>${data.about.title}</h2>
              <p>${data.about.description}</p>
              <p>${data.about.story}</p>
            </div>
            <div class="feature-grid">
              ${renderValues(data.about.values)}
            </div>
          </div>
        </section>

        <section class="section section--accent" id="services">
          <div class="container">
            <div class="section-heading">
              <span class="eyebrow">${data.services.sectionLabel}</span>
              <h2>${data.services.title}</h2>
              <p>${data.services.description}</p>
            </div>
            <div class="cards-grid cards-grid--services">
              ${renderServices(data.services.items)}
            </div>
          </div>
        </section>

        <section class="section" id="process">
          <div class="container">
            <div class="section-heading">
              <span class="eyebrow">${data.process.sectionLabel}</span>
              <h2>${data.process.title}</h2>
            </div>
            <div class="cards-grid cards-grid--steps">
              ${renderSteps(data.process.steps)}
            </div>
          </div>
        </section>

        <section class="section" id="reviews">
          <div class="container">
            <div class="section-heading">
              <span class="eyebrow">${data.testimonials.sectionLabel}</span>
              <h2>${data.testimonials.title}</h2>
            </div>
            <div class="cards-grid cards-grid--quotes">
              ${renderTestimonials(data.testimonials.items)}
            </div>
          </div>
        </section>

        <section class="section section--accent" id="faq">
          <div class="container section-grid section-grid--faq">
            <div class="section-copy">
              <span class="eyebrow">${data.faq.sectionLabel}</span>
              <h2>${data.faq.title}</h2>
              <p>Собрала ответы на вопросы, которые чаще всего возникают перед первой консультацией.</p>
            </div>
            <div class="faq-list">
              ${renderFaq(data.faq.items)}
            </div>
          </div>
        </section>

        <section class="section" id="blog">
          <div class="container">
            <div class="section-heading section-heading--split">
              <div>
                <span class="eyebrow">${data.blog.sectionLabel}</span>
                <h2>${data.blog.title}</h2>
                <p>${data.blog.description}</p>
              </div>
              <a class="button button--ghost" href="${data.blog.cta.href}">
                ${data.blog.cta.label}
              </a>
            </div>
            <p class="blog-status" id="blog-status" aria-live="polite"></p>
            <div class="cards-grid cards-grid--blog" id="blog-grid"></div>
          </div>
        </section>

        <section class="section section--contact" id="contacts">
          <div class="container contact-layout">
            <div class="contact-copy">
              <span class="eyebrow">${data.contacts.sectionLabel}</span>
              <h2>${data.contacts.title}</h2>
              <p>${data.contacts.description}</p>
              <a class="button" href="${data.contacts.bookingUrl}">${data.contacts.bookingLabel}</a>
            </div>
            <div class="contact-grid">
              ${renderContacts(data.contacts)}
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container site-footer__inner">
          <div>
            <strong>${data.footer.brand}</strong>
            <p>${data.footer.copyright}</p>
          </div>
          <div class="footer-socials" aria-label="Социальные сети">
            ${renderSocials(data.contacts.socialLinks)}
          </div>
        </div>
        <div class="container site-footer__note" id="footer-disclaimer">
          <strong>${data.footer.disclaimerTitle}</strong>
          <p>${data.footer.disclaimerText}</p>
        </div>
      </footer>
    </div>
  `;
}
