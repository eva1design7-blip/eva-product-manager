# Design QA

## Источник истины

- Live URL: https://eva-product-manager.eva1design7.chatgpt.site/
- Mobile home capture: `qa/source-mobile-home.PNG`
- Mobile first-case capture: `qa/source-mobile-case.PNG`
- Дополнительные пользовательские mobile-captures: `../upload/IMG_1400.PNG` — `../upload/IMG_1410.PNG`
- У исходной страницы нет фотографий или растровых иллюстраций внутри макета: hero-композиция, карточки и декоративные окружности построены исходным HTML/CSS. Реализация сохраняет этот способ построения.

## Implementation captures

- Desktop initial state: `qa/implementation-desktop.jpg`
- Mobile first-case state in 390 × 844 QA frame: `qa/implementation-mobile-case-stage.jpg`

## Viewports and states

| Проверка | Viewport | DPR | Состояние |
|---|---:|---:|---|
| Live source, desktop | 1363 × 936 | 1 | Начало страницы |
| Local implementation, desktop | 1363 × 936 | 1 | Начало страницы |
| Local implementation, mobile | 390 × 844 | 1 | Открыт первый кейс |
| User mobile source | 942 × 2048 physical capture | iPhone capture | Главная, кейсы, меню и все нижние секции |

## Full-view comparison

Source и implementation были открыты одновременно в одном browser-run и сравнены по полному desktop viewport. После финальных исправлений DOM-геометрия ключевых поверхностей совпала:

| Поверхность | Source | Implementation |
|---|---|---|
| main | x 24, y 24, w 1300, h 6095.484375 | x 24, y 24, w 1300, h 6095.484375 |
| header | x 24, y 24, w 1300, h 72 | x 24, y 24, w 1300, h 72 |
| hero | x 24, y 96, w 1300, h 816 | x 24, y 96, w 1300, h 816 |
| hero copy | x 52, y 118, w 646.875, h 745 | x 52, y 118, w 646.875, h 745 |
| hero H1 | x 52, y 196, w 646.875, h 216.875 | x 52, y 196, w 646.875, h 216.875 |
| hero art | x 698.875, y 118, w 597.125, h 745 | x 698.875, y 118, w 597.125, h 745 |
| hero labels | x 52, y 820.25, w 580, h 34.75 | x 52, y 820.25, w 580, h 34.75 |

Typography metrics for the hero H1 also match: 139.026 px font-size, 800 font-weight, 108.44 px line-height.

## Focused-region comparison

The first-case mobile sheet was compared with the supplied iPhone capture. The following surfaces match the source behavior and responsive values:

- full-width case sheet;
- 88 px top and 18 px side padding;
- 48 px case-title typography;
- close control placement;
- vertical metric block;
- single-column task/actions/result sections;
- ordered-action content rendered without visible browser numbering, as in source;
- next-case control and modal scroll.

## Fidelity surfaces

| Surface | Result |
|---|---|
| Typography | Arial/Helvetica stack, weights, responsive font sizes, line-heights and tracking reproduced |
| Spacing/layout | Desktop and mobile grids, section paddings, sticky header and overlay sheets reproduced |
| Colors | Paper, ink, yellow, cyan and orange values copied from source CSS |
| Shapes/assets | Source-native CSS cards, strokes, tags, loops and shadows reproduced |
| Copy | Navigation, hero, about, five cases, experience, toolkit and footer reproduced |
| States | Hover, focus-visible, menu open, case open, Escape close and next-case cycle verified |

## Comparison history

1. Initial implementation showed heading weight and list-marker differences in case sheets. Added the source reset for headings, lists and buttons.
2. Initial global line-height shortened the page and shifted the hero title. Restored source root line-height of 1.5.
3. Re-ran desktop geometry comparison; all listed key rectangles and hero typography metrics matched exactly.
4. Opened menu and case overlays on desktop and mobile, checked scrolling, close actions and console output. No application errors remained.

final result: passed
