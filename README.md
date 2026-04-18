# Wellness Nutritionist MVP

Одностраничный сайт-визитка для нутрициолога / wellness coach на `Vite + vanilla JS`.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовые статические файлы появятся в папке `dist/`.

## Где редактировать контент

- Основной контент: `src/data/siteData.js`
- Подключение внешнего блога: `src/api/blogApi.js`
- Стили: `src/styles.css`

## GitHub Pages

В репозитории уже есть workflow `.github/workflows/deploy.yml`.

1. Загрузите проект в GitHub-репозиторий.
2. В `Settings -> Pages` выберите `Source: GitHub Actions`.
3. Запушьте изменения в ветку `main`.
4. GitHub соберёт проект и опубликует содержимое `dist/`.

