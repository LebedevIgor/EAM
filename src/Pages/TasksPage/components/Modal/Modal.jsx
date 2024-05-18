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
import Select from 'react-select';
import FormikTextArea from '../../../../components/FormikTextArea/FormikTextArea';

const Modal = ({
  setModal,
  setTask,
  task,
  contacts,
  setTaskToUpdate,
  taskToUpdate,
  modal,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);

  const handleMultiSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    if (contacts) {
      setOptions(() =>
        contacts.map((i) => ({
          value: i.id,
          label: `${i.surname} ${i.name} ${i.patronymic}`,
        }))
      );
    }
  }, [contacts, modal]);

  useEffect(() => {
    if (taskToUpdate && taskToUpdate.task_particip.length > 0) {
      setSelectedOptions(() =>
        taskToUpdate.task_particip.map((i) => ({
          value: i.id,
          label: i.label,
        }))
      );
    }
  }, [taskToUpdate, modal]);

  useEffect(() => {
    if (!modal) {
      setSelectedOptions([]);

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
      task_particip: selectedOptions,
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
      task_particip: selectedOptions,
      host_id: values.host_id,
    };

    await updateDataTask(updatedTask);
    setTaskToUpdate(null);
    setModal(false);
  };

  const deleteTask = async () => {
    const id = taskToUpdate.id;
    const host_id = taskToUpdate.host_id;

    await deleteDataTask(id, host_id);
    setTaskToUpdate(null);
    setModal(false);
  };

  const testOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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
                <div style={{ width: '100%' }}>
                  <Select
                    placeholder={'Участники'}
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleMultiSelectChange}
                  />
                </div>
                <FormikTextArea name="description" label="Описание" />
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
                <FormikInput
                  name="task_name"
                  label="Название задачи"
                  textarea
                />
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
                <div style={{ width: '100%' }}>
                  <Select
                    placeholder={'Участники'}
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleMultiSelectChange}
                  />
                </div>
                <FormikTextArea name="description" label="Описание" />
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
