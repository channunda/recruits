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

const kakaoUrl = 'https://open.kakao.com/o/piq4pCUi'

const navItems = [
  ['소개', 'intro'],
  ['운영원칙', 'principles'],
  ['수사방식', 'process'],
  ['모집대상', 'recruit'],
  ['수사 함께하기', 'join'],
]

const qualifications = [
  '매주 《그것이 알고 싶다》, 《PD수첩》 등 범죄·시민 수사 다큐멘터리를 깊이 있게 시청하시는 분',
  '추리, 미스터리, 수사극 장르의 구조를 분석하고 기록하는 것을 즐기는 분',
  '흩어진 기사, 영상, 공공 기록을 체계적으로 수집하고 정리하는 데 집요함이 있는 분',
  '철저한 윤리 의식과 책임감을 바탕으로 비밀유지 및 가이드라인을 준수할 수 있는 분',
  '매주 최소 3시간 이상 팀원들과 원활하게 소통하며 조사에 참여할 수 있는 분',
]

const processSteps = [
  { number: '01', title: '4인 1조 팀 매칭', body: '1개 사건당 4명의 연구원·수사원으로 팀을 구성합니다.', icon: Users },
  { number: '02', title: '주 3시간 OSINT 분석', body: '언론 보도, 판결문, 공공 기록 등 공개 데이터(OSINT)를 수집 및 구조화합니다.', icon: FileSearch },
  { number: '03', title: '유의미한 수사자료 제출', body: '정밀 분석으로 도출한 의문점과 데이터 보고서를 경찰 및 관련 기관에 공식 제보합니다.', icon: Gavel },
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
            <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </header>

      <section id="intro" className="hero section-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>CIVIC INVESTIGATION UNIT / EST. 2026</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }}>공개된 파편 속에서 <em>진실을 구성합니다</em></motion.h1>
          <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25, duration: .7 }}>경찰과 협력하여 더 안전한 사회를 만드는 시민 수사 프로젝트.<br className="desktop-only" /> 창립 멤버를 모집합니다.</motion.p>
          <motion.a className="red-button" href={kakaoUrl} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .7 }}>수사 함께하기 <ArrowUpRight size={16} /></motion.a>
        </div>
        <div className="hero-visual" role="img" aria-label="어두운 증거 보드와 기록물을 살피는 포렌식 조사 장면"><div className="hero-image" /><div className="visual-label">CASE FILE / OPEN SOURCE<br /><span>TRUTH IS IN THE DETAILS</span></div><div className="visual-line" /></div>
        <div className="hero-index">01 <span>/</span> 05</div>
        <a className="scroll-cue" href="#principles">SCROLL TO INVESTIGATE <ChevronDown size={15} /></a>
      </section>

      <section id="principles" className="principles content-section">
        <div className="section-heading"><p className="eyebrow">01 / OPERATING PRINCIPLES</p><h2>두 가지 원칙은<br /><em>타협하지 않습니다.</em></h2></div>
        <div className="principle-grid">
          <motion.article className="principle-card" whileHover={{ y: -4 }}><div className="card-top"><span>RULE 01</span><ShieldAlert /></div><h3>2차 피해 방지 우선</h3><p>2차 피해 가능성이 농후하거나 실제 피해 사례가 발생할 경우 즉시 해당 수사를 중단합니다.</p><div className="card-stamp">STOP<br />IF HARM</div></motion.article>
          <motion.article className="principle-card" whileHover={{ y: -4 }}><div className="card-top"><span>RULE 02</span><Fingerprint /></div><h3>법적 윤리 준수</h3><p>민간 자율 수사의 한계를 명확히 하며, 수사 과정 중 불법적인 상황을 인지할 경우 즉시 수사를 중단합니다.</p><div className="card-stamp">WITHIN<br />THE LAW</div></motion.article>
        </div>
      </section>

      <section id="process" className="process content-section section-grid"><div className="section-heading"><p className="eyebrow">02 / THE METHOD</p><h2>네 명의 시선으로<br /><em>하나의 사건을 봅니다.</em></h2><p className="section-intro">감정이 아닌 기록으로, 추측이 아닌 검증으로. 팀 단위 OSINT 수사가 작동하는 방식입니다.</p></div><div className="process-list">{processSteps.map(({ number, title, body, icon: Icon }, i) => <motion.article key={number} className="process-step" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}><div className="step-number">{number}</div><div className="step-icon"><Icon /></div><div><h3>{title}</h3><p>{body}</p></div></motion.article>)}</div></section>

      <section id="recruit" className="recruit content-section"><div className="recruit-image" role="img" aria-label="어두운 수사 기록 보관소의 사건 파일" /><div className="recruit-copy"><p className="eyebrow">03 / WHO WE NEED</p><h2>이런 분을<br /><em>기다립니다.</em></h2><ul>{qualifications.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul></div></section>

      <section className="schedule content-section"><div><p className="eyebrow">04 / FIELD NOTES</p><h2>꾸준함이 만드는<br /><em>새로운 단서</em></h2></div><div className="schedule-grid"><div><Timer /><span>활동 시간</span><strong>매주 3시간</strong><p>온라인 자율 및 팀별 협의</p></div><div><Users /><span>운영 방식</span><strong>창립 멤버 단계</strong><p>수사단 구성원과 함께 세부 운영 규칙 및 첫 사건 선정을 정립합니다.</p></div></div></section>

      <section id="join" className="final-cta"><p className="eyebrow">05 / JOIN THE INVESTIGATION</p><h2>진실을 향한 첫 걸음,<br /><em>당신의 눈과 기록이 필요합니다.</em></h2><a className="red-button large" href={kakaoUrl} target="_blank" rel="noopener noreferrer">카카오톡 오픈채팅 입장하기 <ArrowUpRight size={18} /></a></section>
      <footer><a href="#intro" className="brand"><Mark /><span><b>민간수사단</b> <strong>“찾는다”</strong></span></a><p>© 2026 민간수사단 찾는다. All rights reserved.</p><span className="footer-code">FIND / 2026</span></footer>
    </main>
  )
}
