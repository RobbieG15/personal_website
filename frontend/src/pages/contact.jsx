import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactType, setContactType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }

    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    if (!contactType) {
      setStatus({ type: "error", message: "Please select a contact type." });
      return;
    }

    if (!message.trim()) {
      setStatus({ type: "error", message: "Message cannot be empty." });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          contactType,
          message,
        }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setContactType("");
        setMessage("");
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <section className="full-width-section section-light contact-section">
      <div className="container contact-container">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
            placeholder="Your name"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
            placeholder="you@example.com"
          />

          <label htmlFor="contactType">Type of Contact</label>
          <select
            id="contactType"
            value={contactType}
            onChange={(e) => setContactType(e.target.value)}
            className="contact-select"
          >
            <option value="">Select an option</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Request">Project Request</option>
            <option value="Feedback">Feedback</option>
          </select>

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="contact-textarea"
            placeholder="Write your message here..."
          />

          <button type="submit" className="contact-submit">
            Send Message
          </button>

          {status && (
            <p
              className={`contact-status ${
                status.type === "error"
                  ? "error"
                  : status.type === "success"
                  ? "success"
                  : "loading"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
