# Chinomso Augustine Portfolio

A portfolio built with JavaScript, CSS, and Vite.

## Where to make changes

| File | What to edit |
| --- | --- |
| `src/data/home.js` | Homepage text, project links and images, process explanations, skills, model entries, and notebook documents. |
| `src/pages/home.js` | Homepage HTML and section order. Each section has its own rendering function. |
| `styles.css` | Colors, spacing, typography, cards, process rows, and responsive layouts. |
| `src/home-background.js` | The homepage lighting scene, including colors, camera zoom, wave motion, and the WebGL fallback. |
| `src/rhinoviewer.js` | Loading and interacting with 3D models, including rotation, zoom, and reset. |
| `src/main.js` | Page routes, navigation, and initializing interactions. |
| `src/shared.js` | Shared image paths, footer, and other reusable page helpers. |
| `src/pages/` | Homepage, About, and resume page markup. |
| `src/projects/` | Individual project case studies. |

## Common edits

- **Change a process explanation:** edit `explanation` in the `processSteps` list in `src/data/home.js`.
- **Add a skill:** add its name to a group's `items` list in the same file.
- **Change skill card styling:** find `.skill-card` or `.skills-grid` in `styles.css`.
- **Change process row spacing:** find `.process-row` or `.process-list` in `styles.css`.
- **Change homepage colors:** edit the variables under `.home-page` in `styles.css`.
- **Change the lighting background:** edit `settings` in `src/home-background.js`; adjust its visibility under `.home-background` in `styles.css`.
- **Reorder homepage sections:** move the section function calls inside `homePage()` in `src/pages/home.js`.
- **Add a model:** place a `.3dm` file in `public/Models/` and add its title and filename to `models` in `src/data/home.js`.
- **Add a notebook document:** place its PDF in `src/assets/Notebook/` and add its link, description, and page dimensions to `notebookEntries` in `src/data/home.js`.

CSS sections have comments. Responsive rules for the homepage are grouped near the end of its styles.

The model preview uses `data-*` attributes to connect its HTML to the viewer code. Keep those attributes when changing the markup.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build is written to `dist/`.
