import React, { useEffect, useState } from 'react'

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

  const [value, setValue] = React.useState(new Date('2022-00-00T00:00:00.000Z'))
  const [email, setEmail] = useState('')
  const [visitEmail, setVisitEmail] = useState(false)
  const [emailError, setEmailError] = useState('Введите email')
  const [fio, setFio] = useState('')
  const [visitFio, setVisitFio] = useState(false)
  const [fioError, setFioError] = useState('Введите ФИО')
  const [phone, setPhone] = useState('')
  const [visitPhone, setVisitPhone] = useState(false)
  const [phoneError, setPhoneError] = useState('Введите номер телефона')
  const [dataBirthday, setDataBirthday] = useState('')
  const [visitDataBirthday, setVisitDataBirthday] = useState(false)
  const [errorDataBirthday, setErrorDataBirthday] = useState(
    'Заполните дату рождения'
  )
  const [hiddenInput, setHiddenInput] = useState({ display: 'none' })
  const [checked, setChecked] = React.useState(false)
  const [valueData, setValueData] = React.useState([null, null])
  const [formValid, setFormValid] = useState(false)
  const [muiValid, setMuiValid] = useState(false)

  useEffect(() => {
    if (emailError || phoneError || errorDataBirthday || fioError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, phoneError, errorDataBirthday, fioError])
  useEffect(() => {
    if (checked || muiValid) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [checked, muiValid])
  const handleChange = (event) => {
    setChecked(event.target.checked)
    event.target.checked
      ? setHiddenInput({ display: 'block', width: '18.75rem' })
      : setHiddenInput({ display: 'none' })
  }
  console.log(checked)
  console.log(muiValid)
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

  const validationData = (newValue) => {
    setValueData(newValue)
    if (!newValue[0] && !newValue[1]) {
      setMuiValid(false)
    } else {
      setMuiValid(true)
    }
  }

  return (
    <div className={classes.background} onClick={closeModal}>
      <div
        className={classes.background__card}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <form className={classes.background__card__form}>
            <h2 className={classes.background__card_title}>
              Регистрация номера
            </h2>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Дата заезда"
                endText="Дата выезда"
                value={valueData}
                onChange={(newValue) => validationData(newValue)}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} color="success" />
                    <Box sx={{ mx: 2 }}> до </Box>
                    <TextField {...endProps} color="success" />
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
                  defaultValue="07:30"
                />
                <TimePicker
                  label="Время выезда"
                  value={value}
                  onChange={setValue}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <div className={classes.switch}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <p>Для другого человека</p>
            </div>
            <Button text="Бронировать" type="submit" disabled={!formValid} />
          </form>
          <form className={classes.background__card__form}>
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
                <div style={{ color: 'red', position: 'absolute' }}>
                  {fioError}
                </div>
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
                <div style={{ color: 'red', position: 'absolute' }}>
                  {emailError}
                </div>
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
                <div style={{ color: 'red', position: 'absolute' }}>
                  {errorDataBirthday}
                </div>
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
                <div style={{ color: 'red', position: 'absolute' }}>
                  {phoneError}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
