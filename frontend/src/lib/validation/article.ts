import * as yup from 'yup';

export const createArticleValid = yup.object({
    header:yup.string().required('Обязательно для заполнение'),
    body:yup.string().required('Обязательно для заполнение')
});