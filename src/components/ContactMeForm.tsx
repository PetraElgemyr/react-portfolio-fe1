import TextField from "@mui/material/TextField";
import { IFormData } from "./interfaces/IFormData";
import "../scss/contactForm.scss";
import { FormEvent, useState } from "react";
import { validateForm } from "./helpers/ValidationHelper";
import { Button } from "@mui/material";
import { colors } from "../styled/Variables/Colors";

interface IContactMeFormProps {
  formData: IFormData;
  setFormData: (data: IFormData) => void;
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
  clearForm: () => void;
}

export const ContactMeForm = ({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  sendEmail,
  clearForm,
}: IContactMeFormProps) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <form
      className="form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);
        const isValid = validateForm(formData);
        console.log(isValid);
        if (isValid) {
          setIsValid(true);
          sendEmail(e);
        } else {
          setIsValid(false);
        }
      }}
    >
      <TextField
        error={formSubmitted && !isValid ? true : false}
        id="email-outlined-text-field"
        label="Your email"
        value={formData.fromEmail}
        onChange={(e) =>
          setFormData({ ...formData, fromEmail: e.target.value })
        }
        sx={{
          color: "black",
          width: "100%",
        }}
        helperText={
          (!formData.fromEmail || formData.fromEmail.length < 4) &&
          formSubmitted &&
          !isValid &&
          "Incorrect or missing email"
        }
        placeholder="Your email"
      />

      <TextField
        error={
          (!formData.fromName || formData.fromName.length < 2) &&
          formSubmitted &&
          !isValid
            ? true
            : false
        }
        id="name-outlined-text-field"
        label="Name"
        value={formData.fromName}
        onChange={(e) => setFormData({ ...formData, fromName: e.target.value })}
        sx={{
          color: "black",
          width: "100%",
        }}
        helperText={
          (!formData.fromName || formData.fromName.length < 2) &&
          formSubmitted &&
          !isValid &&
          "Incorrect or missing name"
        }
        placeholder="Name"
      />

      <TextField
        error={
          (!formData.message || formData.message.length < 5) &&
          formSubmitted &&
          !isValid
            ? true
            : false
        }
        id="message-outlined-text-field"
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        sx={{
          color: "black",
          width: "100%",
        }}
        helperText={
          (!formData.message || formData.message.length < 5) &&
          formSubmitted &&
          !isValid &&
          "Missing or too short message"
        }
        placeholder="Hi Petra! 
        I would like to meet up and share some ideas..."
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: colors.secondary_blue }}
      >
        Send
      </Button>
      <Button
        variant="outlined"
        sx={{
          border: `1.5px solid ${colors.primary_orange}`,
          borderColor: colors.primary_orange,
          color: colors.primary_orange,
        }}
        type="button"
        onClick={clearForm}
      >
        Reset
      </Button>
    </form>
  );
};
