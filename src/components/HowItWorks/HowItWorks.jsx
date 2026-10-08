import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description:
        "Connect your favorite tools and platforms with just a few clicks.",
      icon: "🔗",
    },
    {
      number: "02",
      title: "Automate",
      description:
        "Create powerful workflows that handle repetitive tasks automatically.",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Grow",
      description:
        "Save time, improve productivity, and focus on growing your business.",
      icon: "🚀",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">

        <div className="how-heading">
          <span className="section-badge">HOW IT WORKS</span>

          <h2>
            From idea to
            <span> automation.</span>
          </h2>

          <p>
            Get started in minutes. Build your workflow, automate your
            repetitive tasks, and let your business run smarter.
          </p>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-item" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && (
                <div className="step-line"></div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;