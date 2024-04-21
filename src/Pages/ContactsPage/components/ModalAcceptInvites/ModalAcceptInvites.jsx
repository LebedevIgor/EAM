import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './ModalAcceptInvites.scss';

import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import FormikInput from '../../../../components/FormikInput/FormikInput';
import { modalInitialValue } from '../../initialValues/modalInitialValue';

import addUser from '../../../../services/addUser.service';
import Table from '../../../../components/Table/Table';
import Thead from '../../../../components/Table/components/Thead/Thead';
import Th from '../../../../components/Table/components/Th/Th';
import Tbody from '../../../../components/Table/components/Tbody/Tbody';
import Tr from '../../../../components/Table/components/Tr/Tr';
import Td from '../../../../components/Table/components/Td/Td';
import MyButton from '../../../../components/Button/Button';
import confirmUser from '../../../../services/confirmUser.service';

const ModalAcceptInvites = ({ setModal, invitesUsers }) => {
  console.log(invitesUsers);
  const acceputInvite = async (id, status) => {
    const confirm = {
      id,
      status,
    };
    await confirmUser(confirm);
    setModal(false);
  };

  const denyInvite = async (id, status) => {
    const confirm = {
      id,
      status,
    };
    await confirmUser(confirm);
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
        <Form className="main-modal-accept-invites">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div className="main-modal-container">
            {invitesUsers.length > 0 ? (
              <Table style={{ width: '100%' }}>
                <Thead style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Th textAlign={'left'}>ФИО</Th>
                  <Th textAlign={'left'}>Email</Th>
                </Thead>
                <Tbody style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {invitesUsers.map((user, index) => (
                    <Tr
                      key={index}
                      style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
                      // onClick={() => toggleSelectUser(index)}
                    >
                      <Td
                        textAlign={'left'}
                      >{`${user.surname} ${user.name} ${user.patronymic}`}</Td>
                      <Td textAlign={'left'}>{user.email}</Td>
                      <Td textAlign={'right'}>
                        <MyButton onClick={() => acceputInvite(user.id, true)}>
                          Принять
                        </MyButton>
                        <MyButton onClick={() => denyInvite(user.id, false)}>
                          Отклонить
                        </MyButton>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <div style={{ textAlign: 'center', color: '#585858' }}>
                Никого не найдено
              </div>
            )}
          </div>
          <div className="wrapper">
            <Button type="submit">Отправить</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalAcceptInvites;
