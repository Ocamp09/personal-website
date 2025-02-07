import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./FeedbackForm.css";

export const FeedbackForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5hphsha", // service_id
        "template_hhyrvg8", //template_id
        form.current,
        {
          publicKey: "tJWnp_aPp-Vlyf-C2",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Feedback sent successfully!");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send feedback. May have hit request cap.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>
        Please leave me quick note on how I can improve this site or get myself
        out there!
      </p>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your feedback here..."
        required
      />
      <button type="submit" disabled={isSubmitting} className="feedback">
        {isSubmitting ? "Sending..." : "Send Feedback"}
      </button>
    </form>
  );
};
