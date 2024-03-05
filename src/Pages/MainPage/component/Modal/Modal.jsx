import React from 'react';
import './modal.scss';
import Cross from '../../../../resources/image/icon/Cross';
import Input from '../../../../component/Input/Input';
import Button from '../../../../component/Button/Button';

const Modal = ({ posts, setModal, target, setPosts, month, data }) => {
  const timeArr = [
    '08:00 - 09:35 ',
    '09:45 - 11:20 ',
    '11:30 - 13:05 ',
    '13:45 - 15:20 ',
    '15:30 - 17:05 ',
    '17:15 - 18:50 ',
    '19:00 - 20:35 ',
  ];

  function change(prop, event) {
    const newPosts = posts.map((obj) => {
      if (obj.id === target) {
        return { ...obj, [prop]: event.target.value };
      } else {
        return obj;
      }
    });
    setPosts(newPosts);
    console.log(newPosts);
    // localStorage.setItem(month, JSON.stringify(newPosts));
  }

  const readyPost = (e) => {
    e.preventDefault();
    setModal(false);
  };

  function deletePost(e, target) {
    e.preventDefault();
    const newPosts = posts.map((obj) => {
      if (obj.id === target) {
        return {
          ...obj,
          event: '',
          participants: '',
          descr: '',
        };
      } else {
        return obj;
      }
    });
    setPosts(newPosts);
    // localStorage.setItem(month, JSON.stringify(newPosts));
    setModal(false);
  }
  function getValue(prop) {
    const post = posts.find((obj) => obj.id === target);
    return post ? post[prop] || '' : '';
  }

  if (!target) {
    return null;
  }

  return (
    <form className="main-modal">
      <i>
        <Cross setModal={setModal} />
      </i>
      <div className="main-modal-container">
        <Input
          type="text"
          placeholder="Событие"
          value={getValue('event')}
          onChange={(event) => change('event', event)}
        />
        <Input
          style={{ backgroundColor: 'white' }}
          type="text"
          disabled
          value={target}
        />
        <Input
          type="text"
          placeholder="Имена участников"
          value={getValue('participants')}
          onChange={(event) => change('participants', event)}
        />
        <Input
          type="text"
          placeholder="Описание"
          value={getValue('descr')}
          onChange={(event) => change('descr', event)}
        />
        <ol>
          {data.map((item) => {
            if (item[0] === target) {
              let newData = item.slice(1);
              return newData.map((i, index) => (
                <li key={index}>
                  {timeArr[index]}
                  {i}
                </li>
              ));
            } else {
              return null;
            }
          })}
        </ol>
      </div>

      <div className="wrapper">
        <Button onClick={(e) => readyPost(e)}>Готово</Button>
        <Button onClick={(e) => deletePost(e, target)}>Удалить</Button>
      </div>
    </form>
  );
};

export default Modal;
