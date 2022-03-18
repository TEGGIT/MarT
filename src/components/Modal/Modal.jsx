import React from 'react';
import classes from './Modal.module.scss'
import Input from "../UI/Input/Input";
import Button from '../UI/Button/Button'

const Modal = ({setOpenModal}) => {

  const closeModal = () => setOpenModal(false)

  return (
      <div className={classes.background} onClick={closeModal}>
        <div className={classes.background__card} onClick={e => e.stopPropagation()}>
          <form className={classes.background__card__form}>
            <h2 className={classes.background__card_title}>Регистрация номера</h2>
            <span>Номер комнаты: № <span></span> </span>
            <Input title="Дата и время прибытия:" name="datetime" type="datetime-local"/>
            <Input title="ФИО:" name="text" type="text" placeholder={'Введите ФИО'}/>
            <Input title="Паспорт, серия и номер:" name="number" type="number"
                   placeholder={'Введите паспортные данные (без пробела)'}/>
            <Input title="Дата рождения:" name="number" type="number" placeholder={'Введите дату рождения'}/>
            <div className={classes.background__card__form_radio}>
              <p>Пол:</p>
              <span>М</span>
              <Input type={"radio"} name={'radio'}/>
              <span>Ж</span>
              <Input type={"radio"} name={'radio'}/>
            </div>
            <Input title="Домашний адрес:" name="text" type="text" placeholder={'Введите домашний адрес'}/>
            <Input title="Номер телефона:" name="number" type="number" placeholder={'Введите номер телефона'}/>
            <Button
                text={'Бронировать'}
                type={'submit'}
            />

          </form>
        </div>
      </div>
  );
};

export default Modal;