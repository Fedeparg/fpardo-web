import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Federico Pardo · AI Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: '-0.02em' }}>
          {'Federico Pardo'}
        </div>
        <div style={{ fontSize: 40, color: '#a3a3a3', marginTop: 24 }}>
          {'AI Engineer · PhD in Computer Science & AI'}
        </div>
      </div>
    ),
    { ...size },
  )
}
