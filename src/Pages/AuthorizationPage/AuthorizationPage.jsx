import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './Authorization.module.scss';
import Button from '../../component/Button/Button';
import FormikInput from '../../component/FormikInput/FormikInput';
import LogoBlue from '../../resources/image/icon/LogoBlue';

import login from '../../services/login.service';
import register from '../../services/register.service';
import { saveToken, saveLogin } from '../../utils/token/token';

import { loginInitialValue } from './InitialValues/loginInitialValue';
import { loginValidationSchema } from './ValidationSchema/loginValidationSchema';
import { registerInitialValue } from './InitialValues/registerInitialValue';
import { registerValidationSchema } from './ValidationSchema/registerValidationSchema';

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/');

  let type = pathSegments.slice(-1)[0] || 'register';

  if (type === 'authorization') {
    type = 'register';
  }

  const [token, setToken] = useState(null);
  const [loginName, setLoginName] = useState(null);

  const setValues = async (values) => {
    try {
      const data =
        type === 'register' ? await register(values) : await login(values);
      setToken(data.access_token);
      setLoginName(data.login);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (token !== null) {
      saveToken(token);
      saveLogin(loginName);
      navigate('/');
    }
  }, [token, loginName, navigate]);

  return (
    <Formik
      initialValues={
        type === 'register' ? registerInitialValue : loginInitialValue
      }
      validationSchema={
        type === 'register' ? registerValidationSchema : loginValidationSchema
      }
      onSubmit={(values) => setValues(values)}
    >
      <Form className={classes.form}>
        <div className={classes.content}>
          <div className={classes.left}>
            <LogoBlue />
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              <h2>
                {type === 'register'
                  ? 'Регистрация в системе'
                  : 'Вход в систему'}
              </h2>
            </div>

            {type === 'register' ? (
              <>
                <FormikInput label={'Логин'} name={'username'} />
                <FormikInput label={'Имя'} name={'name'} />
                <FormikInput label={'Фамилия'} name={'surname'} />
                <FormikInput label={'Отчество'} name={'patronymic'} />
                <FormikInput label={'О вас'} name={'about'} />
                <FormikInput label={'Email'} name={'email'} />
                <FormikInput label={'Пароль'} name={'password'} />
              </>
            ) : (
              <>
                <FormikInput label={'Email'} name={'email'} />
                <FormikInput label={'Пароль'} name={'password'} />
              </>
            )}

            <Button type="submit">
              {type === 'register' ? 'Зарегистрироваться' : 'Войти'}
            </Button>
            <div className={classes.descripton}>
              {type === 'register' ? (
                <div className={classes.descripton}>
                  Если у вас есть аккаунт,{' '}
                  <span onClick={() => navigate('/authorization/login')}>
                    авторизируйтесь
                  </span>
                </div>
              ) : (
                <div className={classes.descripton}>
                  Если у вас нет аккаунта,{' '}
                  <span onClick={() => navigate('/authorization/register')}>
                    зарегистрируйтесь
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthorizationPage;
