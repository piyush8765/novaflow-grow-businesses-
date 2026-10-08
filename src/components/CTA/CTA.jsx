import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <div className="cta-content">
          <span className="cta-badge">
            READY TO GET STARTED?
          </span>

          <h2>
            Automate your work.
            <span> Grow your business.</span>
          </h2>

          <p>
            Start building smarter workflows today and give your
            team more time to focus on what really matters.
          </p>

          <div className="cta-buttons">
            <button className="cta-primary">
              Get Started Free →
            </button>

            <button className="cta-secondary">
              Talk to Sales
            </button>
          </div>

          <div className="cta-note">
            ✓ No credit card required &nbsp;&nbsp; ✓ Setup in minutes
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;