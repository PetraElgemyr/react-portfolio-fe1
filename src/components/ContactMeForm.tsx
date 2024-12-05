import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IFormData } from "./interfaces/IFormData";
import "../scss/contactForm.scss";
// import styled from "styled-components";

interface IContactMeFormProps {
  formData: IFormData;
  setFormData: (data: IFormData) => void;
  formSubmitted: boolean;
}

// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#A0AAB4",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#B2BAC2",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#E0E3E7",
//     },
//     "&:hover fieldset": {
//       borderColor: "#B2BAC2",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#6F7E8C",
//     },
//   },
// });

export const ContactMeForm = ({
  formData,
  setFormData,

  formSubmitted,
}: IContactMeFormProps) => {
  return (
    <div className="form-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      >
        <TextField
          error={!formData.fromEmail && formSubmitted ? true : false}
          id="email-outlined-text-field"
          label="Your email"
          type="email"
          value={formData.fromEmail}
          onChange={(e) =>
            setFormData({ ...formData, fromEmail: e.target.value })
          }
          sx={{
            color: "black",
            width: "100%",
          }}
          helperText={
            formData.fromEmail.length < 4 && formSubmitted && "Incorrect email"
          }
          placeholder="Your email"
        />

        <TextField
          error={!formData.fromName && formSubmitted ? true : false}
          id="name-outlined-text-field"
          label="Name"
          value={formData.fromName}
          onChange={(e) =>
            setFormData({ ...formData, fromName: e.target.value })
          }
          helperText="Incorrect name"
          placeholder="Name"
        />
      </Box>
    </div>
  );
};
