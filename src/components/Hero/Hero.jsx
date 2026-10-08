import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ Smart Automation for Modern Businesses
          </div>

          <h1>
            Automate More.
            <span> Grow Faster.</span>
          </h1>

          <p>
            Simplify your business workflows with powerful automation,
            intelligent tools, and seamless integrations — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

          <div className="hero-trust">
            <span>✓ No credit card required</span>
            <span>✓ Easy to get started</span>
          </div>

        </div>

        <div className="hero-visual">
          <div className="dashboard-card">

            <div className="dashboard-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>Dashboard</span>
            </div>

            <div className="dashboard-body">

              <div className="stat-card">
                <small>Automations</small>
                <strong>248</strong>
                <span>↗ 24.8%</span>
              </div>

              <div className="stat-card">
                <small>Tasks Completed</small>
                <strong>12.8K</strong>
                <span>↗ 18.4%</span>
              </div>

              <div className="chart-box">
                <div className="chart-title">
                  <span>Workflow Activity</span>
                  <strong>+32.5%</strong>
                </div>

                <div className="chart-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;