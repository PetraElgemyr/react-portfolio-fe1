import emailjs from "@emailjs/browser";
import { CenteredArticle } from "../../styled/CenteredArticle";
import { ColCentered, PageMarginTop } from "../../styled/Common/Common";
import { StyledLink } from "../../styled/Common/StyledLink";
import { ProjectCardText } from "../../styled/Portfolio/ProjectText";
import { FormEvent, useEffect, useState } from "react";
import { defaultFormData, IFormData } from "../interfaces/IFormData";
import { Footer } from "../Footer";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
import { ContactMeForm } from "../ContactMeForm";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import "../../scss/contactPage.scss";

export const ContactPage = ({ isFixed }: IIsFixedNavbarProps) => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
        clearForm();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
      });
  };

  const clearForm = () => {
    setFormData(defaultFormData);
    setFormSubmitted(false);
  };

  const location = useLocation();
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Contact page</h1>

          <div className="contact-container">
            <section className="contact-text-container">
              <CenteredArticle>
                Hi there! If you want to contact me or just connect, you can
                either email me or contact me on Linkedin. You can also use the
                contact form to directly send me a message to my email from
                here.
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
            </section>

            <section className="contact-form-container">
              <ContactMeForm
                formData={formData}
                setFormData={(data: IFormData) => setFormData(data)}
                formSubmitted={formSubmitted}
                setFormSubmitted={(submitted: boolean) =>
                  setFormSubmitted(submitted)
                }
                sendEmail={sendEmail}
                clearForm={clearForm}
              />
            </section>
          </div>
        </ColCentered>
      </PageMarginTop>

      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
