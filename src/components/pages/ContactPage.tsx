import emailjs from "@emailjs/browser";
import { CenteredArticle } from "../../styled/CenteredArticle";
import { ColCentered, PageMarginTop } from "../../styled/Common/Common";
import { StyledLink } from "../../styled/Common/StyledLink";
import { ProjectCardText } from "../../styled/Portfolio/ProjectText";
import { FormEvent, useEffect, useState } from "react";
import { defaultFormData, IFormData } from "../interfaces/IFormData";
import { Footer } from "../Footer";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
// import { ContactMeForm } from "../ContactMeForm";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import { ContactForm } from "../ContactForm";

export const ContactPage = ({ isFixed }: IIsFixedNavbarProps) => {
  const [formSentSuccessfully, setFormSentSuccessfully] =
    useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(defaultFormData);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
        setFormData(defaultFormData);
        setErrorMessage("");
      })
      .catch((error) => {
        setFormSubmitted(true);
        setFormSentSuccessfully(false);
        console.error("EmailJS error:", error);
      });
  };

  const location = useLocation();
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

  const validateForm = () => {
    if (formData.fromEmail && formData.fromName && formData.message) {
      return true;
    }

    return false;
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

          {/* <ContactMeForm
            formData={formData}
            setFormData={(data: IFormData) => setFormData(data)}
            formSubmitted={formSubmitted}
          /> */}

          <ContactForm
            sendEmail={sendEmail}
            formData={formData}
            setFormData={(data) => {
              setFormData(data);
            }}
            validateForm={validateForm}
            setErrorMessage={(message: string) => setErrorMessage(message)}
          />
          {formSubmitted ? (
            <CenteredArticle>
              {formSentSuccessfully
                ? "Message was successfully sent! I will get back as soon as possible."
                : "Oops! Something went wrong, please try again"}
            </CenteredArticle>
          ) : (
            <CenteredArticle>
              {errorMessage.length > 1 ? errorMessage : null}
            </CenteredArticle>
          )}
        </ColCentered>
      </PageMarginTop>

      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
