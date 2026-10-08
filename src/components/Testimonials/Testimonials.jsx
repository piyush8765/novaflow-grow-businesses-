import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "NovaFlow helped us eliminate hours of repetitive work every week. Our team can now focus on growing the business.",
      name: "Alex Morgan",
      role: "Founder, GrowthLabs",
      initials: "AM",
    },
    {
      quote:
        "The workflows are incredibly simple to build, yet powerful enough for our entire sales process.",
      name: "Sarah Wilson",
      role: "Head of Sales, Brightly",
      initials: "SW",
    },
    {
      quote:
        "We connected our tools in minutes and immediately started seeing better productivity across the team.",
      name: "Daniel Carter",
      role: "Operations Manager, Flowbase",
      initials: "DC",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="section-badge">CUSTOMER STORIES</span>

          <h2>
            Loved by teams
            <span> everywhere.</span>
          </h2>

          <p>
            See how modern teams use NovaFlow to save time,
            automate workflows, and work smarter.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>

              <div className="testimonial-stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="testimonial-quote">
                “{testimonial.quote}”
              </p>

              <div className="testimonial-user">

                <div className="user-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;