import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const STATUS_TEXT = {
  idle:    'Send Message',
  sending: 'Sending...',
  success: 'Message Sent!',
  error:   'Error, try again',
}

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error()

      setStatus('success')
      e.target.reset()
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">

          <div className="contact-info">
            <p>
              If you're working on something interesting in AI, want to collaborate, or just have
              questions about any of the work here, feel free to reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:federico.pardog@gmail.com" className="contact-link">
                <MdEmail size={20} />
                federico.pardog@gmail.com
              </a>
              <a href="https://linkedin.com/in/federico-pardog" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
                LinkedIn Profile
              </a>
              <a href="https://github.com/fedeparg" className="contact-link" target="_blank" rel="noopener noreferrer">
                <SiGithub size={20} />
                GitHub Profile
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xkovgbvl"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {STATUS_TEXT[status]}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
