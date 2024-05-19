import React from 'react';
import './modal-view.scss';
import Cross from '../../../../resources/image/icon/Cross';
import Button from '../../../../components/Button/Button';
import deleteTaskCalendar from '../../../../services/deleteTaskCalendar.service';
import Chart from '../../../../components/Chart/Chart';
import deleteEventCalendar from '../../../../services/deleteEventCalendar.service';

const ModalView = ({
  setModal,
  taskToView,
  setTaskToView,
  clickDate,
  setClickDate,
}) => {
  const deleteTask = (e) => {
    e.preventDefault();
    deleteTaskCalendar(clickDate, taskToView.host_id, taskToView.id);
    setClickDate('');
    setTaskToView(null);
    setModal(false);
  };

  const deleteEvent = (e) => {
    e.preventDefault();
    deleteEventCalendar(taskToView.host_id, taskToView.id);
    setTaskToView(null);
    setModal(false);
  };

  const optionsPriority = [
    { value: 0, label: 'Низкая' },
    { value: 1, label: 'Обычная' },
    { value: 2, label: 'Высокая' },
  ];

  const optionsСondition = [
    { value: 0, label: 'Не началась' },
    { value: 1, label: 'Выполняется' },
    { value: 2, label: 'В ожидании' },
    { value: 3, label: 'Отложена' },
    { value: 4, label: 'Завершена' },
  ];

  const getLabel = (value, options) => {
    const option = options.find((option) => option.value === value);
    return option ? option.label : '-';
  };

  return (
    <>
      {taskToView && !taskToView.is_events && (
        <form className="main-modal-view">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div className="main-modal-view-container">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Название задачи:</div> <div>{taskToView.task_name}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Важность:</div>{' '}
              <div>{getLabel(taskToView.priority, optionsPriority)}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Дата начала:</div> <div>{taskToView.begin_date}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Дата конца:</div> <div>{taskToView.end_date}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Состояние:</div>{' '}
              <div>{getLabel(taskToView.condition, optionsСondition)}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Участники: </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {taskToView.task_particip.map((i, index) => (
                  <div key={index}>{i.label}</div>
                ))}
              </div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>Описание:</div>{' '}
              <div style={{ maxWidth: '350px' }}>{taskToView.description}</div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div>Процент выполнения</div>
              <Chart percent={+taskToView.complete_perc} />
            </div>
          </div>

          <div className="wrapper">
            <Button onClick={(e) => deleteTask(e)}>Удалить задачу</Button>
          </div>
        </form>
      )}

      {taskToView && taskToView.is_events && (
        <form className="main-modal-view">
          <i>
            <Cross setModal={setModal} />
          </i>
          <div
            className="main-modal-view-container"
            style={{ marginBottom: '16px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Название мероприятия:</div> <div>{taskToView.name}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Дата и Время</div>{' '}
              <div>
                {taskToView.date} {taskToView.time}
              </div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>Описание:</div>{' '}
              <div style={{ maxWidth: '350px' }}>{taskToView.description}</div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Участники: </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {taskToView.particip.map((i, index) => (
                  <div key={index}>{i.label}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="wrapper">
            <Button onClick={(e) => deleteEvent(e)}>Удалить мероприятие</Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ModalView;
