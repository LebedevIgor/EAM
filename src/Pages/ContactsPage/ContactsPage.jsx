import React from 'react';

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

const ContactsPage = ({ users, setUsers, modal, setModal }) => {
  console.log(users);
  const userData = [
    { name: 'asd', fam: 'asdasd', otch: 'asd', login: 'asdasd', email: 'asd' },
  ];
  const onClick = () => {
    return setModal(true);
  };
  return (
    <>
      <div className={classes.tasks_page}>
        <Card style={{ width: '100%', padding: '20px 30px', height: '100%' }}>
          <div className={classes.button_wrapper}>
            <MyButton onClick={onClick}>Добавить</MyButton>
            <MyButton>Приглашения</MyButton>
          </div>
          <Table>
            <Thead>
              <Th textAlign={'left'}>Фамилия</Th>
              <Th textAlign={'center'}>Имя</Th>
              <Th textAlign={'center'}>Отчество</Th>
              <Th textAlign={'center'}>Логин</Th>
              <Th textAlign={'right'}>Почта</Th>
            </Thead>

            <Tbody>
              {users.map((item, index) => (
                <Tr hover key={index}>
                  <Td textAlign={'left'}>{item.name}</Td>
                  <Td textAlign={'center'}>{item.surname}</Td>
                  <Td textAlign={'center'}>{item.patronymic}</Td>
                  <Td textAlign={'center'}>{item.username}</Td>
                  <Td textAlign={'right'}>{item.email}</Td>
                </Tr>
              ))}
              {/* <Tr hover>
                <Td textAlign={'left'}>Петров</Td>
                <Td textAlign={'center'}>Иван</Td>
                <Td textAlign={'center'}>Иваныч</Td>
                <Td textAlign={'center'}>Ivan</Td>
                <Td textAlign={'right'}>example@mail.ru</Td>
              </Tr>
              <Tr hover>
                <Td textAlign={'left'}>Иванов</Td>
                <Td textAlign={'center'}>Петр</Td>
                <Td textAlign={'center'}>Павлович</Td>
                <Td textAlign={'center'}>Petro</Td>
                <Td textAlign={'right'}>examplePetro@mail.ru</Td>
              </Tr> */}
            </Tbody>
          </Table>
        </Card>
      </div>
      <MyModal modal={modal} setModal={setModal}>
        <ModalAddUser
          modal={modal}
          setModal={setModal}
          setUser={setUsers}
          users={users}
        />
      </MyModal>
    </>
  );
};

export default ContactsPage;
