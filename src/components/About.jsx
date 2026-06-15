function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/perfil.jpg" alt="Federico Pardo" className="profile-img" />
          </div>
          <div className="about-text">
            <p>
              I hold a PhD in Computer Science and Artificial Intelligence from the University of Murcia,
              awarded with <strong>Summa Cum Laude</strong> honors. Over the past 4+ years, my work has centered on
              bridging the gap between cutting-edge AI systems and robust, production-ready software engineering.
            </p>
            <p>
              My expertise focuses on developing multimodal architectures (combining audio processing with
              Large Language Models), orchestrating scalable data pipelines, and implementing Explainable AI
              (XAI) frameworks. I prioritize building reliable, high-availability microservices over simply
              chasing theoretical benchmarks.
            </p>
            <p>
              <strong>Currently seeking:</strong> AI Engineer, Machine Learning Engineer, or Senior Python
              Developer roles in high-impact environments. Immediately available for international remote
              contract opportunities (B2B) or relocation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
