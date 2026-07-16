(() => {
  const heroNoise = document.querySelector(".hero-noise");
  if (heroNoise) {
    heroNoise.insertAdjacentHTML("afterend", `
      <figure class="hero-sketch-card" aria-hidden="true">
        <img src="./portfolio/itch-mine.webp" alt="" />
        <figcaption><span>ROOM_01 / MINE</span><span>AN IMAGINED WORLD →</span></figcaption>
      </figure>
      <div class="hero-scribbles" aria-hidden="true">
        <span class="scribble-one">ideas hide here ↓</span>
        <span class="scribble-two">draw · build · play</span>
        <i>✷</i>
      </div>
    `);
  }

  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.setAttribute("aria-label", "Game designer with a visual mind");
    const outline = heroTitle.querySelector(".title-outline");
    if (outline) outline.textContent = "DESIGNER";
  }

  const contactTitle = document.querySelector(".contact-inner h2");
  if (contactTitle) {
    contactTitle.insertAdjacentHTML("beforebegin", '<p class="contact-handnote" aria-hidden="true">把想法画成<br />可以进入的世界 ↘</p>');
  }

  const nav = document.querySelector(".nav-links");
  if (nav) {
    nav.innerHTML = `
      <a href="#about"><span class="nav-index">01</span><span class="nav-label">ABOUT</span></a>
      <a href="#experience"><span class="nav-index">02</span><span class="nav-label">WORK</span></a>
      <a href="#education"><span class="nav-index">03</span><span class="nav-label">EDUCATION</span></a>
      <a href="#projects"><span class="nav-index">04</span><span class="nav-label">PROJECTS</span></a>
      <a href="#strengths"><span class="nav-index">05</span><span class="nav-label">EXPERTISE</span></a>
    `;
  }

  const aboutSection = document.querySelector(".about");
  const oldTimeline = aboutSection?.querySelector(".timeline");
  if (oldTimeline) oldTimeline.remove();

  if (aboutSection) {
    aboutSection.insertAdjacentHTML("afterend", `
      <section class="experience-section work-section section-block" id="experience">
        <div class="page-width">
          <div class="section-head experience-title">
            <p><span>02</span> WORK EXPERIENCE / 工作经历</p>
            <h2>从调研与策略开始，<br />把设计推进到真实场景。</h2>
          </div>
          <article class="work-card experience-card">
            <header class="experience-card-head">
              <div>
                <span class="experience-eyebrow">PROFESSIONAL ROLE / 工作职位</span>
                <h3>北京唐顿美景科技有限公司</h3>
                <p>TANGDUN LANDSCAPE TECHNOLOGY</p>
              </div>
              <div class="experience-period">
                <strong>2025.06 — 2026.06</strong>
                <span>1年</span>
              </div>
            </header>
            <div class="work-overview">
              <div class="work-role-note">
                <span>ROLE / 职位</span>
                <strong>设计师</strong>
                <p>空间美陈 · 视觉系统 · 项目策略 · 落地统筹</p>
                <small>北京 · CHINA</small>
              </div>
              <div class="work-responsibilities">
                <div class="detail-label">RESPONSIBILITIES / 具体工作内容</div>
                <ol>
                  <li><span>01</span><p>开展场地勘察、需求分析和前期资料收集，为项目从 0 到 1 建立策略与设计方向。</p></li>
                  <li><span>02</span><p>独立完成创意构思、概念提案、视觉呈现和多轮方案深化，确保设计与项目定位一致。</p></li>
                  <li><span>03</span><p>负责导视系统、宣传物料、室内外绿植配置与场景美陈方案的设计和呈现。</p></li>
                  <li><span>04</span><p>协调内部团队、外包团队与供应商推进项目落地，控制执行品质与沟通节奏。</p></li>
                  <li><span>05</span><p>完成供应商寻源、报价比对与现场考察，根据施工条件和实际反馈及时优化方案。</p></li>
                </ol>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="experience-section education-section section-block" id="education">
        <div class="page-width">
          <div class="section-head experience-title">
            <p><span>03</span> EDUCATION / 学习经历</p>
            <h2>从数字媒体艺术，<br />走向游戏与沉浸式体验。</h2>
          </div>
          <div class="education-grid">
            <article class="education-card experience-card">
              <header>
                <span class="education-index">01</span>
                <div class="education-period"><strong>2023.10 — 2024.09</strong><span>1年</span></div>
              </header>
              <div class="education-school">
                <span>伦敦 · 英国</span>
                <h3>伦敦大学金史密斯学院</h3>
                <p>Goldsmiths, University of London</p>
                <strong>游戏设计与艺术 · 硕士</strong>
              </div>
              <div class="education-research">
                <div class="detail-label">RESEARCH DIRECTION / 研究方向</div>
                <p>以游戏设计与艺术为核心，研究实时引擎中的视觉开发、交互机制、3D 内容与沉浸式体验。</p>
                <ul><li>游戏设计与分析</li><li>视觉游戏开发</li><li>3D 建模与动画</li><li>增强现实</li><li>UE4 音频体验</li><li>UE5 游戏开发</li></ul>
              </div>
            </article>
            <article class="education-card experience-card">
              <header>
                <span class="education-index">02</span>
                <div class="education-period"><strong>2019.09 — 2023.06</strong><span>3年10个月</span></div>
              </header>
              <div class="education-school">
                <span>北京 · 中国</span>
                <h3>北京林业大学</h3>
                <p>Beijing Forest University</p>
                <strong>数字媒体艺术 · 学士</strong>
              </div>
              <div class="education-research">
                <div class="detail-label">RESEARCH DIRECTION / 研究方向</div>
                <p>围绕数字媒体艺术建立视觉与交互基础，覆盖用户体验、游戏设计、动态图形和前端技术。</p>
                <ul><li>用户体验设计</li><li>交互设计</li><li>游戏设计与美术</li><li>前端技术开发</li><li>动态图形设计</li><li>互动绘本与游戏引擎</li></ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    `);
  }

  const projectSectionNumber = document.querySelector(".projects .section-head > p span");
  if (projectSectionNumber) projectSectionNumber.textContent = "04";
  const strengthsSectionNumber = document.querySelector(".strengths .section-head > p span");
  if (strengthsSectionNumber) strengthsSectionNumber.textContent = "05";

  const featuredProjects = [
    {
      index: "01",
      title: "MINE / 我的",
      year: "HTML5 / UNITY",
      role: "GAME DESIGN · 2D ART · UNITY",
      summary: "独立完成的 2D 密室逃脱解谜游戏。玩家通过鼠标交互完成谜题并离开房间，已在 itch.io 发布并支持浏览器直接体验。",
      image: "./portfolio/itch-mine.webp",
      alt: "Mine 游戏中充满手绘家具、植物和奇异生物的蓝色房间",
      link: "https://fbyyw.itch.io/mine"
    },
    {
      index: "02",
      title: "OH! / PLATFORM BUILDER",
      year: "HTML5 / WINDOWS",
      role: "2D ART · VISUAL SCRIPTING · UNITY",
      summary: "完全使用可视化脚本制作的 2D 平台游戏。玩家需要搭建平台，帮助主角穿过自然场景并抵达终点。",
      image: "./portfolio/itch-oh.webp",
      alt: "OH! 游戏中的像素风木屋、树木与山坡场景",
      link: "https://fbyyw.itch.io/oh"
    },
    {
      index: "03",
      title: "FISHING / 3D STUDY",
      year: "UNITY / 3D",
      role: "3D MODELING · TEXTURING · INTERACTION",
      summary: "在 Maya 中完成人物与场景建模及材质制作，将资产导入 Unity，并设计站立、坐下与钓鱼交互。",
      image: "./portfolio/itch-fishing.webp",
      alt: "Fishing 项目的紫发角色三维模型与材质绘制界面",
      link: "https://fbyyw.itch.io/fishing"
    }
  ];

  const archiveProjects = [
    {
      index: "04",
      title: "AI BATTLE DEMO 2.0",
      meta: "UE5 · ACTION RPG",
      summary: "动作探索原型：包含敌人战斗、装备掉落、道具收集、积分，以及障碍、平台与门等关卡机制。",
      image: "./portfolio/itch-ai-battle-2.webp",
      alt: "AI Battle Demo 2.0 的第三人称战斗与平台关卡画面",
      link: "https://fbyyw.itch.io/ai-battle-demo2"
    },
    {
      index: "05",
      title: "AI BATTLE DEMO",
      meta: "UE4 · ACTION PROTOTYPE",
      summary: "围绕攻击系统与敌人感知展开的动作原型，完成连击、受击反馈和敌人死亡动画等核心体验。",
      image: "./portfolio/itch-ai-battle-1.webp",
      alt: "AI Battle Demo 中角色与敌人的战斗范围测试画面",
      link: "https://fbyyw.itch.io/ai-battle-demo"
    },
    {
      index: "06",
      title: "GIE-GIE-GIE",
      meta: "GLOBAL GAME JAM · PUZZLE",
      summary: "Global Game Jam 团队解谜项目，包含两类小谜题与三个限时关卡；在团队中负责视觉与美术方向。",
      image: "./portfolio/itch-gie-gie-gie.webp",
      alt: "Gie-Gie-Gie 的粉色手绘人物与游戏标题封面",
      link: "https://wmeng.itch.io/gie-gie-gie"
    },
    {
      index: "07",
      title: "RIFTCROSSER",
      meta: "GGJ 2022 · 2D PLATFORMER",
      summary: "围绕双手控制与场景切换设计的 2D 平台游戏，于 Global Game Jam 2022 完成。",
      image: "./portfolio/itch-riftcrosser.webp",
      alt: "Riftcrosser 的黑白双世界角色封面",
      link: "https://fbyyw.itch.io/riftcrosser"
    },
    {
      index: "08",
      title: "DARKENING / 变暗",
      meta: "3D ART · AR · UI",
      summary: "面向 AR 场景的五人协作项目；参与玩法策划，并完成 3D 模型、动画、材质及 UI 动效。",
      image: "./portfolio/darkening.webp",
      alt: "Darkening 项目的暗色建筑与悬浮矿石概念视觉",
      link: null
    }
  ];

  const grid = document.querySelector(".projects-grid");
  if (grid) {
    grid.innerHTML = featuredProjects.map((project) => `
      <a class="project-card" href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.title} — 在 itch.io 查看项目">
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.alt}" loading="lazy" />
          <div class="project-hover"><span>VIEW ON ITCH.IO</span><i>↗</i></div>
          <span class="project-index">${project.index}</span>
        </div>
        <div class="project-meta">
          <div><h3>${project.title}</h3><p>${project.role}</p></div>
          <p class="project-summary">${project.summary}</p>
          <span class="project-year">${project.year}</span>
        </div>
      </a>
    `).join("");
  }

  const sectionNote = document.querySelector(".section-note");
  if (sectionNote) sectionNote.textContent = "FEATURED 03 / ALL 08";

  const oldNote = document.querySelector(".visual-note");
  if (oldNote) {
    const sourceRow = document.createElement("div");
    sourceRow.className = "project-source-row";
    sourceRow.innerHTML = `
      <p class="visual-note">* 项目资料与图片来自本人 itch.io 公开项目页，点击卡片可查看、试玩或下载。</p>
      <a href="https://fbyyw.itch.io/" target="_blank" rel="noreferrer">VIEW ITCH.IO PROFILE <span>↗</span></a>
    `;
    oldNote.replaceWith(sourceRow);

    const archive = document.createElement("div");
    archive.className = "project-archive";
    archive.innerHTML = `
      <div class="archive-head">
        <p><span>05</span> MORE PROJECTS / 完整列表</p>
        <span>ALL WORK 08 / 08</span>
      </div>
      <div class="archive-grid">
        ${archiveProjects.map((project) => {
          const content = `
            <div class="archive-image">
              <img src="${project.image}" alt="${project.alt}" loading="lazy" />
              <span>${project.index}</span>
            </div>
            <div class="archive-copy">
              <p>${project.meta}</p>
              <h3>${project.title}</h3>
              <span>${project.summary}</span>
              ${project.link ? '<i aria-hidden="true">↗</i>' : ''}
            </div>
          `;

          return project.link
            ? `<a class="archive-card" href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.title} — 在 itch.io 查看项目">${content}</a>`
            : `<article class="archive-card">${content}</article>`;
        }).join("")}
      </div>
    `;
    sourceRow.insertAdjacentElement("afterend", archive);
  }

  const statLabels = Array.from(document.querySelectorAll(".stat span"));
  const projectStat = statLabels.find((node) => node.textContent?.includes("完整项目经验"));
  if (projectStat) {
    projectStat.textContent = "公开游戏项目";
    const value = projectStat.previousElementSibling;
    if (value) value.textContent = "07";
  }
})();
