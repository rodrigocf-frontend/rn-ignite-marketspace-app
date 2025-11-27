import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^[0-9]{10,11}$/, "Telefone inválido"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
