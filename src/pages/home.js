import { footer, html } from "../shared.js";
import {
  hero,
  beyondProjects,
  beyondSection,
  inProgressProjects,
  inProgressSection,
  modelSection,
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
        ${inProgressSectionMarkup()}
        ${beyondSectionMarkup()}
        ${skillsSection()}
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

function inProgressSectionMarkup() {
  return html`
    <section aria-labelledby="in-progress-heading" class="home-container home-section in-progress-section">
      <h2 id="in-progress-heading" class="home-section-title">${inProgressSection.heading}</h2>
      <p class="in-progress-subtitle">${inProgressSection.subtitle}</p>
      <div class="projects-grid in-progress-grid">
        ${inProgressProjects.map(inProgressProjectCard).join("")}
      </div>
    </section>
  `;
}

function inProgressProjectCard({ title, category, description, status, image, previewInitials, previewStyle }) {
  const preview = image
    ? html`<img src="${image}" alt="${title} project preview" loading="lazy" class="project-image in-progress-image" />`
    : html`
        <div class="in-progress-placeholder in-progress-placeholder--${previewStyle}" role="img" aria-label="Preview placeholder for ${title}">
          <span aria-hidden="true" class="in-progress-placeholder-mark">${previewInitials}</span>
          <span class="in-progress-placeholder-label">Figma preview coming soon</span>
        </div>
      `;

  return html`
    <article class="project-card in-progress-card">
      <div class="project-image-frame">${preview}</div>
      <div class="project-content">
        <div class="in-progress-meta">
          <span class="project-tag in-progress-category">${category}</span>
          <span class="in-progress-status"><span aria-hidden="true" class="in-progress-status-dot"></span>${status}</span>
        </div>
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
      </div>
    </article>
  `;
}

function beyondSectionMarkup() {
  return html`
    <section aria-labelledby="beyond-heading" class="home-container home-section beyond-section">
      <h2 id="beyond-heading" class="home-section-title">${beyondSection.heading}</h2>
      <p class="beyond-subtitle">${beyondSection.subtitle}</p>
      <div class="projects-grid beyond-grid">
        ${beyondProjects.map(beyondProjectCard).join("")}
      </div>
    </section>
  `;
}

function beyondProjectCard(project) {
  if (project.model) return beyondModelCard(project);

  const imageClass = project.imageFit === "contain"
    ? "project-image beyond-image beyond-image--contain"
    : "project-image beyond-image";

  return html`
    <article class="project-card beyond-card beyond-image-card">
      <div class="project-image-frame beyond-image-frame">
        <button
          type="button"
          class="beyond-image-button"
          data-preview-title="${project.title}"
          data-preview-src="${project.image}"
          data-preview-alt="${project.title}"
          data-preview-style="beyond"
          aria-label="Expand image for ${project.title}"
        >
          <img src="${project.image}" alt="${project.title}" loading="lazy" class="${imageClass}" />
          <span aria-hidden="true" class="beyond-image-expand">Expand image <span>↗</span></span>
        </button>
      </div>
      <div class="project-content">
        <div class="project-tags"><span class="project-tag">${project.category}</span></div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.href}" class="beyond-card-action">${project.action}<span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function beyondModelCard({ title, category, description, model, action }) {
  const modelSrc = `${import.meta.env.BASE_URL}Models/${encodeURIComponent(model.filename)}`;

  return html`
    <article class="project-card beyond-card beyond-model-card">
      <div class="project-image-frame beyond-model-frame">${modelPreview(model, "beyond-rhino-viewer")}</div>
      <div class="project-content">
        <div class="project-tags"><span class="project-tag">${category}</span></div>
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        <a href="${modelSrc}" download="${model.filename}" class="beyond-card-action">${action}<span aria-hidden="true">↓</span></a>
      </div>
    </article>
  `;
}

function modelPreview({ title, filename, hiddenObjects = [], initialZoom = 1 }, viewerClass = "") {
  const src = `${import.meta.env.BASE_URL}Models/${encodeURIComponent(filename)}`;

  // These data attributes connect the markup to src/rhinoviewer.js.
  return html`
    <figure>
      <div class="model-preview-heading">
        <h4 class="model-title">${title}</h4>
        <div class="model-preview-actions">
          <button type="button" data-rhino-fullscreen aria-label="Expand ${title} card to full screen" class="home-button home-button--secondary home-button--compact model-fullscreen-button">Full screen</button>
          <button type="button" data-rhino-reset disabled class="home-button home-button--secondary home-button--compact">${modelSection.resetLabel}</button>
        </div>
      </div>
      <div data-rhino-viewer data-model-src="${src}" data-model-title="${title}" data-hidden-objects="${hiddenObjects.join(",")}" data-initial-zoom="${initialZoom}" aria-busy="true" class="rhino-viewer ${viewerClass}">
        <p data-rhino-status role="status" class="rhino-viewer-status">${modelSection.loadingMessage}</p>
      </div>
      <figcaption class="model-instructions">${modelSection.instructions}</figcaption>
    </figure>
  `;
}

export function processSection() {
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

