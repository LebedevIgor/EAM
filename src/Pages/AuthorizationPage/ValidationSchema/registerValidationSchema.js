import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  username: Yup.string().required('Обязательное поле!'),
  name: Yup.string().required('Обязательное поле!'),
  surname: Yup.string().required('Обязательное поле!'),
  patronymic: Yup.string().required('Обязательное поле!'),
  about: Yup.string().required('Обязательное поле!'),
  email: Yup.string()
    .email('Неверный формат email')
    .required('Обязательное поле!'),
  password: Yup.string().required('Обязательное поле!'),
});
