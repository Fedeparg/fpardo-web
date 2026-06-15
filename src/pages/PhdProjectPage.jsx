import { Link } from 'react-router-dom'

function PhdProjectPage() {
  return (
    <div className="page">
      <article className="article">

        <div className="article-header-img">
          <img src="/assets/projects/phd/movisound_logo.webp" alt="MoviSound" />
        </div>

        <header className="article-header">
          <p className="article-eyebrow">PhD Research Platform · University of Murcia · May 2023 – May 2026</p>
          <h1 className="article-title">MoviSound (PhD)</h1>
          <p className="article-subtitle">
            A multimodal AI platform that automatically analyzes classroom recordings
            to give teachers objective, transparent feedback on their teaching practice.
          </p>
        </header>

        <div className="article-body">

          <section className="article-section">
            <h2>About the Project</h2>
            <p>
              Traditional teaching practice evaluation relies on direct human observation,
              an approach that is expensive, logistically complex, and inherently subjective.
              MoviSound addresses this gap by processing synchronous classroom recordings
              through a multimodal AI pipeline and delivering structured, explainable feedback
              to teachers through a web interface.
            </p>
            <p>
              The platform was developed as a decoupled microservices architecture
              (Python, FastAPI, Docker, Celery) combining end-to-end audio analysis
              (ASR via Whisper, speaker diarization, paralinguistic feature extraction)
              with fine-tuned language models (BERT) interpreted through SHAP-based
              explainability frameworks. The goal is not just classification accuracy,
              but transparency: teachers need to understand why the system draws the
              conclusions it does.
            </p>
            <p>
              This platform is the applied result of my doctoral thesis, awarded
              Summa Cum Laude by the University of Murcia in 2026.
            </p>
            <div className="article-cta-group">
              <a
                href="/assets/projects/phd/phd_federico_pardo.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener"
              >
                Download Thesis PDF
              </a>
              <a
                href="https://github.com/Fedeparg/movisound"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </section>

          <section className="article-section">
            <h2>System Architecture</h2>
            <p>
              Each node in the diagram represents an independent Docker container.
              The pipeline ingests classroom recordings, processes them through
              audio analysis and transcription stages, applies multimodal fusion,
              and exposes results through a REST API consumed by the web frontend.
            </p>
            <div className="article-img-block">
              <img
                src="/assets/projects/phd/movisound_arch_hd.webp"
                alt="MoviSound system architecture"
              />
              <p className="article-img-caption">MoviSound microservices architecture</p>
            </div>
          </section>

          <section className="article-section">
            <h2>Platform Demo</h2>
            <p>
              The following recording shows the MoviSound web interface processing
              a real classroom session and visualizing the extracted metrics.
              A full walkthrough with narration is coming soon.
            </p>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/BA8UBnBMrAQ"
                title="MoviSound platform demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          <section className="article-section">
            <h2>Research Publications</h2>
            <p>
              The platform was developed across three peer-reviewed papers published
              in JCR-indexed journals, each covering an incremental phase of the methodology.
            </p>
            <div className="article-pub-list">

              <div className="article-pub">
                <span className="article-pub-venue">Applied Sciences · Jun 2025 · First Author</span>
                <h3>Audio Features in Education: A Systematic Review of Computational Applications and Research Gaps</h3>
                <a href="https://www.mdpi.com/2076-3417/15/12/6911" target="_blank" rel="noopener" className="pub-link">
                  View Publication →
                </a>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">IEEE Access · Sep 2024 · First Author</span>
                <h3>Exploring AI Techniques for Generalizable Teaching Practice Identification</h3>
                <a href="https://ieeexplore.ieee.org/document/10670386" target="_blank" rel="noopener" className="pub-link">
                  View Publication →
                </a>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">IEEE Access · Dec 2025 · First Author</span>
                <h3>Explaining Teacher Interventions in SRS-Based Classrooms</h3>
                <a href="https://ieeexplore.ieee.org/document/11282905" target="_blank" rel="noopener" className="pub-link">
                  View Publication →
                </a>
              </div>

            </div>
          </section>

        </div>

        <div className="article-footer">
          <Link to="/projects" className="article-back">← Back to Projects</Link>
        </div>

      </article>
    </div>
  )
}

export default PhdProjectPage
