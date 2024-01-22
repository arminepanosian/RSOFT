import * as yup from 'yup';

export const yupResolver = (validationSchema) => async (values) => {
    try {
        await validationSchema.validate(values, { abortEarly: false });
        return {
            values,
            errors: {},
        };
    } catch (errors) {
        const yupErrors = {};
        errors.inner.forEach((error) => {
            yupErrors[error.path] = error.message;
        });
        return {
            values: {},
            errors: yupErrors,
        };
    }
};

export const useValidation = () => {
    return yup.object().shape({
        name: yup.string().required('The field is reuqired!'),
        lastName: yup.string().required('The field is reuqired!'),
        email: yup.string().required('The field is reuqired!').email('Invalid email'),
        phone: yup.string().required('The field is reuqired!'),
        message: yup.string().required('The field is reuqired!'),
    });
};
