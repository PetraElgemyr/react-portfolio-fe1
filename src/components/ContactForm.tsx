// import { Col } from "../styled/Common/Common";
// import "../scss/contactForm.scss";
// import { FormEvent } from "react";
// import { IFormData } from "./interfaces/IFormData";

// interface IContactFormProps {
//   sendEmail: (e: FormEvent<HTMLFormElement>) => void;
//   formData: IFormData;
//   setFormData: (data: IFormData) => void;
//   validateForm: () => boolean;
//   setErrorMessage: (message: string) => void;
// }

// export const ContactForm = ({
//   sendEmail,
//   formData,
//   setFormData,
//   validateForm,
//   setErrorMessage,
// }: IContactFormProps) => {
//   return (
//     <>
//       <form
//         className="contact_form"
//         onSubmit={(e: FormEvent<HTMLFormElement>) => {
//           e.preventDefault();
//           const validationSucceeded = validateForm();
//           if (validationSucceeded) {
//             sendEmail(e);
//           } else {
//             setErrorMessage("All required fields were not provided.");
//           }
//         }}
//       >
//         <Col>
//           <label htmlFor="fromName">Name:</label>
//           <input
//             type="text"
//             id="fromName"
//             name="fromName"
//             required
//             value={formData.fromName}
//             onChange={(e) => {
//               setFormData({ ...formData, fromName: e.target.value });
//             }}
//           />
//         </Col>

//         <Col>
//           <label htmlFor="fromEmail">Your email:</label>
//           <input
//             required
//             type="email"
//             id="fromEmail"
//             name="fromEmail"
//             placeholder="yourname@example.com"
//             value={formData.fromEmail}
//             onChange={(e) => {
//               setFormData({ ...formData, fromEmail: e.target.value });
//             }}
//           />
//         </Col>
//         <Col>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             required
//             minLength={10}
//             name="message"
//             id="message"
//             rows={15}
//             value={formData.message}
//             onChange={(e) => {
//               setFormData({ ...formData, message: e.target.value });
//             }}
//           />
//         </Col>
//         <input type="submit" />
//       </form>
//     </>
//   );
// };
