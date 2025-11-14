import * as Yup from 'yup'

const siginSchema = Yup.object().shape({
    email: Yup.string().email('Email address must be valid').required('Email is required'),
    password: Yup.string().required('Password is required')
})

export default siginSchema