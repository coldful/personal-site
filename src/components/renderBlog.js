function renderPostCard(post) {
  return `
    <article class="article-card">
      <div class="article-card__meta">
        <span>${post.date}</span>
        <span>${post.readTime}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="text-link" href="${post.href}">Читать</a>
    </article>
  `;
}

export function renderBlogLoading(gridElement, statusElement) {
  statusElement.textContent = 'Загружаю материалы...';
  gridElement.innerHTML = Array.from({ length: 3 }, () => `
    <article class="article-card article-card--loading" aria-hidden="true">
      <div class="skeleton skeleton--line"></div>
      <div class="skeleton skeleton--title"></div>
      <div class="skeleton skeleton--block"></div>
      <div class="skeleton skeleton--line short"></div>
    </article>
  `).join('');
}

export function renderBlogPosts(gridElement, statusElement, posts, source, error) {
  const sourceMessage = {
    api: 'Материалы загружены из внешнего источника.',
    mock: 'Показаны демо-материалы из локального mock-слоя.',
    fallback: 'Внешний блог недоступен, показаны резервные материалы.',
  }[source] ?? 'Материалы загружены.';

  statusElement.textContent = error ? sourceMessage : sourceMessage;
  gridElement.innerHTML = posts.map(renderPostCard).join('');
}
