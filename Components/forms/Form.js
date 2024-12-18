import { Formik } from "formik"

export default function Form({initialValues,onSubmit,validationSchema,children}) {
    return (
        <Formik
        initialValues={{email: "", password:""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
            {() => <>{ children}</>}
        </Formik>
    )
}