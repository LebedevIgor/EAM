import React, { useState } from 'react';

import classes from './ContactPage.module.scss';

import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Thead from '../../components/Table/components/Thead/Thead';
import Th from '../../components/Table/components/Th/Th';
import Tbody from '../../components/Table/components/Tbody/Tbody';
import Tr from '../../components/Table/components/Tr/Tr';
import Td from '../../components/Table/components/Td/Td';
import MyButton from '../../components/Button/Button';
import MyModal from '../../components/Modal/Modal';
import ModalAddUser from './components/ModalAddUser/ModalAddUser';
import ModalUser from './components/ModalUser/ModalUser';
import ModalAcceptInvites from './components/ModalAcceptInvites/ModalAcceptInvites';

const ContactsPage = ({
  contacts,
  modal,
  setModal,
  users,
  modalUserInfo,
  setModalUserInfo,
  modalInvite,
  setModalInvite,
  invitesUsers,
}) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const onClick = () => {
    return setModal(true);
  };
  const onClickInvitesModal = () => {
    return setModalInvite(true);
  };

  const onClickModalUser = (user) => {
    setSelectedUser(user);
    setModalUserInfo(true);
  };

  return (
    <>
      <div className={classes.tasks_page}>
        <Card style={{ width: '100%', padding: '20px 30px', height: '100%' }}>
          <div className={classes.button_wrapper}>
            <MyButton onClick={onClick}>Добавить</MyButton>
            <MyButton onClick={onClickInvitesModal}>Приглашения</MyButton>
          </div>
          {contacts.length > 0 ? (
            <Table>
              <Thead>
                <Th textAlign={'left'}>Фамилия</Th>
                <Th textAlign={'center'}>Имя</Th>
                <Th textAlign={'center'}>Отчество</Th>
                <Th textAlign={'center'}>Логин</Th>
                <Th textAlign={'right'}>Почта</Th>
              </Thead>

              <Tbody>
                {contacts.map((item, index) => (
                  <Tr hover key={index} onClick={() => onClickModalUser(item)}>
                    <Td textAlign={'left'}>{item.surname}</Td>
                    <Td textAlign={'center'}>{item.name}</Td>
                    <Td textAlign={'center'}>{item.patronymic}</Td>
                    <Td textAlign={'center'}>{item.username}</Td>
                    <Td textAlign={'right'}>{item.email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <div style={{ textAlign: 'center', color: '#585858' }}>
              Ваш список контактов пуст
            </div>
          )}
        </Card>
      </div>
      <MyModal modal={modal} setModal={setModal}>
        <ModalAddUser modal={modal} setModal={setModal} users={users} />
      </MyModal>
      <MyModal modal={modalInvite} setModal={setModalInvite}>
        <ModalAcceptInvites
          modal={modalInvite}
          invitesUsers={invitesUsers}
          setModal={setModalInvite}
        />
      </MyModal>
      <MyModal modal={modalUserInfo} setModal={setModalUserInfo}>
        {selectedUser && (
          <ModalUser
            user={selectedUser}
            modal={modalUserInfo}
            setModal={setModalUserInfo}
          />
        )}
      </MyModal>
    </>
  );
};

export default ContactsPage;
