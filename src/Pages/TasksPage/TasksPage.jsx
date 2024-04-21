import React, { useState } from 'react';

import classes from './Tasks.module.scss';

import Card from '../../components/Card/Card';
import MyModal from '../../components/Modal/Modal';
import Modal from './components/Modal/Modal';
import Table from '../../components/Table/Table';
import Thead from '../../components/Table/components/Thead/Thead';
import Th from '../../components/Table/components/Th/Th';
import Tbody from '../../components/Table/components/Tbody/Tbody';
import Tr from '../../components/Table/components/Tr/Tr';
import Td from '../../components/Table/components/Td/Td';
import Accordion from './components/Accordion/Accordion';

const TasksPage = ({ modal, setModal, task, setTask, contacts }) => {
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const onClick = () => {
    return setModal(true);
  };

  const toggleAccordion = (index) => {
    if (index === activeAccordionIndex) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  const handleRowClick = (id) => {
    const clickedTask = task.find((task) => task.id === id);
    setTaskToUpdate(clickedTask);
    setModal(true);
  };

  return (
    <>
      <div className={classes.tasks_page}>
        <Card style={{ width: '100%', padding: '20px 30px', height: '100%' }}>
          <Table
            style={{
              height: '100%',
            }}
          >
            <Thead>
              <Th textAlign={'left'}>Название задачи</Th>
              <Th textAlign={'center'}>Дата начала</Th>
              <Th textAlign={'center'}>Описание</Th>
              <Th textAlign={'center'}>От кого</Th>
              <Th textAlign={'right'}>Кому</Th>
            </Thead>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div
                style={{
                  height: '100%',
                }}
              >
                <Accordion
                  title={'Мои задачи'}
                  AllTasks
                  isActive={activeAccordionIndex === 0}
                  toggleAccordion={() => toggleAccordion(0)}
                  modalActive={onClick}
                >
                  <Tbody>
                    {task.map((i, index) => {
                      return i.task_particip.length === 0 &&
                        i.condition !== 4 ? (
                        <Tr
                          hover
                          key={index}
                          onClick={() => handleRowClick(i.id)}
                        >
                          <Td textAlign={'left'}>{i.task_name}</Td>
                          <Td textAlign={'center'}>
                            {i.begin_date.split('-').reverse().join('-')}
                          </Td>
                          <Td textAlign={'center'}>{i.description}</Td>
                          <Td textAlign={'center'}>-</Td>
                          <Td textAlign={'right'}>Вам</Td>
                        </Tr>
                      ) : null;
                    })}
                  </Tbody>
                </Accordion>

                <Accordion
                  title={'Контактам'}
                  isActive={activeAccordionIndex === 2}
                  toggleAccordion={() => toggleAccordion(2)}
                >
                  <Tbody>
                    {task.map((i, index) => {
                      return i.task_particip.length > 0 && i.condition !== 4 ? (
                        <Tr
                          hover
                          key={index}
                          onClick={() => handleRowClick(i.id)}
                        >
                          <Td textAlign={'left'}>{i.task_name}</Td>
                          <Td textAlign={'center'}>
                            {i.begin_date.split('-').reverse().join('-')}
                          </Td>
                          <Td textAlign={'center'}>{i.description}</Td>
                          <Td textAlign={'center'}>-</Td>
                          <Td textAlign={'right'}>-</Td>
                        </Tr>
                      ) : null;
                    })}
                  </Tbody>
                </Accordion>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <Accordion
                  title={'Архив'}
                  isActive={activeAccordionIndex === 3}
                  toggleAccordion={() => toggleAccordion(3)}
                >
                  <Tbody>
                    {task.map((i, index) => {
                      return i.condition === 4 ? (
                        <Tr
                          hover
                          key={index}
                          onClick={() => handleRowClick(i.id)}
                        >
                          <Td textAlign={'left'}>{i.task_name}</Td>
                          <Td textAlign={'center'}>
                            {i.begin_date.split('-').reverse().join('-')}
                          </Td>
                          <Td textAlign={'center'}>{i.description}</Td>
                          <Td textAlign={'center'}>
                            {contacts.length === 0 ||
                            !contacts.some((item) => item.id === i.host_id)
                              ? 'От вас'
                              : contacts.find((item) => item.id === i.host_id)
                                  ?.username || 'От вас'}
                          </Td>
                          <Td textAlign={'center'}>
                            {contacts.length === 0 ||
                            !contacts.some((item) => item.id === i.host_id)
                              ? i.task_particip
                                  .map((participId) => {
                                    const participant = contacts.find(
                                      (contact) => contact.id === participId
                                    );
                                    return participant
                                      ? participant.username
                                      : null;
                                  })
                                  .filter(Boolean)
                                  .join(' ')
                              : contacts.map((item, index) => {
                                  return item.id !== i.host_id
                                    ? 'Вы '
                                    : item.username;
                                })}
                          </Td>
                        </Tr>
                      ) : null;
                    })}
                  </Tbody>
                </Accordion>
              </div>
            </div>
          </Table>
        </Card>
      </div>
      <MyModal modal={modal} setModal={setModal}>
        <Modal
          modal={modal}
          task={task}
          setModal={setModal}
          setTask={setTask}
          taskToUpdate={taskToUpdate}
          setTaskToUpdate={setTaskToUpdate}
          contacts={contacts}
        />
      </MyModal>
    </>
  );
};

export default TasksPage;
