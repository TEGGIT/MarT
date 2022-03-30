import React, { useState } from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DateRangePicker from '@mui/lab/DateRangePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

import classes from './Modal.module.scss'
import './muiStyles.scss'

const Modal = ({ setOpenModal }) => {
  const closeModal = () => setOpenModal(false)
  const def = (e) => {
    // позже нужно будет удалить. Это временная заглушка для
    e.preventDefault()
  }
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'))
  const [email, setEmail] = useState('')
  const [visitEmail, setVisitEmail] = useState(false)
  const [emailError, setEmailError] = useState('Email не должен быть пустым')
  const [fio, setFio] = useState('')
  const [visitFio, setVisitFio] = useState(false)
  const [fioError, setFioError] = useState('ФИО не может быть пустым')
  const [phone, setPhone] = useState('')
  const [visitPhone, setVisitPhone] = useState(false)
  const [phoneError, setPhoneError] = useState(
    'Номер телефона не может быть пустым'
  )
  const [dataBirthday, setDataBirthday] = useState('')
  const [visitDataBirthday, setVisitDataBirthday] = useState(false)
  const [errorDataBirthday, setErrorDataBirthday] = useState(
    'Заполните дату рождения'
  )
  const [hiddenInput, setHiddenInput] = useState({ display: 'none' })
  const [checked, setChecked] = React.useState(false)
  const [valueData, setValueData] = React.useState([null, null])

  const handleChange = (event) => {
    setChecked(event.target.checked)
    event.target.checked
      ? setHiddenInput({ display: 'block' })
      : setHiddenInput({ display: 'none' })
  }

  const templateDate = (e) => {
    if (e.target.value.length === 2) {
      e.target.value += '.'
    }
  }

  const emailValue = (e) => {
    setEmail(e.target.value)
    const re = /\S+@\S+\.\S+/
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
    const phoneRe = /^((8|\+7)[- ]?)?(\(?\d{23}\)?[- ]?)?[\d\- ]{7,10}$/
    setPhone(e.target.value)
    if (!phoneRe.test(e.target.value)) {
      setPhoneError('Неккоретный номер')
    } else {
      setPhoneError('')
    }
  }

  const dataBirthdayValue = (e) => {
    setDataBirthday(e.target.value)
    if (e.target.value.length > 10) {
      setErrorDataBirthday('Неккоретная дата рождения')
    } else {
      setErrorDataBirthday('')
    }
  }

  const inputBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        setVisitEmail(true)
        break
      case 'text':
        setVisitFio(true)
        break
      case 'phone':
        setVisitPhone(true)
        break
      case 'dataBirthday':
        setVisitDataBirthday(true)
        break
      default:
    }
  }

  return (
    <div className={classes.background} onClick={closeModal}>
      <div
        className={classes.background__card}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={classes.background__card__form}>
          <h2 className={classes.background__card_title}>Регистрация номера</h2>

          <span>
            Номер комнаты: № <span />{' '}
          </span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Дата заезда"
              endText="Дата выезда"
              value={valueData}
              onChange={(newValue) => {
                setValueData(newValue)
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> до </Box>
                  <TextField {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <TimePicker
                label="Время заезда"
                value={value}
                onChange={setValue}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Время выезда"
                value={value}
                onChange={setValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          <div style={hiddenInput}>
            <Input
              title="ФИО:"
              name="text"
              type="text"
              placeholder="Иванов Иван Иванович"
              onBlur={(e) => inputBlur(e)}
              onChange={(e) => fioValue(e)}
              value={fio}
            />
            {visitFio && fioError && (
              <div style={{ color: 'red' }}>{fioError}</div>
            )}
          </div>
          <div style={hiddenInput}>
            <Input
              onChange={(e) => emailValue(e)}
              onBlur={(e) => inputBlur(e)}
              title="Адрес электронной почты:"
              name="email"
              type="email"
              placeholder="ymenya.netprav32@gmail.com"
              value={email}
            />
            {visitEmail && emailError && (
              <div style={{ color: 'red' }}>{emailError}</div>
            )}
          </div>
          <div style={hiddenInput}>
            <Input
              onKeyUp={(e) => templateDate(e)}
              onChange={(e) => dataBirthdayValue(e)}
              onBlur={(e) => inputBlur(e)}
              title="Дата рождения:"
              name="dataBirthday"
              type="data"
              placeholder="дд.мм.гггг"
              value={dataBirthday}
            />
            {visitDataBirthday && errorDataBirthday && (
              <div style={{ color: 'red' }}>{errorDataBirthday}</div>
            )}
          </div>
          <div style={hiddenInput}>
            <Input
              onChange={(e) => phoneValue(e)}
              onBlur={(e) => inputBlur(e)}
              title="Номер телефона:"
              name="phone"
              type="number"
              value={phone}
              placeholder="+79999999999"
            />
            {visitPhone && phoneError && (
              <div style={{ color: 'red' }}>{phoneError}</div>
            )}
          </div>
          <div className={classes.switch}>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <p>Для другого человека</p>
          </div>
          <Button onClick={(e) => def(e)} text="Бронировать" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Modal
