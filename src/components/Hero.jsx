import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiX, SiYoutube } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const socials = [
  { href: 'mailto:federico.pardog@gmail.com',   icon: MdEmail,    label: 'Email' },
  { href: 'https://linkedin.com/in/federico-pardog', icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: 'https://github.com/fedeparg',         icon: SiGithub,   label: 'GitHub',   external: true },
  { href: 'https://x.com/fpardo_98',             icon: SiX,        label: 'X',        external: true },
  { href: 'https://www.youtube.com/@fpardo_98',  icon: SiYoutube,  label: 'YouTube',  external: true },
]

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">

          <div className="hero-photo">
            <img src="/assets/perfil.jpg" alt="Federico Pardo" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">Federico Pardo</h1>
            <p className="hero-subtitle">AI Engineer · PhD in Computer Science & AI</p>
            <p className="hero-description">
              I build production-ready multimodal AI systems combining audio processing,
              large language models, and explainable AI into scalable architectures.
              PhD in Computer Science completed Summa Cum Laude at the University of Murcia.
            </p>

            <div className="hero-social">
              {socials.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className="hero-social-link"
                  aria-label={label}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Get in touch</a>
              <a href="/assets/cv_federico_pardo.pdf" className="btn btn-secondary" download target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
