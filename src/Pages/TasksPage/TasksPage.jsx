import React from 'react';

import classes from './Tasks.module.scss';
import Card from '../../components/Card/Card';
import MyButton from '../../components/Button/Button';
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
  // const [isContentVisible, setContentVisibility] = useState([
  //   true,
  //   false,
  //   false,
  // ]);
  console.log(task);
  const onClick = () => {
    return setModal(true);
  };
  //   const [taskName, setTaskName] = useState('');
  //   const [description, setDescription] = useState('');
  return (
    <>
      <div className={classes.tasks_page}>
        <Card style={{ width: '100%', padding: '20px 30px', height: '100%' }}>
          {/* <div className={classes.button_wrapper}>
            <MyButton onClick={onClick}>Добавить задачу</MyButton>
          </div>
          <div className={classes.container}>
            {task.map((i) => (
              <Card hover style={{ height: '200px', width: '150px' }}>
                <div className={classes.card_wrapper}>
                  <div className={classes.title_wrapper}>
                    <div>{i.taskName}</div>
                  </div>
                  <div>{i.description}</div>
                </div>
              </Card>
            ))}
          </div> */}

          <Table>
            <Thead>
              <Th textAlign={'left'}>Название задачи</Th>
              <Th textAlign={'center'}>Дата</Th>
              <Th textAlign={'center'}>Описание</Th>
              <Th textAlign={'center'}>От кого</Th>
              <Th textAlign={'right'}>Кому</Th>
            </Thead>
            <Accordion title={'Все задачи'} AllTasks>
              <Tbody>
                {/* {task.map((i) => (
                  <Tr>
                    <Td textAlign={'left'}>{i.task_name}</Td>
                    <Td textAlign={'center'}>{i.begin_date}</Td>
                    <Td textAlign={'center'}>{i.description}</Td>
                    <Td textAlign={'center'}>-</Td>
                    <Td textAlign={'right'}>-</Td>
                  </Tr>
                ))} */}
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
              </Tbody>
            </Accordion>
            <Accordion title={'Мои задачи'}>
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
              </Tbody>
            </Accordion>
            <Accordion title={'Контактам'}>
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
              </Tbody>
            </Accordion>
            <Accordion title={'Выполненые задачи'}>
              <Tbody>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
                <Tr>
                  <Td textAlign={'left'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'center'}>Data 1</Td>
                  <Td textAlign={'right'}>Data 1</Td>
                </Tr>
              </Tbody>
            </Accordion>
          </Table>
        </Card>
      </div>
      <MyModal modal={modal} setModal={setModal}>
        <Modal setModal={setModal} setTask={setTask} />
      </MyModal>
    </>
  );
};

export default TasksPage;
