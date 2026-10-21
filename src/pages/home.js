import { footer, html } from "../shared.js";
import {
  hero,
  modelSection,
  models,
  notebookEntries,
  notebookSection,
  processHeading,
  processSteps,
  projects,
  projectStats,
  skillSection,
  skills,
} from "../data/home.js";

// Page order. Each function below renders one section or one repeated item.
export function homePage() {
  return html`
    <div class="home-page">
      <div data-home-background class="home-background" aria-hidden="true"></div>
      <main class="home-content">
        ${heroSection()}
        ${projectsSection()}
        ${processSection()}
        ${skillsSection()}
        ${notebookSectionMarkup()}
        ${footer()}
      </main>
    </div>
  `;
}

function heroSection() {
  return html`
    <section class="home-container home-hero">
      <div>
        <p class="hero-eyebrow">${hero.eyebrow}</p>
        <h1 class="hero-title">${hero.heading}</h1>
        <p class="hero-introduction">${hero.introduction}</p>
        <div class="hero-actions">
          ${hero.links.map(({ label, href, variant }) => html`
            <a href="${href}" class="home-button home-button--${variant}">${label}</a>
          `).join("")}
        </div>
        <p class="hero-scroll-prompt">${hero.scrollPrompt}</p>
      </div>
      <figure class="hero-portrait">
        <img src="${hero.image}" alt="${hero.imageAlt}" />
      </figure>
    </section>
  `;
}

function projectsSection() {
  return html`
    <section class="home-container home-section">
      <div class="project-stats">
        ${projectStats.map(({ value, label }) => html`
          <div class="project-stat">
            <p class="project-stat-value">${value}</p>
            <p class="project-stat-label">${label}</p>
          </div>
        `).join("")}
      </div>
      <div class="projects-grid">${projects.map(projectCard).join("")}</div>
    </section>
  `;
}

function projectCard({ title, description, href, image, imagePosition, tags }) {
  const imageClass = imagePosition === "top" ? "project-image project-image--top" : "project-image";

  return html`
    <a href="${href}" class="project-card">
      <div class="project-image-frame">
        <img src="${image}" alt="${title}" class="${imageClass}" />
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${tags.map((tag) => html`<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
      </div>
    </a>
  `;
}

function modelsSection() {
  return html`
    <section aria-labelledby="models-heading" class="notebook-models">
      <h3 id="models-heading" class="notebook-models-heading">${modelSection.heading}</h3>
      <div class="models-list">${models.map(modelPreview).join("")}</div>
    </section>
  `;
}

function modelPreview({ title, filename, hiddenObjects = [] }) {
  const src = `${import.meta.env.BASE_URL}Models/${encodeURIComponent(filename)}`;

  // These data attributes connect the markup to src/rhinoviewer.js.
  return html`
    <figure>
      <div class="model-preview-heading">
        <h4 class="model-title">${title}</h4>
        <button type="button" data-rhino-reset disabled class="home-button home-button--secondary home-button--compact">${modelSection.resetLabel}</button>
      </div>
      <div data-rhino-viewer data-model-src="${src}" data-model-title="${title}" data-hidden-objects="${hiddenObjects.join(",")}" aria-busy="true" class="rhino-viewer">
        <p data-rhino-status role="status" class="rhino-viewer-status">${modelSection.loadingMessage}</p>
      </div>
      <figcaption class="model-instructions">${modelSection.instructions}</figcaption>
    </figure>
  `;
}

function processSection() {
  return html`
    <section aria-labelledby="process-heading" class="home-container home-section process-section">
      <h2 id="process-heading" class="home-section-title">${processHeading}</h2>
      <ol role="list" class="process-list">${processSteps.map(processStep).join("")}</ol>
    </section>
  `;
}

function processStep({ title, explanation }, index) {
  return html`
    <li class="process-row">
      <span aria-hidden="true" class="process-number">${String(index + 1).padStart(2, "0")}</span>
      <h3 class="process-title">${title}</h3>
      <p class="process-explanation">${explanation}</p>
    </li>
  `;
}

function skillsSection() {
  return html`
    <section class="home-container home-section">
      <div>
        <p class="home-section-eyebrow">${skillSection.label}</p>
        <h2 class="home-section-title skills-heading">${skillSection.heading}</h2>
      </div>
      <div class="skills-grid">${skills.map(skillGroup).join("")}</div>
    </section>
  `;
}

function skillGroup({ title, items }) {
  return html`
    <article class="skill-card">
      <h3 class="skill-title">${title}</h3>
      <div class="skill-list">
        ${items.map((skill) => html`<span class="skill-tag">${skill}</span>`).join("")}
      </div>
    </article>
  `;
}

function notebookSectionMarkup() {
  return html`
    <section id="notebook" aria-labelledby="notebook-heading" class="home-container home-section">
      <p class="home-section-eyebrow">${notebookSection.label}</p>
      <h2 id="notebook-heading" class="home-section-title notebook-heading">${notebookSection.heading}</h2>
      <p class="notebook-description">${notebookSection.description}</p>
      <div class="notebook-entries">${notebookEntries.map(notebookEntry).join("")}</div>
      ${modelsSection()}
    </section>
  `;
}

function notebookEntry({ href, description, width, height }) {
  return html`
    <figure class="notebook-entry" style="--notebook-width: ${width / 2}pt; --notebook-aspect-ratio: ${width} / ${height};">
      <iframe src="${href}#view=FitH&toolbar=0&navpanes=0" title="${description}" loading="lazy" class="notebook-document"></iframe>
      <figcaption class="notebook-caption">
        <a href="${href}" target="_blank" rel="noopener">${description}</a>
      </figcaption>
    </figure>
  `;
}
