import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is NovaFlow?",
      answer:
        "NovaFlow is a smart automation platform that helps businesses connect their tools, automate repetitive workflows, and improve productivity.",
    },
    {
      question: "Do I need coding knowledge?",
      answer:
        "No. NovaFlow is designed to make workflow automation simple, even if you don't have a technical background.",
    },
    {
      question: "Can I try NovaFlow for free?",
      answer:
        "Yes. You can start with the free plan and explore the core automation features without a credit card.",
    },
    {
      question: "How many tools can I connect?",
      answer:
        "You can connect multiple tools and services depending on your plan. More integrations can also be added as your needs grow.",
    },
    {
      question: "Is my business data secure?",
      answer:
        "Security is a core part of the platform. NovaFlow is designed with modern security practices to help protect your business data.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes. You can upgrade whenever your business needs more workflows, tasks, integrations, or advanced features.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">

        <div className="faq-heading">
          <span className="section-badge">FAQ</span>

          <h2>
            Questions?
            <span> We have answers.</span>
          </h2>

          <p>
            Everything you need to know before getting started
            with NovaFlow.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={faq.question}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;