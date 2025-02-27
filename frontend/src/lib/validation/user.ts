import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
    name:yup.string().required('Поле обязательно'),
    surname:yup.string().required('Поле обязательно'),
    email:yup.string().required('Поле обязательно').email('Некорректный ввод почты'),
    password:yup.string().required('Поле обязательно').min(4,'Минимум 4 символа'),
});

export const loginUserSchema = yup.object().shape({
    email:yup.string().required('Поле обязательно').email('Некорректный ввод почты'),
    password:yup.string().required('Поле обязательно').min(4,'Минимум 4 символа')
});