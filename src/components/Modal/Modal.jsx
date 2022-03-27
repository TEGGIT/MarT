import React, {useEffect, useState} from 'react';
import classes from './Modal.module.scss'
import Input from "../UI/Input/Input";
import Button from '../UI/Button/Button'

const Modal = ({setOpenModal}) => {

  const closeModal = () => setOpenModal(false)
  const def = (e) => { // позже нужно будет удалить. Это временная заглушка для
    e.preventDefault();

  }
  const [email, setEmail] = useState("")
  const [visidEmail, setVisidEmail] = useState(false)
  const [emailError, setEmailError] = useState("Email не должен быть пустым")
  const [fio, setFio] = useState("")
  const [visidFio, setVisidFio] = useState(false)
  const [fioError, setFioError] = useState("Заполните ФИО")
  const emailValue = (e) => {
    setEmail(e.target.value)
    const re = /\S+@\S+\.\S+/;
    if(!re.test(e.target.value)) {
       setEmailError('Неккоретный email')
    }else{
      setEmailError('')
    }
  }

  const fioValue = (e) => {
    setFio(e.target.value)
    if (e.target.value > 3 ){
      setFioError(' Неправильно введены ФИО')
    }else{
      setFioError('')
    }
  }

  const inputBlur = (e) => {
   switch (e.target.name){
     case 'email':
       setVisidEmail(true)
       break
     case 'text':
       setVisidFio(true)
       break

   }
  }

  return (
      <div className={classes.background} onClick={closeModal}>
        <div className={classes.background__card} onClick={e => e.stopPropagation()}>
          <form className={classes.background__card__form}>
            <h2 className={classes.background__card_title}>Регистрация номера</h2>
            <span>Номер комнаты: № <span/> </span>
            <Input title="Дата и время прибытия:" name="datetime" type="datetime-local"/>
            <Input title="ФИО:" name="text" type="text" placeholder={'Введите ФИО'}  onBlur={e => inputBlur(e)} onChange={e => fioValue(e)} value={fio}/>
            {(visidFio && fioError) && <div style={{color:("red")}}>{fioError}</div>}
            <Input  onChange={e => emailValue(e)}  onBlur={e => inputBlur(e)} title="Адрес электронной почты:" name="email" type="email"
                   placeholder={'Адрес электронной почты'} value={email}/>
            {(visidEmail && emailError) && <div style={{color:("red")}}>{emailError}</div>}


            <Input title="Дата рождения:" name="number" type="number" placeholder={'Введите дату рождения'}/>

            <Input title="Номер телефона:" name="number" type="number" placeholder={'Введите номер телефона'}/>
            <Button
                onClick={e => def(e)}
                text={'Бронировать'}
                type={'submit'}
            />

          </form>
        </div>
      </div>
  );
};

export default Modal;