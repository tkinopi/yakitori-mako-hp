import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '焼鳥まこ | 福岡・薬院の本格焼鳥店',
  description: '福岡市中央区薬院の焼鳥専門店。炭火でじっくり焼き上げる本格焼鳥をご堪能ください。厳選された国産鶏を使ったこだわりの一串をどうぞ。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
