# Eva Product Manager — React/Vite

Редактируемая React-версия портфолио, воспроизводящая исходный сайт GPT Sites.

## Запуск

```bash
npm install
npm run dev
```

Vite покажет локальный адрес (обычно `http://localhost:5173`).

## Где менять содержимое

- Все тексты, пункты меню, кейсы, метрики, опыт и список инструментов: `src/content.js`
- Цвета: CSS-переменные в начале `src/styles.css`
- Размеры, сетки, отступы, адаптивность и состояния: `src/styles.css`
- Структура секций и логика меню/кейсов: `src/App.jsx`

Новый кейс можно добавить ещё одним объектом в массив `content.projects`. Карточка и модальное окно появятся автоматически.

## Команды

```bash
npm run dev        # локальная разработка
npm run build      # production-сборка в dist/
npm run preview    # проверка production-сборки
npm run test:sites # smoke-тест worker/SPA fallback
```

## Реализовано

- desktop и mobile layouts;
- sticky header;
- полноэкранное меню;
- плавная навигация к секциям;
- карточки кейсов с hover-состояниями;
- модальные страницы всех пяти кейсов;
- переход к следующему кейсу;
- закрытие по кнопке и клавише Escape;
- блокировка прокрутки фона при открытых overlays;
- reduced-motion режим и focus-visible состояния.

Визуальная проверка и сравнения задокументированы в `design-qa.md`.

## GitHub Pages

Проект настроен для репозитория:

`eva1design7-blip/eva-product-manager`

После загрузки файлов откройте `Settings → Pages` и выберите `GitHub Actions`
в качестве источника публикации. Workflow `.github/workflows/deploy-pages.yml`
соберёт и опубликует сайт автоматически.

Адрес после успешного deployment:

https://eva1design7-blip.github.io/eva-product-manager/
