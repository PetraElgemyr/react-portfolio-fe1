import { Col } from "../styled/Common/Common";
import "../scss/contactForm.scss";
import { FormEvent } from "react";

interface IContactFormProps {
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
}

export const ContactForm = ({ sendEmail }: IContactFormProps) => {
  return (
    <>
      <form className="contact_form" onSubmit={sendEmail}>
        <Col>
          <label htmlFor="fromName">Name:</label>
          <input type="text" id="fromName" name="fromName" required />
        </Col>

        <Col>
          <label htmlFor="fromEmail">Your email:</label>
          <input
            required
            type="email"
            id="fromEmail"
            name="fromEmail"
            placeholder="yourname@example.com"
          />
        </Col>
        <Col>
          <label htmlFor="message">Message:</label>
          <textarea
            required
            minLength={10}
            name="message"
            id="message"
            rows={15}
          />
        </Col>
        <input type="submit" />
      </form>
    </>
  );
};
