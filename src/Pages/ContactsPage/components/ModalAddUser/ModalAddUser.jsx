import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './ModalAddUser.scss';

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

const ModalAddUser = ({ setModal, users }) => {
  const [usersData, setUserData] = useState([
    {
      id: 1,
      login: 'login',
      name: 'name',
      surname: 'fam',
      patronymic: 'otch',
      email: 'email@mail.ru',
    },
    {
      id: 2,
      login: 'login2',
      name: 'name2',
      surname: 'fam2',
      patronymic: 'otch2',
      email: 'email@mail.ru',
    },
    {
      id: 3,
      login: 'login3',
      name: 'name3',
      surname: 'fam',
      patronymic: 'otch',
      email: 'email@mail.ru',
    },
    {
      id: 4,
      login: 'login4',
      name: 'name4',
      surname: 'fam2',
      patronymic: 'otch2',
      email: 'email@mail.ru',
    },
    // остальные данные...
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const toggleSelectUser = (index) => {
    const isSelected = selectedUsers.includes(users[index].id);
    if (isSelected) {
      const updatedSelectedUsers = selectedUsers.filter(
        (user) => user !== users[index].id
      );
      setSelectedUsers(updatedSelectedUsers);
    } else {
      setSelectedUsers([...selectedUsers, users[index].id]);
    }
  };

  const addUserData = async (values) => {
    console.log(values);
    await addUser(values);
    setSelectedUsers([]);
    setModal(false);
  };

  const filteredUsers = users.filter((user) => {
    const searchWords = searchValue.toLowerCase().split(' ');
    return searchWords.every(
      (word) =>
        user.username.toLowerCase().includes(word) ||
        user.name.toLowerCase().includes(word) ||
        user.surname.toLowerCase().includes(word) ||
        user.patronymic.toLowerCase().includes(word)
    );
  });

  return (
    <Formik
      initialValues={modalInitialValue}
      onSubmit={(values, { resetForm }) => {
        addUserData(selectedUsers);
        resetForm();
      }}
    >
      {() => (
        <Form className="main-modal-add-user">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div className="main-modal-container">
            <div style={{ marginBottom: '30px' }}>
              <FormikInput
                name="search"
                label="Поиск пользователей"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                setSearchValue={setSearchValue}
              />
            </div>
            {filteredUsers.length > 0 ? (
              <Table style={{ width: '100%' }}>
                <Thead style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Th textAlign={'left'}>ФИО</Th>
                  <Th textAlign={'center'}>Логин</Th>
                  <Th textAlign={'right'}>Email</Th>
                </Thead>
                <Tbody style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {filteredUsers.map((user, index) => (
                    <Tr
                      hover={!selectedUsers.includes(users[index].id)}
                      key={index}
                      style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
                      onClick={() => toggleSelectUser(index)}
                      active={selectedUsers.includes(users[index].id)}
                    >
                      <Td
                        textAlign={'left'}
                      >{`${user.surname} ${user.name} ${user.patronymic}`}</Td>
                      <Td textAlign={'center'}>{user.username}</Td>
                      <Td textAlign={'right'}>{user.email}</Td>
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

export default ModalAddUser;
