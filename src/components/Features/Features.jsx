import "./Features.css";

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows so your team can focus on what matters most.",
    },
    {
      icon: "🔗",
      title: "Powerful Integrations",
      description:
        "Connect the tools you already use and create seamless workflows across your business.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description:
        "Track your workflows, monitor performance, and understand your business with clear insights.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Workflows",
      description:
        "Use intelligent automation to make faster decisions and simplify complex processes.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description:
        "Keep your business data protected with a secure platform built for modern teams.",
    },
    {
      icon: "🚀",
      title: "Built to Scale",
      description:
        "Start small and scale your automation as your business grows without unnecessary complexity.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">

        <div className="features-heading">
          <span className="section-badge">POWERFUL FEATURES</span>

          <h2>
            Everything you need to
            <span> automate smarter.</span>
          </h2>

          <p>
            Powerful tools designed to help you automate workflows,
            connect your systems, and grow your business faster.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#">
                Learn more →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;