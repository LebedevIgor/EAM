import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './ModalUser.scss';

import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import FormikInput from '../../../../components/FormikInput/FormikInput';
import { modalInitialValue } from '../../initialValues/modalInitialValue';

import Table from '../../../../components/Table/Table';
import Thead from '../../../../components/Table/components/Thead/Thead';
import Th from '../../../../components/Table/components/Th/Th';
import Tbody from '../../../../components/Table/components/Tbody/Tbody';
import Tr from '../../../../components/Table/components/Tr/Tr';
import Td from '../../../../components/Table/components/Td/Td';
import deleteUser from '../../../../services/deleteUser.service';

const ModalUser = ({ setModal, user }) => {
  const onDeleteUser = async (id) => {
    await deleteUser(id);
    setModal(false);
  };

  return (
    <Formik
      initialValues={modalInitialValue}
      onSubmit={(values, { resetForm }) => {
        // addUserData(selectedUsers);
        resetForm();
      }}
    >
      {() => (
        <Form className="main-modal-user">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div className="main-modal-user-container">
            <Table style={{ width: '100%' }}>
              <Tbody style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Фамилия:</Td>
                  <Td textAlign={'left'}>{user.surname}</Td>
                </Tr>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Имя:</Td>
                  <Td textAlign={'left'}>{user.name}</Td>
                </Tr>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Отчество:</Td>
                  <Td textAlign={'left'}>{user.patronymic}</Td>
                </Tr>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Логин:</Td>
                  <Td textAlign={'left'}>{user.username}</Td>
                </Tr>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Почта:</Td>
                  <Td textAlign={'left'}>{user.email}</Td>
                </Tr>
                <Tr hover={false} style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Td textAlign={'left'}>Информация:</Td>
                  <Td textAlign={'left'}>{user.about}</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
          <div className="wrapper">
            <Button onClick={() => onDeleteUser(user.id)}>Удалить</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalUser;
