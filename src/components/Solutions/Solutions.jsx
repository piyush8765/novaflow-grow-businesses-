import "./Solutions.css";

function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Marketing Automation",
      description:
        "Capture leads, send personalized campaigns, and automate follow-ups without manual work.",
      icon: "📣",
    },
    {
      number: "02",
      title: "Sales Automation",
      description:
        "Keep your sales pipeline moving with automated lead management and smart follow-ups.",
      icon: "📈",
    },
    {
      number: "03",
      title: "Customer Support",
      description:
        "Respond faster and deliver better customer experiences with intelligent workflows.",
      icon: "💬",
    },
    {
      number: "04",
      title: "Team Productivity",
      description:
        "Remove repetitive tasks from your team's day and give them more time to focus.",
      icon: "⚡",
    },
  ];

  return (
    <section className="solutions">
      <div className="solutions-container">

        <div className="solutions-heading">
          <span className="section-badge">BUILT FOR YOUR BUSINESS</span>

          <h2>
            Automation that works
            <span> for you.</span>
          </h2>

          <p>
            From marketing to customer support, automate the workflows
            that keep your business moving forward.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div className="solution-card" key={solution.number}>

              <div className="solution-top">
                <span className="solution-number">
                  {solution.number}
                </span>

                <div className="solution-icon">
                  {solution.icon}
                </div>
              </div>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <a href="#">
                Explore solution →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;