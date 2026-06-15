function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">Publications</h2>

        <div className="publications-header">
          <p className="publications-intro">
            View my complete publication list on{' '}
            <a href="https://scholar.google.es/citations?user=Jj6W9GMAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener" className="scholar-link">
              Google Scholar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </p>
        </div>

        <div className="publications-list">

          <div className="publication-card">
            <h3>Enriched Feedback of Classroom Dynamics Using AI</h3>
            <p className="pub-meta">University of Murcia · 2026 · PhD Thesis (Summa Cum Laude)</p>
            <p className="pub-description">
              Doctoral dissertation engineering a scalable multimodal AI ecosystem designed to process, segment,
              and interpret heterogeneous classroom variables with a fundamental focus on architectural explainability.
            </p>
            <a href="/assets/phd_federico_pardo.pdf" target="_blank" rel="noopener" className="pub-link">View Thesis →</a>
          </div>

          <div className="publication-card">
            <h3>Explaining Teacher Interventions in SRS-Based Classrooms</h3>
            <p className="pub-meta">IEEE Access · Dec 2025 · First Author</p>
            <p className="pub-description">
              Combined text (BERT) and audio features to classify different types of teacher interventions in classrooms.
            </p>
            <a href="https://ieeexplore.ieee.org/document/11282905" target="_blank" rel="noopener" className="pub-link">View Publication →</a>
          </div>

          <div className="publication-card">
            <h3>Audio Features in Education: A Systematic Review</h3>
            <p className="pub-meta">Applied Sciences · Jun 2025 · First Author</p>
            <p className="pub-description">
              Systematic review of 82 studies (2014-2024) on using audio processing in educational research.
            </p>
            <a href="https://www.mdpi.com/2076-3417/15/12/6911" target="_blank" rel="noopener" className="pub-link">View Publication →</a>
          </div>

          <div className="publication-card">
            <h3>Exploring AI Techniques for Generalizable Teaching Practice Identification</h3>
            <p className="pub-meta">IEEE Access · Sep 2024 · First Author</p>
            <p className="pub-description">
              Explored techniques to make multimodal AI models generalize better across different classroom settings.
            </p>
            <a href="https://ieeexplore.ieee.org/document/10670386" target="_blank" rel="noopener" className="pub-link">View Publication →</a>
          </div>

          <div className="publication-card">
            <h3>AI-Driven Teacher Analytics: Informative Insights on Classroom Activities</h3>
            <p className="pub-meta">IEEE TALE · Nov 2023 · Co-Author</p>
            <p className="pub-description">
              Built a system to automatically analyze classroom recordings and generate insights for teachers.
            </p>
            <a href="https://ieeexplore.ieee.org/document/10398309" target="_blank" rel="noopener" className="pub-link">View Publication →</a>
          </div>

          <div className="publication-card">
            <h3>Analyzing Wooclap's Competition Mode with AI Through Classroom Recordings</h3>
            <p className="pub-meta">IEEE RITA · 2024 · Co-Author</p>
            <p className="pub-description">
              Analyzed how student response systems work in real classrooms using multimodal AI.
            </p>
            <a href="https://ieeexplore.ieee.org/document/10677522" target="_blank" rel="noopener" className="pub-link">View Publication →</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Publications
