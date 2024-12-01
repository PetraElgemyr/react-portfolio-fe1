import emailjs from "@emailjs/browser";
import { CenteredArticle } from "../../styled/CenteredArticle";
import { ColCentered, PageMarginTop } from "../../styled/Common/Common";
import { StyledLink } from "../../styled/Common/StyledLink";
import { ProjectCardText } from "../../styled/Portfolio/ProjectText";
import { ContactForm } from "../ContactForm";
import { FormEvent, useState } from "react";

export const ContactPage = () => {
  const [formSentSuccessfully, setFormSentSuccessfully] =
    useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
        setFormSubmitted(true);
        setFormSentSuccessfully(true);
        form.reset();
      })
      .catch((error) => {
        setFormSubmitted(true);
        setFormSentSuccessfully(false);
        console.error("EmailJS error:", error);
      });
  };

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Contact page</h1>
          <CenteredArticle>
            If you want to contact me or just connect, you can either email me
            directly, contact me on Linkedin or use the contact form below to
            send me a message. I will get back to you as soon as possible.
          </CenteredArticle>
          <ProjectCardText>
            <StyledLink
              target="_blank"
              href="https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
            >
              LinkedIn
            </StyledLink>
          </ProjectCardText>

          <ProjectCardText>
            Email:{"  "}
            <StyledLink href="mailto: petra.elgemyr@gmail.com">
              Petra.elgemyr@gmail.com
            </StyledLink>
          </ProjectCardText>

          <ContactForm sendEmail={sendEmail} />
          {formSubmitted ? (
            <CenteredArticle>
              {formSentSuccessfully
                ? "Message was successfully sent! I will get back as soon as possible."
                : "Oops! Something went wrong, please try again"}
            </CenteredArticle>
          ) : null}
        </ColCentered>
      </PageMarginTop>
    </>
  );
};
