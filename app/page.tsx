'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'top', label: 'トップ' },
    { id: 'menu', label: 'メニュー' },
    { id: 'info', label: '店舗情報' },
    { id: 'reserve', label: 'ご予約' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Header */}
      <header style={{ background: 'var(--bg-mid)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 20px' }}>
          <div className="site-header-inner">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '4px 0' }}>
              <div style={{ width: '40px', height: '40px', border: '1px solid var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: 'var(--accent)', flexShrink: 0 }}>
                炭
              </div>
              <div>
                <p style={{ fontFamily: "'Shippori Mincho B1', serif", fontSize: '20px', letterSpacing: '5px', color: 'var(--text)', fontWeight: '700', lineHeight: 1 }}>焼鳥まこ</p>
                <p style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-light)', marginTop: '3px' }}>YAKITORI · FUKUOKA YAKUIN</p>
              </div>
            </div>
            {/* Nav */}
            <nav className="site-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent',
                    color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-light)',
                    padding: '24px 16px 22px',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans JP', sans-serif",
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="main-pad" style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* ── TOP ── */}
        {activeTab === 'top' && (
          <div>
            {/* Hero */}
            <div className="hero-pad" style={{
              margin: '48px 0 64px',
              background: 'var(--bg-section)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '72px 56px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Ember glow */}
              <div style={{ position: 'absolute', bottom: '-60px', right: '60px', width: '260px', height: '260px', borderRadius: '50%', background: 'var(--accent-glow)', filter: 'blur(40px)', pointerEvents: 'none' }} />
              {/* Vertical decoration (hidden on mobile via CSS) */}
              <div className="hero-deco-text" style={{ position: 'absolute', top: '36px', right: '36px', writingMode: 'vertical-rl', fontFamily: "'Shippori Mincho B1', serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--border)' }}>
                薬院・炭火焼鳥
              </div>

              <p style={{ fontSize: '11px', letterSpacing: '4px', color: 'var(--accent)', marginBottom: '20px', fontFamily: "'Noto Sans JP', sans-serif' " }}>
                — 炭火 × 本格焼鳥 × 薬院 —
              </p>
              <h2 className="hero-title" style={{ fontFamily: "'Shippori Mincho B1', serif", lineHeight: '1.3', color: 'var(--text)', marginBottom: '20px', fontWeight: '800' }}>
                一串に、<br />魂を込める。
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: '2.2', maxWidth: '480px', marginBottom: '36px' }}>
                備長炭でじっくりと焼き上げる、本物の炭火焼鳥。<br />
                国産鶏を毎日仕入れ、部位の個性を最大限に引き出す。<br />
                福岡・薬院で、職人が紡ぐ一夜の物語を。
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('reserve')} style={{ background: 'var(--accent)', border: 'none', color: 'var(--white)', padding: '13px 28px', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', borderRadius: '1px', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '500', whiteSpace: 'nowrap' }}>
                  ご予約はこちら →
                </button>
                <button onClick={() => setActiveTab('menu')} style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-mid)', padding: '12px 24px', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', borderRadius: '1px', fontFamily: "'Noto Sans JP', sans-serif", whiteSpace: 'nowrap' }}>
                  メニューを見る
                </button>
              </div>
            </div>

            {/* 3 pillars */}
            <div className="grid-3" style={{ marginBottom: '64px' }}>
              {[
                { icon: '🔥', label: '備長炭', title: '本格炭火焼き', desc: '備長炭の遠赤外線が、鶏肉の旨みをしっかりと封じ込める。炭の香りまでが、この店の味。' },
                { icon: '🐓', label: '国産鶏', title: '毎日仕入れる新鮮な素材', desc: '産地にこだわった国産鶏を毎日仕入れ。部位ごとに最適な串打ちで素材を活かす。' },
                { icon: '🍶', label: 'お酒', title: '焼鳥に合う一杯', desc: '季節の地酒・本格焼酎・クラフトビール。一串一串に合わせてお選びください。' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '2px', padding: '32px 24px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '9px', letterSpacing: '2px', color: 'var(--border)', border: '1px solid var(--border)', padding: '3px 8px', borderRadius: '20px', fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: '26px', marginBottom: '14px' }}>{item.icon}</p>
                  <h3 style={{ fontFamily: "'Shippori Mincho B1', serif", fontSize: '15px', color: 'var(--text)', marginBottom: '10px', letterSpacing: '1px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '13px', lineHeight: '1.9' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Info bar */}
            <div className="info-bar" style={{ background: 'var(--bg-mid)', border: '1px solid var(--border)', borderRadius: '2px', padding: '28px 36px' }}>
              {[
                { label: 'Open', value: '18:00 — 翌0:00', sub: '月曜定休' },
                { label: 'Location', value: '福岡市中央区薬院2-14-18', sub: 'YAKUIN KZ LIFE BLD 2F' },
                { label: 'Tel', value: '092-214-7053', sub: '' },
              ].map(info => (
                <div key={info.label}>
                  <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '5px', textTransform: 'uppercase' }}>{info.label}</p>
                  <p style={{ color: 'var(--text)', fontSize: '14px', fontWeight: '500' }}>{info.value}</p>
                  {info.sub && <p style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '2px' }}>{info.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MENU ── */}
        {activeTab === 'menu' && (
          <div style={{ paddingTop: '48px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--accent)', marginBottom: '6px', textTransform: 'uppercase' }}>Menu</p>
              <h2 className="section-title" style={{ color: 'var(--text)', fontWeight: '700', letterSpacing: '3px' }}>お品書き</h2>
            </div>

            {[
              { category: '焼鳥（一串）', items: [
                { name: 'もも', price: '¥180', desc: 'ジューシーな鶏もも肉の定番串' },
                { name: 'ねぎま', price: '¥180', desc: '鶏もも×長ねぎの黄金コンビ' },
                { name: 'つくね', price: '¥200', desc: '自家製タレで仕上げるふわふわつくね' },
                { name: 'かわ', price: '¥160', desc: 'パリパリ食感の鶏皮串' },
                { name: 'ささみ', price: '¥180', desc: 'さっぱりとしたヘルシー部位' },
                { name: 'レバー', price: '¥180', desc: '新鮮な鶏レバーを塩or甘辛で' },
                { name: 'ハツ', price: '¥180', desc: 'コリコリ食感のハツ串' },
                { name: 'ぼんじり', price: '¥200', desc: '希少な尾骨まわりの旨み凝縮部位' },
              ]},
              { category: '一品料理', items: [
                { name: '鶏刺し盛り合わせ', price: '¥980', desc: '新鮮な鶏肉のお刺身3種盛り' },
                { name: '鶏スープ', price: '¥480', desc: '長時間煮込んだ深みのある鶏だし' },
                { name: 'だし巻き玉子', price: '¥420', desc: '出汁の旨みたっぷりのふわふわ玉子' },
                { name: 'とり皮ポン酢', price: '¥480', desc: '香ばしく焼いた鶏皮をポン酢で' },
                { name: '〆の鶏ラーメン', price: '¥680', desc: '焼鳥の旨みが溶け込んだ〆の一杯' },
              ]},
              { category: 'ドリンク', items: [
                { name: '生ビール', price: '¥600', desc: 'キリン一番搾り 中ジョッキ' },
                { name: '日本酒（1合）', price: '¥680〜', desc: '季節の地酒を取り揃えております' },
                { name: '芋焼酎', price: '¥580', desc: '薩摩の本格芋焼酎 ロック/水割り' },
                { name: 'ハイボール', price: '¥520', desc: 'ウイスキーをソーダで割った定番' },
              ]},
            ].map((section, si) => (
              <div key={section.category} style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ width: '30px', height: '30px', border: '1px solid var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--accent)', flexShrink: 0, fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {si + 1}
                  </div>
                  <h3 style={{ fontFamily: "'Shippori Mincho B1', serif", fontSize: '17px', color: 'var(--text)', letterSpacing: '2px' }}>{section.category}</h3>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                </div>
                <div className="grid-2-menu" style={{ background: 'var(--border-subtle)' }}>
                  {section.items.map(item => (
                    <div key={item.name} style={{ background: 'var(--bg-card)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ color: 'var(--text)', fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>{item.name}</p>
                        <p style={{ color: 'var(--text-light)', fontSize: '12px' }}>{item.desc}</p>
                      </div>
                      <p style={{ fontFamily: "'Shippori Mincho B1', serif", color: 'var(--accent)', fontSize: '15px', fontWeight: '700', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p style={{ color: 'var(--text-light)', fontSize: '12px', textAlign: 'center' }}>
              ※ 価格は税込み表示です。仕入れ状況によりメニューが変わる場合がございます。
            </p>
          </div>
        )}

        {/* ── INFO ── */}
        {activeTab === 'info' && (
          <div style={{ paddingTop: '48px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--accent)', marginBottom: '6px', textTransform: 'uppercase' }}>Shop Info</p>
              <h2 className="section-title" style={{ color: 'var(--text)', fontWeight: '700', letterSpacing: '3px' }}>店舗情報・アクセス</h2>
            </div>
            <div className="grid-2">
              <div>
                {[
                  { label: '店名', value: '焼鳥まこ' },
                  { label: '電話番号', value: '092-214-7053' },
                  { label: '住所', value: '福岡市中央区薬院2丁目14-18\nYAKUIN KZ LIFE BLD 2階' },
                  { label: '営業時間', value: '18:00 〜 翌0:00' },
                  { label: '定休日', value: '月曜日' },
                  { label: 'Instagram', value: '@yakitori_mako' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                    <p style={{ fontSize: '11px', letterSpacing: '1px', color: 'var(--accent)', minWidth: '76px', paddingTop: '2px', flexShrink: 0 }}>{row.label}</p>
                    <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{row.value}</p>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '2px', padding: '28px', marginBottom: '16px' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '16px' }}>Access</p>
                  {[
                    { icon: '🚇', text: '地下鉄七隈線「薬院大通駅」徒歩5分' },
                    { icon: '🚃', text: '西鉄天神大牟田線「薬院駅」徒歩7分' },
                    { icon: '🚌', text: '西鉄バス「薬院大通」バス停すぐ' },
                  ].map(item => (
                    <div key={item.text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                      <p style={{ color: 'var(--text-mid)', fontSize: '13px', lineHeight: '1.7' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <a href="https://maps.google.com/?q=焼鳥まこ+福岡+薬院" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'var(--accent)', color: 'var(--white)', padding: '14px 20px', textAlign: 'center', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', borderRadius: '1px' }}>
                  Google マップで開く
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── RESERVE ── */}
        {activeTab === 'reserve' && (
          <div style={{ paddingTop: '48px', maxWidth: '600px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--accent)', marginBottom: '6px', textTransform: 'uppercase' }}>Reserve</p>
              <h2 className="section-title" style={{ color: 'var(--text)', fontWeight: '700', letterSpacing: '3px' }}>ご予約・お問い合わせ</h2>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: '2', marginBottom: '32px' }}>
              ご予約はお電話またはInstagramのDMにて承ります。<br />
              コース料理やご宴会のご相談もお気軽にどうぞ。
            </p>
            <div className="contact-grid" style={{ marginBottom: '32px' }}>
              <a href="tel:092-214-7053" style={{ display: 'block', background: 'var(--bg-section)', border: '1px solid var(--border)', color: 'var(--text)', padding: '26px 22px', textDecoration: 'none', borderRadius: '2px' }}>
                <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Phone</p>
                <p style={{ fontSize: '18px', letterSpacing: '1px', fontWeight: '500' }}>092-214-7053</p>
                <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '5px' }}>18:00 〜 23:30 / 月曜定休</p>
              </a>
              <a href="https://www.instagram.com/yakitori_mako" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', background: 'var(--accent)', color: 'var(--white)', padding: '26px 22px', textDecoration: 'none', borderRadius: '2px' }}>
                <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(250,244,232,0.7)', marginBottom: '8px', textTransform: 'uppercase' }}>Instagram DM</p>
                <p style={{ fontSize: '15px', letterSpacing: '1px', fontWeight: '500' }}>@yakitori_mako</p>
                <p style={{ fontSize: '11px', color: 'rgba(250,244,232,0.7)', marginTop: '5px' }}>DMからのご予約も可能です</p>
              </a>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '2px', padding: '22px 28px' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '13px', lineHeight: '2' }}>
                〒810-0022<br />
                福岡市中央区薬院2丁目14-18 YAKUIN KZ LIFE BLD 2階<br />
                焼鳥まこ
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-mid)', borderTop: '1px solid var(--border-subtle)', padding: '32px 20px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '30px', height: '30px', border: '1px solid var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'var(--accent)' }}>炭</div>
            <p style={{ fontFamily: "'Shippori Mincho B1', serif", fontSize: '17px', letterSpacing: '4px', color: 'var(--text)' }}>焼鳥まこ</p>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>© 2024 焼鳥まこ · 福岡市中央区薬院</p>
        </div>
      </footer>
    </div>
  )
}
