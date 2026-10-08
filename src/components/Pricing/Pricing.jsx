import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For individuals getting started with automation.",
      price: "0",
      period: "forever",
      features: [
        "5 active workflows",
        "1,000 tasks / month",
        "Basic integrations",
        "Community support",
      ],
      button: "Get Started",
    },
    {
      name: "Growth",
      description: "For growing teams that need more automation.",
      price: "29",
      period: "per month",
      popular: true,
      features: [
        "Unlimited workflows",
        "25,000 tasks / month",
        "All integrations",
        "Advanced analytics",
        "Priority support",
      ],
      button: "Start Free Trial",
    },
    {
      name: "Scale",
      description: "For businesses with advanced automation needs.",
      price: "79",
      period: "per month",
      features: [
        "Unlimited workflows",
        "100,000 tasks / month",
        "Premium integrations",
        "Advanced analytics",
        "Dedicated support",
      ],
      button: "Talk to Sales",
    },
  ];

  return (
    <section className="pricing">
      <div className="pricing-container">

        <div className="pricing-heading">
          <span className="section-badge">SIMPLE PRICING</span>

          <h2>
            Start small.
            <span> Scale when you’re ready.</span>
          </h2>

          <p>
            Choose a plan that fits your needs today and upgrade
            whenever your business grows.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${
                plan.popular ? "popular-plan" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-top">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              <div className="price">
                <span className="currency">$</span>
                <strong>{plan.price}</strong>
                <span className="period">/{plan.period}</span>
              </div>

              <button className="pricing-button">
                {plan.button}
              </button>

              <div className="pricing-divider"></div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <span>✓</span>
          No credit card required for the free plan
        </div>

      </div>
    </section>
  );
}

export default Pricing;