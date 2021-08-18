import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("O E-mail é obrigatório")
    .email("Coloque um email válido"),
  password: yup.string().required("Senha obrigatória"),
});
