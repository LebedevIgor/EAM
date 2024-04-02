import React, { useState } from 'react';
import './modal.scss';
import Cross from '../../../../resources/image/icon/Cross';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const Modal = ({ setModal, setTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  console.log(taskName, description);
  const addTasks = () => {
    if (taskName.length > 0 && description.length > 0) {
      const newTask = { taskName, description };
      setTask((prevTasks) => [...prevTasks, newTask]);
      setModal(false);
      setTaskName('');
      setDescription('');
    }
  };

  return (
    <form className="main-modal">
      <i>
        <Cross setModal={setModal} />
      </i>
      <div className="main-modal-container">
        <Input
          type="text"
          placeholder="Название задачи"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />

        <Input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div className="wrapper">
        <Button onClick={(e) => addTasks(e)}>Готово</Button>
        {/* <Button onClick={(e) => deletePost(e, target)}>Удалить</Button> */}
      </div>
    </form>
  );
};

export default Modal;
