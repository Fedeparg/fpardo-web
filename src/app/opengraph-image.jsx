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
          // Hardcoded rather than tokenised: satori resolves no CSS variables,
          // so these have to track :root in index.css by hand.
          backgroundColor: '#f6f7f8',
          color: '#15181c',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#0b6e63',
            marginBottom: 28,
          }}
        >
          {'AI Engineer'}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: '-0.025em' }}>
          {'Federico Pardo'}
        </div>
        <div style={{ fontSize: 38, color: '#4a5158', marginTop: 20 }}>
          {'AI engineering, from the model to the system around it'}
        </div>
      </div>
    ),
    { ...size },
  )
}
