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
import FormikSelect from '../../../../components/FormikSelect/FormikSelect';
import { optionsPriority, optionsСondition } from '../../InitialValues/options';
import FormikInputType from '../../../../components/FormikInputType/FormikInputType';

const Modal = ({
  setModal,
  setTask,
  task,
  contacts,
  setTaskToUpdate,
  taskToUpdate,
  modal,
}) => {
  useEffect(() => {
    if (!modal) {
      setTaskToUpdate(null);
    }
  }, [modal, setTaskToUpdate]);

  const addTasks = async (values) => {
    const newTask = {
      is_private: 'true',
      remind: 'true',
      begin_date: values.begin_date,
      complete_perc: values.complete_perc,
      condition: values.condition,
      date_remind: '2024-04-12',
      end_date: '2024-04-12',
      priority: values.priority,
      description: values.description,
      task_name: values.task_name,
      task_particip: [],
    };

    await createDataTask(newTask);
    setTaskToUpdate(null);
    setModal(false);
  };

  const updateTask = async (values) => {
    const updatedTask = {
      ...taskToUpdate,
      description: values.description,
      task_name: values.task_name,
      priority: values.priority,
      begin_date: values.begin_date,
      end_date: values.end_date,
      complete_perc: values.complete_perc,
      condition: values.condition,
    };

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
                <FormikSelect
                  name="priority"
                  label={'Важность'}
                  options={optionsPriority}
                />
                <FormikInputType
                  name="begin_date"
                  label="Дата начала"
                  type="date"
                />
                <FormikInputType
                  name="end_date"
                  label="Дата конца"
                  type="date"
                />
                <FormikInputType
                  name="complete_perc"
                  label="Процент выполнения"
                  type="number"
                />
                <FormikSelect
                  name="condition"
                  label={'Состояние'}
                  options={optionsСondition}
                />
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
                <FormikSelect
                  name="priority"
                  label={'Важность'}
                  options={optionsPriority}
                />
                <FormikInputType
                  name="begin_date"
                  label="Дата начала"
                  type="date"
                />
                <FormikInputType
                  name="end_date"
                  label="Дата конца"
                  type="date"
                />
                <FormikInputType
                  name="complete_perc"
                  label="Процент выполнения"
                  type="number"
                />
                <FormikSelect
                  name="condition"
                  label={'Состояние'}
                  options={optionsСondition}
                />
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
