(function () {
  "use strict";

  const data = window.AQUA_DATA;
  const page = document.body.dataset.page || "home";

  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 22l5-3 5 3-1.5-10"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 6.5v13"/>',
    brain: '<path d="M9.5 4A3 3 0 0 0 6.6 7.8 3.5 3.5 0 0 0 7 14.7 3 3 0 0 0 12 17V7a3 3 0 0 0-2.5-3Z"/><path d="M14.5 4a3 3 0 0 1 2.9 3.8 3.5 3.5 0 0 1-.4 6.9A3 3 0 0 1 12 17V7a3 3 0 0 1 2.5-3Z"/><path d="M12 17v3"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-8"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.2-9.8A6 6 0 0 1 20 11a4 4 0 0 1-2.5 8Z"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5z"/>',
    document: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
    droplet: '<path d="M12 2S5 9.2 5 14a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z"/>',
    external: '<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v7H4V6h7"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-6.5 0-2.8-1.5-5.3-4-7.5.2 2-1 3.4-2 4-1-4-3-6-5-8 .2 4.2-3 6.4-3 11.5C5 19.3 8 22 12 22Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    mountain: '<path d="m3 20 7-12 4 7 2-3 5 8z"/><path d="m8 11 2 2 2-2"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
    satellite: '<path d="m13 7 4 4-6 6-4-4z"/><path d="m5 3 4 4-3 3-4-4zM19 14l4 4-3 3-4-4z"/><path d="M14 3a7 7 0 0 1 7 7M3 14a7 7 0 0 0 7 7"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    snowflake: '<path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M8 4l4 2 4-2M8 20l4-2 4 2M3.5 10 7 12l-3.5 2M20.5 10 17 12l3.5 2"/>',
    sparkle: '<path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/>',
    triangle: '<path d="m12 3 9 17H3z"/><path d="M12 9v5M12 17h.01"/>',
    waves: '<path d="M2 8c2.5 2 4.5 2 7 0s4.5-2 7 0 4.5 2 6 0M2 13c2.5 2 4.5 2 7 0s4.5-2 7 0 4.5 2 6 0M2 18c2.5 2 4.5 2 7 0s4.5-2 7 0 4.5 2 6 0"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>'
  };

  function icon(name, size = 20) {
    return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.sparkle}</svg>`;
  }

  const primaryNav = [
    ["home", "Home", "index.html"],
    ["about", "About", "about.html"],
    ["research", "Research", "research.html"],
    ["publications", "Publications", "publications.html"],
    ["projects", "Projects", "projects.html"],
    ["web-apps", "Web Apps", "web-apps.html"]
  ];

  const exploreNav = [
    ["field-visits", "Field Visits", "field-visits.html"],
    ["lectures", "Lectures & Tutorials", "lectures.html"],
    ["him-chitra", "HIM-CHITRA", "him-chitra.html"],
    ["wasap", "WASAP", "wasap.html"],
    ["awards", "Awards & Certificates", "awards.html"],
    ["skills", "Skills", "skills.html"],
    ["memberships", "Memberships", "memberships.html"],
    ["cv", "CV", "cv.html"],
    ["contact", "Contact", "contact.html"]
  ];

  function navLink(item) {
    const [id, label, href] = item;
    const active = id === page ? ' class="is-active" aria-current="page"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }

  function header() {
    return `
      <a class="skip-link" href="#main">Skip to main content</a>
      <div class="scroll-progress" aria-hidden="true"><span></span></div>
      <header class="site-header">
        <div class="nav-shell">
          <a class="brand" href="index.html" aria-label="AquaScholar home">
            <span class="brand-mark">${icon("waves", 24)}</span>
            <span><strong>AquaScholar</strong><small>Himalayan water science</small></span>
          </a>
          <nav class="desktop-nav" aria-label="Primary navigation">
            ${primaryNav.map(navLink).join("")}
            <div class="nav-dropdown">
              <button type="button" aria-expanded="false" aria-haspopup="true">Explore ${icon("arrow", 15)}</button>
              <div class="dropdown-panel">${exploreNav.map(navLink).join("")}</div>
            </div>
          </nav>
          <div class="nav-actions">
            <button class="theme-toggle" type="button" aria-label="Toggle color theme">${icon("sparkle", 20)}</button>
            <a class="btn btn-small btn-primary desktop-contact" href="contact.html">Collaborate ${icon("arrow", 16)}</a>
            <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">${icon("menu", 23)}</button>
          </div>
        </div>
        <div class="mobile-panel" aria-hidden="true">
          <nav aria-label="Mobile navigation">${[...primaryNav, ...exploreNav].map(navLink).join("")}</nav>
        </div>
      </header>`;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html"><span class="brand-mark">${icon("waves", 24)}</span><span><strong>AquaScholar</strong><small>Himalayan water science</small></span></a>
            <p>Field science, Earth observation and geospatial intelligence for resilient Himalayan water systems.</p>
          </div>
          <div>
            <h2>Explore</h2>
            <a href="research.html">Research</a>
            <a href="publications.html">Publications</a>
            <a href="projects.html">Projects</a>
            <a href="web-apps.html">Web Apps</a>
          </div>
          <div>
            <h2>Research areas</h2>
            <span>Hydrology & cryosphere</span>
            <span>Remote sensing & GIS</span>
            <span>Floods, GLOFs & landslides</span>
            <span>Google Earth Engine</span>
          </div>
          <div>
            <h2>Connect</h2>
            <a href="mailto:${data.profile.email}">${data.profile.email}</a>
            <span>${data.profile.centre}</span>
            <div class="social-row">${data.profile.social.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer" aria-label="${item.label}">${item.label}</a>`).join("")}</div>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>© ${new Date().getFullYear()} Dr. Sachchidanand Singh. All rights reserved.</p>
          <p>The views and content presented on this personal website are for academic, research and professional information purposes only.</p>
        </div>
      </footer>`;
  }

  function sectionHeading(kicker, title, text, align = "") {
    return `<div class="section-heading ${align}"><span class="eyebrow">${kicker}</span><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
  }

  function pageHero(kicker, title, text, options = {}) {
    return `
      <section class="page-hero ${options.className || ""}">
        <div class="topo-lines" aria-hidden="true"></div>
        <div class="container page-hero-grid">
          <div class="reveal">
            <span class="eyebrow">${kicker}</span>
            <h1>${title}</h1>
            <p>${text}</p>
            ${options.actions || ""}
          </div>
          ${options.visual || `<div class="hero-orbit reveal" aria-hidden="true"><span></span><span></span><span></span><div>${icon(options.icon || "globe", 48)}</div></div>`}
        </div>
      </section>`;
  }

  function ctaSection(title = "Build the next water-science collaboration.", text = "Open to research collaboration, training, technical consultation and geospatial decision-support initiatives.") {
    return `
      <section class="section">
        <div class="container">
          <div class="cta-panel reveal">
            <div><span class="eyebrow">Connect & collaborate</span><h2>${title}</h2><p>${text}</p></div>
            <a class="btn btn-light" href="contact.html">Start a conversation ${icon("arrow", 17)}</a>
          </div>
        </div>
      </section>`;
  }

  function researchCard(item) {
    return `<article class="research-card glass-card reveal">
      <span class="icon-box">${icon(item.icon, 24)}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span class="card-link">Explore domain ${icon("arrow", 16)}</span>
    </article>`;
  }

  function projectCard(item) {
    return `<article class="project-card glass-card reveal">
      <div class="card-topline"><span class="status ${item.status.toLowerCase()}">${item.status}</span><span>${item.duration}</span></div>
      <h3>${item.title}</h3>
      <p>${item.outcome}</p>
      <dl class="project-meta">
        <div><dt>Role</dt><dd>${item.role}</dd></div>
        <div><dt>Funding</dt><dd>${item.funding}</dd></div>
        <div><dt>Agency</dt><dd>${item.agency}</dd></div>
      </dl>
      <div class="tag-row">${item.keywords.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>`;
  }

  function publicationCard(item) {
    return `<article class="publication-card reveal" data-category="${item.category}" data-year="${item.year}" data-search="${(`${item.title} ${item.authors} ${item.venue}`).toLowerCase()}">
      <div class="publication-year">${item.year}</div>
      <div>
        <div class="tag-row"><span>${item.category}</span>${item.featured ? '<span class="featured-tag">Featured</span>' : ""}</div>
        <h3>${item.title}</h3>
        <p class="authors">${item.authors}</p>
        <p class="venue">${item.venue}</p>
      </div>
    </article>`;
  }

  function statCards() {
    return `<div class="stats-grid">${data.stats.map((stat) => `
      <div class="stat-card reveal">
        <strong data-counter="${stat.value}">0</strong><strong>${stat.suffix}</strong>
        <span>${stat.label}</span>
      </div>`).join("")}</div>`;
  }

  function renderHome() {
    const featuredProjects = data.projects.slice(0, 3).map(projectCard).join("");
    const featuredApps = data.webApps.slice(0, 3).map(webAppCard).join("");
    return `
      <main id="main">
        <section class="home-hero">
          <div class="topo-lines" aria-hidden="true"></div>
          <div class="water-ribbon" aria-hidden="true"></div>
          <div class="container hero-layout">
            <div class="hero-copy">
              <span class="eyebrow hero-reveal">Scientist-B · NIH-WHRC Jammu</span>
              <h1 class="hero-reveal">Water science for a <em>changing Himalaya.</em></h1>
              <p class="hero-lead hero-reveal">${data.profile.tagline}</p>
              <div class="hero-actions hero-reveal">
                <a class="btn btn-primary" href="research.html">View research ${icon("arrow", 17)}</a>
                <a class="btn btn-secondary" href="web-apps.html">Explore web apps ${icon("external", 17)}</a>
              </div>
              <div class="hero-proof hero-reveal">
                <span>${icon("pin", 17)} ${data.profile.centre}</span>
                <span>${icon("satellite", 17)} Earth observation + field science</span>
              </div>
            </div>
            <div class="hero-visual hero-reveal">
              <div class="portrait-frame">
                <img src="${data.profile.portrait}" alt="Dr. Sachchidanand Singh" width="640" height="760">
                <div class="portrait-label"><strong>Dr. Sachchidanand Singh</strong><span>Hydrology · Cryosphere · Geospatial Analytics</span></div>
              </div>
              <img class="floating-satellite parallax" data-speed="0.08" src="assets/images/satellite-observation.png" alt="" width="360" height="360">
              <div class="orbit-line" aria-hidden="true"></div>
            </div>
          </div>
          <div class="container domain-strip" aria-label="Core research domains">
            ${data.researchAreas.slice(0, 6).map((item) => `<span>${icon(item.icon, 16)} ${item.title}</span>`).join("")}
          </div>
        </section>

        <section class="section stats-section"><div class="container">${statCards()}</div></section>

        <section class="section">
          <div class="container">
            ${sectionHeading("Research intelligence", "From Himalayan field sites to cloud-scale analysis.", "Integrated work spanning cryosphere observation, hydro-climatology, hazard assessment and practical decision-support systems.")}
            <div class="research-grid">${data.researchAreas.slice(0, 6).map(researchCard).join("")}</div>
            <div class="section-action"><a class="text-link" href="research.html">Explore all research domains ${icon("arrow", 17)}</a></div>
          </div>
        </section>

        <section class="section terrain-section">
          <div class="container split-feature">
            <div class="terrain-visual reveal">
              <img class="parallax" data-speed="0.05" src="assets/images/himalayan-terrain-3d.png" alt="Three-dimensional visualization of Himalayan terrain" width="1200" height="900" loading="lazy">
              <div class="map-callout callout-one"><span></span> Glacier monitoring</div>
              <div class="map-callout callout-two"><span></span> Watershed analytics</div>
            </div>
            <div class="feature-copy reveal">
              <span class="eyebrow">Research identity</span>
              <h2>Evidence across scale, from field measurement to regional intelligence.</h2>
              <p>${data.profile.summary}</p>
              <div class="feature-list">
                <span>${icon("check", 18)} Satellite and field data integration</span>
                <span>${icon("check", 18)} Reproducible cloud geospatial workflows</span>
                <span>${icon("check", 18)} Decision support for mountain communities</span>
              </div>
              <a class="btn btn-secondary" href="about.html">About Dr. Singh ${icon("arrow", 17)}</a>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            ${sectionHeading("Current portfolio", "Research designed to become operational.", "Selected programmes connecting scientific investigation with usable planning and monitoring tools.")}
            <div class="project-grid">${featuredProjects}</div>
            <div class="section-action"><a class="text-link" href="projects.html">View all projects ${icon("arrow", 17)}</a></div>
          </div>
        </section>

        <section class="section apps-home">
          <div class="container">
            ${sectionHeading("Open geospatial tools", "Science made explorable.", "Interactive Google Earth Engine applications turn complex Earth-observation data into direct visual insight.")}
            <div class="app-grid">${featuredApps}</div>
          </div>
        </section>
        ${ctaSection()}
      </main>`;
  }

  function renderAbout() {
    return `<main id="main">
      ${pageHero("Profile & journey", "A civil engineer shaped by the Himalaya.", data.profile.summary, {
        icon: "compass",
        visual: `<div class="page-portrait reveal"><img src="${data.profile.portrait}" alt="Portrait of Dr. Sachchidanand Singh" width="520" height="620"><span>Scientist-B · NIH-WHRC Jammu</span></div>`
      })}
      <section class="section"><div class="container about-intro">
        <div class="reveal">${sectionHeading("About", "Science grounded in practical water challenges.", "")}<p>Dr. Sachchidanand Singh works at the National Institute of Hydrology’s Western Himalayan Regional Centre in Jammu. His research integrates remote sensing, GIS, hydrological modelling, Google Earth Engine and field observations to understand changing snow, glaciers, watersheds and mountain hazards.</p><p>Before advanced academic training, he spent two years with Larsen & Toubro Construction, ECC Division. This combination of engineering practice and Earth-science research informs a solution-oriented approach to water-resources planning.</p></div>
        <aside class="mission-card glass-card reveal"><span class="icon-box">${icon("compass", 26)}</span><h2>Mission</h2><p>${data.profile.mission}</p></aside>
      </div></section>
      <section class="section timeline-section"><div class="container">
        ${sectionHeading("Academic journey", "Engineering foundations. Geospatial specialization. Himalayan impact.", "A progression from civil engineering and infrastructure to advanced water science and operational Earth observation.")}
        <div class="journey-line">${data.education.map((item) => `<article class="journey-item reveal"><span class="journey-year">${item.year}</span><div><h3>${item.title}</h3><strong>${item.institution}</strong><p>${item.note}</p></div></article>`).join("")}</div>
      </div></section>
      <section class="section"><div class="container">
        ${sectionHeading("Research compass", "A connected view of mountain water systems.", "Each area contributes to a larger objective: evidence-led resilience in climate-sensitive terrain.")}
        <div class="research-grid">${data.researchAreas.map(researchCard).join("")}</div>
      </div></section>
      ${ctaSection("Explore a shared research question.")}
    </main>`;
  }

  function renderResearch() {
    return `<main id="main">
      ${pageHero("Research", "Observing change. Modelling risk. Enabling decisions.", "Research spanning Himalayan cryosphere processes, hydro-climatology, geospatial intelligence and practical water-resources management.", { icon: "satellite" })}
      <section class="section"><div class="container">
        ${sectionHeading("Research domains", "Nine connected areas of scientific inquiry.", "A multi-scale portfolio combining field observations, satellite data, models, cloud computing and stakeholder-focused outputs.")}
        <div class="research-grid research-grid-large">${data.researchAreas.map(researchCard).join("")}</div>
      </div></section>
      <section class="section dark-section"><div class="container split-feature reverse">
        <div class="feature-copy reveal"><span class="eyebrow">Working method</span><h2>A field-to-cloud research workflow.</h2><p>Research questions begin with a real mountain-water challenge and move through observation, quality control, spatial analysis, modelling and clear delivery.</p>
          <ol class="method-list"><li><span>01</span>Define the hydro-climatic or hazard question</li><li><span>02</span>Combine ground observations and Earth observation</li><li><span>03</span>Model spatial and temporal behaviour</li><li><span>04</span>Translate findings into maps, applications and guidance</li></ol>
        </div>
        <div class="research-visual reveal"><img class="parallax" data-speed="0.04" src="assets/images/himalayan-watershed.png" alt="Himalayan watershed visualization" width="1200" height="900" loading="lazy"><div class="data-chip chip-a">Snow cover <strong>Seasonal</strong></div><div class="data-chip chip-b">Runoff <strong>Modelled</strong></div><div class="data-chip chip-c">Hazards <strong>Mapped</strong></div></div>
      </div></section>
      <section class="section"><div class="container">
        ${sectionHeading("Featured projects", "Research with operational pathways.", "Current programmes are designed around usable outcomes, institutional relevance and repeatable geospatial workflows.")}
        <div class="project-grid">${data.projects.slice(0, 6).map(projectCard).join("")}</div>
      </div></section>
      ${ctaSection("Collaborate on Himalayan water and hazard science.")}
    </main>`;
  }

  function renderPublications() {
    return `<main id="main">
      ${pageHero("Publications", "Research documented for use, review and extension.", "A structured selection of journal articles, book chapters and conference contributions across hydrology, cryosphere, climate and geospatial science.", { icon: "book" })}
      <section class="section"><div class="container">
        <div class="filter-panel reveal">
          <label class="search-field"><span class="sr-only">Search publications</span>${icon("search", 19)}<input id="publication-search" type="search" placeholder="Search by title, author or journal"></label>
          <div class="filter-buttons" role="group" aria-label="Publication category">
            ${["All", "Journal Article", "Book Chapter", "Conference"].map((category, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-publication-filter="${category}">${category}${category === "All" ? "s" : "s"}</button>`).join("")}
          </div>
          <label class="select-field">Year <select id="publication-year"><option value="All">All years</option>${[...new Set(data.publications.map((item) => item.year))].sort((a, b) => b - a).map((year) => `<option value="${year}">${year}</option>`).join("")}</select></label>
        </div>
        <p id="publication-count" class="result-count" aria-live="polite">${data.publications.length} publications shown</p>
        <div id="publication-list" class="publication-list">${data.publications.map(publicationCard).join("")}</div>
        <div id="publication-empty" class="empty-state" hidden>${icon("search", 32)}<h2>No publications found</h2><p>Try a broader keyword or reset the filters.</p></div>
      </div></section>
      ${ctaSection("Discuss a paper, dataset or research direction.")}
    </main>`;
  }

  function renderProjects() {
    const totalFunding = "₹342+ lakh";
    return `<main id="main">
      ${pageHero("Projects & consultancy", "Research programmes built around public value.", "A portfolio of institutional research and technical consultancy spanning snow, glaciers, water budgets, floods, landslides and monitoring networks.", {
        icon: "layers",
        actions: `<div class="hero-actions"><a class="btn btn-primary" href="#project-portfolio">Explore portfolio ${icon("arrow", 17)}</a></div>`
      })}
      <section class="section project-summary"><div class="container mini-stats">
        <div><strong>${data.projects.length}</strong><span>programmes</span></div><div><strong>${data.projects.filter((item) => item.status === "Ongoing").length}</strong><span>ongoing</span></div><div><strong>${totalFunding}</strong><span>listed funding</span></div><div><strong>5+</strong><span>institutional partners</span></div>
      </div></section>
      <section class="section" id="project-portfolio"><div class="container">
        ${sectionHeading("Portfolio", "Research and consultancy at basin and regional scales.", "Roles, duration, funding, agency and intended outcome are presented for each programme.")}
        <div class="project-grid">${data.projects.map(projectCard).join("")}</div>
      </div></section>
      ${ctaSection("Bring geospatial evidence into your water programme.")}
    </main>`;
  }

  function fieldCard(item, index) {
    return `<article class="field-card reveal">
      <div class="field-image"><img class="parallax" data-speed="${0.025 + index * 0.012}" src="${item.image}" alt="${item.title} visual context" width="900" height="650" loading="lazy"><span>${item.date}</span></div>
      <div class="field-body"><span class="eyebrow">${icon("pin", 15)} ${item.place}</span><h2>${item.title}</h2><p>${item.description}</p><div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></div>
    </article>`;
  }

  function renderFieldVisits() {
    return `<main id="main">
      ${pageHero("Field visits", "High-altitude observations behind the maps.", "Field campaigns provide essential context, validation and measurement for Himalayan cryosphere, watershed and hazard studies.", {
        icon: "mountain",
        visual: `<div class="mountain-stack reveal"><img class="parallax" data-speed="0.08" src="assets/images/himalayan-terrain-3d.png" alt="Three-dimensional Himalayan terrain" width="900" height="720"></div>`
      })}
      <section class="section"><div class="container">
        ${sectionHeading("Field archive", "Terrain, instruments and ground truth.", "Selected campaign contexts from the AquaScholar field record. Scientific visualizations support the archive where original photography is not reproduced.")}
        <div class="field-grid">${data.fieldVisits.map(fieldCard).join("")}</div>
      </div></section>
      <section class="section map-section"><div class="container map-stage reveal">
        <div class="map-grid" aria-hidden="true"></div><div class="map-route" aria-hidden="true"></div>
        <div class="map-copy"><span class="eyebrow">Western Himalayan context</span><h2>Research across steep gradients and sensitive water towers.</h2><p>Field understanding improves interpretation of satellite signals, model assumptions and the real-world consequences of environmental change.</p></div>
        <div class="map-point point-one"><span></span> Ladakh Range</div><div class="map-point point-two"><span></span> Jammu & Kashmir</div><div class="map-point point-three"><span></span> Gangotri</div>
      </div></section>
      ${ctaSection("Connect field evidence with geospatial intelligence.")}
    </main>`;
  }

  function lectureCard(item) {
    const [date, title, institution, type, topic] = item;
    const formatted = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T00:00:00`));
    return `<article class="lecture-card reveal" data-year="${date.slice(0, 4)}" data-topic="${topic}" data-search="${(`${title} ${institution} ${topic}`).toLowerCase()}">
      <time datetime="${date}">${formatted}</time>
      <div><div class="tag-row"><span>${type}</span><span>${topic}</span></div><h3>${title}</h3><p>${institution}</p></div>
    </article>`;
  }

  function renderLectures() {
    const topics = ["All", ...new Set(data.lectures.map((item) => item[4]))];
    return `<main id="main">
      ${pageHero("Lectures & tutorials", "Building capacity for geospatial water science.", "Invited lectures, professional training and hands-on sessions translating methods into practical skills for students, scientists and water-sector professionals.", { icon: "play" })}
      <section class="section"><div class="container">
        <div class="filter-panel lecture-filter reveal">
          <label class="search-field"><span class="sr-only">Search lectures</span>${icon("search", 19)}<input id="lecture-search" type="search" placeholder="Search lecture or institution"></label>
          <label class="select-field">Topic <select id="lecture-topic">${topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("")}</select></label>
          <label class="select-field">Year <select id="lecture-year"><option value="All">All years</option>${[...new Set(data.lectures.map((item) => item[0].slice(0, 4)))].map((year) => `<option value="${year}">${year}</option>`).join("")}</select></label>
        </div>
        <p id="lecture-count" class="result-count" aria-live="polite">${data.lectures.length} sessions shown</p>
        <div id="lecture-list" class="lecture-timeline">${data.lectures.map(lectureCard).join("")}</div>
        <div id="lecture-empty" class="empty-state" hidden>${icon("search", 32)}<h2>No sessions found</h2><p>Try a different topic, year or keyword.</p></div>
      </div></section>
      ${ctaSection("Plan a focused lecture or hands-on programme.", "Training themes can be aligned with hydrology, Google Earth Engine, remote sensing, cryosphere, climate analytics or hazard assessment.")}
    </main>`;
  }

  function webAppCard(item) {
    return `<article class="webapp-card reveal">
      <div class="app-preview">
        <div class="app-toolbar"><span></span><span></span><span></span></div>
        <div class="app-map"><div class="app-contours"></div><span class="app-marker"></span><div class="app-legend"><i></i><i></i><i></i></div></div>
      </div>
      <div class="app-body"><span class="icon-box">${icon(item.icon, 23)}</span><span class="eyebrow">${item.type}</span><h3>${item.title}</h3><p>${item.description}</p>
        <div class="tag-row"><span>Google Earth Engine</span><span>Remote Sensing</span><span>Cloud Analytics</span></div>
        <a class="btn btn-secondary" href="${item.url}" target="_blank" rel="noreferrer">View app ${icon("external", 16)}</a>
      </div>
    </article>`;
  }

  function renderWebApps() {
    return `<main id="main">
      ${pageHero("Web apps", "Interactive Earth observation for direct exploration.", "Cloud geospatial applications make satellite data and environmental indicators accessible through purpose-built visual interfaces.", { icon: "code" })}
      <section class="section"><div class="container">
        ${sectionHeading("Application portfolio", "Explore the analysis, not only the output.", "Each app demonstrates how Google Earth Engine can support rapid environmental visualization and monitoring.")}
        <div class="app-grid app-grid-full">${data.webApps.map(webAppCard).join("")}</div>
        <aside class="disclaimer reveal">${icon("triangle", 22)}<div><h2>Access and availability</h2><p>Some web applications may be experimental, restricted, or not publicly available. Access depends on institutional permissions, data policies, Google Earth Engine verification and platform availability.</p></div></aside>
      </div></section>
      ${ctaSection("Develop a focused geospatial decision-support tool.")}
    </main>`;
  }

  function dashboardMock(type) {
    const isSnow = type === "snow";
    return `<div class="dashboard reveal" aria-label="${isSnow ? "HIM-CHITRA" : "WASAP"} dashboard concept">
      <div class="dashboard-bar"><strong>${isSnow ? "HIM-CHITRA" : "WASAP"}</strong><span>Operational view</span><button type="button" tabindex="-1">${icon("download", 16)} Export</button></div>
      <div class="dashboard-layout">
        <aside><span class="control-label">Analysis period</span><div class="fake-select">2025–2026 ${icon("arrow", 14)}</div><span class="control-label">Dataset</span><div class="fake-select">${isSnow ? "Sentinel-2 snow" : "Surface water"} ${icon("arrow", 14)}</div><div class="layer-stack"><span class="active">${icon("layers", 16)} ${isSnow ? "Snow extent" : "Water extent"}</span><span>${icon("map", 16)} Terrain</span><span>${icon("cloud", 16)} Weather</span></div></aside>
        <div class="dashboard-map ${isSnow ? "snow-map" : "water-map"}"><div class="map-grid"></div><span class="map-label label-a">${isSnow ? "Pir Panjal" : "Selected basin"}</span><span class="map-label label-b">${isSnow ? "Greater Himalaya" : "Water body"}</span><div class="map-scale">0 · 25 · 50 km</div></div>
        <div class="dashboard-metrics">
          <div><span>${isSnow ? "Snow cover" : "Water extent"}</span><strong>${isSnow ? "68.4%" : "142 km²"}</strong><small>${isSnow ? "+4.2% vs median" : "+7.1% seasonal"}</small></div>
          <div><span>${isSnow ? "Air temperature" : "Observation quality"}</span><strong>${isSnow ? "−3.8°C" : "93%"}</strong><small>${isSnow ? "High elevation" : "Cloud screened"}</small></div>
          <div class="mini-chart"><span>Time series</span><svg viewBox="0 0 240 90" role="img" aria-label="Illustrative time-series chart"><path class="gridline" d="M0 20h240M0 45h240M0 70h240"/><path class="chart-line" d="M0 68 22 62 44 65 66 43 88 52 110 29 132 34 154 18 176 37 198 31 220 15 240 22"/></svg></div>
          <div class="lulc-panel"><span>${isSnow ? "LULC change" : "Surface classes"}</span><div><i></i><i></i><i></i><i></i></div><small>${isSnow ? "Built-up · Forest · Snow · Water" : "Permanent · Seasonal · Mixed · Masked"}</small></div>
        </div>
      </div>
    </div>`;
  }

  function renderHimChitra() {
    return `<main id="main">
      ${pageHero("Featured platform", "HIM-CHITRA", "A cloud-based portal for operational snow-cover mapping and weather monitoring in the Western Himalayas.", {
        icon: "snowflake",
        className: "snow-hero",
        actions: `<div class="hero-actions"><a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfylLuE0sw9uj56C2oUMgXNR1q6pzUSetRY3LZvyKSIIwuY1g/viewform" target="_blank" rel="noreferrer">Request access ${icon("external", 17)}</a><a class="btn btn-secondary" href="#platform">Learn more</a></div>`
      })}
      <section class="section" id="platform"><div class="container">
        ${sectionHeading("Operational concept", "A unified view of snow, weather and landscape change.", "HIM-CHITRA is positioned to bring repeatable Google Earth Engine analysis into an accessible monitoring environment for registered users.")}
        ${dashboardMock("snow")}
      </div></section>
      <section class="section"><div class="container capability-grid">
        ${[
          ["snowflake", "Snow-cover mapping", "Operational and historical snow-extent analysis using satellite observations."],
          ["cloud", "Meteorological analysis", "Weather indicators interpreted alongside changing snow conditions."],
          ["layers", "Land-use change", "Contextual land-use and land-cover change detection for Himalayan landscapes."],
          ["code", "Cloud geospatial analytics", "Scalable, repeatable processing through Google Earth Engine."]
        ].map((item) => `<article class="glass-card reveal"><span class="icon-box">${icon(item[0], 24)}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}
      </div></section>
      <section class="section access-section"><div class="container access-panel reveal"><div><span class="eyebrow">Registered access</span><h2>Request access to the research portal.</h2><p>Access is limited and subject to data policies, intended use, account approval and platform availability. The portal is not presented as a public commercial service.</p></div><a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfylLuE0sw9uj56C2oUMgXNR1q6pzUSetRY3LZvyKSIIwuY1g/viewform" target="_blank" rel="noreferrer">Open registration form ${icon("external", 17)}</a></div></section>
    </main>`;
  }

  function renderWasap() {
    return `<main id="main">
      ${pageHero("Surface-water intelligence", "WASAP – Water Surface Mapper", "A satellite-based interface for mapping and exploring surface-water extent through Google Earth Engine.", {
        icon: "waves",
        className: "water-hero",
        actions: `<div class="hero-actions"><a class="btn btn-primary" href="https://singhsachin.users.earthengine.app/view/water-surface" target="_blank" rel="noreferrer">Launch WASAP ${icon("external", 17)}</a><a class="btn btn-secondary" href="#wasap-dashboard">View concept</a></div>`
      })}
      <section class="section" id="wasap-dashboard"><div class="container">
        ${sectionHeading("Water surface mapping", "A clear interface for temporal water observation.", "WASAP uses satellite observations and cloud processing to support direct exploration of surface-water patterns.")}
        ${dashboardMock("water")}
      </div></section>
      <section class="section"><div class="container process-grid">
        ${[["01", "Select an area", "Define the region or basin of interest."], ["02", "Set the period", "Choose an observation window for comparison."], ["03", "Map water extent", "Process cloud-screened satellite observations."], ["04", "Interpret change", "Review spatial and temporal surface-water patterns."]].map((item) => `<article class="process-card reveal"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}
      </div></section>
      ${ctaSection("Apply Earth observation to a water-monitoring question.")}
    </main>`;
  }

  function renderAwards() {
    return `<main id="main">
      ${pageHero("Awards & certificates", "Recognition for research, mentoring and geospatial innovation.", "Selected awards, fellowships, competition achievements and professional development from the AquaScholar record.", { icon: "award" })}
      <section class="section"><div class="container">
        ${sectionHeading("Honours", "Milestones across research and geospatial problem-solving.", "Recognition from academic institutions, technical programmes and national geospatial challenges.")}
        <div class="award-grid">${data.awards.map((item, index) => `<article class="award-card reveal"><span class="award-number">${String(index + 1).padStart(2, "0")}</span><span class="award-year">${item[0]}</span><div class="award-icon">${icon("award", 28)}</div><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div>
      </div></section>
      <section class="section certificate-section"><div class="container">
        ${sectionHeading("Professional learning", "Continuous technical and public-service development.", "Training across water resources, modelling, Earth observation, programming, institutional systems and professional effectiveness.")}
        <div class="certificate-grid">${data.trainings.map((item) => `<div class="certificate-item reveal"><span>${icon("document", 19)}</span><div><strong>${item[1]}</strong><small>${item[0]}</small></div></div>`).join("")}</div>
      </div></section>
      ${ctaSection()}
    </main>`;
  }

  function renderSkills() {
    return `<main id="main">
      ${pageHero("Technical skills", "Tools for observing, modelling and communicating water systems.", "A multidisciplinary toolkit spanning geospatial analysis, cloud computing, hydrological models, programming, web GIS and water infrastructure.", { icon: "code" })}
      <section class="section"><div class="container skill-layout">
        <div class="skill-orbit reveal" aria-label="Core skills visual">
          <div class="orbit-core">${icon("globe", 44)}<strong>Geospatial<br>water science</strong></div>
          ${["GEE", "Python", "QGIS", "HEC-HMS", "ArcGIS", "HEC-RAS"].map((skill, index) => `<span style="--i:${index}">${skill}</span>`).join("")}
        </div>
        <div class="skill-groups">${Object.entries(data.skills).map(([category, skills]) => `<article class="skill-group glass-card reveal"><h2>${category}</h2><div class="skill-tags">${skills.map((skill) => `<span>${skill}</span>`).join("")}</div></article>`).join("")}</div>
      </div></section>
      <section class="section dark-section"><div class="container">
        ${sectionHeading("Applied capability", "Technology selected around the research question.", "The focus is not software in isolation, but a defensible workflow from source data to interpretable evidence.", "light")}
        <div class="process-grid">${[["01", "Observe", "Satellite, field and meteorological data."], ["02", "Analyze", "GIS, time series and cloud-scale computation."], ["03", "Model", "Hydrological, hydraulic and spatial models."], ["04", "Deliver", "Maps, papers, dashboards and decision support."]].map((item) => `<article class="process-card dark reveal"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div>
      </div></section>
      ${ctaSection()}
    </main>`;
  }

  function renderMemberships() {
    return `<main id="main">
      ${pageHero("Professional memberships", "Contributing to scientific and public-sector communities.", "Committee roles and professional affiliations supporting disaster mitigation, landslide-risk guidance, remote sensing, civil engineering and water-sector knowledge exchange.", { icon: "globe" })}
      <section class="section"><div class="container membership-grid">
        ${data.memberships.map((item, index) => `<article class="membership-card reveal"><span>${String(index + 1).padStart(2, "0")}</span><div class="icon-box">${icon(index < 2 ? "document" : "globe", 23)}</div><h2>${item.title}</h2><p>${item.body}</p></article>`).join("")}
      </div></section>
      ${ctaSection("Connect across institutions and disciplines.")}
    </main>`;
  }

  function renderCv() {
    return `<main id="main">
      ${pageHero("Curriculum vitae", "A concise professional record.", "Education, experience, research direction, selected output and technical capability in one navigable view.", {
        icon: "document",
        actions: `<div class="hero-actions"><a class="btn btn-primary" href="https://www.aquascholar.in/cv" target="_blank" rel="noreferrer">Open source CV page ${icon("external", 17)}</a><a class="btn btn-secondary" href="contact.html">Request current CV</a></div>`
      })}
      <section class="section"><div class="container cv-layout">
        <aside class="cv-sidebar reveal"><img src="${data.profile.portrait}" alt="Dr. Sachchidanand Singh" width="360" height="430"><h2>${data.profile.name}</h2><p>${data.profile.role}<br>${data.profile.institution}<br>${data.profile.centre}</p><a href="mailto:${data.profile.email}">${data.profile.email}</a><div class="cv-links">${data.profile.social.slice(0, 3).map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label} ${icon("external", 14)}</a>`).join("")}</div></aside>
        <div class="cv-main">
          <section class="cv-section reveal"><span class="eyebrow">Profile</span><h2>Water-resources scientist and geospatial researcher</h2><p>${data.profile.summary}</p></section>
          <section class="cv-section reveal"><span class="eyebrow">Education & experience</span><div class="compact-timeline">${data.education.map((item) => `<div><strong>${item.year}</strong><span><b>${item.title}</b>${item.institution}</span></div>`).join("")}</div></section>
          <section class="cv-section reveal"><span class="eyebrow">Research</span><div class="cv-chip-grid">${data.researchAreas.map((item) => `<span>${item.title}</span>`).join("")}</div></section>
          <section class="cv-section reveal"><span class="eyebrow">Selected indicators</span>${statCards()}</section>
          <section class="cv-section reveal"><span class="eyebrow">Technical toolkit</span><div class="cv-chip-grid">${Object.values(data.skills).flat().slice(0, 20).map((item) => `<span>${item}</span>`).join("")}</div></section>
        </div>
      </div></section>
    </main>`;
  }

  function renderContact() {
    return `<main id="main">
      ${pageHero("Contact", "Start with the scientific question.", "For research collaboration, invited lectures, technical consultation and geospatial decision-support discussions.", { icon: "mail" })}
      <section class="section"><div class="container contact-grid">
        <div class="contact-details reveal">
          <span class="eyebrow">Direct contact</span><h2>Dr. Sachchidanand Singh</h2><p>${data.profile.role}<br>${data.profile.institution}<br>${data.profile.centre}</p>
          <a class="contact-line" href="mailto:${data.profile.email}"><span class="icon-box">${icon("mail", 21)}</span><span><small>Email</small>${data.profile.email}</span></a>
          <div class="contact-line"><span class="icon-box">${icon("pin", 21)}</span><span><small>Location</small>${data.profile.location}</span></div>
          <div class="profile-links">${data.profile.social.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label} ${icon("external", 14)}</a>`).join("")}</div>
        </div>
        <form id="contact-form" class="contact-form glass-card reveal" novalidate>
          <div><label for="contact-name">Name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" autocomplete="name" required><small class="field-error"></small></div>
          <div><label for="contact-email">Email <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autocomplete="email" required><small class="field-error"></small></div>
          <div><label for="contact-subject">Subject <span aria-hidden="true">*</span></label><input id="contact-subject" name="subject" required><small class="field-error"></small></div>
          <div><label for="contact-message">Message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows="6" required></textarea><small class="field-error"></small></div>
          <button class="btn btn-primary" type="submit">Prepare email ${icon("mail", 17)}</button>
          <p class="form-note">This static website does not store form data. Submitting prepares a message in your email application.</p>
          <div id="form-status" class="form-status" aria-live="polite"></div>
        </form>
      </div></section>
    </main>`;
  }

  const renderers = {
    home: renderHome,
    about: renderAbout,
    research: renderResearch,
    publications: renderPublications,
    projects: renderProjects,
    "field-visits": renderFieldVisits,
    lectures: renderLectures,
    "web-apps": renderWebApps,
    "him-chitra": renderHimChitra,
    wasap: renderWasap,
    awards: renderAwards,
    skills: renderSkills,
    memberships: renderMemberships,
    cv: renderCv,
    contact: renderContact
  };

  document.getElementById("site-shell").innerHTML = header() + (renderers[page] || renderHome)() + footer();

  function initNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const mobilePanel = document.querySelector(".mobile-panel");
    const dropdownButton = document.querySelector(".nav-dropdown > button");
    const dropdown = document.querySelector(".nav-dropdown");
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.innerHTML = icon(open ? "menu" : "x", 23);
      menuButton.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
      mobilePanel.classList.toggle("is-open", !open);
      mobilePanel.setAttribute("aria-hidden", String(open));
      document.body.classList.toggle("menu-open", !open);
    });
    dropdownButton.addEventListener("click", () => {
      const open = dropdownButton.getAttribute("aria-expanded") === "true";
      dropdownButton.setAttribute("aria-expanded", String(!open));
      dropdown.classList.toggle("is-open", !open);
    });
    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
        dropdownButton.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
        dropdownButton.setAttribute("aria-expanded", "false");
        mobilePanel.classList.remove("is-open");
        mobilePanel.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = icon("menu", 23);
        document.body.classList.remove("menu-open");
      }
    });
  }

  function initTheme() {
    const button = document.querySelector(".theme-toggle");
    const saved = localStorage.getItem("aquascholar-theme");
    if (saved === "dark") document.documentElement.dataset.theme = "dark";
    button.addEventListener("click", () => {
      const dark = document.documentElement.dataset.theme === "dark";
      document.documentElement.dataset.theme = dark ? "light" : "dark";
      localStorage.setItem("aquascholar-theme", dark ? "light" : "dark");
    });
  }

  function initScroll() {
    const progress = document.querySelector(".scroll-progress span");
    const headerElement = document.querySelector(".site-header");
    const parallax = [...document.querySelectorAll(".parallax")];
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${height > 0 ? scrollTop / height : 0})`;
      headerElement.classList.toggle("is-scrolled", scrollTop > 16);
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        parallax.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const speed = Number(element.dataset.speed || 0.03);
            element.style.setProperty("--parallax-y", `${(window.innerHeight / 2 - rect.top) * speed}px`);
          }
        });
      }
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
    items.forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min(index % 6, 4) * 45}ms`);
      observer.observe(item);
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const animate = (element) => {
      const target = Number(element.dataset.counter);
      const start = performance.now();
      const duration = 900;
      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach((item) => item.textContent = item.dataset.counter);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    counters.forEach((counter) => observer.observe(counter));
  }

  function initPublicationFilters() {
    const search = document.getElementById("publication-search");
    if (!search) return;
    const buttons = [...document.querySelectorAll("[data-publication-filter]")];
    const year = document.getElementById("publication-year");
    const cards = [...document.querySelectorAll(".publication-card")];
    const count = document.getElementById("publication-count");
    const empty = document.getElementById("publication-empty");
    let category = "All";
    function apply() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const match = (category === "All" || card.dataset.category === category)
          && (year.value === "All" || card.dataset.year === year.value)
          && (!query || card.dataset.search.includes(query));
        card.hidden = !match;
        if (match) visible += 1;
      });
      count.textContent = `${visible} publication${visible === 1 ? "" : "s"} shown`;
      empty.hidden = visible !== 0;
    }
    buttons.forEach((button) => button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      category = button.dataset.publicationFilter;
      apply();
    }));
    search.addEventListener("input", apply);
    year.addEventListener("change", apply);
  }

  function initLectureFilters() {
    const search = document.getElementById("lecture-search");
    if (!search) return;
    const topic = document.getElementById("lecture-topic");
    const year = document.getElementById("lecture-year");
    const cards = [...document.querySelectorAll(".lecture-card")];
    const count = document.getElementById("lecture-count");
    const empty = document.getElementById("lecture-empty");
    function apply() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const match = (topic.value === "All" || card.dataset.topic === topic.value)
          && (year.value === "All" || card.dataset.year === year.value)
          && (!query || card.dataset.search.includes(query));
        card.hidden = !match;
        if (match) visible += 1;
      });
      count.textContent = `${visible} session${visible === 1 ? "" : "s"} shown`;
      empty.hidden = visible !== 0;
    }
    search.addEventListener("input", apply);
    topic.addEventListener("change", apply);
    year.addEventListener("change", apply);
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let valid = true;
      [...form.querySelectorAll("input, textarea")].forEach((field) => {
        const error = field.parentElement.querySelector(".field-error");
        field.removeAttribute("aria-invalid");
        error.textContent = "";
        if (!field.value.trim() || (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
          error.textContent = field.type === "email" ? "Enter a valid email address." : "This field is required.";
        }
      });
      if (!valid) {
        form.querySelector("[aria-invalid='true']").focus();
        status.textContent = "Please correct the highlighted fields.";
        return;
      }
      const values = new FormData(form);
      const subject = encodeURIComponent(values.get("subject"));
      const body = encodeURIComponent(`From: ${values.get("name")} <${values.get("email")}>\n\n${values.get("message")}`);
      status.textContent = "Opening your email application…";
      window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;
    });
  }

  initNavigation();
  initTheme();
  initScroll();
  initReveal();
  initCounters();
  initPublicationFilters();
  initLectureFilters();
  initContactForm();
})();
