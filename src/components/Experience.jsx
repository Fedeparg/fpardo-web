function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>AI Engineer</h3>
              <p className="timeline-meta">University of Murcia · May 2023 - May 2026</p>
              <p>
                Designed and deployed a decoupled microservices architecture (Python, FastAPI, Docker, Celery)
                for multimodal AI inference, optimizing processing latency across local and cloud infrastructure.
                Built end-to-end audio processing pipelines integrating ASR (Whisper), speaker diarization,
                paralinguistic feature extraction, and semantic vector embeddings (FAISS). Applied Explainable AI
                (XAI) frameworks utilizing SHAP values to interpret fine-tuned BERT models, delivering complete
                system transparency. Published 5 high-impact, first-author research papers in venues like IEEE
                Access and Applied Sciences.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Cloud Technical Support Specialist (GCP)</h3>
              <p className="timeline-meta">Webhelp (Google Cloud Project) · Aug 2022 - Apr 2023</p>
              <p>
                Provided L2 technical and architectural support for enterprise clients on Google Cloud Platform.
                Handled deep troubleshooting for production workloads involving Compute Engine, core VPC
                networking, IAM, and Google Kubernetes Engine (GKE). Collaborated with SRE teams to analyze
                and fix root-cause infrastructure degradation.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Data Scientist & Machine Learning Engineer</h3>
              <p className="timeline-meta">CENTIC (Technological Center) · Jun 2021 - Aug 2022</p>
              <p>
                Deployed an industrial real-time CNN for automated defect detection, achieving 98% accuracy and
                sub-100ms inference latency running directly on resource-constrained embedded hardware. Developed
                optimized LSTM-based NLP systems for semantic complexity analysis. Built and maintained
                automated, multi-source ETL pipelines for tabular, image, and raw audio data assets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
