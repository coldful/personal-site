function renderNavLinks(items) {
  return items
    .map(
      (item) => `
        <li><a href="${item.href}">${item.label}</a></li>
      `,
    )
    .join('');
}

function renderChecklist(items) {
  return items
    .map(
      (item) => `
        <li>${item}</li>
      `,
    )
    .join('');
}

function renderPillars(items) {
  return items
    .map(
      (item) => `
        <article class="pillar">
          <span class="pillar__number">${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
}

function renderPrograms(items) {
  return items
    .map(
      (item) => `
        <article class="program${item.featured ? ' program--featured' : ''}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="button ${item.featured ? '' : 'button--secondary'}" href="${item.actionHref}">
            ${item.actionLabel}
          </a>
        </article>
      `,
    )
    .join('');
}

function renderSteps(items) {
  return items
    .map(
      (item) => `
        <article class="process-step">
          <span class="process-step__number">${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
}

function renderOutcomes(items) {
  return items
    .map(
      (item) => `
        <article class="outcome">
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
        <blockquote class="testimonial">
          <p>“${item.quote}”</p>
          <cite>${item.name}</cite>
        </blockquote>
      `,
    )
    .join('');
}

function renderContacts(data) {
  return `
    <div class="contact-item">
      <span class="contact-item__label">Email</span>
      <a href="mailto:${data.email}">${data.email}</a>
    </div>
    <div class="contact-item">
      <span class="contact-item__label">Telegram</span>
      <a href="${data.telegram}" target="_blank" rel="noreferrer">Написать в Telegram</a>
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
            <span class="brand__mark">${data.specialist.brandMark}</span>
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
            Запись
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
        <section class="hero" id="hero">
          <div class="hero__media" aria-hidden="true">
            <img
              src="${data.specialist.avatarUrl}"
              alt=""
              class="hero__image"
            />
          </div>
          <div class="hero__veil" aria-hidden="true"></div>
          <div class="container hero__content">
            <p class="brand-signal reveal">${data.specialist.name}</p>
            <h1 class="reveal reveal--delay-1">${data.specialist.heroTitle}</h1>
            <p class="hero__lead reveal reveal--delay-2">${data.specialist.heroSubtitle}</p>
            <div class="hero__actions reveal reveal--delay-3">
              <a class="button" href="${data.specialist.primaryCta.href}">
                ${data.specialist.primaryCta.label}
              </a>
              <a class="button button--ghost" href="${data.specialist.secondaryCta.href}">
                ${data.specialist.secondaryCta.label}
              </a>
            </div>
            <p class="hero__note reveal reveal--delay-3">${data.specialist.heroNote}</p>
          </div>
        </section>

        <section class="section" id="trust">
          <div class="container section-split">
            <div class="section-intro">
              <span class="eyebrow">${data.trust.sectionLabel}</span>
              <h2>${data.trust.title}</h2>
              <p>${data.trust.description}</p>
            </div>
            <ul class="credential-list">
              ${renderChecklist(data.trust.items)}
            </ul>
          </div>
        </section>

        <section class="section section--soft" id="audience">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.audience.sectionLabel}</span>
              <h2>${data.audience.title}</h2>
              <p>${data.audience.description}</p>
            </div>
            <p class="list-lead">${data.audience.intro}</p>
            <ul class="check-list check-list--columns">
              ${renderChecklist(data.audience.items)}
            </ul>
          </div>
        </section>

        <section class="section" id="requests">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.requests.sectionLabel}</span>
              <h2>${data.requests.title}</h2>
              <p>${data.requests.description}</p>
            </div>
            <p class="list-lead">${data.requests.intro}</p>
            <ul class="check-list check-list--columns">
              ${renderChecklist(data.requests.items)}
            </ul>
          </div>
        </section>

        <section class="section section--soft" id="method">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.method.sectionLabel}</span>
              <h2>${data.method.title}</h2>
              <p>${data.method.description}</p>
            </div>
            <div class="pillars">
              ${renderPillars(data.method.pillars)}
            </div>
          </div>
        </section>

        <section class="section" id="process">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.process.sectionLabel}</span>
              <h2>${data.process.title}</h2>
              <p>${data.process.description}</p>
            </div>
            <div class="process-track">
              ${renderSteps(data.process.steps)}
            </div>
            <p class="section-footer">${data.process.footer}</p>
          </div>
        </section>

        <section class="section section--soft" id="programs">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.programs.sectionLabel}</span>
              <h2>${data.programs.title}</h2>
            </div>
            <div class="programs-grid">
              ${renderPrograms(data.programs.items)}
            </div>
            <div class="section-cta">
              <a class="button button--secondary" href="${data.programs.cta.href}">
                ${data.programs.cta.label}
              </a>
            </div>
          </div>
        </section>

        <section class="section" id="about">
          <div class="container about-layout">
            <div class="about-portrait">
              <img
                src="${data.specialist.avatarUrl}"
                alt="${data.specialist.avatarAlt}"
              />
            </div>
            <div class="about-copy">
              <span class="eyebrow">${data.about.sectionLabel}</span>
              <h2>${data.about.title}</h2>
              ${data.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
              <blockquote class="about-quote">
                <p>${data.about.quote}</p>
              </blockquote>
              <ul class="credential-list credential-list--compact">
                ${renderChecklist(data.about.credentials)}
              </ul>
              <p class="about-interests">${data.about.interests}</p>
            </div>
          </div>
        </section>

        <section class="section section--soft" id="outcomes">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.outcomes.sectionLabel}</span>
              <h2>${data.outcomes.title}</h2>
              <p>${data.outcomes.description}</p>
            </div>
            <p class="list-lead">${data.outcomes.intro}</p>
            <div class="outcomes-grid">
              ${renderOutcomes(data.outcomes.items)}
            </div>
          </div>
        </section>

        <section class="section" id="reviews">
          <div class="container">
            <div class="section-intro section-intro--wide">
              <span class="eyebrow">${data.testimonials.sectionLabel}</span>
              <h2>${data.testimonials.title}</h2>
            </div>
            <div class="testimonials-grid">
              ${renderTestimonials(data.testimonials.items)}
            </div>
          </div>
        </section>

        <section class="section final-cta" id="start">
          <div class="container final-cta__inner">
            <h2>${data.finalCta.title}</h2>
            <p>${data.finalCta.description}</p>
            <a class="button" href="${data.finalCta.buttonHref}">
              ${data.finalCta.buttonLabel}
            </a>
            <p class="final-cta__note">${data.finalCta.note}</p>
          </div>
        </section>

        <section class="section section--soft" id="articles">
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
            <div class="articles-grid" id="blog-grid"></div>
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
