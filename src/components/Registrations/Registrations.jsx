import React, { useEffect, useState } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

import classes from './Registrations.module.scss'

const Registrations = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [fio, setFio] = useState('')
  const [date, setDate] = useState('')
  const [emailVisit, setEmailVisit] = useState(false)
  const [passwordVisit, setPasswordVisit] = useState(false)
  const [visitPhone, setVisitPhone] = useState(false)
  const [visitFio, setVisitFio] = useState(false)
  const [visitDate, setVisitDate] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  )
  const [phoneError, setPhoneError] = useState(
    'Номер телефона не может быть пустым'
  )
  const [DateError, setDateError] = useState(
    'Дата рождения не может быть пустым'
  )
  const [fioError, setFioError] = useState('ФИО не может быть пустым')

  useEffect(() => {
    if (emailError || passwordError || phoneError || fioError || DateError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, phoneError, fioError, DateError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailRe =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}-;])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRe.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }
  const phoneHandler = (e) => {
    const phoneRe = /^((8|\+7)[-; ]?)?(\(?\d{3}\)?[-; ]?)?[\d\- ]{7,10}$/
    setPhone(e.target.value)
    if (!phoneRe.test(e.target.value)) {
      setPhoneError('Неккоретный номер')
    } else {
      setPhoneError('')
    }
  }
  const dateHandler = (e) => {
    const dateRe =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    setDate(e.target.value)
    if (!dateRe.test(e.target.value)) {
      setDateError('Укажите дату верно')
    } else {
      setDateError('')
    }
  }

  const fioHandler = (e) => {
    setFio(e.target.value)
    if (e.target.value.length < 10) {
      setFioError(' Неправильно введены ФИО')
    } else {
      setFioError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 5 || e.target.value.length > 10) {
      setPasswordError('Пароль должен быть не меньше 5 и не больше 10 символов')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailVisit(true)
        break
      case 'password':
        setPasswordVisit(true)
        break
      case 'phone':
        setVisitPhone(true)
        break
      case 'fio':
        setVisitFio(true)
        break
      case 'date':
        setVisitDate(true)
        break
      default:
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className={classes.registrations}>
          <div className={classes.registrations_title}>
            <h3>Регистрация</h3>
          </div>
          <form className={classes.registrations_form}>
            <Input
              onChange={(e) => fioHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={fio}
              name="fio"
              type="text"
              title="ФИО:"
              placeholder="Иванов Иван Иванович"
            />
            {visitFio && fioError && (
              <div style={{ color: 'red' }}>{fioError}</div>
            )}
            <Input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              name="email"
              type="email"
              title="Адрес электронной почты:"
              placeholder="ymenya.netprav32@gmail.com"
            />
            {emailVisit && emailError && (
              <div style={{ color: 'red' }}>{emailError}</div>
            )}
            <Input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              name="password"
              type="password"
              title="Пароль"
              placeholder="absd123"
            />
            {passwordVisit && passwordError && (
              <div style={{ color: 'red' }}>{passwordError}</div>
            )}
            <Input
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => phoneHandler(e)}
              value={phone}
              name="phone"
              type="number"
              title="Номер телефона:"
              placeholder="+79999999999"
            />
            {visitPhone && phoneError && (
              <div style={{ color: 'red' }}>{phoneError}</div>
            )}
            <Input
              onChange={(e) => dateHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={date}
              name="date"
              type="text"
              title="Дата рождения:"
              placeholder="дд.мм.гг"
            />
            {visitDate && DateError && (
              <div style={{ color: 'red' }}>{DateError}</div>
            )}
            <Button
              disabled={!formValid}
              type="submit"
              text="Зарегистрироваться"
            />
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Registrations;