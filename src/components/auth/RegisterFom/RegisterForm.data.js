import * as Yup from 'yup'

export function initialValues() {
     return {
        email: '',
        password: '',
        repitPassword: '', 
     }
}

export function validationSchema() {
    return Yup.object({
      email: Yup.string()
        .email("El e-mail no es correcto")
        .required("El e-mail es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
      repitPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
    });
}