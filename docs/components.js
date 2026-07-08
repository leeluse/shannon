/* ============================================================
   components.js — 컴포넌트 레지스트리
   ★ 컴포넌트 추가/수정/삭제는 전부 이 파일에서만 한다 ★

   하네스 규칙:
   1. 컴포넌트 1개 = Archive.add({...}) 블록 1개
   2. 필수 필드: id, name, category, status, css, html
   3. spec은 colors / size / spacing 3그룹만. (생략하면
      렌더 결과에서 자동 추출되지만, 의도값은 직접 적는 게 정확)
   4. css 클래스명은 id를 프리픽스로 (충돌 방지)
   ============================================================ */

Archive.add({
    id: "btn-primary",
    name: "Primary Button",
    category: "Button",
    status: "draft", // draft | ready
    css: `
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      height: 36px; padding: 0 16px;
      background: #2563EB; color: #FFFFFF;
      font-size: 14px; font-weight: 500;
      border: none; border-radius: 6px; cursor: pointer;
    }
    .btn-primary:hover { background: #1D4ED8; }
  `,
    html: `<button class="btn-primary">버튼</button>`,
    spec: {
        colors: { background: "#2563EB", text: "#FFFFFF", hover: "#1D4ED8" },
        size: { height: "36px", radius: "6px", font: "14px / 500" },
        spacing: { padding: "0 16px", margin: "0" }
    },
    note: "주 액션용. 화면당 1개 원칙."
});

/* ── Shannon 신규 컴포넌트 ── */

Archive.add({
    id: "btn-shannon-primary",
    name: "Shannon Primary Button",
    category: "Button",
    status: "draft",
    css: `
    .btn-shannon-primary {
      width: 100%;
      height: 36px;
      border: none;
      border-radius: 14px;
      background: rgba(233, 213, 255, 0.8);
      color: #490080;
      font-size: 11px;
      font-weight: 900;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition: opacity 0.15s;
    }
    .btn-shannon-primary:hover {
      opacity: 0.9;
    }
  `,
    html: `<div style="width: 164px; margin: 0 auto;"><button class="btn-shannon-primary">Create Project</button></div>`,
    spec: {
        colors: { background: "rgba(233, 213, 255, 0.8)", text: "#490080" },
        size: { height: "36px", radius: "14px", font: "11px / 900" },
        spacing: { padding: "0", margin: "0" }
    },
    note: "사이드바 하단 등 주요 신규 생성 액션에 사용."
});

Archive.add({
    id: "status-badge",
    name: "Status Badge",
    category: "Badge",
    status: "draft",
    css: `
    .status-badge {
      font-size: 8px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 20px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      border: 1px solid transparent;
      line-height: 1;
    }
    .status-badge::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .status-badge.done {
      background: rgba(134, 239, 172, 0.1);
      color: #86EFAC;
      border-color: rgba(134, 239, 172, 0.22);
    }
    .status-badge.done::before {
      background: #86EFAC;
    }
    .status-badge.wip {
      background: rgba(221, 183, 255, 0.1);
      color: #DDB7FF;
      border-color: rgba(221, 183, 255, 0.22);
    }
    .status-badge.wip::before {
      background: #DDB7FF;
    }
    .status-badge.pend {
      background: rgba(255, 255, 255, 0.04);
      color: #475569;
      border-color: rgba(255, 255, 255, 0.08);
    }
    .status-badge.pend::before {
      background: #475569;
    }
  `,
    html: `
    <div style="display: flex; gap: 8px; align-items: center;">
      <span class="status-badge done">완료</span>
      <span class="status-badge wip">보는 중</span>
      <span class="status-badge pend">대기</span>
    </div>
  `,
    spec: {
        colors: { success: "#86EFAC", lavender: "#DDB7FF", muted: "#475569" },
        size: { radius: "20px", font: "8px / 700" },
        spacing: { padding: "2px 7px" }
    },
    note: "프로젝트 진행도 및 워크플로우 단계 상태 표시용."
});

Archive.add({
    id: "stat-card",
    name: "Stat Card",
    category: "Card",
    status: "draft",
    css: `
    .stat-card {
      background: rgba(20, 22, 36, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 10px;
      padding: 13px 15px;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .stat-card.hi {
      border-color: rgba(221, 183, 255, 0.42);
      background: rgba(20, 22, 36, 0.3);
    }
    .stat-card-label {
      font-size: 9px;
      color: #94A3B8;
      margin-bottom: 6px;
    }
    .stat-card-val {
      font-size: 24px;
      font-weight: 800;
      color: #F1F5F9;
      line-height: 1;
    }
    .stat-card-val.lav {
      color: #DDB7FF;
    }
    .stat-card-sub {
      font-size: 9px;
      color: #94A3B8;
      margin-top: 4px;
    }
    .stat-card-sub .up {
      color: #86EFAC;
    }
  `,
    html: `
    <div style="width: 180px; margin: 0 auto;">
      <div class="stat-card hi">
        <div class="stat-card-label">전체 프로젝트</div>
        <div class="stat-card-val lav">5</div>
        <div class="stat-card-sub"><span class="up">+1</span> 이번 주</div>
      </div>
    </div>
  `,
    spec: {
        colors: { border: "rgba(255,255,255,0.16)", background: "rgba(20,22,36,0.3)", highlight: "#DDB7FF" },
        size: { radius: "10px", font: "24px / 800" },
        spacing: { padding: "13px 15px" }
    },
    note: "대시보드 상단 요약 정보 카드."
});

Archive.add({
    id: "project-row",
    name: "Project Row",
    category: "Row",
    status: "draft",
    css: `
    .project-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 13px;
      border-radius: 8px;
      margin-bottom: 5px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.02);
      transition: border-color 0.15s, background 0.15s;
      cursor: pointer;
      color: #F1F5F9;
      text-decoration: none;
      text-align: left;
    }
    .project-row:hover {
      border-color: rgba(221, 183, 255, 0.2);
      background: rgba(221, 183, 255, 0.03);
    }
    .project-row-icon {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      flex-shrink: 0;
      background: rgba(221, 183, 255, 0.1);
      border: 1px solid rgba(221, 183, 255, 0.18);
    }
    .project-row-meta {
      flex: 1;
      min-width: 0;
    }
    .project-row-name {
      font-size: 11px;
      font-weight: 600;
      color: #E2E8F0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .project-row-type {
      font-size: 9px;
      color: #94A3B8;
      margin-top: 1px;
    }
    .project-row-arrow {
      font-size: 12px;
      color: #334155;
      margin-left: 2px;
    }
  `,
    html: `
    <div style="width: 320px; margin: 0 auto;">
      <div class="project-row">
        <div class="project-row-icon"></div>
        <div class="project-row-meta">
          <div class="project-row-name">포트폴리오 사이트 만들기</div>
          <div class="project-row-type">사이드 프로젝트 · 4단계</div>
        </div>
        <div class="status-badge done">완료</div>
        <div class="project-row-arrow">›</div>
      </div>
    </div>
  `,
    spec: {
        colors: { border: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", hoverBorder: "rgba(221,183,255,0.2)" },
        size: { radius: "8px", font: "11px / 600" },
        spacing: { padding: "9px 13px" }
    },
    note: "대시보드 하단 프로젝트 최근 이력 리스트 아이템."
});

Archive.add({
    id: "workflow-step-card",
    name: "Workflow Step Card",
    category: "Card",
    status: "draft",
    css: `
    .workflow-step-card-container {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      text-align: left;
      width: 100%;
    }
    .workflow-step-card-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 18px;
      flex-shrink: 0;
      padding-top: 1px;
    }
    .workflow-step-card-num {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      font-weight: 700;
      color: #94A3B8;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }
    .workflow-step-card-num.done {
      background: rgba(134,239,172,0.12);
      border-color: rgba(134,239,172,0.32);
      color: #86EFAC;
    }
    .workflow-step-card-num.active {
      background: rgba(221,183,255,0.15);
      border-color: #DDB7FF;
      color: #DDB7FF;
      box-shadow: 0 0 0 3px rgba(221,183,255,0.08);
    }
    .workflow-step-card-vline {
      width: 1px;
      height: 24px;
      background: rgba(255,255,255,0.07);
      margin: 3px 0;
    }
    .workflow-step-card-vline.active {
      background: rgba(221,183,255,0.18);
    }
    .workflow-step-card {
      flex: 1;
      padding: 8px 10px;
      border-radius: 7px;
      border: 1px solid rgba(255,255,255,0.16);
      background: rgba(20,22,36,0.3);
      margin-bottom: 4px;
      cursor: pointer;
    }
    .workflow-step-card.active {
      border-color: rgba(221,183,255,0.5);
      background: rgba(20,22,36,0.3);
    }
    .workflow-step-card-title {
      font-size: 10.5px;
      font-weight: 700;
      color: #E2E8F0;
      margin-bottom: 2px;
    }
    .workflow-step-card-title.active {
      color: #DDB7FF;
    }
    .workflow-step-card-sub {
      font-size: 9px;
      color: #94A3B8;
    }
  `,
    html: `
    <div style="width: 248px; margin: 0 auto;">
      <div class="workflow-step-card-container">
        <div class="workflow-step-card-col">
          <div class="workflow-step-card-num active">2</div>
          <div class="workflow-step-card-vline active"></div>
        </div>
        <div class="workflow-step-card active">
          <div class="workflow-step-card-title active">기술 스택 선정</div>
          <div class="workflow-step-card-sub">프레임워크, 배포 환경</div>
          <div class="status-badge wip" style="margin-top:5px">보는 중</div>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { activeBorder: "rgba(221,183,255,0.5)", background: "rgba(20,22,36,0.3)", line: "rgba(255,255,255,0.07)" },
        size: { radius: "7px", font: "10.5px / 700" },
        spacing: { padding: "8px 10px", gap: "9px" }
    },
    note: "워크스페이스 내 단계별 정보 구조 시각화용."
});

Archive.add({
    id: "section-card",
    name: "Section Card",
    category: "Card",
    status: "draft",
    css: `
    .section-card {
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 11px 13px;
      background: rgba(255,255,255,0.02);
      text-align: left;
    }
    .section-card.hi {
      border-color: rgba(221,183,255,0.22);
      background: rgba(221,183,255,0.04);
    }
    .section-card-lbl {
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #94A3B8;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .section-card-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(221,183,255,0.5);
      flex-shrink: 0;
    }
    .section-card-dot.green {
      background: rgba(134,239,172,0.6);
    }
    .section-card-body {
      font-size: 10px;
      color: #94A3B8;
      line-height: 1.65;
    }
    .section-card-body strong {
      color: #E2E8F0;
    }
    .section-card-tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 7px;
    }
    .section-card-tag {
      font-size: 9px;
      padding: 1px 7px;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255,0.07);
      color: #94A3B8;
    }
    .section-card-tag.lav {
      color: #DDB7FF;
      border-color: rgba(221,183,255,0.22);
      background: rgba(221,183,255,0.06);
    }
  `,
    html: `
    <div style="width: 320px; margin: 0 auto;">
      <div class="section-card hi">
        <div class="section-card-lbl">
          <div class="section-card-dot"></div>
          프론트엔드 프레임워크
        </div>
        <div class="section-card-body">
          <strong>Next.js 15 (App Router)</strong>를 추천합니다. SSG 정적 배포로 SEO에 유리합니다.
        </div>
        <div class="section-card-tag-row">
          <div class="section-card-tag lav">Next.js 15</div>
          <div class="section-card-tag lav">TypeScript</div>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { border: "rgba(255,255,255,0.08)", text: "#94A3B8", highlightDot: "rgba(221,183,255,0.5)" },
        size: { radius: "9px", font: "10px / 400" },
        spacing: { padding: "11px 13px" }
    },
    note: "워크스페이스 디테일 뷰 영역의 단일 가이드라인 블록."
});


Archive.add({
    type: "component",
    id: "cmp-workspace-sidebar",
    name: "Workspace Sidebar",
    category: "Layout",
    status: "draft",
    css: `
    .workspace-sidebar {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-purple: #490080;
      --glass-border: rgba(255, 255, 255, 0.08);
      width: 256px;
      padding: 24px;
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 16px;
      min-width: 0;
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      background: var(--c-glass);
      color: var(--c-white);
      font-family: var(--font-sans);
      box-sizing: border-box;
      overflow: hidden;
    }
    .workspace-sidebar--compact {
      width: 256px;
    }
    .workspace-sidebar-header { display: flex; align-items: center; gap: 16px; min-width: 0; flex-shrink: 0; }
    .workspace-sidebar-logo { width: 48px; height: 48px; border-radius: 12px; background: url("../client/public/logo.png") center/cover no-repeat, var(--c-logo); box-shadow: 0 10px 24px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.12); flex-shrink: 0; overflow: hidden; }
    .workspace-sidebar-brand { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .workspace-sidebar-brand-name { font-size: 20px; font-weight: 800; color: var(--c-lav); line-height: 1.1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .workspace-sidebar-brand-version { font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.6); line-height: 1.1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .workspace-sidebar-content { display: flex; flex-direction: column; gap: 20px; min-width: 0; overflow-y: auto; scrollbar-width: none; }
    .workspace-sidebar-content::-webkit-scrollbar { display: none; }
    .workspace-sidebar-group { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .workspace-sidebar-group-title { font-size: 11px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin: 0; }
    .workspace-sidebar-item { display: flex; align-items: center; gap: 12px; min-width: 0; padding: 10px 12px; border: 1px solid transparent; border-radius: 8px; background: transparent; color: rgba(255,255,255,0.72); text-align: left; }
    .workspace-sidebar-item.active { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.1); box-shadow: inset 0 0 0 1px rgba(241,245,249,0.1); color: var(--c-white); }
    .workspace-sidebar-item-icon { width: 20px; height: 20px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.08); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02); flex-shrink: 0; }
    .workspace-sidebar-item.active .workspace-sidebar-item-icon { border-color: rgba(233,213,255,0.42); background: rgba(233,213,255,0.18); }
    .workspace-sidebar-item-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; font-weight: 400; }
    .workspace-sidebar-footer { border-top: 1px solid var(--glass-border); padding-top: 16px; align-self: end; }
    .workspace-sidebar-action { width: 100%; height: 48px; border: 0; border-radius: 16px; background: var(--c-pink); color: var(--c-purple); font-size: 14px; font-weight: 900; }
  `,
    html: `
    <aside class="workspace-sidebar">
      <header class="workspace-sidebar-header"><div class="workspace-sidebar-logo"></div><div class="workspace-sidebar-brand"><div class="workspace-sidebar-brand-name">Shannon</div><div class="workspace-sidebar-brand-version">v0.0.1</div></div></header>
      <div class="workspace-sidebar-content"><section class="workspace-sidebar-group"><h3 class="workspace-sidebar-group-title">Current Projects</h3><button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Dashboard Home</span></button></section></div>
      <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
    </aside>
  `,
    spec: {
        colors: { panel: "var(--c-glass)", text: "var(--c-white)", accent: "var(--c-lav)", action: "var(--c-pink)" },
        size: { width: "256px", compactWidth: "192px", logo: "48px", actionHeight: "48px" },
        spacing: { padding: "24px", gap: "16px", itemPadding: "10px 12px" }
    },
    note: "Shared workspace sidebar shell used by all routed workspace screens."
});

/* ── Shannon Workspaces ── */

Archive.add({
    type: "workspace",
    id: "ws-dashboard",
    name: "Dashboard Home",
    route: "/dashboard",
    status: "draft",
    uses: ["cmp-workspace-sidebar", "btn-shannon-primary", "status-badge", "stat-card", "project-row"],
    css: `
    .ws-dashboard-root {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-modal-sub: #E5E7EB;
      --c-purple: #490080;
      --bg-main: url("../../client/public/main-bg.png");
      --glass-border: rgba(255, 255, 255, 0.16);
      --glass-blur: blur(16px);
      display: flex;
      width: 100%;
      height: 900px;
      padding: 20px;
      gap: 16px;
      box-sizing: border-box;
      background: var(--bg-main) no-repeat center center;
      background-size: cover;
      color: var(--c-white);
      font-family: var(--font-sans);
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    .ws-dashboard-main { flex: 1; min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 16px; overflow: hidden; }
    .ws-dashboard-board, .ws-dashboard-rail { border: 1px solid var(--glass-border); border-radius: 12px; background: var(--c-glass); backdrop-filter: var(--glass-blur); min-height: 0; }
    .ws-dashboard-board { padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 18px; }
    .ws-dashboard-rail { padding: 18px; display: flex; flex-direction: column; gap: 14px; overflow-y: auto; }
    .ws-dashboard-hero { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; padding: 18px; border: 1px solid rgba(221,183,255,0.34); border-radius: 12px; background: rgba(20,22,36,0.3); }
    .ws-dashboard-greeting { font-size: 24px; font-weight: 900; color: var(--c-white); text-align: left; line-height: 1.15; }
    .ws-dashboard-greeting-sub { font-size: 12px; color: var(--c-modal-sub); margin-top: 7px; line-height: 1.55; text-align: left; max-width: 520px; }
    .ws-dashboard-hero-action { min-width: 138px; height: 36px; border: 1px solid rgba(221,183,255,0.42); border-radius: 9px; background: rgba(233,213,255,0.18); color: var(--c-lav); font-size: 11px; font-weight: 900; }
    .ws-dashboard-stat-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
    .ws-dashboard-section { border: 1px solid var(--glass-border); border-radius: 12px; background: rgba(20,22,36,0.3); padding: 14px; }
    .ws-dashboard-sh { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .ws-dashboard-sh-title { font-size: 11px; font-weight: 900; color: var(--c-modal-sub); letter-spacing: .02em; }
    .ws-dashboard-sh-link { font-size: 10px; color: var(--c-lav); cursor: pointer; font-weight: 800; }
    .ws-dashboard-quick-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .ws-dashboard-quick-card { border: 1px dashed rgba(221,183,255,0.34); border-radius: 10px; padding: 13px; font-size: 11px; color: var(--c-modal-sub); display: flex; align-items: center; gap: 9px; cursor: pointer; text-align: left; background: rgba(20,22,36,0.3); }
    .ws-dashboard-quick-dot { width: 24px; height: 24px; border-radius: 7px; background: rgba(221,183,255,0.16); border: 1px solid rgba(221,183,255,0.34); flex-shrink: 0; }
    .ws-dashboard-rail-card { border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; padding: 13px; background: rgba(20,22,36,0.3); }
    .ws-dashboard-rail-label { font-size: 9px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; color: var(--c-lav); margin-bottom: 8px; }
    .ws-dashboard-rail-title { font-size: 12px; font-weight: 900; color: var(--c-white); margin-bottom: 5px; }
    .ws-dashboard-rail-copy { font-size: 10px; color: var(--c-gray); line-height: 1.5; }
    .ws-dashboard-mini-list { display: grid; gap: 8px; }
    .ws-dashboard-mini-item { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 10px; border-radius: 9px; border: 1px solid rgba(255,255,255,0.14); background: rgba(20,22,36,0.3); font-size: 10px; color: var(--c-modal-sub); }
    .ws-dashboard-rsp { --c-glass: rgba(20, 22, 36, 0.3); --c-white: #F1F5F9; --c-gray: #94A3B8; --c-lav: #DDB7FF; --c-pink: rgba(233, 213, 255, 0.8); --c-purple: #490080; --bg-main: url("../../client/public/main-bg.png"); --glass-border: rgba(255,255,255,0.16); width: 100%; height: 100%; box-sizing: border-box; background: var(--bg-main) no-repeat center center; background-size: cover; color: var(--c-white); font-family: var(--font-sans); overflow: hidden; }
    .ws-dashboard-rsp-shell { height: 100%; display: grid; gap: 14px; box-sizing: border-box; padding: 16px; }
    .ws-dashboard-rsp-nav, .ws-dashboard-rsp-board, .ws-dashboard-rsp-card { border: 1px solid var(--glass-border); border-radius: 12px; background: var(--c-glass); backdrop-filter: blur(16px); }
    .ws-dashboard-rsp-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; min-width: 0; }
    .ws-dashboard-rsp-brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
    .ws-dashboard-rsp-logo { width: 34px; height: 34px; border-radius: 10px; background: var(--c-logo); flex-shrink: 0; }
    .ws-dashboard-rsp-name { font-size: 16px; font-weight: 900; color: var(--c-white); }
    .ws-dashboard-rsp-sub { font-size: 10px; color: var(--c-gray); margin-top: 2px; }
    .ws-dashboard-rsp-action { height: 34px; padding: 0 14px; border: 0; border-radius: 10px; background: var(--c-pink); color: var(--c-purple); font-size: 11px; font-weight: 900; }
    .ws-dashboard-rsp-board { min-height: 0; overflow: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px; }
    .ws-dashboard-rsp-hero { border: 1px solid rgba(221,183,255,0.34); border-radius: 12px; background: rgba(20,22,36,0.3); padding: 16px; }
    .ws-dashboard-rsp-title { font-size: 22px; line-height: 1.15; font-weight: 900; }
    .ws-dashboard-rsp-desc { margin-top: 8px; font-size: 11px; line-height: 1.55; color: var(--c-gray); }
    .ws-dashboard-rsp-stats { display: grid; gap: 10px; }
    .ws-dashboard-rsp-card { padding: 13px; }
    .ws-dashboard-rsp-label { font-size: 9px; font-weight: 900; color: var(--c-gray); text-transform: uppercase; letter-spacing: .06em; }
    .ws-dashboard-rsp-value { margin-top: 6px; font-size: 22px; font-weight: 900; color: var(--c-white); }
    .ws-dashboard-rsp-list { display: grid; gap: 8px; }
    .ws-dashboard-rsp-row { display: grid; grid-template-columns: 26px 1fr auto; gap: 9px; align-items: center; padding: 10px; border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; background: rgba(20,22,36,0.3); }
    .ws-dashboard-rsp-icon { width: 26px; height: 26px; border-radius: 8px; background: rgba(221,183,255,0.16); border: 1px solid rgba(221,183,255,0.34); }
    .ws-dashboard-rsp-row-title { font-size: 11px; font-weight: 850; color: var(--c-white); }
    .ws-dashboard-rsp-row-sub { font-size: 9px; color: var(--c-gray); margin-top: 2px; }
    .ws-dashboard-rsp-badge { padding: 3px 7px; border-radius: 999px; border: 1px solid rgba(134,239,172,0.28); color: #86EFAC; font-size: 8px; font-weight: 900; }
    .ws-dashboard-rsp.tablet { width: 834px; height: 1112px; }
    .ws-dashboard-rsp.tablet .ws-dashboard-rsp-shell { grid-template-rows: 62px minmax(0,1fr); }
    .ws-dashboard-rsp.tablet .ws-dashboard-rsp-stats { grid-template-columns: repeat(3, 1fr); }
    .ws-dashboard-rsp.mobile { width: 390px; height: 844px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-shell { grid-template-rows: 58px minmax(0,1fr); padding: 12px; gap: 10px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-nav { padding: 10px; border-radius: 11px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-action { width: 38px; padding: 0; font-size: 0; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-action::after { content: "+"; font-size: 18px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-board { padding: 12px; gap: 12px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-title { font-size: 20px; }
    .ws-dashboard-rsp.mobile .ws-dashboard-rsp-stats { grid-template-columns: 1fr; }
  `,
    phases: [
      {
        id: "tablet",
        name: "Tablet",
        route: "/dashboard/tablet",
        html: `
    <div class="ws-dashboard-rsp tablet">
      <div class="ws-dashboard-rsp-shell">
        <header class="ws-dashboard-rsp-nav"><div class="ws-dashboard-rsp-brand"><div class="ws-dashboard-rsp-logo"></div><div><div class="ws-dashboard-rsp-name">Shannon</div><div class="ws-dashboard-rsp-sub">Dashboard overview</div></div></div><button class="ws-dashboard-rsp-action">Create Project</button></header>
        <main class="ws-dashboard-rsp-board"><section class="ws-dashboard-rsp-hero"><div class="ws-dashboard-rsp-title">Continue your project flow</div><div class="ws-dashboard-rsp-desc">Review saved structures, reopen recent projects, and start a new AI workflow without losing context.</div></section><section class="ws-dashboard-rsp-stats"><div class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label">Projects</div><div class="ws-dashboard-rsp-value">5</div></div><div class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label">Workflows</div><div class="ws-dashboard-rsp-value">12</div></div><div class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label">Latest</div><div class="ws-dashboard-rsp-value" style="font-size:18px">Jun 11</div></div></section><section class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label" style="margin-bottom:10px">Recent projects</div><div class="ws-dashboard-rsp-list"><div class="ws-dashboard-rsp-row"><div class="ws-dashboard-rsp-icon"></div><div><div class="ws-dashboard-rsp-row-title">Portfolio site</div><div class="ws-dashboard-rsp-row-sub">Side project · 4 steps</div></div><div class="ws-dashboard-rsp-badge">Done</div></div><div class="ws-dashboard-rsp-row"><div class="ws-dashboard-rsp-icon"></div><div><div class="ws-dashboard-rsp-row-title">Admin dashboard</div><div class="ws-dashboard-rsp-row-sub">UI / UX · 6 steps</div></div><div class="ws-dashboard-rsp-badge">WIP</div></div></div></section></main>
      </div>
    </div>
  `,
        spec: { colors: { panel: "var(--c-glass)", card: "rgba(20,22,36,0.3)" }, size: { frame: "834x1112" }, spacing: { padding: "16px", gap: "14px" } },
        note: "Tablet dashboard variant with top navigation and stacked board content."
      },
      {
        id: "mobile",
        name: "Mobile",
        route: "/dashboard/mobile",
        html: `
    <div class="ws-dashboard-rsp mobile">
      <div class="ws-dashboard-rsp-shell">
        <header class="ws-dashboard-rsp-nav"><div class="ws-dashboard-rsp-brand"><div class="ws-dashboard-rsp-logo"></div><div><div class="ws-dashboard-rsp-name">Shannon</div><div class="ws-dashboard-rsp-sub">Mobile dashboard</div></div></div><button class="ws-dashboard-rsp-action">Create Project</button></header>
        <main class="ws-dashboard-rsp-board"><section class="ws-dashboard-rsp-hero"><div class="ws-dashboard-rsp-title">Start from your last idea</div><div class="ws-dashboard-rsp-desc">Recent projects and quick actions are stacked for one-handed scanning.</div></section><section class="ws-dashboard-rsp-stats"><div class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label">Projects</div><div class="ws-dashboard-rsp-value">5</div></div><div class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label">Workflows</div><div class="ws-dashboard-rsp-value">12</div></div></section><section class="ws-dashboard-rsp-card"><div class="ws-dashboard-rsp-label" style="margin-bottom:10px">Recent</div><div class="ws-dashboard-rsp-list"><div class="ws-dashboard-rsp-row"><div class="ws-dashboard-rsp-icon"></div><div><div class="ws-dashboard-rsp-row-title">Portfolio site</div><div class="ws-dashboard-rsp-row-sub">4 steps</div></div><div class="ws-dashboard-rsp-badge">Done</div></div><div class="ws-dashboard-rsp-row"><div class="ws-dashboard-rsp-icon"></div><div><div class="ws-dashboard-rsp-row-title">Admin dashboard</div><div class="ws-dashboard-rsp-row-sub">6 steps</div></div><div class="ws-dashboard-rsp-badge">WIP</div></div></div></section></main>
      </div>
    </div>
  `,
        spec: { colors: { panel: "var(--c-glass)", card: "rgba(20,22,36,0.3)" }, size: { frame: "390x844" }, spacing: { padding: "12px", gap: "10px" } },
        note: "Mobile dashboard variant with collapsed action and single-column content."
      }
    ],
    html: `
    <div class="ws-dashboard-root">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header"><div class="workspace-sidebar-logo"></div><div class="workspace-sidebar-brand"><div class="workspace-sidebar-brand-name">Shannon</div><div class="workspace-sidebar-brand-version">v0.0.1</div></div></header>
        <div class="workspace-sidebar-content"><section class="workspace-sidebar-group"><h3 class="workspace-sidebar-group-title">Current Projects</h3><button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button><button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button><button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button></section><section class="workspace-sidebar-group"><h3 class="workspace-sidebar-group-title">Recent</h3><button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button><button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button></section></div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>
      <div class="ws-dashboard-main"><main class="ws-dashboard-board"><section class="ws-dashboard-hero"><div><div class="ws-dashboard-greeting">Hello from Shannon</div><div class="ws-dashboard-greeting-sub">Continue a saved project or turn a new idea into an executable structure.</div></div><button class="ws-dashboard-hero-action" type="button">New Project</button></section><div class="ws-dashboard-stat-row"><div class="stat-card hi"><div class="stat-card-label">Total projects</div><div class="stat-card-val lav">5</div><div class="stat-card-sub"><span class="up">+1</span> this week</div></div><div class="stat-card"><div class="stat-card-label">Completed workflows</div><div class="stat-card-val">12</div><div class="stat-card-sub">Total steps</div></div><div class="stat-card"><div class="stat-card-label">Latest created</div><div class="stat-card-val" style="font-size:15px; margin-top:4px;">Jun 11</div><div class="stat-card-sub">Portfolio site</div></div></div><section class="ws-dashboard-section"><div class="ws-dashboard-sh"><div class="ws-dashboard-sh-title">Recent projects</div><div class="ws-dashboard-sh-link">View all</div></div><div class="project-row"><div class="project-row-icon"></div><div class="project-row-meta"><div class="project-row-name">Portfolio site</div><div class="project-row-type">Side project · 4 steps</div></div><div class="status-badge done">Done</div><div class="project-row-arrow">›</div></div><div class="project-row"><div class="project-row-icon"></div><div class="project-row-meta"><div class="project-row-name">Admin dashboard refactor</div><div class="project-row-type">UI / UX · 6 steps</div></div><div class="status-badge wip">WIP</div><div class="project-row-arrow">›</div></div><div class="project-row"><div class="project-row-icon"></div><div class="project-row-meta"><div class="project-row-name">Web basics deck</div><div class="project-row-type">Slides · 5 steps</div></div><div class="status-badge done">Done</div><div class="project-row-arrow">›</div></div></section><section class="ws-dashboard-section"><div class="ws-dashboard-sh-title" style="margin-bottom: 10px; text-align: left;">Quick start</div><div class="ws-dashboard-quick-row"><div class="ws-dashboard-quick-card"><div class="ws-dashboard-quick-dot"></div>Create side project</div><div class="ws-dashboard-quick-card"><div class="ws-dashboard-quick-dot"></div>Start UI / UX plan</div></div></section></main><aside class="ws-dashboard-rail"><div class="ws-dashboard-rail-card"><div class="ws-dashboard-rail-label">Focus</div><div class="ws-dashboard-rail-title">Next project</div><div class="ws-dashboard-rail-copy">Review the portfolio site's screen list and workflow steps.</div></div><div class="ws-dashboard-rail-card"><div class="ws-dashboard-rail-label">Today</div><div class="ws-dashboard-mini-list"><div class="ws-dashboard-mini-item"><span>Structure checks</span><span>3</span></div><div class="ws-dashboard-mini-item"><span>Pending edits</span><span>2</span></div><div class="ws-dashboard-mini-item"><span>Saved</span><span>5</span></div></div></div><div class="ws-dashboard-rail-card"><div class="ws-dashboard-rail-label">Tip</div><div class="ws-dashboard-rail-copy">Show outputs and next actions before internal data structure.</div></div></aside></div>
    </div>
  `,
    spec: {
        colors: { background: "var(--bg-main)", sidebar: "var(--c-glass)", panel: "var(--c-glass)", card: "rgba(20,22,36,0.3)", border: "rgba(255,255,255,0.16)", accent: "var(--c-lav)" },
        size: { frame: "1440x900", sidebar: "192px", rail: "280px", responsive: "tablet 834x1112, mobile 390x844" },
        spacing: { root: "20px", mainGap: "16px", boardPadding: "24px", sectionGap: "18px" }
    },
    note: "Dashboard home includes desktop plus tablet and mobile responsive phases."
});
Archive.add({
    type: "workspace",
    id: "ws-project-workspace",
    name: "Project Workspace",
    route: "/projects/:id",
    status: "draft",
    uses: ["cmp-workspace-sidebar", "btn-shannon-primary", "status-badge", "workflow-step-card", "section-card"],
    css: `
    .ws-pw-root {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-modal: rgba(31, 26, 35, 0.6);
      --c-modal-sub: #E5E7EB;
      --c-purple: #490080;
      --bg-main: url("../../client/public/main-bg.png");
      --glass-border: rgba(255, 255, 255, 0.08);
      --glass-blur: blur(16px);
      display: flex;
      width: 100%;
      height: 900px;
      padding: 20px;
      gap: 16px;
      box-sizing: border-box;
      background: var(--bg-main) no-repeat center center;
      background-size: cover;
      color: var(--c-white);
      font-family: var(--font-sans);
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    .ws-pw-main { flex: 1; display: flex; flex-direction: column; min-width: 0; gap: 16px; overflow: hidden; }
    .ws-pw-proj-bar { border: 1px solid var(--glass-border); border-radius: 12px; padding: 0 18px 0 20px; display: flex; align-items: center; gap: 10px; flex-shrink: 0; height: 50px; background: var(--c-glass); }
    .ws-pw-back-btn { font-size: 11px; color: var(--c-gray); cursor: pointer; }
    .ws-pw-bar-div { width: 1px; height: 16px; background: rgba(255,255,255,0.16); }
    .ws-pw-type-chip { font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 20px; background: rgba(221,183,255,0.18); color: var(--c-lav); border: 1px solid rgba(221,183,255,0.34); }
    .ws-pw-proj-name { font-size: 13px; font-weight: 800; color: var(--c-modal-sub); }
    .ws-pw-step-count { font-size: 10px; color: var(--c-gray); margin-left: auto; }
    .ws-pw-action { height: 30px; padding: 0 12px; border-radius: 8px; border: 1px solid rgba(221,183,255,0.3); background: rgba(221,183,255,0.12); color: var(--c-lav); font-size: 10px; font-weight: 800; }
    .ws-pw-body { flex: 1; display: grid; grid-template-columns: 300px minmax(0, 1fr) 280px; gap: 16px; min-height: 0; }
    .ws-pw-flow { border: 1px solid var(--glass-border); border-radius: 12px; padding: 18px 14px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto; background: var(--c-glass); }
    .ws-pw-flow-lbl { font-size: 9px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: var(--c-gray); margin: 4px 0 2px; text-align: left; }
    .ws-pw-summary-card { border: 1px solid rgba(221,183,255,0.42); background: var(--c-glass); border-radius: 10px; padding: 14px; }
    .ws-pw-kicker { font-size: 9px; font-weight: 800; color: var(--c-lav); letter-spacing: .08em; text-transform: uppercase; }
    .ws-pw-summary-title { margin-top: 8px; font-size: 18px; font-weight: 900; line-height: 1.25; color: var(--c-white); }
    .ws-pw-summary-copy { margin-top: 8px; font-size: 11px; line-height: 1.55; color: var(--c-modal-sub); }
    .ws-pw-meta-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px; }
    .ws-pw-meta { border: 1px solid rgba(255,255,255,0.16); background: var(--c-glass); border-radius: 8px; padding: 9px; }
    .ws-pw-meta-label { font-size: 8px; font-weight: 800; color: rgba(255,255,255,0.42); text-transform: uppercase; letter-spacing: .08em; }
    .ws-pw-meta-value { margin-top: 5px; font-size: 11px; font-weight: 800; color: var(--c-white); }
    .ws-pw-section-nav { display: flex; flex-direction: column; gap: 7px; }
    .ws-pw-nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 11px; border-radius: 9px; border: 1px solid rgba(255,255,255,0.16); background: var(--c-glass); }
    .ws-pw-nav-item.active { border-color: rgba(221,183,255,0.5); background: var(--c-glass); }
    .ws-pw-nav-num { width: 22px; height: 22px; border-radius: 7px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); color: var(--c-lav); font-size: 10px; font-weight: 900; flex-shrink: 0; }
    .ws-pw-nav-title { font-size: 11px; font-weight: 850; color: var(--c-white); }
    .ws-pw-nav-sub { margin-top: 2px; font-size: 9px; color: var(--c-gray); line-height: 1.35; }
    .ws-pw-detail { border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; gap: 14px; overflow-y: auto; background: var(--c-glass); }
    .ws-pw-panel { background: var(--c-glass); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; padding: 15px; box-shadow: 0 16px 36px rgba(0,0,0,0.12); }
    .ws-pw-panel.hi { background: var(--c-glass); border-color: rgba(221,183,255,0.5); }
    .ws-pw-panel-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-bottom: 12px; }
    .ws-pw-panel-title { font-size: 13px; font-weight: 900; color: var(--c-white); }
    .ws-pw-panel-desc { margin-top: 4px; font-size: 10px; line-height: 1.55; color: var(--c-gray); }
    .ws-pw-pill-row { display: flex; flex-wrap: wrap; gap: 7px; }
    .ws-pw-pill { padding: 6px 9px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.045); color: var(--c-modal-sub); font-size: 10px; font-weight: 700; }
    .ws-pw-pill.lav { border-color: rgba(221,183,255,0.36); background: rgba(221,183,255,0.1); color: var(--c-lav); }
    .ws-pw-list { display: grid; gap: 8px; }
    .ws-pw-list-item { display: grid; grid-template-columns: 26px 1fr; gap: 10px; align-items: flex-start; padding: 10px; border-radius: 9px; background: var(--c-glass); border: 1px solid rgba(255,255,255,0.16); }
    .ws-pw-list-num { width: 24px; height: 24px; border-radius: 7px; background: rgba(221,183,255,0.13); color: var(--c-lav); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; }
    .ws-pw-list-title { font-size: 11px; font-weight: 850; color: var(--c-white); }
    .ws-pw-list-copy { margin-top: 3px; font-size: 10px; line-height: 1.45; color: var(--c-gray); }
    .ws-pw-inspector { border: 1px solid var(--glass-border); border-radius: 12px; padding: 18px 14px; background: var(--c-glass); overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
    .ws-pw-task { border: 1px solid rgba(255,255,255,0.16); background: var(--c-glass); border-radius: 9px; padding: 11px; }
    .ws-pw-task-top { display: flex; justify-content: space-between; gap: 8px; align-items: center; }
    .ws-pw-task-title { font-size: 11px; font-weight: 850; color: var(--c-white); }
    .ws-pw-task-copy { margin-top: 6px; font-size: 9px; line-height: 1.45; color: var(--c-gray); }
    .ws-pw-code-block {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 12px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 9.5px;
      color: #DDB7FF;
      overflow-x: auto;
      text-align: left;
      margin-top: 10px;
      line-height: 1.4;
    }
  `,
    html: `
    <div class="ws-pw-root">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header">
          <div class="workspace-sidebar-logo"></div>
          <div class="workspace-sidebar-brand">
            <div class="workspace-sidebar-brand-name">Shannon</div>
            <div class="workspace-sidebar-brand-version">v0.0.1</div>
          </div>
        </header>
        <div class="workspace-sidebar-content">
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Current Projects</h3>
            <button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button>
          </section>
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Recent</h3>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button>
          </section>
        </div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>

      <div class="ws-pw-main">
        <div class="ws-pw-proj-bar">
          <div class="ws-pw-back-btn">대시보드</div>
          <div class="ws-pw-bar-div"></div>
          <div class="ws-pw-type-chip">saved project</div>
          <div class="ws-pw-proj-name">취업용 포트폴리오 사이트</div>
          <div class="ws-pw-step-count">수정됨 2분 전</div>
          <button class="ws-pw-action" type="button">수정하기</button>
        </div>

        <div class="ws-pw-body">
          <div class="ws-pw-flow">
            <div class="ws-pw-summary-card">
              <div class="ws-pw-kicker">Project Summary</div>
              <div class="ws-pw-summary-title">채용 담당자가 30초 안에 강점을 이해하는 포트폴리오</div>
              <div class="ws-pw-summary-copy">AI 인터뷰 결과를 바탕으로 화면, 기능, 작업 흐름, 개발 태스크를 저장한 프로젝트 구조입니다.</div>
              <div class="ws-pw-meta-row">
                <div class="ws-pw-meta"><div class="ws-pw-meta-label">Target</div><div class="ws-pw-meta-value">채용 담당자</div></div>
                <div class="ws-pw-meta"><div class="ws-pw-meta-label">Status</div><div class="ws-pw-meta-value">draft</div></div>
              </div>
            </div>
            <div class="ws-pw-flow-lbl">결과 섹션 (AX 우선순위)</div>
            <div class="ws-pw-section-nav">
              <div class="ws-pw-nav-item active"><div class="ws-pw-nav-num">1</div><div><div class="ws-pw-nav-title">프로젝트 요약</div><div class="ws-pw-nav-sub">요약 및 목표 설정</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">2</div><div><div class="ws-pw-nav-title">만들게 될 결과물</div><div class="ws-pw-nav-sub">사용자 밸류 산출물</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">3</div><div><div class="ws-pw-nav-title">필요한 화면</div><div class="ws-pw-nav-sub">라우팅 및 페이지 범위</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">4</div><div><div class="ws-pw-nav-title">필요한 기능</div><div class="ws-pw-nav-sub">사용자 시나리오와 액션</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">5</div><div><div class="ws-pw-nav-title">작업 흐름</div><div class="ws-pw-nav-sub">단계별 실행 태스크 맵</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">6</div><div><div class="ws-pw-nav-title">개발 태스크</div><div class="ws-pw-nav-sub">바로 개발 시작 가능한 일감</div></div></div>
              <div class="ws-pw-nav-item"><div class="ws-pw-nav-num">7</div><div><div class="ws-pw-nav-title">Harness JSON</div><div class="ws-pw-nav-sub">AI 생성 내부 원본 데이터</div></div></div>
            </div>
          </div>

          <div class="ws-pw-detail">
            <!-- 1. 프로젝트 요약 -->
            <div class="ws-pw-panel hi">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">1. Project Summary</div>
                  <div class="ws-pw-panel-title">문제 해결 과정을 선명하게 보여주는 포트폴리오 사이트</div>
                  <div class="ws-pw-panel-desc">wiki의 AX 원칙에 맞춰 Harness 같은 내부 용어보다 사용자가 바로 이해할 수 있는 결과 언어를 먼저 보여줍니다.</div>
                </div>
                <div class="status-badge wip">검토 중</div>
              </div>
              <div class="ws-pw-pill-row"><div class="ws-pw-pill lav">프로젝트 요약</div><div class="ws-pw-pill lav">목표</div><div class="ws-pw-pill">대상 사용자</div><div class="ws-pw-pill">저장된 초안</div></div>
            </div>

            <!-- 2. 만들게 될 결과물 -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">2. Expected Outputs</div>
                  <div class="ws-pw-panel-title">만들게 될 결과물</div>
                  <div class="ws-pw-panel-desc">결과 화면의 우선순위는 요약, 산출물, 화면, 기능, 작업 흐름, 태스크 순서입니다.</div>
                </div>
              </div>
              <div class="ws-pw-pill-row"><div class="ws-pw-pill lav">홈 화면</div><div class="ws-pw-pill lav">자기소개 섹션</div><div class="ws-pw-pill lav">프로젝트 목록</div><div class="ws-pw-pill">프로젝트 상세</div><div class="ws-pw-pill">연락처 섹션</div></div>
            </div>

            <!-- 3. 필요한 화면 -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">3. Required Screens</div>
                  <div class="ws-pw-panel-title">필요한 화면</div>
                  <div class="ws-pw-panel-desc">개발자가 라우팅과 컴포넌트 범위를 바로 잡을 수 있게 화면 단위로 나눕니다.</div>
                </div>
              </div>
              <div class="ws-pw-list">
                <div class="ws-pw-list-item"><div class="ws-pw-list-num">1</div><div><div class="ws-pw-list-title">홈 화면</div><div class="ws-pw-list-copy">방문자가 포트폴리오의 목적과 대표 강점을 즉시 파악합니다.</div></div></div>
                <div class="ws-pw-list-item"><div class="ws-pw-list-num">2</div><div><div class="ws-pw-list-title">프로젝트 목록</div><div class="ws-pw-list-copy">대표 프로젝트를 문제, 과정, 결과 기준으로 스캔합니다.</div></div></div>
                <div class="ws-pw-list-item"><div class="ws-pw-list-num">3</div><div><div class="ws-pw-list-title">프로젝트 상세</div><div class="ws-pw-list-copy">문제 해결 과정과 기술 선택 근거를 깊게 확인합니다.</div></div></div>
              </div>
            </div>

            <!-- 4. 필요한 기능 -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">4. Core Features</div>
                  <div class="ws-pw-panel-title">필요한 기능</div>
                  <div class="ws-pw-panel-desc">MVP에서 중요한 것은 저장된 구조를 다시 이해하고 수정할 수 있는 흐름입니다.</div>
                </div>
              </div>
              <div class="ws-pw-pill-row"><div class="ws-pw-pill lav">섹션 단위 수정</div><div class="ws-pw-pill lav">저장 상태 표시</div><div class="ws-pw-pill">태스크 확인</div><div class="ws-pw-pill">대시보드 복귀</div></div>
            </div>

            <!-- 5. 작업 흐름 -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">5. Workflows</div>
                  <div class="ws-pw-panel-title">작업 흐름</div>
                  <div class="ws-pw-panel-desc">프로젝트 목표 달성을 위해 차례대로 밟아야 하는 단계별 실천 흐름입니다.</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                <div class="workflow-step-card-container">
                  <div class="workflow-step-card-col"><div class="workflow-step-card-num done">1</div><div class="workflow-step-card-vline active"></div></div>
                  <div class="workflow-step-card"><div class="workflow-step-card-title">정보 구조 설계</div><div class="workflow-step-card-sub">포트폴리오에 필요한 화면과 섹션을 정리한다.</div></div>
                </div>
                <div class="workflow-step-card-container">
                  <div class="workflow-step-card-col"><div class="workflow-step-card-num active">2</div><div class="workflow-step-card-vline"></div></div>
                  <div class="workflow-step-card active"><div class="workflow-step-card-title active">레이아웃 및 주요 컴포넌트 개발</div><div class="workflow-step-card-sub">사이드바, 프로젝트 카드, 상세 모달 UI를 퍼블리싱한다.</div></div>
                </div>
                <div class="workflow-step-card-container">
                  <div class="workflow-step-card-col"><div class="workflow-step-card-num">3</div></div>
                  <div class="workflow-step-card"><div class="workflow-step-card-title">데이터 연결 및 Vercel 배포</div><div class="workflow-step-card-sub">로컬 mock 데이터를 연결하고 Vercel을 통해 배포 환경을 세팅한다.</div></div>
                </div>
              </div>
            </div>

            <!-- 6. 개발 태스크 -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">6. Development Tasks</div>
                  <div class="ws-pw-panel-title">개발 태스크</div>
                  <div class="ws-pw-panel-desc">바로 착수할 수 있는 세부 개발 일감의 진행 현황입니다.</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 10px;">
                <div class="ws-pw-list-item" style="border-color: rgba(134,239,172,0.22);"><div class="ws-pw-list-num" style="color: #86EFAC;">✓</div><div><div class="ws-pw-list-title" style="color: #86EFAC;">정보 구조 정의 및 매핑</div><div class="ws-pw-list-copy">summary, targetUser, outputs, screens를 프로젝트 상세에 데이터 바인딩</div></div></div>
                <div class="ws-pw-list-item"><div class="ws-pw-list-num">▶</div><div><div class="ws-pw-list-title">상세 화면 퍼블리싱</div><div class="ws-pw-list-copy">사이드바 및 메인 컨텐츠 영역의 Glassmorphism 레이아웃 구현</div></div></div>
                <div class="ws-pw-list-item"><div class="ws-pw-list-num">·</div><div><div class="ws-pw-list-title">수정 및 저장 플로우 구현</div><div class="ws-pw-list-copy">Zustand, React Hook Form 연동을 통해 실시간 임시 저장 기능 추가</div></div></div>
              </div>
            </div>

            <!-- 7. Harness JSON -->
            <div class="ws-pw-panel">
              <div class="ws-pw-panel-head">
                <div>
                  <div class="ws-pw-kicker">7. Harness Schema JSON</div>
                  <div class="ws-pw-panel-title">Harness JSON (내부 구조)</div>
                  <div class="ws-pw-panel-desc">AI 모델이 설계하여 리턴한 원본 JSON 스키마 데이터입니다.</div>
                </div>
              </div>
              <pre class="ws-pw-code-block"><code>{
  "title": "프론트엔드 취업용 포트폴리오",
  "status": "active",
  "sourcePrompt": "프론트엔드 취업용 포트폴리오 만들고 싶어",
  "harness": {
    "summary": "채용담당자가 지원자의 문제 해결력을 빠르게 확인할 수 있는 웹사이트",
    "targetUser": "채용담당자",
    "goal": "프론트엔드 개발자로서의 실력을 명확하게 보여준다.",
    "outputs": [
      { "id": "out_1", "title": "포트폴리오 웹사이트", "description": "프로젝트 경험 구조화" }
    ],
    "screens": [
      { "id": "sc_1", "name": "홈 화면", "path": "/", "priority": "high" }
    ],
    "features": [
      { "id": "fe_1", "title": "프로젝트 카드 목록", "priority": "high" }
    ],
    "workflows": [
      { "id": "wf_1", "order": 1, "title": "정보 구조 설계" }
    ],
    "tasks": [
      { "id": "tk_1", "title": "ProjectCard 컴포넌트 생성", "status": "todo" }
    ]
  }
}</code></pre>
            </div>
          </div>

          <aside class="ws-pw-inspector">
            <div class="ws-pw-flow-lbl">개발 태스크</div>
            <div class="ws-pw-task"><div class="ws-pw-task-top"><div class="ws-pw-task-title">정보 구조 정의</div><div class="status-badge done">완료</div></div><div class="ws-pw-task-copy">summary, targetUser, outputs, screens, features를 프로젝트 상세에 매핑합니다.</div></div>
            <div class="ws-pw-task"><div class="ws-pw-task-top"><div class="ws-pw-task-title">상세 화면 구현</div><div class="status-badge wip">진행</div></div><div class="ws-pw-task-copy">사용자 언어의 결과 섹션을 먼저 보여주고 내부 구조는 보조로 둡니다.</div></div>
            <div class="ws-pw-task"><div class="ws-pw-task-top"><div class="ws-pw-task-title">수정 플로우 연결</div><div class="status-badge pend">대기</div></div><div class="ws-pw-task-copy">프로젝트 수정 화면에서 섹션 단위 편집과 저장 상태를 표시합니다.</div></div>
            <div class="ws-pw-panel"><div class="ws-pw-kicker">Next action</div><div class="ws-pw-panel-desc">검토가 끝나면 수정하기로 이동하거나 이 구조를 저장된 프로젝트로 유지합니다.</div><div class="ws-pw-pill-row" style="margin-top:10px;"><div class="ws-pw-pill lav">수정하기</div><div class="ws-pw-pill">다시 생성</div></div></div>
          </aside>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { background: "var(--bg-main)", sidebar: "var(--c-glass)", workspace: "var(--c-glass)", topbar: "var(--c-glass)", leftRail: "var(--c-glass)", panel: "var(--c-glass)", border: "rgba(255,255,255,0.16)", activeBorder: "rgba(221,183,255,0.5)" },
        size: { frame: "1440x900", sidebar: "192px", resultRail: "300px", inspector: "280px" },
        spacing: { root: "20px", columns: "300px 1fr 280px", panel: "15px", gap: "16px" }
    },
    note: "Wiki의 /projects/[id] 정의에 맞춰 저장된 Harness 결과를 사용자 언어로 검토하고 수정으로 이어지는 상세 워크스페이스."
})
Archive.add({
    type: "workspace",
    id: "ws-dashboard-home-workflow",
    name: "Dashboard Home Workflow",
    route: "/dashboard/home-workflow",
    status: "draft",
    uses: ["cmp-workspace-sidebar"],
    css: `
    .ws-dhw-root {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-modal: rgba(31, 26, 35, 0.6);
      --c-modal-sub: #E5E7EB;
      --c-purple: #490080;
      --bg-main: url("../../client/public/main-bg.png");
      --glass-border: rgba(255, 255, 255, 0.08);
      --glass-blur: blur(16px);
      display: flex;
      width: 100%;
      height: 900px;
      padding: 20px;
      gap: 16px;
      box-sizing: border-box;
      color: var(--c-white);
      font-family: var(--font-sans);
      background: var(--bg-main) no-repeat center center;
      background-size: cover;
      overflow: hidden;
    }
    .ws-dhw-main,
    .ws-dhw-detail {
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      background: var(--c-glass);
    }
    .ws-dhw-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .05em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
      margin: 0;
    }
    .ws-dhw-card-sub {
      font-size: 9px;
      color: var(--c-gray);
      line-height: 1.45;
    }
    .ws-dhw-main {
      flex: 1;
      min-width: 0;
      padding: 18px;
    }
    .ws-dhw-main-title {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 6px;
    }
    .ws-dhw-main-desc {
      font-size: 11px;
      color: var(--c-gray);
      line-height: 1.6;
      margin-bottom: 18px;
    }
    .ws-dhw-mock {
      height: 360px;
      border-radius: 12px;
      border: 1px solid var(--glass-border);
      background: rgba(255,255,255,0.025);
      display: grid;
      grid-template-columns: 170px 1fr;
      overflow: hidden;
    }
    .ws-dhw-mock-side {
      border-right: 1px solid var(--glass-border);
      padding: 14px;
    }
    .ws-dhw-mock-main {
      padding: 18px;
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .ws-dhw-line {
      height: 10px;
      border-radius: 999px;
      background: var(--glass-border);
    }
    .ws-dhw-line.lav {
      background: rgba(221,183,255,0.2);
    }
    .ws-dhw-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .ws-dhw-tile {
      height: 72px;
      border-radius: 8px;
      border: 1px solid var(--glass-border);
      background: rgba(255,255,255,0.03);
    }
    .ws-dhw-detail {
      width: 190px;
      padding: 18px;
      flex-shrink: 0;
    }
    .ws-dhw-chip {
      display: inline-flex;
      margin: 0 4px 6px 0;
      padding: 2px 7px;
      border-radius: 999px;
      border: 1px solid rgba(221,183,255,0.22);
      color: var(--c-lav);
      font-size: 9px;
      font-weight: 700;
    }
  `,
    html: `
    <div class="ws-dhw-root">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header">
          <div class="workspace-sidebar-logo"></div>
          <div class="workspace-sidebar-brand">
            <div class="workspace-sidebar-brand-name">Shannon</div>
            <div class="workspace-sidebar-brand-version">v0.0.1</div>
          </div>
        </header>
        <div class="workspace-sidebar-content">
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Current Projects</h3>
            <button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button>
          </section>
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Recent</h3>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button>
          </section>
        </div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>
      <main class="ws-dhw-main">
        <div class="ws-dhw-main-title">Dashboard Home</div>
        <div class="ws-dhw-main-desc">Project-first dashboard entry that follows the existing workspace shell conventions. The sidebar matches the app structure: logo, grouped lists, and the primary action footer.</div>
        <div class="ws-dhw-mock">
          <div class="ws-dhw-mock-side">
            <div class="ws-dhw-line lav" style="width:70%;margin-bottom:22px"></div>
            <div class="ws-dhw-line" style="width:88%;margin-bottom:10px"></div>
            <div class="ws-dhw-line" style="width:62%;margin-bottom:10px"></div>
            <div class="ws-dhw-line" style="width:76%"></div>
          </div>
          <div class="ws-dhw-mock-main">
            <div class="ws-dhw-line lav" style="width:34%"></div>
            <div class="ws-dhw-grid"><div class="ws-dhw-tile"></div><div class="ws-dhw-tile"></div><div class="ws-dhw-tile"></div></div>
            <div class="ws-dhw-line" style="width:94%"></div>
            <div class="ws-dhw-line" style="width:82%"></div>
            <div class="ws-dhw-line" style="width:68%"></div>
          </div>
        </div>
      </main>
      <aside class="ws-dhw-detail">
        <div class="ws-dhw-label" style="margin-bottom:10px">Screen Role</div>
        <span class="ws-dhw-chip">route</span>
        <span class="ws-dhw-chip">dashboard</span>
        <span class="ws-dhw-chip">home</span>
        <div class="ws-dhw-card-sub" style="margin-top:10px">The screen is bound to the project shell conventions rather than inventing a separate sidebar language.</div>
      </aside>
    </div>
  `,
    spec: {
        colors: { background: "var(--bg-main)", panel: "var(--c-glass)", accent: "var(--c-lav)" },
        size: { frame: "1440x900", sidebar: "256px", detail: "190px" },
        spacing: { padding: "20px", gap: "16px" }
    },
    note: "Dashboard Home 화면 목업을 DSS 워크플로우 기준으로 분리한 workspace."
});
Archive.add({
    type: "workspace",
    id: "ws-generation-view",
    name: "Generation View",
    route: "/generation-view",
    status: "draft",
    uses: ["cmp-workspace-sidebar"],
    phases: [
        {
            id: "loading",
            name: "Loading",
            route: "/generation-view/loading",
            html: `
    <div class="ws-generation-view-frame">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header">
          <div class="workspace-sidebar-logo"></div>
          <div class="workspace-sidebar-brand">
            <div class="workspace-sidebar-brand-name">Shannon</div>
            <div class="workspace-sidebar-brand-version">v0.0.1</div>
          </div>
        </header>
        <div class="workspace-sidebar-content">
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Current Projects</h3>
            <button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button>
          </section>
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Recent</h3>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button>
          </section>
        </div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>
      <div class="f-gen-center">
        <div class="f-gen-icon-wrap">
          <div class="f-gen-icon-ring"></div>
          <div class="f-gen-icon-inner"></div>
        </div>
        <div>
          <div class="f-gen-title">Shannon&#51060; &#47564;&#46308;&#44256; &#51080;&#50612;&#50836;</div>
          <div class="f-gen-sub" style="margin-top:5px">&#54252;&#53944;&#54260;&#47532;&#50724; &#49324;&#51060;&#53944; &#47564;&#46308;&#44592;&#47484; &#50948;&#54620;<br>&#50892;&#53356;&#54540;&#47196;&#50864;&#47484; &#49444;&#44228;&#54616;&#45716; &#51473;&#51077;&#45768;&#45796;</div>
        </div>
        <div class="f-gen-list">
          <div class="f-gen-item done"><div class="f-gen-dot done">&#10003;</div><div class="f-gen-text done">&#51077;&#47141; &#51221;&#48372; &#48516;&#49437; &#50756;&#47308;</div><div style="font-size:9px;color:var(--c-subtle)">0.3s</div></div>
          <div class="f-gen-item running"><div class="f-gen-dot running"></div><div class="f-gen-text running">&#50892;&#53356;&#54540;&#47196;&#50864; &#45800;&#44228; &#49444;&#44228; &#51473;...</div></div>
          <div class="f-gen-item"><div class="f-gen-dot"></div><div class="f-gen-text">&#44033; &#45800;&#44228;&#48324; &#53080;&#53584;&#52768; &#49373;&#49457;</div></div>
          <div class="f-gen-item"><div class="f-gen-dot"></div><div class="f-gen-text">&#52572;&#51333; &#44160;&#53664; &#48143; &#44396;&#49457;</div></div>
        </div>
      </div>
    </div>
  `,
            spec: {
                size: { phase: "loading", timing: "AI generation loading (0-2s)" },
                spacing: { "phase padding": "32px" }
            },
            note: "Original spec Generation View loading scene."
        },
        {
            id: "skeleton-reveal",
            name: "Skeleton Reveal",
            route: "/generation-view/skeleton-reveal",
            html: `
    <div class="ws-generation-view-frame">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header">
          <div class="workspace-sidebar-logo"></div>
          <div class="workspace-sidebar-brand">
            <div class="workspace-sidebar-brand-name">Shannon</div>
            <div class="workspace-sidebar-brand-version">v0.0.1</div>
          </div>
        </header>
        <div class="workspace-sidebar-content">
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Current Projects</h3>
            <button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button>
          </section>
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Recent</h3>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button>
          </section>
        </div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>
      <div class="f-main">
        <div class="f-proj-bar">
          <div class="sk" style="width:55px;height:9px"></div>
          <div class="f-bar-div"></div>
          <div class="sk-lav" style="width:68px;height:16px;border-radius:20px"></div>
          <div class="sk" style="width:130px;height:10px"></div>
          <div class="sk" style="width:60px;height:9px;margin-left:auto"></div>
        </div>
        <div class="f-body">
          <div class="f-flow">
            <div class="sk" style="height:7px;width:65px;margin-bottom:14px"></div>
            <div class="f-step" style="margin-bottom:6px">
              <div class="f-step-col"><div class="f-step-num" style="background:rgba(221,183,255,0.08);border-color:rgba(221,183,255,0.22)"></div><div class="f-vline"></div></div>
              <div class="f-step-card" style="display:flex;flex-direction:column;gap:5px">
                <div class="sk-lav" style="height:8px;width:65%"></div>
                <div class="sk" style="height:7px;width:85%"></div>
                <div class="sk-lav" style="height:13px;width:32px;border-radius:20px;margin-top:2px"></div>
              </div>
            </div>
            <div class="f-step" style="margin-bottom:6px">
              <div class="f-step-col"><div class="f-step-num"></div><div class="f-vline"></div></div>
              <div class="f-step-card" style="display:flex;flex-direction:column;gap:5px">
                <div class="sk" style="height:8px;width:55%"></div>
                <div class="sk" style="height:7px;width:80%"></div>
              </div>
            </div>
            <div class="f-step">
              <div class="f-step-col"><div class="f-step-num"></div></div>
              <div class="f-step-card" style="display:flex;flex-direction:column;gap:5px">
                <div class="sk" style="height:8px;width:70%"></div>
                <div class="sk" style="height:7px;width:90%"></div>
              </div>
            </div>
          </div>
          <div class="f-detail">
            <div>
              <div class="sk-lav" style="height:8px;width:90px;margin-bottom:8px"></div>
              <div class="sk" style="height:13px;width:55%;margin-bottom:6px"></div>
              <div class="sk" style="height:7px;width:90%;margin-bottom:4px"></div>
              <div class="sk" style="height:7px;width:72%"></div>
            </div>
            <div class="f-hr"></div>
            <div class="f-sec-card hi" style="display:flex;flex-direction:column;gap:6px">
              <div class="sk-lav" style="height:7px;width:75px"></div>
              <div class="sk" style="height:7px;width:100%"></div>
              <div class="sk" style="height:7px;width:85%"></div>
              <div class="sk" style="height:7px;width:94%"></div>
              <div style="display:flex;gap:5px;margin-top:3px">
                <div class="sk-lav" style="height:16px;width:58px;border-radius:4px"></div>
                <div class="sk-lav" style="height:16px;width:48px;border-radius:4px"></div>
              </div>
            </div>
            <div class="f-sec-card" style="display:flex;flex-direction:column;gap:6px">
              <div class="sk" style="height:7px;width:55px"></div>
              <div class="sk" style="height:7px;width:100%"></div>
              <div class="sk" style="height:7px;width:68%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
            spec: {
                size: { phase: "skeleton-reveal", timing: "Skeleton reveal (2-4s)" },
                spacing: { "phase padding": "0" }
            },
            note: "Original spec Generation View skeleton reveal scene."
        }
    ],
    css: `
    .ws-generation-view-frame {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-modal: rgba(31, 26, 35, 0.6);
      --c-modal-sub: #E5E7EB;
      --c-purple: #490080;
      --bg-main: url("../../client/public/main-bg.png");
      --c-success: #86EFAC;
      --c-muted: var(--c-gray);
      --c-subtle: var(--c-gray);
      --glass-border: rgba(255, 255, 255, 0.08);
      --glass-blur: blur(16px);
      display: flex;
      width: 100%;
      height: 900px;
      padding: 20px;
      gap: 16px;
      box-sizing: border-box;
      color: var(--c-white);
      font-family: var(--font-sans);
      background: var(--bg-main) no-repeat center center;
      background-size: cover;
      overflow: hidden;
    }
    .f-main { flex:1; display:flex; flex-direction:column; min-width:0; }
    .f-proj-bar { border-bottom:1px solid var(--glass-border); padding:0 18px; display:flex; align-items:center; gap:10px; flex-shrink:0; height:42px; background:var(--c-glass); }
    .f-bar-div { width:1px; height:13px; background:var(--glass-border); }
    .f-body { flex:1; display:flex; min-height:0; }
    .f-flow { width:248px; flex-shrink:0; padding:18px 16px; border-right:1px solid var(--glass-border); overflow:hidden; }
    .f-step { display:flex; align-items:flex-start; gap:9px; }
    .f-step-col { display:flex; flex-direction:column; align-items:center; width:18px; flex-shrink:0; padding-top:1px; }
    .f-step-num { width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:700; color:var(--c-muted); }
    .f-vline { width:1px; height:24px; background:rgba(255,255,255,0.07); margin:3px 0; }
    .f-step-card { flex:1; padding:8px 10px; border-radius:7px; border:1px solid rgba(255,255,255,0.16); background:var(--c-glass); min-width:0; }
    .f-detail { flex:1; padding:18px 20px; display:flex; flex-direction:column; gap:12px; overflow:hidden; }
    .f-hr { height:1px; background:var(--glass-border); margin:2px 0; }
    .f-sec-card { border:1px solid rgba(255,255,255,0.16); border-radius:9px; padding:11px 13px; background:var(--c-glass); }
    .f-sec-card.hi { border-color:rgba(221,183,255,0.5); background:var(--c-glass); }
    .f-gen-center { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:22px; padding:32px; }
    .f-gen-icon-wrap { position:relative; width:54px; height:54px; border-radius:16px; background:var(--c-glass); border:1px solid rgba(221,183,255,0.18); display:flex; align-items:center; justify-content:center; }
    .f-gen-icon-ring { position:absolute; inset:-7px; border-radius:22px; border:1px solid rgba(221,183,255,0.1); animation:ring 2s ease-in-out infinite; }
    @keyframes ring { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.6;transform:scale(1.05)} }
    .f-gen-icon-inner { width:24px; height:24px; border-radius:6px; background:rgba(221,183,255,0.28); animation:pulse 1.5s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:.4;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
    .f-gen-title { font-size:16px; font-weight:800; text-align:center; color:var(--c-white); }
    .f-gen-sub { font-size:11px; color:var(--c-muted); text-align:center; line-height:1.6; max-width:250px; }
    .f-gen-list { width:100%; max-width:290px; display:flex; flex-direction:column; gap:6px; }
    .f-gen-item { display:flex; align-items:center; gap:9px; padding:8px 11px; border-radius:7px; background:var(--c-glass); border:1px solid rgba(255,255,255,0.12); }
    .f-gen-item.done { background:var(--c-glass); border-color:rgba(134,239,172,0.18); }
    .f-gen-item.running { background:var(--c-glass); border-color:rgba(221,183,255,0.24); }
    .f-gen-dot { width:17px; height:17px; border-radius:50%; flex-shrink:0; background:var(--c-glass); border:1px solid rgba(255,255,255,0.14); display:flex; align-items:center; justify-content:center; font-size:8px; }
    .f-gen-dot.done { background:var(--c-glass); border-color:rgba(134,239,172,0.32); color:var(--c-success); }
    .f-gen-dot.running { border-color:var(--c-lav); border-top-color:transparent; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .f-gen-text { font-size:10px; flex:1; color:var(--c-subtle); }
    .f-gen-text.done { color:var(--c-success); }
    .f-gen-text.running { color:var(--c-lav); }
    @keyframes shimmer { 0%{background-position:-300px 0} 100%{background-position:300px 0} }
    .sk { background:linear-gradient(90deg, rgba(20,22,36,0.24) 25%, rgba(255,255,255,0.055) 50%, rgba(20,22,36,0.24) 75%); background-size:600px 100%; animation:shimmer 1.6s infinite; border-radius:4px; }
    .sk-lav { background:linear-gradient(90deg, rgba(20,22,36,0.28) 25%, rgba(221,183,255,0.075) 50%, rgba(20,22,36,0.28) 75%); background-size:600px 100%; animation:shimmer 1.6s infinite; border-radius:4px; }
  `,
    html: `
    <div class="ws-generation-view-frame">
      <aside class="workspace-sidebar workspace-sidebar--compact">
        <header class="workspace-sidebar-header">
          <div class="workspace-sidebar-logo"></div>
          <div class="workspace-sidebar-brand">
            <div class="workspace-sidebar-brand-name">Shannon</div>
            <div class="workspace-sidebar-brand-version">v0.0.1</div>
          </div>
        </header>
        <div class="workspace-sidebar-content">
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Current Projects</h3>
            <button class="workspace-sidebar-item active" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Portfolio site</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Admin dashboard</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Lecture deck</span></button>
          </section>
          <section class="workspace-sidebar-group">
            <h3 class="workspace-sidebar-group-title">Recent</h3>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">SaaS landing page</span></button>
            <button class="workspace-sidebar-item" type="button"><span class="workspace-sidebar-item-icon"></span><span class="workspace-sidebar-item-name">Commerce backoffice</span></button>
          </section>
        </div>
        <footer class="workspace-sidebar-footer"><button class="workspace-sidebar-action" type="button">Create Project</button></footer>
      </aside>
      <div class="f-gen-center">
        <div class="f-gen-title">Generation View</div>
        <div class="f-gen-sub">Select a phase from the workspace list: Loading or Skeleton Reveal.</div>
      </div>
    </div>
  `,
    spec: {
        colors: { background: "var(--bg-main)", panel: "var(--c-glass)", accent: "var(--c-lav)", success: "#86EFAC" },
        size: { frame: "1440x900", sidebar: "248px", "phase model": "loading, skeleton-reveal, success, error" },
        spacing: { padding: "20px", gap: "16px" }
    },
    note: "Generation View uses selectable phases as the archive representation of states."
});

Archive.add({
    id: "auth-google-button",
    name: "구글 로그인 버튼",
    category: "인증",
    status: "draft",
    css: `
    .auth-google-button-shell {
      width: 320px;
      max-width: 100%;
      margin: 0 auto;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    .auth-google-button {
      width: 100%;
      min-height: 64px;
      border: 1px solid rgba(226, 232, 240, 0.92);
      border-radius: 18px;
      padding: 14px 16px;
      background: #FFFFFF;
      box-shadow: 0 14px 30px rgba(15, 23, 42, 0.16);
      display: flex;
      align-items: center;
      gap: 12px;
      color: #0F172A;
      text-align: left;
      cursor: pointer;
    }
    .auth-google-button-mark {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: conic-gradient(#4285F4 0 25%, #34A853 25% 50%, #FBBC05 50% 75%, #EA4335 75% 100%);
      flex-shrink: 0;
    }
    .auth-google-button-mark::after {
      content: "";
      position: absolute;
      inset: 4px;
      border-radius: 999px;
      background: #FFFFFF;
    }
    .auth-google-button-mark span {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 900;
      color: #4285F4;
      z-index: 1;
    }
    .auth-google-button-copy {
      flex: 1;
      min-width: 0;
    }
    .auth-google-button-title {
      font-size: 14px;
      font-weight: 800;
      line-height: 1.2;
      color: #0F172A;
    }
    .auth-google-button-sub {
      margin-top: 4px;
      font-size: 10px;
      color: #64748B;
      line-height: 1.45;
    }
    .auth-google-button-arrow {
      font-size: 15px;
      line-height: 1;
      color: #64748B;
      flex-shrink: 0;
    }
  `,
    html: `
    <div class="auth-google-button-shell">
      <button class="auth-google-button" type="button">
        <div class="auth-google-button-mark"><span>G</span></div>
        <div class="auth-google-button-copy">
          <div class="auth-google-button-title">구글로 계속하기</div>
          <div class="auth-google-button-sub">저장된 프로젝트와 작업 기록을 동기화해요</div>
        </div>
        <div class="auth-google-button-arrow">→</div>
      </button>
    </div>
  `,
    spec: {
        colors: { border: "rgba(226,232,240,0.92)", background: "#FFFFFF", text: "#0F172A" },
        size: { height: "64px", radius: "18px", icon: "24px", title: "14px / 800" },
        spacing: { padding: "14px 16px", gap: "12px", shellWidth: "320px" }
    },
    note: "로그인 화면에서 사용하는 구글 인증 버튼입니다."
});

Archive.add({
    id: "auth-kakao-button",
    name: "카카오 로그인 버튼",
    category: "인증",
    status: "draft",
    css: `
    .auth-kakao-button-shell {
      width: 320px;
      max-width: 100%;
      margin: 0 auto;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    .auth-kakao-button {
      width: 100%;
      min-height: 64px;
      border: 1px solid rgba(254, 229, 0, 0.2);
      border-radius: 18px;
      padding: 14px 16px;
      background: #FEE500;
      box-shadow: 0 14px 30px rgba(15, 23, 42, 0.14);
      display: flex;
      align-items: center;
      gap: 12px;
      color: #191919;
      text-align: left;
      cursor: pointer;
    }
    .auth-kakao-button-mark {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: rgba(25,25,25,0.92);
      color: #FEE500;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 900;
      flex-shrink: 0;
    }
    .auth-kakao-button-copy {
      flex: 1;
      min-width: 0;
    }
    .auth-kakao-button-title {
      font-size: 14px;
      font-weight: 900;
      line-height: 1.2;
      color: #191919;
    }
    .auth-kakao-button-sub {
      margin-top: 4px;
      font-size: 10px;
      color: rgba(25,25,25,0.72);
      line-height: 1.45;
    }
    .auth-kakao-button-arrow {
      font-size: 15px;
      line-height: 1;
      color: rgba(25,25,25,0.6);
      flex-shrink: 0;
    }
  `,
    html: `
    <div class="auth-kakao-button-shell">
      <button class="auth-kakao-button" type="button">
        <div class="auth-kakao-button-mark">K</div>
        <div class="auth-kakao-button-copy">
          <div class="auth-kakao-button-title">카카오로 계속하기</div>
          <div class="auth-kakao-button-sub">카카오 계정으로 더 빠르게 시작해요</div>
        </div>
        <div class="auth-kakao-button-arrow">→</div>
      </button>
    </div>
  `,
    spec: {
        colors: { border: "rgba(254,229,0,0.2)", background: "#FEE500", text: "#191919" },
        size: { height: "64px", radius: "18px", icon: "24px", title: "14px / 900" },
        spacing: { padding: "14px 16px", gap: "12px", shellWidth: "320px" }
    },
    note: "로그인 화면에서 사용하는 카카오 인증 버튼입니다."
});

Archive.add({
    type: "workspace",
    id: "ws-login",
    name: "로그인",
    route: "/login",
    status: "draft",
    uses: ["auth-google-button", "auth-kakao-button"],
    phases: [
        {
            id: "mobile",
            name: "모바일",
            route: "/login/mobile",
            html: `
    <div class="ws-login-mobile">
      <div class="ws-login-mobile-card">
        <div class="ws-login-chip">워크스페이스 로그인</div>
        <div class="ws-login-logo-wrap">
          <div class="ws-login-logo"></div>
          <div>
            <div class="ws-login-wordmark">Shannon</div>
            <div class="ws-login-version">v0.0.1 워크스페이스</div>
          </div>
        </div>
        <div class="ws-login-title">로그인 방법을 선택해 주세요</div>
        <div class="ws-login-copy">저장된 프로젝트와 마지막 작업 상태를 바로 이어서 불러와요.</div>
        <div class="ws-login-auth-grid" style="margin-top: 20px;">
          <button class="auth-google-button" type="button">
            <div class="auth-google-button-mark"><span>G</span></div>
            <div class="auth-google-button-copy">
              <div class="auth-google-button-title">구글로 로그인</div>
              <div class="auth-google-button-sub">Google 계정으로 안전하게 시작해요</div>
            </div>
            <div class="auth-google-button-arrow">+</div>
          </button>
          <button class="auth-kakao-button" type="button">
            <div class="auth-kakao-button-mark">K</div>
            <div class="auth-kakao-button-copy">
              <div class="auth-kakao-button-title">카카오로 로그인</div>
              <div class="auth-kakao-button-sub">카카오 계정으로 빠르게 들어와요</div>
            </div>
            <div class="auth-kakao-button-arrow">+</div>
          </button>
        </div>
        <div class="ws-login-footnote">로그인하면 자동으로 대시보드로 이동해요.</div>
      </div>
    </div>
  `,
            spec: {
                colors: { card: "rgba(20,22,36,0.72)", accent: "var(--c-lav)" },
                size: { frame: "390x844", radius: "26px" },
                spacing: { padding: "20px", cardPadding: "24px" }
            },
            note: "Compact mobile variant with the same single-action auth focus."
        }
    ],
    css: `
    .ws-login-root {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-glass: rgba(20, 22, 36, 0.3);
      --c-logo: #564B60;
      --c-white: #F1F5F9;
      --c-gray: #94A3B8;
      --c-pink: rgba(233, 213, 255, 0.8);
      --c-lav: #DDB7FF;
      --c-purple: #490080;
      --bg-main: url("../../client/public/main-bg.png");
      width: 100%;
      height: 900px;
      padding: 20px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-sizing: border-box;
      color: var(--c-white);
      font-family: var(--font-sans);
      background:
        radial-gradient(circle at 18% 18%, rgba(221,183,255,0.16), transparent 24%),
        radial-gradient(circle at 82% 14%, rgba(233,213,255,0.14), transparent 22%),
        linear-gradient(180deg, rgba(10,13,24,0.38), rgba(10,13,24,0.68)),
        var(--bg-main) no-repeat center center;
      background-size: auto, auto, auto, cover;
    }
    .ws-login-orb {
      position: absolute;
      border-radius: 999px;
      filter: blur(24px);
      opacity: 0.75;
      pointer-events: none;
    }
    .ws-login-orb.a {
      width: 180px;
      height: 180px;
      top: 90px;
      left: 120px;
      background: rgba(221,183,255,0.18);
    }
    .ws-login-orb.b {
      width: 220px;
      height: 220px;
      right: 120px;
      bottom: 90px;
      background: rgba(86,75,96,0.36);
    }
    .ws-login-shell {
      width: 100%;
      max-width: 452px;
      position: relative;
      z-index: 1;
    }
    .ws-login-card {
      border: 1px solid rgba(255,255,255,0.16);
      border-radius: 28px;
      padding: 32px;
      background: linear-gradient(180deg, rgba(31,26,35,0.72), rgba(20,22,36,0.62));
      box-shadow: 0 28px 80px rgba(15,23,42,0.36);
      backdrop-filter: blur(22px);
    }
    .ws-login-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(221,183,255,0.24);
      background: rgba(221,183,255,0.08);
      color: var(--c-lav);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.04em;
    }
    .ws-login-logo-wrap {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 18px;
    }
    .ws-login-logo {
      width: 68px;
      height: 68px;
      border-radius: 20px;
      background: url("../client/public/logo.png") center/cover no-repeat, linear-gradient(135deg, rgba(221,183,255,0.98), rgba(86,75,96,0.94));
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 16px 34px rgba(15,23,42,0.3);
      border: 1px solid rgba(255,255,255,0.14);
      position: relative;
      flex-shrink: 0;
      overflow: hidden;
    }
    .ws-login-logo::after {
      display: none;
    }
    .ws-login-wordmark {
      font-size: 26px;
      font-weight: 900;
      line-height: 1;
      color: var(--c-white);
    }
    .ws-login-version {
      margin-top: 6px;
      font-size: 11px;
      color: rgba(241,245,249,0.62);
    }
    .ws-login-title {
      margin-top: 28px;
      font-size: 30px;
      line-height: 1.08;
      font-weight: 900;
      color: var(--c-white);
      letter-spacing: -0.02em;
    }
    .ws-login-copy {
      margin-top: 12px;
      font-size: 12px;
      line-height: 1.65;
      color: #CBD5E1;
      max-width: 320px;
    }
    .ws-login-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    .ws-login-auth-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 12px;
      margin-top: 24px;
    }
    .ws-login-pill {
      padding: 5px 9px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      color: rgba(241,245,249,0.72);
      font-size: 10px;
      font-weight: 700;
    }
    .ws-login-footnote {
      margin-top: 14px;
      font-size: 10px;
      line-height: 1.5;
      color: rgba(241,245,249,0.52);
    }
    .ws-login-mobile {
      --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      --c-white: #F1F5F9;
      --c-lav: #DDB7FF;
      --c-gray: #94A3B8;
      --bg-main: url("../../client/public/main-bg.png");
      width: 390px;
      height: 844px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--c-white);
      font-family: var(--font-sans);
      background:
        linear-gradient(180deg, rgba(10,13,24,0.42), rgba(10,13,24,0.68)),
        var(--bg-main) no-repeat center center;
      background-size: auto, cover;
    }
    .ws-login-mobile-card {
      width: 100%;
      border-radius: 26px;
      border: 1px solid rgba(255,255,255,0.16);
      padding: 24px;
      background: linear-gradient(180deg, rgba(31,26,35,0.78), rgba(20,22,36,0.7));
      backdrop-filter: blur(18px);
      box-shadow: 0 24px 60px rgba(15,23,42,0.32);
    }
    .ws-login-mobile .ws-login-title {
      font-size: 26px;
      margin-top: 24px;
    }
    .ws-login-mobile .ws-login-copy {
      max-width: none;
      font-size: 11px;
      line-height: 1.6;
    }
    .ws-login-mobile .ws-login-auth-grid {
      gap: 10px;
      margin-top: 20px;
    }
  `,
    html: `
    <div class="ws-login-root">
      <div class="ws-login-orb a"></div>
      <div class="ws-login-orb b"></div>
      <div class="ws-login-shell">
        <div class="ws-login-card">
          <div class="ws-login-chip">워크스페이스 로그인</div>
          <div class="ws-login-logo-wrap">
            <div class="ws-login-logo"></div>
            <div>
              <div class="ws-login-wordmark">Shannon</div>
              <div class="ws-login-version">v0.0.1 워크스페이스</div>
            </div>
          </div>
          <div class="ws-login-title">로그인하고 바로 이어서 시작하세요</div>
          <div class="ws-login-copy">Shannon에 로그인하면 저장된 프로젝트, 최근 작업 흐름, 정리 중인 초안을 한 번에 이어서 불러올 수 있어요.</div>
          <div class="ws-login-meta">
            <div class="ws-login-pill">구글 OAuth</div>
            <div class="ws-login-pill">카카오 로그인</div>
            <div class="ws-login-pill">저장된 프로젝트 복원</div>
          </div>
          <div class="ws-login-auth-grid">
            <button class="auth-google-button" type="button">
              <div class="auth-google-button-mark"><span>G</span></div>
              <div class="auth-google-button-copy">
                <div class="auth-google-button-title">구글로 계속하기</div>
                <div class="auth-google-button-sub">Google 계정으로 동기화하고 여러 기기에서 이어서 작업해요</div>
              </div>
              <div class="auth-google-button-arrow">→</div>
            </button>
            <button class="auth-kakao-button" type="button">
              <div class="auth-kakao-button-mark">K</div>
              <div class="auth-kakao-button-copy">
                <div class="auth-kakao-button-title">카카오로 계속하기</div>
                <div class="auth-kakao-button-sub">카카오 계정으로 빠르게 들어오고 모바일에서도 자연스럽게 이어가요</div>
              </div>
              <div class="auth-kakao-button-arrow">→</div>
            </button>
          </div>
          <div class="ws-login-footnote">로그인 후에는 자동으로 대시보드로 이동해요.</div>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { background: "var(--bg-main)", card: "linear-gradient(180deg, rgba(31,26,35,0.72), rgba(20,22,36,0.62))", accent: "var(--c-lav)", text: "var(--c-white)" },
        size: { frame: "1440x900", cardWidth: "452px", logo: "68px", buttonHeight: "64px", authColumns: "1" },
        spacing: { rootPadding: "20px", cardPadding: "32px", contentGap: "12px-28px", authGap: "12px" }
    },
    note: "구글과 카카오 로그인 버튼을 세로로 배치한 Shannon 로그인 워크스페이스입니다."
});
