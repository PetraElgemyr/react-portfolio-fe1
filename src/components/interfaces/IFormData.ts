export interface IFormData {
    fromName: string,
    fromEmail: string,
    message: string
}

export const defaultFormData:IFormData ={
    fromName: "",
    fromEmail: "",
    message: "",
  }