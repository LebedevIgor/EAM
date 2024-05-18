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
import truncateText from '../../lib/truncateText';

const TasksPage = ({
  modal,
  setModal,
  task,
  setTask,
  contacts,
  taskToUpdate,
  setTaskToUpdate,
  handleRowClick,
}) => {
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
              <Th textAlign={'center'}>Дата конца</Th>
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
                    {task.some(
                      (i) => i.task_particip.length === 0 && i.condition !== 4
                    ) ? (
                      task.map((i, index) => {
                        if (i.task_particip.length === 0 && i.condition !== 4) {
                          return (
                            <Tr
                              hover
                              key={index}
                              onClick={() => handleRowClick({ id: i.id })}
                            >
                              <Td textAlign={'left'}>
                                {truncateText(i.task_name, 30)}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(
                                  i.end_date.split('-').reverse().join('-'),
                                  20
                                )}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(i.description, 40)}
                              </Td>
                              <Td
                                textAlign={'center'}
                                style={{ textAlign: 'center' }}
                              >
                                {truncateText(i.host_name, 20)}
                              </Td>
                              <Td textAlign={'right'}>Вам</Td>
                            </Tr>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <div style={{ textAlign: 'center', color: '#585858' }}>
                        Задач для вас нет
                      </div>
                    )}
                  </Tbody>
                </Accordion>

                <Accordion
                  title={'Контактам'}
                  isActive={activeAccordionIndex === 2}
                  toggleAccordion={() => toggleAccordion(2)}
                >
                  <Tbody>
                    {task.some(
                      (i) => i.task_particip.length > 0 && i.condition !== 4
                    ) ? (
                      task.map((i, index) => {
                        if (i.task_particip.length > 0 && i.condition !== 4) {
                          return (
                            <Tr
                              hover
                              key={index}
                              onClick={() => handleRowClick({ id: i.id })}
                            >
                              <Td textAlign={'left'}>
                                {truncateText(i.task_name, 30)}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(
                                  i.end_date.split('-').reverse().join('-'),
                                  20
                                )}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(i.description, 40)}
                              </Td>
                              <Td
                                textAlign={'center'}
                                style={{ textAlign: 'center' }}
                              >
                                {truncateText(i.host_name, 30)}
                              </Td>
                              <Td
                                textAlign={'right'}
                                style={{ textAlign: 'center' }}
                              >
                                {truncateText(
                                  i.task_particip
                                    .map((item) => item.label)
                                    .join(' '),
                                  30
                                )}
                              </Td>
                            </Tr>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <div style={{ textAlign: 'center', color: '#585858' }}>
                        Задач для контаков нет
                      </div>
                    )}
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
                    {task.some((i) => i.condition === 4) ? (
                      task.map((i, index) => {
                        if (i.condition === 4) {
                          return (
                            <Tr
                              hover
                              key={index}
                              onClick={() => handleRowClick({ id: i.id })}
                            >
                              <Td textAlign={'left'}>
                                {truncateText(i.task_name, 30)}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(
                                  i.end_date.split('-').reverse().join('-'),
                                  20
                                )}
                              </Td>
                              <Td textAlign={'center'}>
                                {truncateText(i.description, 40)}
                              </Td>
                              <Td
                                textAlign={'center'}
                                style={{ textAlign: 'center' }}
                              >
                                {truncateText(i.host_name, 30)}
                              </Td>
                              <Td
                                textAlign={'right'}
                                style={{ textAlign: 'center' }}
                              >
                                {truncateText(
                                  i.task_particip
                                    .map((item) => item.label)
                                    .join(' '),
                                  30
                                )}
                              </Td>
                            </Tr>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <div style={{ textAlign: 'center', color: '#585858' }}>
                        Архив пуст
                      </div>
                    )}
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
