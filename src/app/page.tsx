import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import ScrollReveal from '@/components/ScrollReveal'
import KpiStats from '@/components/KpiStats'
import LogoMarquee from '@/components/LogoMarquee'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export default async function Home() {
  let consultingLogos: { id: string; name: string; imageUrl: string }[] = []
  try {
    consultingLogos = await prisma.logo.findMany({
      where: { published: true, category: 'consulting' },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
  } catch {
    // DB unavailable — render without logos
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'ホーム', url: 'https://www.opinio.co.jp' }]} />

      {/* ═══════════════════════════════════════════
          HERO — white background, bold black type
      ═══════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#fff',
        borderBottom: '1px solid #000',
        position: 'relative',
      }}>
        {/* Thin top line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#000' }} />

        <div className="container-v3" style={{ padding: '120px 40px 140px' }}>
          {/* Eyebrow */}
          <p className="hero-eyebrow-anim" style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#999', marginBottom: 40,
          }}>
            AI ERA · CAREER INFRASTRUCTURE
          </p>

          {/* Main headline — very large */}
          <h1 className="hero-title-anim" style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(44px, 6.5vw, 84px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#000',
            marginBottom: 48,
          }}>
            AI時代の<br />
            キャリアインフラを創る
          </h1>

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: '#000', marginBottom: 32 }} />

          {/* Subtitle */}
          <p className="hero-subtitle-anim" style={{
            fontSize: 17, lineHeight: 1.9,
            color: '#555',
            marginBottom: 52,
            maxWidth: 440,
          }}>
            エージェント事業とHR Techで、<br />
            キャリアの意思決定に中立な第3者の目を。
          </p>

          {/* CTAs */}
          <div className="hero-actions-anim" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact/?type=candidate" className="btn-v3 btn-v3-black btn-v3-large">
              候補者相談を申し込む
            </Link>
            <Link href="/contact/?type=business" style={{
              color: '#000', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', paddingBottom: 3,
              borderBottom: '1px solid #000',
            }}>
              企業の採用相談はこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOGO GRID — static, many logos at once
      ═══════════════════════════════════════════ */}
      <section style={{
        padding: '80px 0 96px',
        background: '#F4F4F4',
      }}>
        <div className="container-v3">
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#aaa',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              TRUSTED BY 120+ COMPANIES
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 2.8vw, 30px)',
              color: '#000', letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}>
              IT/SaaS業界の企業に選ばれています
            </h2>
          </div>

          {/* Logo cards — float style */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 12,
          }}>
            {[
              { file: 'sansan.png',       name: 'Sansan' },
              { file: 'loglass.png',      name: 'Loglass' },
              { file: 'caddi.png',        name: 'CADDi' },
              { file: 'estie.png',        name: 'Estie' },
              { file: 'laprass.png',      name: 'LAPRAS' },
              { file: 'terradrone.png',   name: 'TerraDrone' },
              { file: 'revcomm.png',      name: 'RevComm' },
              { file: 'tebiki.png',       name: 'Tebiki' },
              { file: 'plaid.png',        name: 'Plaid' },
              { file: 'upsider.png',      name: 'Upsider' },
              { file: 'micoworks.png',    name: 'MicoWorks' },
              { file: 'xmile.png',        name: 'X Mile' },
              { file: 'talentx.png',      name: 'TalentX' },
              { file: 'skillnote.png',    name: 'Skillnote' },
              { file: 'plex.png',         name: 'Plex' },
              { file: 'nexta.png',        name: 'Nexta' },
              { file: 'mntsq.jpg',        name: 'MNTSQ' },
              { file: 'leverages.svg',    name: 'Leverages' },
              { file: 'leadingmark.png',  name: 'Leadingmark' },
              { file: 'ingage.png',       name: 'Ingage' },
              { file: 'trustdock.jpg',    name: 'Trustdock' },
              { file: 'softbrain.jpg',    name: 'Softbrain' },
              { file: 'smart-soudan.png', name: 'Smart相談室' },
              { file: 'salesnow.jpeg',    name: 'SalesNow' },
              { file: 'batonz.png',       name: 'バトンズ' },
              { file: 'archivillage.png', name: 'ArchiVillage' },
              { file: 'plan-b.png',       name: 'Plan-B' },
              { file: 'epicbase.jpeg',    name: 'EpicBase' },
              { file: 'connexion.jpg',    name: 'Connexion' },
              { file: 'hurray3.png',      name: '1ROLL' },
            ].map((logo) => (
              <div key={logo.file} style={{
                background: '#fff',
                borderRadius: 10,
                border: '1px solid #E8E8E8',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                height: 88,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/logos/${logo.file}`}
                  alt={logo.name}
                  style={{
                    maxHeight: 44,
                    maxWidth: 120,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT — what OPINIO is
      ═══════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#fff', borderTop: '1px solid #E0E0E0' }}>
        <div className="container-v3">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 80, alignItems: 'start',
          }}>
            {/* Left: heading */}
            <ScrollReveal>
              <p style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11, color: '#999',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                marginBottom: 20,
              }}>ABOUT</p>
              <h2 style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.6vw, 48px)',
                lineHeight: 1.15, letterSpacing: '-0.025em',
                color: '#000', marginBottom: 0,
              }}>
                第3者に相談可能な<br />
                キャリアプラットフォーム
              </h2>
            </ScrollReveal>

            {/* Right: description + two points */}
            <ScrollReveal delay={80}>
              <p style={{
                fontSize: 16, color: '#444', lineHeight: 1.9,
                marginBottom: 48,
              }}>
                私たちは、HR領域における「情報の信頼性」に向き合い、
                求職者・企業の双方にとって正直で信頼できる選択を支える仕組みを構築しています。
                第三者の声とテクノロジーを融合したプロダクトで、人と組織のよりよい出会いを実現していきます。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #000' }}>
                {[
                  {
                    label: '求職者の方へ',
                    text: '企業のカルチャーや働き方を透明に。国家資格を持つキャリアコンサルタントへの相談も無料で利用できます。',
                    href: '/contact/?type=candidate',
                    linkText: '候補者相談を申し込む',
                  },
                  {
                    label: '採用担当者の方へ',
                    text: '自社の魅力を正しく届け、ミスマッチのない採用へ。IT/SaaS業界特化のプラットフォームで企業ページを開設できます。',
                    href: '/contact/?type=business',
                    linkText: '採用について相談する',
                  },
                ].map((item, i) => (
                  <div key={item.label} style={{
                    padding: '36px 40px',
                    borderBottom: i === 0 ? '1px solid #000' : 'none',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10, color: '#999',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      marginBottom: 12,
                    }}>{item.label}</p>
                    <p style={{ fontSize: 14, color: '#555', lineHeight: 1.85, marginBottom: 20 }}>{item.text}</p>
                    <Link href={item.href} style={{
                      fontSize: 13, fontWeight: 600, color: '#000',
                      textDecoration: 'none', borderBottom: '1px solid #000',
                      paddingBottom: 2,
                    }}>{item.linkText} →</Link>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISUAL BREAK — consulting image
      ═══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/consulting-image.webp"
          alt="" aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            filter: 'grayscale(100%) brightness(0.5)',
          }}
        />
        {/* Strong black overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.6)',
        }} />
        <div className="container-v3" style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center',
          padding: '40px 40px',
        }}>
          <blockquote style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            lineHeight: 1.6, color: '#fff',
            borderLeft: '3px solid #fff',
            paddingLeft: 32, maxWidth: 620, margin: 0,
          }}>
            キャリアの決断は、<br />
            信頼できる第3者とともに。
          </blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — two clear offerings
      ═══════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#F5F5F5', borderTop: '1px solid #E0E0E0' }} id="service">
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>SERVICE</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 64,
            }}>提供サービス</h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 0, border: '1px solid #000',
          }}>
            {/* OPINIO — white */}
            <ScrollReveal delay={60}>
              <div style={{
                padding: '52px 48px 60px',
                background: '#fff',
                borderRight: '1px solid #000',
                height: '100%',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 10, color: '#999',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>01 — HR TECH PLATFORM</p>
                <h3 style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontStyle: 'italic', fontWeight: 600,
                  fontSize: 30, color: '#000',
                  marginBottom: 20, lineHeight: 1.1,
                }}>OPINIO</h3>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 40 }}>
                  IT/SaaS業界の企業と求職者をつなぐ採用プラットフォーム。企業の求人情報・カルチャー・
                  働き方を詳しく開示し、求職者が「入社後のギャップ」を感じない採用体験を提供します。
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                  {['企業ページ・求人票の掲載', 'カジュアル面談の申込受付', 'キャリアメンター機能'].map(f => (
                    <li key={f} style={{ fontSize: 13, color: '#666', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ width: 4, height: 4, background: '#000', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid #E0E0E0' }}>
                  {[
                    { label: '企業ページを開設する', href: 'https://opinio.jp/business' },
                    { label: '求人・企業を探す', href: 'https://opinio.jp' },
                  ].map(link => (
                    <a key={link.label} href={link.href}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '15px 0', borderBottom: '1px solid #E0E0E0',
                        color: '#000', textDecoration: 'none',
                        fontSize: 13, fontWeight: 500,
                      }}>
                      <span>{link.label} <span style={{ fontSize: 10, color: '#bbb' }}>↗</span></span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Career Consulting — black */}
            <ScrollReveal delay={120}>
              <div style={{
                padding: '52px 48px 60px',
                background: '#000',
                height: '100%',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 10, color: '#666',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>02 — CAREER AGENT</p>
                <h3 style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontStyle: 'italic', fontWeight: 600,
                  fontSize: 30, color: '#fff',
                  marginBottom: 20, lineHeight: 1.1,
                }}>キャリアエージェント</h3>
                <p style={{ fontSize: 15, color: '#aaa', lineHeight: 1.85, marginBottom: 40 }}>
                  国家資格を持つキャリアコンサルタントが、IT/SaaS業界への転職・キャリアチェンジを個別にサポート。
                  転職を急かさず、中長期的な視点で意思決定を支援します。
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                  {['IT/SaaS業界特化の求人紹介', '国家資格保有コンサルタントが対応', '面談・書類添削・選考対策'].map(f => (
                    <li key={f} style={{ fontSize: 13, color: '#888', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ width: 4, height: 4, background: '#fff', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid #222' }}>
                  {[
                    { label: '採用について相談する', href: '/contact/?type=business' },
                    { label: 'キャリア相談を申し込む', href: '/contact/?type=candidate' },
                  ].map(link => (
                    <Link key={link.label} href={link.href} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '15px 0', borderBottom: '1px solid #222',
                      color: '#fff', textDecoration: 'none',
                      fontSize: 13, fontWeight: 500,
                    }}>
                      <span>{link.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#888' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHALLENGE FLOW — 課題 → OPINIO → 解決
      ═══════════════════════════════════════════ */}
      <section style={{ background: '#000', padding: '100px 0' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#555',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20, textAlign: 'center',
            }}>PROBLEM → SOLUTION</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#fff', marginBottom: 64, textAlign: 'center',
            }}>OPINIOが解決すること</h2>
          </ScrollReveal>

          {/* 3カラム: 課題 | OPINIO | 解決 */}
          <ScrollReveal delay={80}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 200px 1fr',
              border: '1px solid #222',
            }}>
              {/* 左：課題 */}
              <div style={{ padding: '52px 44px', borderRight: '1px solid #222' }}>
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: '#444', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>BEFORE</p>
                <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 36, fontWeight: 700, color: '#fff', marginBottom: 48, lineHeight: 1 }}>課題</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {[
                    { n: '01', title: '企業のリアルが見えない', text: '求人票だけでは文化・働き方の実態を把握できず、入社後にギャップが生まれる' },
                    { n: '02', title: '誰に相談すべきかわからない', text: 'エージェントは成約を優先しがちで、中立な立場でキャリアを見てくれる人がいない' },
                    { n: '03', title: '企業側も魅力を届けられない', text: '自社のカルチャーや実態を求職者に正しく伝える手段が限られている' },
                  ].map(item => (
                    <div key={item.n} style={{ display: 'flex', gap: 16 }}>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: '#444', paddingTop: 2, flexShrink: 0 }}>{item.n}</span>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: '#666', lineHeight: 1.75 }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 中央：OPINIO */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '40px 20px', textAlign: 'center', borderRight: '1px solid #222', position: 'relative',
              }}>
                <p style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 16 }}>OPINIO.</p>
                <div style={{ width: 28, height: 1, background: '#444', marginBottom: 16 }} />
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: '#666', lineHeight: 1.8, letterSpacing: '0.04em' }}>第三者の声と<br />テクノロジーで<br />つなぐ</p>
                <div style={{ marginTop: 20, fontSize: 10, border: '1px solid #333', padding: '4px 10px', letterSpacing: '0.1em', fontFamily: 'var(--font-mono), monospace', color: '#555' }}>HR TECH</div>
              </div>

              {/* 右：解決 */}
              <div style={{ padding: '52px 44px' }}>
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: '#444', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>AFTER</p>
                <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 36, fontWeight: 700, color: '#fff', marginBottom: 48, lineHeight: 1 }}>解決</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {[
                    { n: '01', title: '企業情報を透明に開示', text: '120社以上の企業ページでカルチャー・働き方・求人を一か所で確認。カジュアル面談も申込可能' },
                    { n: '02', title: '国家資格キャリアコンサルタントが伴走', text: '転職を急かさず、中長期の視点で意思決定をサポートする中立な第3者' },
                    { n: '03', title: 'ミスマッチのない採用を実現', text: '情報の透明性とキャリア支援の組み合わせで、早期離職率0%を達成' },
                  ].map(item => (
                    <div key={item.n} style={{ display: 'flex', gap: 16 }}>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: '#444', paddingTop: 2, flexShrink: 0 }}>{item.n}</span>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: '#666', lineHeight: 1.75 }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — 3 clear differentiators
      ═══════════════════════════════════════════ */}
      <section style={{
        padding: '120px 0',
        background: '#fff',
        borderTop: '1px solid #E0E0E0',
        borderBottom: '1px solid #E0E0E0',
      }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>FEATURES</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 64,
            }}>OPINIOの特徴</h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 0, border: '1px solid #000',
          }}>
            {[
              {
                num: '01',
                tag: 'IT/SaaS特化',
                title: '業界を深く知る\nチームが運営',
                desc: '代表はSalesforceに6年在籍した経験を持ちます。求人票に書かれない業界の実態・企業文化・キャリアパスを熟知しているため、表面的でないマッチングを実現できます。',
              },
              {
                num: '02',
                tag: '国家資格保有',
                title: '中立な立場で\n伴走するサポート',
                desc: '転職を急かさず、候補者のキャリアにとって本当に良い選択を一緒に考えます。国家資格キャリアコンサルタントが、求職者・企業どちらにも公正な情報を提供します。',
              },
              {
                num: '03',
                tag: '早期離職率 0%',
                title: 'ミスマッチを\n起こさない設計',
                desc: '企業の透明な情報開示とキャリア相談を組み合わせることで、入社後のギャップを最小化。入社後の早期離職率0%という実績がその証明です。',
              },
            ].map((r, i) => (
              <ScrollReveal key={r.num} delay={i * 80}>
                <div style={{
                  padding: '48px 40px 56px',
                  background: '#fff',
                  borderRight: i < 2 ? '1px solid #000' : 'none',
                  height: '100%',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 28, fontWeight: 700, color: '#000',
                      lineHeight: 1,
                    }}>{r.num}</span>
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10, color: '#555',
                      padding: '3px 8px', border: '1px solid #bbb',
                      letterSpacing: '0.06em',
                    }}>{r.tag}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontWeight: 700, fontSize: 20,
                    lineHeight: 1.45, marginBottom: 16,
                    color: '#000', whiteSpace: 'pre-line',
                  }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.9 }}>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LATEST — white bg
      ═══════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 16,
            }}>LATEST</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 64,
            }}>最新情報</h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64 }}>
            {[
              {
                col: 'News & Updates',
                allHref: '/news/',
                allLabel: 'ALL NEWS →',
                items: [
                  { date: '2026.05.20', cat: 'PRESS', title: 'OPINIOに「企業ページ下書き機能」「ジャンル別検索」を追加しました' },
                  { date: '2026.05.13', cat: 'PRODUCT', title: 'OPINIOのβ版企業向け新機能をリリース、登録企業数が拡大中' },
                  { date: '2026.04.28', cat: 'COMPANY', title: '代表 柴がJ-League OB会キャリア支援イベントに登壇しました' },
                ],
              },
              {
                col: 'Career Column',
                allHref: '/blog/',
                allLabel: 'ALL COLUMNS →',
                items: [
                  { date: '2026.05.18', cat: 'SAAS CAREER', title: 'SaaS業界でキャリアアップ転職する方法 — 市場価値を高める戦略とは' },
                  { date: '2026.05.10', cat: 'SALES', title: '【SaaS営業の給与事情】未経験・経験者の年収相場とキャリアアップ方法' },
                  { date: '2026.05.03', cat: 'AGENT', title: '転職エージェントと求人サイト、どっちを使うべき？違いを徹底比較' },
                ],
              },
            ].map((col, ci) => (
              <ScrollReveal key={col.col} delay={ci * 80}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontWeight: 600, fontSize: 18,
                    color: '#000', marginBottom: 0,
                    paddingBottom: 16,
                    borderBottom: '2px solid #000',
                  }}>{col.col}</h3>
                  {col.items.map((item, idx) => (
                    <a key={item.title} href={col.allHref} style={{
                      display: 'flex', flexDirection: 'column',
                      padding: '20px 0',
                      borderBottom: '1px solid #E0E0E0',
                      textDecoration: 'none', color: 'inherit',
                      transition: 'padding-left 0.2s',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: 11, color: '#999', marginBottom: 6,
                      }}>{item.date}</span>
                      <span style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-mono), monospace', fontSize: 10,
                        color: '#000', border: '1px solid #000',
                        padding: '2px 7px', marginBottom: 8,
                        letterSpacing: '0.05em',
                      }}>{item.cat}</span>
                      <span style={{
                        fontSize: 14, fontWeight: 500,
                        color: '#000', lineHeight: 1.65,
                      }}>{item.title}</span>
                    </a>
                  ))}
                  <a href={col.allHref} style={{
                    display: 'inline-block', marginTop: 20,
                    fontFamily: 'var(--font-mono), monospace', fontSize: 12,
                    color: '#000', textDecoration: 'none',
                    letterSpacing: '0.12em',
                    borderBottom: '1px solid #000', paddingBottom: 2,
                  }}>{col.allLabel}</a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER CTA — pure black
      ═══════════════════════════════════════════ */}
      <section style={{
        background: '#000', color: '#fff',
        padding: '120px 0', textAlign: 'center',
        borderTop: '1px solid #000',
      }}>
        <div className="container-v3">
          <ScrollReveal>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <p style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11, letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#666', marginBottom: 24,
              }}>GET IN TOUCH</p>
              <h2 style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 60px)',
                lineHeight: 1.1, letterSpacing: '-0.025em',
                marginBottom: 24, color: '#fff',
              }}>
                納得のいく選択を、<br />ご一緒に。
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.9,
                color: '#aaa',
                marginBottom: 52,
                maxWidth: 440,
                marginLeft: 'auto', marginRight: 'auto',
              }}>
                キャリア相談も、IT/SaaS人材の採用も、<br />OPINIOのご利用も。まずはお気軽にご相談ください。
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact/?type=candidate" className="btn-v3 btn-v3-large btn-v3-on-black">
                  候補者の方はこちら
                </Link>
                <Link href="/contact/?type=business" className="btn-v3 btn-v3-large btn-v3-on-black-outline">
                  企業の方はこちら
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
