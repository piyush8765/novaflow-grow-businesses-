import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-container">

          <div className="contact-content">
            <span className="contact-badge">
              GET IN TOUCH
            </span>

            <h1>
              Let's build something
              <span> amazing together.</span>
            </h1>

            <p>
              Have a question, need help, or want to discuss
              automation for your business? We'd love to hear from you.
            </p>
          </div>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;