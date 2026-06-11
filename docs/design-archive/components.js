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
      background: rgba(20, 22, 36, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 13px 15px;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .stat-card.hi {
      border-color: rgba(221, 183, 255, 0.28);
      background: rgba(221, 183, 255, 0.04);
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
      color: #334155;
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
        colors: { border: "rgba(255,255,255,0.08)", background: "rgba(20,22,36,0.5)", highlight: "#DDB7FF" },
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
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.02);
      margin-bottom: 4px;
      cursor: pointer;
    }
    .workflow-step-card.active {
      border-color: rgba(221,183,255,0.42);
      background: rgba(221,183,255,0.07);
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
        colors: { activeBorder: "rgba(221,183,255,0.42)", activeBg: "rgba(221,183,255,0.07)", line: "rgba(255,255,255,0.07)" },
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


/* ── Shannon Workspaces ── */

Archive.add({
    type: "workspace",
    id: "ws-dashboard",
    name: "Dashboard Home",
    route: "/dashboard",
    status: "draft",
    uses: ["btn-shannon-primary", "status-badge", "stat-card", "project-row"],
    css: `
    .ws-dashboard-root {
      display: flex;
      width: 100%;
      height: 540px;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(73, 0, 128, 0.25) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(88, 28, 135, 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 60% 80%, rgba(49, 10, 100, 0.3) 0%, transparent 55%),
        linear-gradient(135deg, #0c0a18 0%, #12082a 50%, #0a0a1a 100%);
      color: #F1F5F9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    .ws-dashboard-sidebar {
      width: 192px;
      flex-shrink: 0;
      background: rgba(20, 22, 36, 0.3);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 20px 14px;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .ws-dashboard-logo-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      flex-shrink: 0;
    }
    .ws-dashboard-logo-box {
      width: 28px;
      height: 28px;
      background: #564B60;
      border-radius: 7px;
      flex-shrink: 0;
    }
    .ws-dashboard-logo-name {
      font-size: 14px;
      font-weight: 800;
      color: #c084fc;
    }
    .ws-dashboard-logo-ver {
      font-size: 9px;
      color: #a855f7;
      opacity: 0.6;
    }
    .ws-dashboard-sec-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.3);
      margin: 12px 0 5px;
    }
    .ws-dashboard-nav-item {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 7px 9px;
      border-radius: 7px;
      margin-bottom: 2px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 11px;
      cursor: pointer;
    }
    .ws-dashboard-nav-item.active {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #F1F5F9;
    }
    .ws-dashboard-nav-icon {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.12);
      flex-shrink: 0;
    }
    .ws-dashboard-nav-icon.lav {
      background: rgba(221, 183, 255, 0.35);
    }
    .ws-dashboard-nav-name {
      font-size: 10.5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ws-dashboard-sidebar-footer {
      margin-top: auto;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 12px;
    }
    .ws-dashboard-main {
      flex: 1;
      padding: 22px 26px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
    }
    .ws-dashboard-greeting {
      font-size: 18px;
      font-weight: 800;
      color: #F1F5F9;
      text-align: left;
    }
    .ws-dashboard-greeting-sub {
      font-size: 11px;
      color: #475569;
      margin-top: 2px;
      text-align: left;
    }
    .ws-dashboard-stat-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .ws-dashboard-sh {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .ws-dashboard-sh-title {
      font-size: 11px;
      font-weight: 700;
      color: #94A3B8;
    }
    .ws-dashboard-sh-link {
      font-size: 10px;
      color: #475569;
      cursor: pointer;
    }
    .ws-dashboard-quick-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .ws-dashboard-quick-card {
      border: 1px dashed rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 10px 13px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.35);
      display: flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;
      text-align: left;
    }
    .ws-dashboard-quick-dot {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background: rgba(221, 183, 255, 0.08);
      border: 1px solid rgba(221, 183, 255, 0.14);
      flex-shrink: 0;
    }
  `,
    html: `
    <div class="ws-dashboard-root">
      <!-- Sidebar -->
      <div class="ws-dashboard-sidebar">
        <div class="ws-dashboard-logo-row">
          <div class="ws-dashboard-logo-box"></div>
          <div>
            <div class="ws-dashboard-logo-name">Shannon</div>
            <div class="ws-dashboard-logo-ver">v0.0.1</div>
          </div>
        </div>
        <div class="ws-dashboard-sec-label">프로젝트</div>
        <div class="ws-dashboard-nav-item active">
          <div class="ws-dashboard-nav-icon lav"></div>
          <div class="ws-dashboard-nav-name">포트폴리오 사이트 만들기</div>
        </div>
        <div class="ws-dashboard-nav-item">
          <div class="ws-dashboard-nav-icon"></div>
          <div class="ws-dashboard-nav-name">관리자 대시보드 리팩토링</div>
        </div>
        <div class="ws-dashboard-nav-item">
          <div class="ws-dashboard-nav-icon"></div>
          <div class="ws-dashboard-nav-name">웹 기초 강의 PPT</div>
        </div>
        <div class="ws-dashboard-sec-label">최근</div>
        <div class="ws-dashboard-nav-item">
          <div class="ws-dashboard-nav-icon"></div>
          <div class="ws-dashboard-nav-name">SaaS 랜딩 페이지</div>
        </div>
        <div class="ws-dashboard-nav-item">
          <div class="ws-dashboard-nav-icon"></div>
          <div class="ws-dashboard-nav-name">이커머스 백오피스</div>
        </div>
        <div class="ws-dashboard-sidebar-footer">
          <button class="btn-shannon-primary">Create Project</button>
        </div>
      </div>

      <!-- Dashboard main content -->
      <div class="ws-dashboard-main">
        <div>
          <div class="ws-dashboard-greeting">안녕하세요 👋</div>
          <div class="ws-dashboard-greeting-sub">오늘도 Shannon과 함께 만들어볼까요?</div>
        </div>

        <!-- Stat Cards -->
        <div class="ws-dashboard-stat-row">
          <div class="stat-card hi">
            <div class="stat-card-label">전체 프로젝트</div>
            <div class="stat-card-val lav">5</div>
            <div class="stat-card-sub"><span class="up">+1</span> 이번 주</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">완료된 워크플로우</div>
            <div class="stat-card-val">12</div>
            <div class="stat-card-sub">총 단계 수</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">최근 생성일</div>
            <div class="stat-card-val" style="font-size:15px; margin-top:4px;">6월 11일</div>
            <div class="stat-card-sub">포트폴리오 사이트</div>
          </div>
        </div>

        <!-- Recent Projects -->
        <div>
          <div class="ws-dashboard-sh">
            <div class="ws-dashboard-sh-title">최근 프로젝트</div>
            <div class="ws-dashboard-sh-link">전체 보기 →</div>
          </div>
          <div class="project-row">
            <div class="project-row-icon"></div>
            <div class="project-row-meta">
              <div class="project-row-name">포트폴리오 사이트 만들기</div>
              <div class="project-row-type">사이드 프로젝트 · 4단계</div>
            </div>
            <div class="status-badge done">완료</div>
            <div class="project-row-arrow">›</div>
          </div>
          <div class="project-row">
            <div class="project-row-icon"></div>
            <div class="project-row-meta">
              <div class="project-row-name">관리자 대시보드 리팩토링</div>
              <div class="project-row-type">UI / UX 설계 · 6단계</div>
            </div>
            <div class="status-badge wip">진행 중</div>
            <div class="project-row-arrow">›</div>
          </div>
          <div class="project-row">
            <div class="project-row-icon"></div>
            <div class="project-row-meta">
              <div class="project-row-name">웹 기초 강의 PPT</div>
              <div class="project-row-type">발표 자료 · 5단계</div>
            </div>
            <div class="status-badge done">완료</div>
            <div class="project-row-arrow">›</div>
          </div>
        </div>

        <!-- Quick Start -->
        <div>
          <div class="ws-dashboard-sh-title" style="margin-bottom: 8px; text-align: left;">빠른 시작</div>
          <div class="ws-dashboard-quick-row">
            <div class="ws-dashboard-quick-card">
              <div class="ws-dashboard-quick-dot"></div>
              새 사이드 프로젝트 만들기
            </div>
            <div class="ws-dashboard-quick-card">
              <div class="ws-dashboard-quick-dot"></div>
              UI / UX 설계 시작하기
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { background: "#0c0a18", sidebar: "rgba(20,22,36,0.3)" },
        size: { frame: "1080px", sidebar: "192px" },
        spacing: { padding: "22px 26px" }
    },
    note: "Shannon MVP 대시보드 홈 화면 스펙."
});

Archive.add({
    type: "workspace",
    id: "ws-project-workspace",
    name: "Project Workspace",
    route: "/projects/:id",
    status: "draft",
    uses: ["btn-shannon-primary", "status-badge", "workflow-step-card", "section-card"],
    css: `
    .ws-pw-root {
      display: flex;
      width: 100%;
      height: 540px;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(73, 0, 128, 0.25) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(88, 28, 135, 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 60% 80%, rgba(49, 10, 100, 0.3) 0%, transparent 55%),
        linear-gradient(135deg, #0c0a18 0%, #12082a 50%, #0a0a1a 100%);
      color: #F1F5F9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    .ws-pw-sidebar {
      width: 192px;
      flex-shrink: 0;
      background: rgba(20, 22, 36, 0.3);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 20px 14px;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .ws-pw-logo-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      flex-shrink: 0;
    }
    .ws-pw-logo-box {
      width: 28px;
      height: 28px;
      background: #564B60;
      border-radius: 7px;
      flex-shrink: 0;
    }
    .ws-pw-logo-name {
      font-size: 14px;
      font-weight: 800;
      color: #c084fc;
    }
    .ws-pw-logo-ver {
      font-size: 9px;
      color: #a855f7;
      opacity: 0.6;
    }
    .ws-pw-sec-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.3);
      margin: 12px 0 5px;
    }
    .ws-pw-nav-item {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 7px 9px;
      border-radius: 7px;
      margin-bottom: 2px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 11px;
      cursor: pointer;
    }
    .ws-pw-nav-item.active {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #F1F5F9;
    }
    .ws-pw-nav-icon {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.12);
      flex-shrink: 0;
    }
    .ws-pw-nav-icon.lav {
      background: rgba(221, 183, 255, 0.35);
    }
    .ws-pw-nav-name {
      font-size: 10.5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ws-pw-sidebar-footer {
      margin-top: auto;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 12px;
    }
    .ws-pw-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .ws-pw-proj-bar {
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      height: 42px;
      background: rgba(12, 10, 24, 0.3);
    }
    .ws-pw-back-btn {
      font-size: 10px;
      color: #475569;
      cursor: pointer;
    }
    .ws-pw-bar-div {
      width: 1px;
      height: 13px;
      background: rgba(255, 255, 255, 0.08);
    }
    .ws-pw-type-chip {
      font-size: 9px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 20px;
      background: rgba(221, 183, 255, 0.1);
      color: #DDB7FF;
      border: 1px solid rgba(221, 183, 255, 0.2);
    }
    .ws-pw-proj-name {
      font-size: 12px;
      font-weight: 700;
      color: #E2E8F0;
    }
    .ws-pw-step-count {
      font-size: 10px;
      color: #475569;
      margin-left: auto;
    }
    .ws-pw-body {
      flex: 1;
      display: flex;
      min-height: 0;
    }
    .ws-pw-flow {
      width: 248px;
      flex-shrink: 0;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 16px 13px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .ws-pw-flow-lbl {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #334155;
      margin-bottom: 14px;
      text-align: left;
    }
    .ws-pw-detail {
      flex: 1;
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
    }
    .ws-pw-det-eye {
      font-size: 9px;
      font-weight: 700;
      color: #DDB7FF;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: left;
    }
    .ws-pw-det-title {
      font-size: 15px;
      font-weight: 800;
      color: #F1F5F9;
      margin-bottom: 3px;
      text-align: left;
    }
    .ws-pw-det-desc {
      font-size: 10px;
      color: #475569;
      line-height: 1.6;
      text-align: left;
    }
    .ws-pw-hr {
      height: 1px;
      background: rgba(255, 255, 255, 0.06);
    }
  `,
    html: `
    <div class="ws-pw-root">
      <!-- Sidebar -->
      <div class="ws-pw-sidebar">
        <div class="ws-pw-logo-row">
          <div class="ws-pw-logo-box"></div>
          <div>
            <div class="ws-pw-logo-name">Shannon</div>
            <div class="ws-pw-logo-ver">v0.0.1</div>
          </div>
        </div>
        <div class="ws-pw-sec-label">프로젝트</div>
        <div class="ws-pw-nav-item active">
          <div class="ws-pw-nav-icon lav"></div>
          <div class="ws-pw-nav-name">포트폴리오 사이트 만들기</div>
        </div>
        <div class="ws-pw-nav-item">
          <div class="ws-pw-nav-icon"></div>
          <div class="ws-pw-nav-name">관리자 대시보드 리팩토링</div>
        </div>
        <div class="ws-pw-nav-item">
          <div class="ws-pw-nav-icon"></div>
          <div class="ws-pw-nav-name">웹 기초 강의 PPT</div>
        </div>
        <div class="ws-pw-sec-label">최근</div>
        <div class="ws-pw-nav-item">
          <div class="ws-pw-nav-icon"></div>
          <div class="ws-pw-nav-name">SaaS 랜딩 페이지</div>
        </div>
        <div class="ws-pw-sidebar-footer">
          <button class="btn-shannon-primary">Create Project</button>
        </div>
      </div>

      <!-- Main Workspace Area -->
      <div class="ws-pw-main">
        <div class="ws-pw-proj-bar">
          <div class="ws-pw-back-btn">← 대시보드</div>
          <div class="ws-pw-bar-div"></div>
          <div class="ws-pw-type-chip">사이드 프로젝트</div>
          <div class="ws-pw-proj-name">포트폴리오 사이트 만들기</div>
          <div class="ws-pw-step-count">5단계 워크플로우</div>
        </div>

        <div class="ws-pw-body">
          <!-- LEFT: waterfall flow list -->
          <div class="ws-pw-flow">
            <div class="ws-pw-flow-lbl">워크플로우</div>
            
            <!-- Step 1 -->
            <div class="workflow-step-card-container">
              <div class="workflow-step-card-col">
                <div class="workflow-step-card-num done">✓</div>
                <div class="workflow-step-card-vline"></div>
              </div>
              <div class="workflow-step-card">
                <div class="workflow-step-card-title">요구사항 정의</div>
                <div class="workflow-step-card-sub">프로젝트 목표 및 핵심 기능</div>
                <div class="status-badge done" style="margin-top: 5px;">완료</div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="workflow-step-card-container">
              <div class="workflow-step-card-col">
                <div class="workflow-step-card-num active">2</div>
                <div class="workflow-step-card-vline active"></div>
              </div>
              <div class="workflow-step-card active">
                <div class="workflow-step-card-title active">기술 스택 선정</div>
                <div class="workflow-step-card-sub">프레임워크, 배포 환경</div>
                <div class="status-badge wip" style="margin-top: 5px;">보는 중</div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="workflow-step-card-container">
              <div class="workflow-step-card-col">
                <div class="workflow-step-card-num">3</div>
                <div class="workflow-step-card-vline"></div>
              </div>
              <div class="workflow-step-card">
                <div class="workflow-step-card-title">화면 구조 설계</div>
                <div class="workflow-step-card-sub">페이지 목록, 라우팅</div>
                <div class="status-badge pend" style="margin-top: 5px;">대기</div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="workflow-step-card-container">
              <div class="workflow-step-card-col">
                <div class="workflow-step-card-num">4</div>
                <div class="workflow-step-card-vline"></div>
              </div>
              <div class="workflow-step-card">
                <div class="workflow-step-card-title">컴포넌트 명세</div>
                <div class="workflow-step-card-sub">재사용 컴포넌트 & Props</div>
                <div class="status-badge pend" style="margin-top: 5px;">대기</div>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="workflow-step-card-container">
              <div class="workflow-step-card-col">
                <div class="workflow-step-card-num">5</div>
              </div>
              <div class="workflow-step-card">
                <div class="workflow-step-card-title">개발 우선순위</div>
                <div class="workflow-step-card-sub">MVP 범위 및 구현 순서</div>
                <div class="status-badge pend" style="margin-top: 5px;">대기</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: step detail panel -->
          <div class="ws-pw-detail">
            <div>
              <div class="ws-pw-det-eye">Step 2 · 기술 스택 선정</div>
              <div class="ws-pw-det-title">프레임워크 및 배포 환경 추천</div>
              <div class="ws-pw-det-desc">취업용 포트폴리오 사이트를 위한 최적 기술 스택입니다. SEO와 성능을 우선했습니다.</div>
            </div>
            
            <div class="ws-pw-hr"></div>

            <!-- Section Card 1 -->
            <div class="section-card hi">
              <div class="section-card-lbl">
                <div class="section-card-dot"></div>
                프론트엔드 프레임워크
              </div>
              <div class="section-card-body">
                <strong>Next.js 15 (App Router)</strong>를 추천합니다. SSG 정적 배포로 SEO와 성능에 유리하고, 최신 React 역량을 보여주기에 좋습니다.
              </div>
              <div class="section-card-tag-row">
                <div class="section-card-tag lav">Next.js 15</div>
                <div class="section-card-tag lav">TypeScript</div>
                <div class="section-card-tag lav">App Router</div>
              </div>
            </div>

            <!-- Section Card 2 -->
            <div class="section-card">
              <div class="section-card-lbl">
                <div class="section-card-dot"></div>
                스타일링
              </div>
              <div class="section-card-body">
                <strong>Tailwind CSS v4</strong>로 빠른 개발과 작은 번들 사이즈를 동시에 확보하세요.
              </div>
              <div class="section-card-tag-row">
                <div class="section-card-tag lav">Tailwind CSS v4</div>
                <div class="section-card-tag">shadcn/ui</div>
              </div>
            </div>

            <!-- Section Card 3 -->
            <div class="section-card">
              <div class="section-card-lbl">
                <div class="section-card-dot green"></div>
                배포 환경
              </div>
              <div class="section-card-body">
                <strong>Vercel</strong> 배포를 권장합니다. GitHub 연동 후 자동 배포, 무료 플랜에서 커스텀 도메인이 가능합니다.
              </div>
              <div class="section-card-tag-row">
                <div class="section-card-tag lav">Vercel</div>
                <div class="section-card-tag">GitHub Actions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    spec: {
        colors: { background: "#0c0a18", sidebar: "rgba(20,22,36,0.3)" },
        size: { frame: "1080px", sidebar: "192px", waterfallWidth: "248px" },
        spacing: { padding: "18px 20px" }
    },
    note: "특정 프로젝트 선택 시 워크플로우 시각화 및 가이드라인 상세 화면."
});