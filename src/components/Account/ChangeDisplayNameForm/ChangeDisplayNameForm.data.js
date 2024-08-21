import * as Yup from 'yup'
 
export function initialValues() {
    return{
         displayName: '',
    }
}

export function validateSchema() {
    return Yup.object({
        displayName: Yup.string().required(('EL nombre y apellido son obligatorios'))
    })
}