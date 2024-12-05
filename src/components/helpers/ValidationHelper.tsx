import { IFormData } from "../interfaces/IFormData";

export const validateForm = (formData: IFormData) => {
  if (
    !formData.fromEmail ||
    formData.fromEmail.length < 4 ||
    !formData.fromEmail.includes("@") ||
    !formData.fromName ||
    formData.fromName.length < 1 ||
    formData.message.length < 5
  ) {
    return false;
  }
  return true;
};
