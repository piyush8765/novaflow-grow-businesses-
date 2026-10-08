import "./Integrations.css";

function Integrations() {
  const integrations = [
    {
      name: "WhatsApp",
      icon: "💬",
      description: "Connect and automate customer conversations.",
    },
    {
      name: "Google",
      icon: "G",
      description: "Connect your Google tools and workflows.",
    },
    {
      name: "Slack",
      icon: "S",
      description: "Keep your team updated automatically.",
    },
    {
      name: "Shopify",
      icon: "🛍️",
      description: "Automate your ecommerce workflows.",
    },
    {
      name: "Stripe",
      icon: "S",
      description: "Connect payments with your workflows.",
    },
    {
      name: "HubSpot",
      icon: "H",
      description: "Sync your leads and customer data.",
    },
  ];

  return (
    <section className="integrations">
      <div className="integrations-container">

        <div className="integrations-heading">
          <span className="section-badge">INTEGRATIONS</span>

          <h2>
            Connect everything.
            <span> Automate anything.</span>
          </h2>

          <p>
            Bring your favorite tools together and create powerful
            workflows without complicated setup.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((integration) => (
            <div className="integration-card" key={integration.name}>

              <div className="integration-icon">
                {integration.icon}
              </div>

              <div className="integration-info">
                <h3>{integration.name}</h3>
                <p>{integration.description}</p>
              </div>

              <span className="integration-arrow">↗</span>

            </div>
          ))}
        </div>

        <div className="integration-bottom">
          <p>More integrations coming soon.</p>
          <button>Explore Integrations →</button>
        </div>

      </div>
    </section>
  );
}

export default Integrations;