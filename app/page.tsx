'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <header style={{
        background: 'var(--primary)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,0.5)'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px 0' }}>
          <div style={{ textAlign: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            <p style={{ color: 'var(--accent-light)', fontSize: '11px', letterSpacing: '3px', marginBottom: '6px' }}>
              YAKITORI × FUKUOKA YAKUIN
            </p>
            <h1 style={{ color: 'var(--accent)', fontSize: '26px', letterSpacing: '4px', fontWeight: '700' }}>
              焼鳥まこ
            </h1>
            <p style={{ color: 'var(--accent-light)', fontSize: '12px', marginTop: '4px', letterSpacing: '1px' }}>
              福岡・薬院の本格炭火焼鳥
            </p>
          </div>

          {/* Tabs */}
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '0' }}>
            {([
              { id: 'top', label: 'トップ' },
              { id: 'menu', label: 'メニュー' },
              { id: 'info', label: '店舗情報' },
              { id: 'reserve', label: 'ご予約' },
            ] as { id: Tab; label: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent',
                  color: activeTab === tab.id ? 'var(--accent)' : 'var(--accent-light)',
                  padding: '14px 20px',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'Noto Sans JP, sans-serif',
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 60px' }}>

        {/* TOP TAB */}
        {activeTab === 'top' && (
          <div>
            {/* Hero */}
            <div style={{
              background: 'var(--primary-mid)',
              margin: '40px 0 48px',
              borderRadius: '4px',
              padding: '64px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(232,160,32,0.2)',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at center, rgba(232,160,32,0.07) 0%, transparent 70%)',
              }} />
              <p style={{ color: 'var(--accent)', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px' }}>
                炭火焼鳥 × 薬院
              </p>
              <h2 style={{ color: 'var(--accent-light)', fontSize: '28px', lineHeight: '1.6', marginBottom: '20px' }}>
                一本一本、丁寧に。<br />
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>炭火が生む本物の旨み</span>
              </h2>
              <p style={{ color: '#A08060', fontSize: '14px', lineHeight: '2', maxWidth: '480px', margin: '0 auto 32px' }}>
                厳選された国産鶏を使い、炭火でじっくりと焼き上げる焼鳥。
                素材の持ち味を最大限に活かした、シンプルで奥深い一串を
                薬院の夜にお楽しみください。
              </p>
              <button
                onClick={() => setActiveTab('menu')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  padding: '12px 32px',
                  fontSize: '13px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                }}
              >
                メニューを見る
              </button>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
              {[
                {
                  icon: '🔥',
                  title: '本格炭火焼き',
                  desc: '備長炭を使った本格的な炭火焼き。遠赤外線で旨みを閉じ込めます。'
                },
                {
                  icon: '🐓',
                  title: '厳選国産鶏',
                  desc: '毎日仕入れる新鮮な国産鶏を使用。部位ごとに最適な焼き加減で。'
                },
                {
                  icon: '🍶',
                  title: '充実のドリンク',
                  desc: '焼鳥に合う日本酒・焼酎・クラフトビールを豊富にご用意しています。'
                },
              ].map((f) => (
                <div key={f.title} style={{
                  background: 'var(--primary-mid)',
                  border: '1px solid rgba(232,160,32,0.15)',
                  borderRadius: '4px',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ color: 'var(--accent)', fontSize: '15px', marginBottom: '12px', fontWeight: '600' }}>{f.title}</h3>
                  <p style={{ color: '#A08060', fontSize: '13px', lineHeight: '1.9' }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Hours Quick */}
            <div style={{
              background: 'var(--primary)',
              border: '1px solid rgba(232,160,32,0.2)',
              borderRadius: '4px',
              padding: '32px 40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
            }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Hours</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '16px' }}>18:00 〜 翌0:00</p>
                <p style={{ color: '#7A6A54', fontSize: '13px', marginTop: '4px' }}>月曜定休</p>
              </div>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Location</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '14px' }}>福岡市中央区薬院2丁目14-18</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '14px' }}>YAKUIN KZ LIFE BLD 2階</p>
              </div>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '16px' }}>092-214-7053</p>
              </div>
            </div>
          </div>
        )}

        {/* MENU TAB */}
        {activeTab === 'menu' && (
          <div style={{ paddingTop: '40px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Menu</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>メニュー</p>

            {[
              {
                category: '焼鳥（串）',
                items: [
                  { name: 'もも', price: '¥180', desc: 'ジューシーな鶏もも肉の定番串' },
                  { name: 'ねぎま', price: '¥180', desc: '鶏もも×長ねぎの黄金コンビ' },
                  { name: 'つくね', price: '¥200', desc: '自家製タレで仕上げるふわふわつくね' },
                  { name: 'かわ', price: '¥160', desc: 'パリパリ食感の鶏皮串' },
                  { name: 'ささみ', price: '¥180', desc: 'さっぱりとしたヘルシー部位' },
                  { name: 'レバー', price: '¥180', desc: '新鮮な鶏レバーを塩or甘辛で' },
                  { name: 'ハツ', price: '¥180', desc: 'コリコリ食感の砂肝・ハツ' },
                  { name: 'ぼんじり', price: '¥200', desc: '希少な尾骨まわりの旨み凝縮部位' },
                ]
              },
              {
                category: 'おすすめ一品料理',
                items: [
                  { name: '鶏刺し盛り合わせ', price: '¥980', desc: '新鮮な鶏肉のお刺身3種盛り' },
                  { name: '鶏スープ', price: '¥480', desc: '長時間煮込んだ深みのある鶏だし' },
                  { name: 'だし巻き玉子', price: '¥420', desc: '出汁の旨みたっぷりのふわふわ玉子' },
                  { name: 'とり皮ポン酢', price: '¥480', desc: '香ばしく焼いた鶏皮をポン酢で' },
                  { name: '〆の鶏ラーメン', price: '¥680', desc: '焼鳥の旨みが溶け込んだ〆の一杯' },
                ]
              },
              {
                category: 'ドリンク',
                items: [
                  { name: '生ビール', price: '¥600', desc: 'キリン一番搾り 中ジョッキ' },
                  { name: '日本酒（1合）', price: '¥680〜', desc: '季節の地酒を取り揃えております' },
                  { name: '芋焼酎', price: '¥580', desc: '薩摩の本格芋焼酎 ロック/水割り' },
                  { name: 'ハイボール', price: '¥520', desc: 'ウイスキーをソーダで割った定番' },
                  { name: 'ソフトドリンク', price: '¥380〜', desc: 'ウーロン茶・コーラなど' },
                ]
              },
            ].map((section) => (
              <div key={section.category} style={{ marginBottom: '40px' }}>
                <h3 style={{
                  color: 'var(--accent)',
                  fontSize: '14px',
                  letterSpacing: '3px',
                  borderBottom: '1px solid rgba(232,160,32,0.3)',
                  paddingBottom: '12px',
                  marginBottom: '20px',
                }}>
                  {section.category}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {section.items.map((item) => (
                    <div key={item.name} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '16px 20px',
                      background: 'var(--primary-mid)',
                      border: '1px solid rgba(232,160,32,0.1)',
                      borderRadius: '3px',
                    }}>
                      <div>
                        <p style={{ color: 'var(--accent-light)', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>{item.name}</p>
                        <p style={{ color: '#7A6A54', fontSize: '12px' }}>{item.desc}</p>
                      </div>
                      <p style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '600', marginLeft: '16px', whiteSpace: 'nowrap' }}>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p style={{ color: '#7A6A54', fontSize: '12px', textAlign: 'center', marginTop: '8px' }}>
              ※ 価格は税込み表示です。仕入れ状況によりメニューが変わる場合がございます。
            </p>
          </div>
        )}

        {/* INFO TAB */}
        {activeTab === 'info' && (
          <div style={{ paddingTop: '40px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Shop Info</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>店舗情報・アクセス</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
              <div style={{
                background: 'var(--primary-mid)',
                border: '1px solid rgba(232,160,32,0.15)',
                borderRadius: '4px',
                padding: '32px',
              }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', marginBottom: '24px' }}>基本情報</h3>
                {[
                  { label: '店名', value: '焼鳥まこ' },
                  { label: '電話番号', value: '092-214-7053' },
                  { label: '住所', value: '福岡市中央区薬院2丁目14-18\nYAKUIN KZ LIFE BLD 2階' },
                  { label: '営業時間', value: '18:00 〜 翌0:00' },
                  { label: '定休日', value: '月曜日' },
                  { label: 'Instagram', value: '@yakitori_mako' },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: '1px solid rgba(232,160,32,0.1)',
                  }}>
                    <p style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px', paddingTop: '2px' }}>{row.label}</p>
                    <p style={{ color: 'var(--accent-light)', fontSize: '13px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{row.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <div style={{
                  background: 'var(--primary-mid)',
                  border: '1px solid rgba(232,160,32,0.15)',
                  borderRadius: '4px',
                  padding: '32px',
                  marginBottom: '24px',
                }}>
                  <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', marginBottom: '20px' }}>アクセス</h3>
                  {[
                    { icon: '🚇', text: '地下鉄七隈線「薬院大通駅」徒歩5分' },
                    { icon: '🚃', text: '西鉄天神大牟田線「薬院駅」徒歩7分' },
                    { icon: '🚌', text: '西鉄バス「薬院大通」バス停すぐ' },
                  ].map((item) => (
                    <div key={item.text} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '14px',
                    }}>
                      <span style={{ fontSize: '18px' }}>{item.icon}</span>
                      <p style={{ color: 'var(--accent-light)', fontSize: '13px', lineHeight: '1.7' }}>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--primary)',
                  border: '1px solid rgba(232,160,32,0.2)',
                  borderRadius: '4px',
                  padding: '24px 32px',
                }}>
                  <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', marginBottom: '16px' }}>Google マップで見る</h3>
                  <a
                    href="https://maps.google.com/?q=焼鳥まこ+福岡+薬院"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      padding: '10px 24px',
                      fontSize: '12px',
                      letterSpacing: '2px',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    地図を開く
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESERVE TAB */}
        {activeTab === 'reserve' && (
          <div style={{ paddingTop: '40px', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Reserve</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>ご予約・お問い合わせ</p>

            <div style={{
              background: 'var(--primary-mid)',
              border: '1px solid rgba(232,160,32,0.15)',
              borderRadius: '4px',
              padding: '40px',
              marginBottom: '32px',
            }}>
              <p style={{ color: 'var(--accent-light)', fontSize: '14px', lineHeight: '2', marginBottom: '28px', textAlign: 'center' }}>
                ご予約はお電話またはInstagramの<br />
                DMにてお気軽にお申し付けください。
              </p>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</p>
                <a href="tel:092-214-7053" style={{ color: 'var(--accent-light)', fontSize: '24px', textDecoration: 'none', letterSpacing: '2px' }}>
                  092-214-7053
                </a>
                <p style={{ color: '#7A6A54', fontSize: '12px', marginTop: '6px' }}>受付時間：18:00 〜 23:30（月曜定休）</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(232,160,32,0.15)', paddingTop: '24px', textAlign: 'center' }}>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Instagram DM</p>
                <a
                  href="https://www.instagram.com/yakitori_mako"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    padding: '12px 32px',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  @yakitori_mako
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--primary)',
              border: '1px solid rgba(232,160,32,0.2)',
              borderRadius: '4px',
              padding: '24px 32px',
              textAlign: 'center',
            }}>
              <p style={{ color: '#7A6A54', fontSize: '13px', lineHeight: '2' }}>
                〒810-0022<br />
                福岡市中央区薬院2丁目14-18<br />
                YAKUIN KZ LIFE BLD 2階<br />
                焼鳥まこ
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--primary)',
        borderTop: '1px solid rgba(232,160,32,0.15)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '4px', marginBottom: '8px' }}>焼鳥まこ</p>
        <p style={{ color: '#7A6A54', fontSize: '12px' }}>© 2024 焼鳥まこ. All rights reserved.</p>
      </footer>
    </div>
  )
}
