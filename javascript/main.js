// =============================================
//   ZAN TEATOR — BASEBALL CAREER ARCHIVE
//   main.js
// =============================================

// -----------------------------------------------
// 1. STATS DATA — Season totals extracted from
//    the game-by-game spreadsheet
// -----------------------------------------------
const seasonStats = [
  {
    year: "2013",
    team: "Zinter Handling",
    level: "LL Minors",
    ab: 49,
    h: 20,
    d: 2,
    t: 0,
    hr: 0,
    rbi: 10,
    r: 15,
    sb: 5,
    bb: 13,
    avg: 0.408,
    obp: null,
    champ: true,
  },
  {
    year: "2013",
    team: "Saratoga American",
    level: "8U All Stars",
    ab: 39,
    h: 21,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 7,
    r: 20,
    sb: 10,
    bb: 8,
    avg: 0.538,
    obp: null,
    champ: false,
  },
  {
    year: "2014",
    team: "Saratoga American (9U)",
    level: "9U Travel",
    ab: 21,
    h: 13,
    d: 2,
    t: 0,
    hr: 0,
    rbi: 10,
    r: 13,
    sb: 6,
    bb: 4,
    avg: 0.619,
    obp: null,
    champ: false,
  },
  {
    year: "2014",
    team: "AFSCO Fence",
    level: "LL Minors",
    ab: 45,
    h: 26,
    d: 5,
    t: 1,
    hr: 0,
    rbi: 16,
    r: 21,
    sb: null,
    bb: 14,
    avg: 0.578,
    obp: null,
    champ: false,
  },
  {
    year: "2014",
    team: "Saratoga American",
    level: "9U All Stars",
    ab: 36,
    h: 17,
    d: 2,
    t: 1,
    hr: 0,
    rbi: 11,
    r: 17,
    sb: 6,
    bb: 7,
    avg: 0.472,
    obp: null,
    champ: false,
  },
  {
    year: "2015",
    team: "AFSCO Fence",
    level: "LL Minors",
    ab: 41,
    h: 28,
    d: 11,
    t: 4,
    hr: 0,
    rbi: 26,
    r: 32,
    sb: null,
    bb: 10,
    avg: 0.667,
    obp: null,
    champ: true,
  },
  {
    year: "2015",
    team: "Various Teams",
    level: "LL Majors",
    ab: 16,
    h: 7,
    d: 1,
    t: 0,
    hr: 0,
    rbi: 1,
    r: 6,
    sb: 4,
    bb: 3,
    avg: 0.438,
    obp: null,
    champ: false,
  },
  {
    year: "2015",
    team: "Saratoga American",
    level: "10U All Stars",
    ab: 28,
    h: 8,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 2,
    r: 7,
    sb: 1,
    bb: 5,
    avg: 0.286,
    obp: null,
    champ: false,
  },
  {
    year: "2015–16",
    team: "Adirondack Heat",
    level: "11U Travel",
    ab: 31,
    h: 10,
    d: 1,
    t: 0,
    hr: 0,
    rbi: 15,
    r: 10,
    sb: 3,
    bb: 4,
    avg: 0.323,
    obp: null,
    champ: false,
  },
  {
    year: "2016",
    team: "AFSCO Fence",
    level: "LL Majors",
    ab: 40,
    h: 21,
    d: 5,
    t: 0,
    hr: 0,
    rbi: 18,
    r: 28,
    sb: 21,
    bb: 7,
    avg: 0.525,
    obp: null,
    champ: true,
  },
  {
    year: "2016",
    team: "Saratoga–Wilton",
    level: "11U All Stars",
    ab: 20,
    h: 10,
    d: 2,
    t: 0,
    hr: 0,
    rbi: 0,
    r: 10,
    sb: 7,
    bb: 2,
    avg: 0.5,
    obp: null,
    champ: false,
  },
  {
    year: "2016–17",
    team: "Adirondack Heat",
    level: "12U Travel",
    ab: 96,
    h: 35,
    d: 9,
    t: 0,
    hr: 4,
    rbi: 27,
    r: 31,
    sb: 18,
    bb: 16,
    avg: 0.365,
    obp: 0.487,
    champ: true,
  },
  {
    year: "2017",
    team: "Saratoga Bluestreaks",
    level: "Modified (MS)",
    ab: 17,
    h: 3,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 3,
    r: 5,
    sb: 3,
    bb: 5,
    avg: 0.176,
    obp: 0.381,
    champ: false,
  },
  {
    year: "2017",
    team: "Saratoga–Wilton",
    level: "LL Majors",
    ab: 21,
    h: 14,
    d: 4,
    t: 0,
    hr: 3,
    rbi: 12,
    r: 11,
    sb: 11,
    bb: 3,
    avg: 0.667,
    obp: 0.708,
    champ: false,
  },
  {
    year: "2017",
    team: "Saratoga–Wilton",
    level: "12U All Stars",
    ab: 20,
    h: 9,
    d: 2,
    t: 0,
    hr: 0,
    rbi: 4,
    r: 5,
    sb: 5,
    bb: 0,
    avg: 0.45,
    obp: 0.45,
    champ: false,
  },
  {
    year: "2017 (F)",
    team: "Saratoga Lightning",
    level: "14U Travel",
    ab: 16,
    h: 3,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 1,
    r: 4,
    sb: 6,
    bb: 7,
    avg: 0.188,
    obp: 0.458,
    champ: false,
  },
  {
    year: "2018",
    team: "Saratoga Bluestreaks",
    level: "Modified (MS)",
    ab: 35,
    h: 14,
    d: 2,
    t: 1,
    hr: 0,
    rbi: 8,
    r: 9,
    sb: 7,
    bb: 7,
    avg: 0.4,
    obp: 0.5,
    champ: false,
  },
  {
    year: "2018",
    team: "Saratoga Lightning",
    level: "14U Travel",
    ab: 71,
    h: 24,
    d: 3,
    t: 2,
    hr: 0,
    rbi: 13,
    r: 26,
    sb: 9,
    bb: 11,
    avg: 0.338,
    obp: 0.434,
    champ: true,
  },
  {
    year: "2018 (F)",
    team: "Saratoga Lightning",
    level: "15U Travel",
    ab: 23,
    h: 5,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 2,
    r: 0,
    sb: 2,
    bb: 3,
    avg: 0.217,
    obp: 0.308,
    champ: false,
  },
  {
    year: "2019",
    team: "Saratoga Bluestreaks",
    level: "Freshman (HS)",
    ab: 43,
    h: 9,
    d: 6,
    t: 0,
    hr: 0,
    rbi: 4,
    r: 9,
    sb: 7,
    bb: 5,
    avg: 0.209,
    obp: 0.333,
    champ: false,
  },
  {
    year: "2019",
    team: "Saratoga Lightning",
    level: "15U Travel",
    ab: 60,
    h: 13,
    d: 2,
    t: 0,
    hr: 0,
    rbi: 5,
    r: 7,
    sb: 5,
    bb: 9,
    avg: 0.217,
    obp: 0.319,
    champ: false,
  },
  {
    year: "2020",
    team: "Hayner Barnstormers",
    level: "16U Travel",
    ab: 123,
    h: 34,
    d: 5,
    t: 2,
    hr: 0,
    rbi: 14,
    r: 34,
    sb: 5,
    bb: 22,
    avg: 0.276,
    obp: 0.39,
    champ: true,
  },
  {
    year: "2021",
    team: "Saratoga Springs HS",
    level: "Varsity (HS)",
    ab: 68,
    h: 26,
    d: 5,
    t: 2,
    hr: 0,
    rbi: 16,
    r: 10,
    sb: 2,
    bb: 6,
    avg: 0.382,
    obp: 0.432,
    champ: false,
    highlight: true,
  },
  {
    year: "2021",
    team: "Hayner Barnstormers (S)",
    level: "17U Travel (S)",
    ab: 12,
    h: 2,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 3,
    r: 6,
    sb: 1,
    bb: 8,
    avg: 0.167,
    obp: 0.667,
    champ: false,
  },
  {
    year: "2021 (F)",
    team: "Hayner Barnstormers (F)",
    level: "17U Travel (F)",
    ab: 44,
    h: 15,
    d: 2,
    t: 1,
    hr: 0,
    rbi: 5,
    r: 9,
    sb: 3,
    bb: 6,
    avg: 0.341,
    obp: 0.453,
    champ: true,
  },
  {
    year: "2022",
    team: "Saratoga Springs HS",
    level: "Varsity (HS)",
    ab: 70,
    h: 18,
    d: 6,
    t: 2,
    hr: 0,
    rbi: 10,
    r: 17,
    sb: 6,
    bb: 20,
    avg: 0.257,
    obp: 0.43,
    champ: true,
    highlight: true,
  },
  {
    year: "2022",
    team: "Hayner Barnstormers",
    level: "18U Travel",
    ab: 97,
    h: 38,
    d: 15,
    t: 4,
    hr: 0,
    rbi: 19,
    r: 30,
    sb: 9,
    bb: 19,
    avg: 0.392,
    obp: 0.539,
    champ: true,
    highlight: true,
  },
  
  {
    year: "2023",
    team: "Babson College Beavers",
    level: "NCAA DIII (Fr)",
    ab: null,
    h: 5,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 5,
    r: 8,
    sb: 4,
    bb: null,
    avg: null,
    obp: null,
    champ: false,
    note: "5 H · 5 RBI · 8 R",
  },
  {
    year: "2023",
    team: "Glens Falls Dragons",
    level: "PGCBL (Summer)",
    ab: 78,
    h: 22,
    d: 4,
    t: 0,
    hr: 1,
    rbi: 16,
    r: 9,
    sb: 3,
    bb: 15,
    avg: 0.282,
    obp: null,
    champ: false,
  },
  {
    year: "2024",
    team: "Babson College Beavers",
    level: "NCAA DIII (So)",
    ab: 14,
    h: 7,
    d: 0,
    t: 0,
    hr: 0,
    rbi: 2,
    r: 1,
    sb: 1,
    bb: null,
    avg: 0.5,
    obp: null,
    champ: false,
    note: "4-1 · 6 SV · 2.57 ERA · 26 K",
  },
  {
    year: "2024",
    team: "Vermont Lake Monsters",
    level: "FCBL (Summer)",
    ab: 65,
    h: 20,
    d: 5,
    t: 0,
    hr: 0,
    rbi: 12,
    r: 12,
    sb: 0,
    bb: 9,
    avg: 0.308,
    obp: null,
    champ: false,
    note: "1.80 ERA · 25 K · 2 SV · All-Star",
  },
  {
    year: "2025",
    team: "Babson College Beavers",
    level: "NCAA DIII (Jr)",
    ab: null,
    h: null,
    d: 11,
    t: 1,
    hr: 4,
    rbi: 34,
    r: 29,
    sb: null,
    bb: null,
    avg: 0.386,
    obp: 0.472,
    champ: false,
    highlight: true,
    note: "All-NEWMAC 1st · 2.16 ERA · 6 SV",
  },
  {
    year: "2025",
    team: "Vermont Lake Monsters",
    level: "FCBL (Summer)",
    ab: 43,
    h: 7,
    d: 3,
    t: 0,
    hr: 1,
    rbi: 7,
    r: 8,
    sb: 0,
    bb: 3,
    avg: 0.163,
    obp: null,
    champ: false,
    note: "4-1 · 2.04 ERA · 31 K · 2 SV",
  },
  {
    year: "2026",
    team: "Babson College Beavers",
    level: "NCAA DIII (Sr)",
    ab: null,
    h: null,
    d: null,
    t: null,
    hr: null,
    rbi: null,
    r: null,
    sb: null,
    bb: null,
    avg: null,
    obp: null,
    champ: false,
    highlight: true,
    note: "Season in progress",
  },
];

// -----------------------------------------------
// 2. RENDER STATS TABLE
// -----------------------------------------------
function fmt(val, decimals = 0) {
  if (val === null || val === undefined) return "—";
  if (decimals === 3) {
    // AVG/OBP display: .382 format
    return (
      "." +
      Math.round(val * 1000)
        .toString()
        .padStart(3, "0")
    );
  }
  return val;
}

function renderStatsTable() {
  const tbody = document.getElementById("statsBody");
  if (!tbody) return;

  seasonStats.forEach((s) => {
    const tr = document.createElement("tr");
    if (s.champ) tr.classList.add("row-champ");
    if (s.highlight) tr.classList.add("row-highlight");

    const avg = s.note
      ? `<span style="color:var(--gray);font-style:italic;">${s.note}</span>`
      : `<span class="col-avg">${fmt(s.avg, 3)}</span>`;
    const obp =
      s.obp != null ? `<span class="col-avg">${fmt(s.obp, 3)}</span>` : "—";

    tr.innerHTML = `
      <td class="col-year">${s.year}</td>
      <td class="col-team">${s.team}</td>
      <td>${s.level}</td>
      <td>${fmt(s.ab)}</td>
      <td>${fmt(s.h)}</td>
      <td>${fmt(s.d)}</td>
      <td>${fmt(s.t)}</td>
      <td>${fmt(s.hr)}</td>
      <td>${fmt(s.rbi)}</td>
      <td>${fmt(s.r)}</td>
      <td>${fmt(s.sb)}</td>
      <td>${fmt(s.bb)}</td>
      <td>${avg}</td>
      <td>${obp}</td>
    `;
    tbody.appendChild(tr);
  });
}

// -----------------------------------------------
// 3. COUNTER ANIMATION (stats bar)
// -----------------------------------------------
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out quad
    const eased = 1 - (1 - progress) * (1 - progress);
    const val = Math.round(eased * target);
    el.textContent = val;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// -----------------------------------------------
// 4. INTERSECTION OBSERVER — scroll animations
// -----------------------------------------------
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Trigger counters when stats bar enters
          if (entry.target.classList.contains("stats-bar")) {
            entry.target.querySelectorAll(".stat-num").forEach(animateCounter);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // Observe timeline entries
  document.querySelectorAll(".tl-entry").forEach((el) => observer.observe(el));

  // Observe stats bar
  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) observer.observe(statsBar);

  // Observe milestone cards
  const milestoneObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");
          milestoneObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".milestone-card, .gallery-placeholder")
    .forEach((el) => {
      el.classList.add("fade-in");
      milestoneObserver.observe(el);
    });

  // Observe section headers
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");
          headerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".section-header").forEach((el) => {
    el.classList.add("fade-in");
    headerObserver.observe(el);
  });
}

// -----------------------------------------------
// 5. NAV HIGHLIGHT ON SCROLL
// -----------------------------------------------
function setupNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((l) => {
            l.style.color =
              l.getAttribute("href") === `#${id}` ? "var(--gold)" : "";
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}

// -----------------------------------------------
// 6. SMOOTH HERO PARALLAX (subtle)
// -----------------------------------------------
function setupParallax() {
  const bgNum = document.querySelector(".hero-bg-number");
  if (!bgNum) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      if (scrollY < maxScroll) {
        bgNum.style.transform = `translateY(calc(-55% + ${scrollY * 0.18}px))`;
        bgNum.style.opacity = 1 - (scrollY / maxScroll) * 1.2;
      }
    },
    { passive: true },
  );
}

// -----------------------------------------------
// 7. INIT
// -----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderStatsTable();
  setupScrollAnimations();
  setupNavHighlight();
  setupParallax();
});
