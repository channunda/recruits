'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Crosshair,
  FileSearch,
  Fingerprint,
  Gavel,
  Menu,
  ShieldAlert,
  Timer,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

const APPLY_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScfdZL8cPM2y189Izxga8_Il1nkiHeDEGoq_620QpgYneUiuw/viewform?usp=dialog'
const KAKAO_URL = 'https://open.kakao.com/o/piq4pCUi'

const navItems = [
  ['소개', 'intro'],
  ['시작한 이유', 'why'],
  ['활동 방식', 'process'],
  ['운영원칙', 'principles'],
  ['모집대상', 'recruit'],
  ['일정', 'schedule'],
  ['지원하기', APPLY_FORM_URL],
]

const qualifications = [
  '매주 《그것이 알고 싶다》, 《PD수첩》 등 범죄·시민 수사 다큐멘터리를 깊이 있게 시청하시는 분',
  '추리, 미스터리, 수사극 장르의 구조를 분석하고 기록하는 것을 즐기는 분',
  '흩어진 기사, 영상, 공공 기록을 체계적으로 수집하고 정리하는 데 집요함이 있는 분',
  '철저한 윤리 의식과 책임감을 바탕으로 비밀유지 및 가이드라인을 준수할 수 있는 분',
  '주 3시간 내외로 팀원들과 원활하게 소통하며 조사에 참여할 수 있는 분',
]

const processSteps = [
  { number: '01', title: '4인 1조 팀 매칭', body: '1개 사건당 4명의 연구원으로 팀을 구성합니다.', icon: Users },
  { number: '02', title: '주 3시간 내외 OSINT 분석', body: '언론 보도, 판결문, 공공 기록 등 공개 데이터(OSINT)를 수집 및 구조화합니다.', icon: FileSearch },
  { number: '03', title: '의미 있는 증거는 공식 제보', body: '정밀 분석으로 의미 있는 증거가 나오면, 의문점과 데이터 보고서를 경찰 및 관련 기관에 제보합니다.', icon: Gavel },
]

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Crosshair size={22} strokeWidth={1.7} />
    </span>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a href="#intro" className="brand" aria-label="민간수사단 찾는다 홈">
          <Mark />
          <span><b>민간수사단</b> <strong>“찾는다”</strong></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="주요 메뉴">
          {navItems.map(([label, href]) => (
            <a key={href} href={href === APPLY_FORM_URL ? href : `#${href}`} target={href === APPLY_FORM_URL ? '_blank' : undefined} rel={href === APPLY_FORM_URL ? 'noopener noreferrer' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </header>

      <section id="intro" className="hero section-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>CIVIC INVESTIGATION UNIT / EST. 2026</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }}>공개된 파편 속에서 <em>진실을 구성합니다</em></motion.h1>
          <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25, duration: .7 }}>시민의 눈으로 사건을 들여다보고, 의미 있는 증거는 경찰에 제보합니다.<br className="desktop-only" /> 창립 멤버를 모집합니다.</motion.p>
          <div className="hero-chips"><span className="eyebrow">공개 자료만 사용</span><span className="eyebrow">4인 1조</span><span className="eyebrow">주 3시간</span></div>
          <motion.a className="red-button" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .7 }}>지원하기 <ArrowUpRight size={16} /></motion.a>
          <p className="eyebrow hero-recruitment-note">2026.11.16 – 11.30 모집 · 정원 4명 · 12.1 출범</p>
        </div>
        <div className="hero-visual" role="img" aria-label="어두운 증거 보드와 기록물을 살피는 포렌식 조사 장면"><div className="hero-image" /><div className="visual-label">CASE FILE / OPEN SOURCE<br /><span>TRUTH IS IN THE DETAILS</span></div><div className="visual-line" /></div>
        <div className="hero-index">01 <span>/</span> 06</div>
        <a className="scroll-cue" href="#why">SCROLL TO INVESTIGATE <ChevronDown size={15} /></a>
      </section>

      <section id="why" className="why content-section section-grid">
        <div className="section-heading"><p className="eyebrow">01 / WHY WE START</p><h2>화면 속에서 멈추지 않고,<br /><em>직접 찾아보기로 했습니다.</em></h2></div>
        <p className="section-intro why-copy">실종아동의 현재 모습을 AI로 추정하는 프로젝트를 만들다가 생각했습니다. 화면 속 이미지를 만드는 데서 멈추지 말고, 우리가 직접 찾아보면 어떨까. ‘찾는다’는 거기서 시작했습니다. 사람을 찾는 일이기도, 사건을 다시 찾아보는 일이기도 합니다.</p>
      </section>

      <section id="process" className="process content-section section-grid"><div className="section-heading"><p className="eyebrow">02 / THE METHOD</p><h2>네 명의 시선으로<br /><em>하나의 사건을 봅니다.</em></h2><p className="section-intro">감정이 아닌 기록으로, 추측이 아닌 검증으로. 팀 단위 OSINT 수사가 작동하는 방식입니다.</p><p className="section-intro">OSINT(공개출처정보)는 누구나 합법적으로 접근할 수 있는 자료만 사용하는 조사 방식입니다. 우리는 공개 자료만 사용하고, 누구와도 직접 접촉하지 않으며, 당분간 온라인으로만 활동합니다.</p></div><div className="process-list">{processSteps.map(({ number, title, body, icon: Icon }, i) => <motion.article key={number} className="process-step" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}><div className="step-number">{number}</div><div className="step-icon"><Icon /></div><div><h3>{title}</h3><p>{body}</p></div></motion.article>)}</div></section>

      <section id="principles" className="principles content-section">
        <div className="section-heading"><p className="eyebrow">03 / OPERATING PRINCIPLES</p><p className="section-intro principles-intro">이렇게 활동하기에, 두 가지 원칙은 타협하지 않습니다.</p><h2>두 가지 원칙은<br /><em>타협하지 않습니다.</em></h2></div>
        <div className="principle-grid">
          <motion.article className="principle-card" whileHover={{ y: -4 }}><div className="card-top"><span>RULE 01</span><ShieldAlert /></div><h3>2차 피해 방지 우선</h3><p>2차 피해 가능성이 농후하거나 실제 피해 사례가 발생할 경우 즉시 해당 수사를 중단합니다.</p><div className="card-stamp">STOP<br />IF HARM</div></motion.article>
          <motion.article className="principle-card" whileHover={{ y: -4 }}><div className="card-top"><span>RULE 02</span><Fingerprint /></div><h3>법적 윤리 준수</h3><p>민간 자율 수사의 한계를 명확히 하며, 수사 과정 중 불법적인 상황을 인지할 경우 즉시 수사를 중단합니다.</p><div className="card-stamp">WITHIN<br />THE LAW</div></motion.article>
        </div>
      </section>

      <section id="recruit" className="recruit content-section"><div className="recruit-image" role="img" aria-label="어두운 수사 기록 보관소의 사건 파일" /><div className="recruit-copy"><p className="eyebrow">04 / WHO WE NEED</p><h2>이런 분을<br /><em>기다립니다.</em></h2><ul>{qualifications.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul></div></section>

      <section id="schedule" className="schedule content-section recruitment-schedule">
        <div>
          <p className="eyebrow">05 / SCHEDULE</p>
          <h2>모집 일정과<br /><em>지원 안내</em></h2>
        </div>
        <div>
          <div className="schedule-grid operating-mode-grid"><div><Timer /><span className="eyebrow">활동 시간</span><strong>주 3시간 내외</strong><p>온라인 자율 및 팀별 협의</p></div><div><Users /><span className="eyebrow">운영 방식</span><strong>창립 멤버 단계</strong><p>수사단 구성원과 함께 세부 운영 규칙 및 첫 사건 선정을 정립합니다. 첫 한 달은 연습 사건으로 호흡을 맞춥니다.</p></div></div>
          <p className="eyebrow schedule-subheading">모집 안내</p>
          <div className="schedule-grid">
            <div><span className="eyebrow">모집 기간</span><strong>2026년 11월 16일(월) – 11월 30일(월)</strong></div>
            <div><span className="eyebrow">모집 정원</span><strong>4명</strong></div>
            <div><span className="eyebrow">지원 방법</span><p>지원서(구글폼)를 제출해 주세요. 문의는 카카오톡 오픈채팅에서 받습니다.</p></div>
            <div><span className="eyebrow">인터뷰</span><p>지원서 제출 순서대로 한 분 한 분 개별 연락드려 진행합니다. 4명이 확정되면 모집을 마감합니다.</p></div>
            <div><span className="eyebrow">출범</span><strong>2026년 12월 1일(화)</strong></div>
            <div><span className="eyebrow">운영진</span><p>사건 팀에는 속하지 않고 관리 인력으로 참여하며, 사건 착수 승인, 중단 판단, 외부 제출 승인을 맡습니다.</p></div>
          </div>
          <p className="eyebrow plan-subheading">12월 활동 계획 (예시)</p>
          <div className="schedule-grid">
            <div><span className="eyebrow">12월 1주차 (12/1 – 12/6)</span><strong>킥오프</strong><p>원칙과 윤리 서약을 함께 읽고, 역할을 정하고, 연습 사건을 고릅니다.</p></div>
            <div><span className="eyebrow">12월 2주차 (12/7 – 12/13)</span><strong>자료 수집</strong><p>같은 사건의 공개 자료를 각자 모아 비교하고, 출처 기록 방식을 맞춥니다.</p></div>
            <div><span className="eyebrow">12월 3주차 (12/14 – 12/20)</span><strong>정리·분석</strong><p>타임라인을 만들고 사실과 추정을 구분합니다.</p></div>
            <div><span className="eyebrow">12월 4주차 (12/21 – 12/27)</span><strong>검수</strong><p>서로 점검하며 연습 보고서를 완성합니다.</p></div>
            <div><span className="eyebrow">12월 5주차 (12/28 – 12/31)</span><strong>회고</strong><p>한 달을 돌아보고 규칙을 확정하며, 다음 계획을 세웁니다.</p></div>
          </div>
          <p className="schedule-note">주 3시간 내외, 온라인으로 진행합니다. 첫 사건은 연습 사건이며 실제 제출은 포함하지 않습니다. 일정은 인원과 상황에 따라 조정될 수 있습니다.</p>
        </div>
      </section>

      <section id="join" className="final-cta"><p className="eyebrow">06 / JOIN THE INVESTIGATION</p><h2>진실을 향한 첫 걸음,<br /><em>당신의 눈과 기록이 필요합니다.</em></h2><p className="eyebrow">2026.11.16 – 11.30 · 모집 정원 4명</p><div className="join-actions"><a className="red-button large" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">지원서 작성하기 <ArrowUpRight size={18} /></a><a className="red-button large" href={KAKAO_URL} target="_blank" rel="noopener noreferrer">문의하기 (오픈채팅) <ArrowUpRight size={18} /></a></div><p className="section-intro join-guidance">오픈채팅은 문의만 받으며 사건에 대한 이야기는 하지 않습니다. 실명 대신 활동명 사용을 권장합니다.</p><p className="section-intro privacy-note">지원서에는 활동명, 연락 수단, 활동 가능 시간, 지원 동기를 받으며, 모집이 끝나면 선발되지 않은 분의 정보는 파기합니다.</p></section>
      <footer><a href="#intro" className="brand"><Mark /><span><b>민간수사단</b> <strong>“찾는다”</strong></span></a><p>© 2026 민간수사단 찾는다. All rights reserved.</p><span className="footer-code">찾는다 / 2026</span></footer>
    </main>
  )
}
