import * as yup from 'yup';

export const createTaskValid = yup.object().shape({
    name:yup.string().required('Поле обязательно для заполнения'),
    description:yup.string().required('Поле обязательно для заполнения')
})