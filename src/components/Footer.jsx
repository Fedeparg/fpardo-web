function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Federico Pardo.</p>
        <p className="footer-note">
          Hosted on self-managed infrastructure ·{' '}
          <a href="https://github.com/fedeparg/fpardo-web" target="_blank" rel="noopener">
            View Source
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
