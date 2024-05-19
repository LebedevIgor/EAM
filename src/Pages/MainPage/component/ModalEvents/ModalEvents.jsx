import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import './modal-events.scss';

import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import FormikInput from '../../../../components/FormikInput/FormikInput';
import { modalInitialValue } from '../../InitialValues/modalInitialValue';
import FormikInputType from '../../../../components/FormikInputType/FormikInputType';
import Select from 'react-select';
import FormikTextArea from '../../../../components/FormikTextArea/FormikTextArea';
import eventsAdd from '../../../../services/eventsAdd.service';

const ModalEvents = ({ setModal, contacts, modal }) => {
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

  const addTasks = async (values) => {
    const newEvent = {
      date: values.date,
      description: values.description,
      event_name: values.event_name,
      task_particip: selectedOptions,
      time: values.time,
    };
    if (values.time.length > 1) {
      await eventsAdd(newEvent);
      setModal(false);
    }
  };

  return (
    <>
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
                name="event_name"
                label="Название мероприятия"
                textarea
              />
              <FormikInputType name="date" label="Дата" type="date" />
              <FormikTextArea name="description" label="Описание" />
              <FormikInputType name="time" label="Время" type="time" />

              <div style={{ width: '100%' }}>
                <Select
                  placeholder={'Участники'}
                  isMulti
                  options={options}
                  value={selectedOptions}
                  onChange={handleMultiSelectChange}
                />
              </div>
            </div>
            <div className="wrapper">
              <Button type="submit">Готово</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ModalEvents;
