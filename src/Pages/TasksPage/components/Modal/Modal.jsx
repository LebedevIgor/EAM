import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './modal.scss';

import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import FormikInput from '../../../../components/FormikInput/FormikInput';
import { modalInitialValue } from '../../InitialValues/modalInitialValue';
import createDataTask from '../../../../services/createDataTask.service';
import updateDataTask from '../../../../services/updateDataTask.service';
import deleteDataTask from '../../../../services/deleteDataTask.service';

const Modal = ({
  setModal,
  setTask,
  task,
  setTaskToUpdate,
  taskToUpdate,
  modal,
}) => {
  const [idCount, setIdCount] = useState(0);
  useEffect(() => {
    if (!modal) {
      setTaskToUpdate(null);
    }
  }, [modal, setTaskToUpdate]);

  const addTasks = async (values) => {
    setIdCount(idCount + 1);
    const newTask = {
      is_private: 'true',
      priority: '1',
      remind: 'true',
      begin_date: '08.04.2024',
      complete_perc: '0',
      condition: '0',
      date_remind: '08.04.2024',
      end_date: '08.04.2024',
      description: values.description,
      task_name: values.task_name,
    };
    // setTask();
    await createDataTask(newTask);
    setTaskToUpdate(null);
    setModal(false);
  };

  const updateTask = async (values) => {
    const updatedTask = {
      ...taskToUpdate,
      description: values.description,
      task_name: values.task_name,
    };

    // const updatedTasks = task.map((task) =>
    //   task.id === taskToUpdate.id ? updatedTask : task
    // );
    // setTask(updatedTasks);
    await updateDataTask(updatedTask);
    setTaskToUpdate(null);
    setModal(false);
  };

  const deleteTask = async () => {
    // const updatedTasks = task.filter((t) => t.id !== taskToUpdate.id);
    let id = taskToUpdate.id;
    await deleteDataTask(id);
    // setTask(updatedTasks);
    setTaskToUpdate(null);
    setModal(false);
  };

  return (
    <>
      {/* {taskToUpdate && console.log(taskToUpdate)} */}
      {taskToUpdate && (
        <Formik
          initialValues={taskToUpdate}
          onSubmit={(values, { resetForm }) => {
            updateTask(values);
            resetForm();
          }}
        >
          {() => (
            <Form className="main-modal">
              <i>
                <Cross setModal={setModal} />
              </i>
              <div className="main-modal-container">
                <FormikInput name="task_name" label="Название задачи" />
                <FormikInput name="description" label="Описание" />
              </div>

              <div className="wrapper">
                <Button type="submit">Готово</Button>
                <Button onClick={deleteTask}>Удалить</Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
      {!taskToUpdate && (
        <Formik
          initialValues={modalInitialValue}
          onSubmit={(values, { resetForm }) => {
            addTasks(values);
            resetForm();
          }}
        >
          {() => (
            <Form className="main-modal">
              <i>
                <Cross setModal={setModal} />
              </i>
              <div className="main-modal-container">
                <FormikInput name="task_name" label="Название задачи" />
                <FormikInput name="description" label="Описание" />
              </div>

              <div className="wrapper">
                <Button type="submit">Готово</Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Modal;
