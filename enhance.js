(() => {
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
