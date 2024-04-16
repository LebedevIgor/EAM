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

const TasksPage = ({ modal, setModal, task, setTask }) => {
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
          <Table>
            <Thead>
              <Th textAlign={'left'}>Название задачи</Th>
              <Th textAlign={'center'}>Дата</Th>
              <Th textAlign={'center'}>Описание</Th>
              <Th textAlign={'center'}>От кого</Th>
              <Th textAlign={'right'}>Кому</Th>
            </Thead>
            <Accordion
              title={'Все задачи'}
              AllTasks
              isActive={activeAccordionIndex === 0}
              toggleAccordion={() => toggleAccordion(0)}
              modalActive={onClick}
            >
              <Tbody>
                {task.map((i, index) => (
                  <Tr hover key={index} onClick={() => handleRowClick(i.id)}>
                    <Td textAlign={'left'}>{i.task_name}</Td>
                    <Td textAlign={'center'}>{i.begin_date}</Td>
                    <Td textAlign={'center'}>{i.description}</Td>
                    <Td textAlign={'center'}>-</Td>
                    <Td textAlign={'right'}>-</Td>
                  </Tr>
                ))}
              </Tbody>
            </Accordion>
            <Accordion
              title={'Мои задачи'}
              isActive={activeAccordionIndex === 1}
              toggleAccordion={() => toggleAccordion(1)}
            >
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'right'}>Data1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'center'}>Data1</Td>
                  <Td textAlign={'right'}>Data1</Td>
                </Tr>
              </Tbody>
            </Accordion>
            <Accordion
              title={'Контактам'}
              isActive={activeAccordionIndex === 2}
              toggleAccordion={() => toggleAccordion(2)}
            >
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'right'}>Data2</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'center'}>Data2</Td>
                  <Td textAlign={'right'}>Data2</Td>
                </Tr>
              </Tbody>
            </Accordion>
            <Accordion
              title={'Выполненые задачи'}
              isActive={activeAccordionIndex === 3}
              toggleAccordion={() => toggleAccordion(3)}
            >
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'right'}>Data3</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'center'}>Data3</Td>
                  <Td textAlign={'right'}>Data3</Td>
                </Tr>
              </Tbody>
            </Accordion>
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
        />
      </MyModal>
    </>
  );
};

export default TasksPage;
