import React, { useState, useEffect } from 'react';
import classes from './Monitorin.module.scss';

import Modal from './components/modal/Modal';
import MyModal from '../../component/Modal/Modal';
import MyButton from '../../component/MyButton/MyButton';
import Chart from './components/Chart/Chart';

import trash from '../../resources/image/trash.png';

const Monitoring = ({ name, secondName, group }) => {
  const [teacherName, setTeacherName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [currentGrade, setCurrentGrade] = useState('');
  const [modal, setModal] = useState(false);
  const [grades, setGrades] = useState([]);
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(null);

  useEffect(() => {
    const storedGrades = localStorage.getItem('grades');
    if (storedGrades) {
      setGrades(JSON.parse(storedGrades));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('grades', JSON.stringify(grades));
  }, [grades]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGrade = {
      subjectName: subjectName,
      teacherName: teacherName,
      grade: currentGrade,
    };
    setGrades([...grades, newGrade]);
  };

  const handleDeleteGrade = () => {
    setGrades((prevGrades) => {
      const updatedGrades = [...prevGrades];
      updatedGrades.splice(selectedGradeIndex, 1);
      return updatedGrades;
    });
    setSelectedGradeIndex(null);
  };

  return (
    <div className={classes.monitoring}>
      <div className={classes.container}>
        <h1>Мониторинг учебного процесса</h1>
        <h2>
          {secondName} {name} {group}
        </h2>
        <MyModal modal={modal} setModal={setModal}>
          <Modal
            handleSubmit={handleSubmit}
            teacherName={teacherName}
            setTeacherName={setTeacherName}
            subjectName={subjectName}
            setSubjectName={setSubjectName}
            currentGrade={currentGrade}
            setCurrentGrade={setCurrentGrade}
            setModal={setModal}
          />
        </MyModal>
        <table>
          <thead>
            <tr>
              <th>Название предмета</th>
              <th>ФИО преподавателя</th>
              <th>Текущие баллы</th>
              <th>Графическое представление баллов</th>
              <th>Удалить запись</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subjectName}</td>
                <td>{grade.teacherName}</td>
                <td>{grade.grade}</td>
                <td>
                  <Chart
                    project={grade.grade >= 61 ? 'Зачет' : 'Не зачет'}
                    percent={+grade.grade}
                  />
                </td>
                <td>
                  <button>
                    <img
                      onClick={() => setSelectedGradeIndex(index)}
                      src={trash}
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MyButton className={classes.button} onClick={() => setModal(true)}>
          Добавить запись
        </MyButton>
        <MyModal
          modal={selectedGradeIndex !== null}
          setModal={setSelectedGradeIndex}
        >
          <div>
            <h2>Подтверждение удаления</h2>
            <p>Вы точно хотите удалить эту запись?</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <MyButton
                className={classes.button}
                onClick={handleDeleteGrade}
                style={{ marginRight: '30px' }}
              >
                Удалить
              </MyButton>
              <MyButton onClick={() => setSelectedGradeIndex(null)}>
                Отменить
              </MyButton>
            </div>
          </div>
        </MyModal>
      </div>
    </div>
  );
};

export default Monitoring;
