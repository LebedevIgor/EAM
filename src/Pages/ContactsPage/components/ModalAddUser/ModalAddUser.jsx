import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './ModalAddUser.scss';

import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import FormikInput from '../../../../components/FormikInput/FormikInput';
import { modalInitialValue } from '../../initialValues/modalInitialValue';

import addUser from '../../../../services/addUser.service';

const ModalAddUser = ({ setModal }) => {
  const addUserData = async (values) => {
    const newUser = {
      login: values.login,
    };
    await addUser(newUser);
    setModal(false);
  };

  return (
    <Formik
      initialValues={modalInitialValue}
      onSubmit={(values, { resetForm }) => {
        addUserData(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="main-modal">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div className="main-modal-container">
            <FormikInput name="login" label="Логин пользователя" />
          </div>

          <div className="wrapper">
            <Button type="submit">Отправить</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddUser;
