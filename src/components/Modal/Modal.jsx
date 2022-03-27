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
  const [fioError, setFioError] = useState("ФИО не может быть пустым")
  const [phone, setPhone] = useState("")
  const [visidPhone, setVisidPhone] = useState(false)
  const [phoneError, setPhoneError] = useState('Номер телефона не может быть пустым')
  const [dataBirthday, setDataBirthday] = useState("")
  const [visidDataBirthday, setVisidDataBirthday] = useState(false)
  const [errorDataBirthday, setErrorDataBirthday] = useState("Заполните дату рождения")




  const emailValue = (e) => {
    setEmail(e.target.value)
    const re = /\S+@\S+\.\S+/;
    if (!re.test(e.target.value)) {
      setEmailError('Неккоретный email')
    } else {
      setEmailError('')
    }
  }

  const fioValue = (e) => {
    setFio(e.target.value)
    if (e.target.value.length < 3) {
      setFioError(' Неправильно введены ФИО')
    } else {
      setFioError('')
    }
  }

  const phoneValue = (e) => {
    const phoneRe = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    setPhone(e.target.value)
    if (!phoneRe.test(e.target.value)) {
      setPhoneError("Неккоретный номер")
    }else{
      setPhoneError("")
    }
  }

  const dataBirtdayValue = (e) => {
    setDataBirthday(e.target.value)
    if (e.target.value.length < 10){
      setErrorDataBirthday("Неккоретная дата рождения")
    }else{
      setErrorDataBirthday("")
    }
  }

  const inputBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        setVisidEmail(true)
        break
      case 'text':
        setVisidFio(true)
        break
      case 'phone':
        setVisidPhone(true)
        break
      case 'dataBirthday':
        setVisidDataBirthday(true)
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
            <Input title="ФИО:" name="text" type="text" placeholder={'Иванов Иван Иванович'} onBlur={e => inputBlur(e)}
                   onChange={e => fioValue(e)} value={fio}/>
            {(visidFio && fioError) && <div style={{color: ("red")}}>{fioError}</div>}
            <Input onChange={e => emailValue(e)} onBlur={e => inputBlur(e)} title="Адрес электронной почты:"
                   name="email" type="email"
                   placeholder={'ymenya.netprav32@gmail.com'} value={email}/>
            {(visidEmail && emailError) && <div style={{color: ("red")}}>{emailError}</div>}
            <Input  onChange={e => dataBirtdayValue(e)} onBlur={e => inputBlur(e)} title="Дата рождения:" name="dataBirthday" type="data" placeholder={'дд.мм.гггг'} value={dataBirthday}/>
            {(visidDataBirthday && errorDataBirthday) && <div style={{color:"red"}}>{errorDataBirthday}</div>}
            <Input onChange={e => phoneValue(e)} onBlur={e => inputBlur(e)} title="Номер телефона:" name="phone" type="number" value={phone}
                   placeholder={'+79999999999'}/>
            {(visidPhone && phoneError) && <div style={{color: ("red")}}>{phoneError}</div>}
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