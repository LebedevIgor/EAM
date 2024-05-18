import React from 'react';

import Table from '../../../../components/Table/Table';
import Thead from '../../../../components/Table/components/Thead/Thead';
import Th from '../../../../components/Table/components/Th/Th';
import Tbody from '../../../../components/Table/components/Tbody/Tbody';
import Tr from '../../../../components/Table/components/Tr/Tr';
import Td from '../../../../components/Table/components/Td/Td';
import truncateText from '../../../../lib/truncateText';

import classes from './TableTasks.module.scss';
import MyButton from '../../../../components/Button/Button';

const TableTasks = ({ task, setModalEvent }) => {
  return (
    <div style={{ height: 'fit-content', margin: '34px 0 0 10px' }}>
      <div style={{ textAlign: 'center', margin: '0 20px 16px 20px' }}>
        <MyButton
          onClick={() => setModalEvent(true)}
          style={{
            width: '100%',
            borderRadius: '10px',
          }}
        >
          Добавить мероприятие
        </MyButton>
      </div>
      <Table
        style={{
          height: '100%',
          border: '1px solid #cfcfcf',
          borderRadius: '10px',
        }}
      >
        <Thead style={{ gridTemplateColumns: '90px 183px', padding: '4px' }}>
          <Th textAlign={'left'} style={{ fontSize: '14px' }}>
            Название задачи
          </Th>
          <Th textAlign={'center'} style={{ fontSize: '14px' }}>
            Описание
          </Th>
        </Thead>
        <Tbody>
          <div className={classes.wrapper_scroll}>
            {task.map((i, index) => {
              if (i.length !== 0) {
                return (
                  <Tr
                    id={i.id}
                    hoverLastChildFix
                    hover
                    key={index}
                    style={{
                      cursor: 'grab',
                      gridTemplateColumns: '90px 183px',
                      padding: '4px',
                    }}
                    draggable
                    onDragStart={(e) => {
                      const data = JSON.stringify({
                        task_id: i.id,
                        name: i.task_name,
                      });
                      e.dataTransfer.setData('data', data);
                    }}
                  >
                    <Td
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontFamily: 'monospace',
                      }}
                      textAlign={'left'}
                    >
                      {truncateText(i.task_name, 7)}
                    </Td>

                    <Td
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontFamily: 'monospace',
                      }}
                      textAlign={'left'}
                    >
                      {truncateText(i.description, 17)}
                    </Td>
                  </Tr>
                );
              }
              return (
                <div style={{ textAlign: 'center', color: '#585858' }}>
                  Задач нет
                </div>
              );
            })}
          </div>
        </Tbody>
      </Table>
    </div>
  );
};

export default TableTasks;
