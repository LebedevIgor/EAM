import React from 'react';

import classes from './Tasks.module.scss';
import Card from '../../component/Card/Card';
import MyButton from '../../component/Button/Button';
import MyModal from '../../component/Modal/Modal';
import Modal from './components/Modal/Modal';

const TasksPage = ({ modal, setModal, task, setTask }) => {
  const onClick = () => {
    return setModal(true);
  };
  //   const [taskName, setTaskName] = useState('');
  //   const [description, setDescription] = useState('');
  return (
    <>
      <div className={classes.tasks_page}>
        <Card>
          <div className={classes.button_wrapper}>
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
          </div>
        </Card>
      </div>
      <MyModal modal={modal} setModal={setModal}>
        <Modal setModal={setModal} setTask={setTask} />
      </MyModal>
    </>
  );
};

export default TasksPage;
