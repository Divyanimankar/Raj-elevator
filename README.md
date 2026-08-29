# Raj Elevators - Easy Edit React Version

This is a React + Vite project, but the JSX is written using simple HTML-like tags and every page/component has separate normal CSS.

## Folder structure
- `src/pages/` - each page has its own `.jsx` and `.css` file
- `src/components/` - shared sections, each with separate CSS
- `src/data/siteData.js` - image URLs and reusable product/project data
- `src/index.css` - common/global CSS only

## How to edit
1. Open the required page JSX file.
2. Change text inside tags like `<h1>`, `<p>`, `<h2>`.
3. Change that page design only in its matching CSS file.
4. Change image URLs in `src/data/siteData.js`.

## Run
```bash
npm install
npm run dev
```

Note: React requires `className` instead of HTML `class`, and `Link` is used for page navigation. Apart from that, the markup is kept simple and CSS is plain CSS with no Tailwind or CSS framework.
