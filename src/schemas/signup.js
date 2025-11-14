import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    phone: Yup.string(),
    country: Yup.string().required('Country is required'),
    password: Yup.string().required('Password is required'),
    cpassword:Yup.string().required('Confirm your password').oneOf(['password'], 'Password does not match')

})

export default signupSchema