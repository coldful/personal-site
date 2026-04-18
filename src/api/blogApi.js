import { siteData } from '../data/siteData.js';

const BLOG_DELAY_MS = 900;

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function normalizePosts(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.posts)) {
    return payload.posts;
  }

  if (Array.isArray(payload?.items)) {
    return payload.items;
  }

  return [];
}

function mapPost(post, index) {
  return {
    id: post.id ?? `api-post-${index + 1}`,
    title: post.title ?? 'Материал без названия',
    excerpt: post.excerpt ?? post.description ?? 'Описание появится позже.',
    date: post.date ?? post.publishedAt ?? 'Дата не указана',
    readTime: post.readTime ?? '3 минуты',
    href: post.href ?? post.url ?? siteData.contacts.bookingUrl,
  };
}

async function requestExternalPosts() {
  if (!siteData.blog.apiUrl) {
    throw new Error('Blog API is not configured.');
  }

  const response = await fetch(siteData.blog.apiUrl);

  if (!response.ok) {
    throw new Error(`Blog API returned ${response.status}.`);
  }

  const payload = await response.json();

  return normalizePosts(payload).map(mapPost);
}

export async function fetchPosts() {
  await delay(BLOG_DELAY_MS);

  try {
    if (!siteData.blog.apiUrl) {
      return {
        posts: siteData.blog.mockPosts.map(mapPost).slice(0, 3),
        source: 'mock',
        error: null,
      };
    }

    if (siteData.blog.simulateFailure) {
      throw new Error('Simulated blog outage.');
    }

    const posts = await requestExternalPosts();

    return {
      posts: posts.slice(0, 3),
      source: 'api',
      error: null,
    };
  } catch (error) {
    const fallback = (siteData.blog.fallbackPosts.length
      ? siteData.blog.fallbackPosts
      : siteData.blog.mockPosts
    ).map(mapPost);

    return {
      posts: fallback.slice(0, 3),
      source: 'fallback',
      error,
    };
  }
}
