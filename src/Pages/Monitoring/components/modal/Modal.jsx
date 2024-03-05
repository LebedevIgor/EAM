import React, { useState } from 'react';
import './Modal.scss';

import Cross from '../../../../resources/image/icon/Cross';
import MyInput from '../../../../component/Input/Input';
import MyButton from '../../../../component/Button/Button';

const Modal = ({
  setModal,
  handleSubmit,
  teacherName,
  setTeacherName,
  subjectName,
  setSubjectName,
  currentGrade,
  setCurrentGrade,
}) => {
  const [currentGradeError, setCurrentGradeError] = useState('');

  const readyPost = (e) => {
    setModal(false);
    handleSubmit(e);
    setTeacherName('');
    setSubjectName('');
    setCurrentGrade('');
    setCurrentGradeError('');
  };

  const handleCurrentGradeChange = (event) => {
    const value = event.target.value;
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 100)) {
      setCurrentGrade(value);
      setCurrentGradeError('');
    } else {
      setCurrentGradeError('Введите значение от 0 до 100');
    }
  };

  return (
    <form className="main-modal">
      <i>
        <Cross setModal={setModal} />
      </i>
      <div className="main-modal-container">
        <MyInput
          type="text"
          placeholder="Имя преподавателя"
          value={teacherName}
          onChange={(event) => setTeacherName(event.target.value)}
        />

        <MyInput
          type="text"
          placeholder="Название предмета"
          value={subjectName}
          onChange={(event) => setSubjectName(event.target.value)}
        />

        <MyInput
          type="number"
          placeholder="Текущий балл"
          value={currentGrade}
          onChange={handleCurrentGradeChange}
        />
        {currentGradeError && <div className="error">{currentGradeError}</div>}
      </div>

      <div className="wrapper">
        <MyButton onClick={(e) => readyPost(e)}>Готово</MyButton>
      </div>
    </form>
  );
};

export default Modal;
