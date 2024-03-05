import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    // .email('Неверный формат email')
    .required('Обязательное поле!'),
  password: Yup.string().required('Обязательное поле!'),
});
