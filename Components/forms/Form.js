import { Formik } from "formik";

export default function Form({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setTouched, validateForm }) => {
                await validateForm();
                setTouched({
                    title: true,
                    price: true,
                    description: true,
                    category: true,
                    images: true,
                }); 
                onSubmit(values); 
            }}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}
