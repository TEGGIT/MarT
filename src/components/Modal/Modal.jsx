import React, {useEffect, useState} from 'react'

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
import {guestData} from "../../appConstants";

const Modal = ({ setOpenModal }) => {
  const closeModal = () => setOpenModal(false)

  const [value, setValue] = React.useState(new Date('2020-01-01 12:00'))
  const [hiddenInput, setHiddenInput] = useState({display: 'none'})
  const [checked, setChecked] = React.useState(false)
  const [valueData, setValueData] = React.useState([null, null])
  const [formValid, setFormValid] = useState(false)
  const [muiValid, setMuiValid] = useState(false)
  const [usersStorage, setUsersStorage] = useState([]);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [formState, setFormState] = useState(guestData);
  const validState = [];

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
  const validationData = (newValue) => {
    setValueData(newValue)
    newValue[0] && newValue[1] ? setMuiValid({
      firstDate: newValue[0], endDate: newValue[1]
    }) : setMuiValid({
      firstDate: '', endDate: ''
    })

  }
  //
  const validationTime = (newValueTime) => {
    setValue(newValueTime)
    // !newValueTime ? setMuiValid({
    //   time: newValueTime
    // }) : setMuiValid({
    //   time: ''
    // })
    newValueTime ? setMuiValid({
      time: newValueTime

    }) : setMuiValid({
      time: ''
    })
  }
  const submitForm = (e) => {
    e.preventDefault();

    const checkUser = usersStorage.find((item) => item.email === formState.email.value);
    if (!checkUser) {
      const guest = {
        FIO: formState.FIO.value,
        email: formState.email.value,
        dateBirthday: formState.date.value,
        number: formState.number.value,
        dateIn: String(valueData[0]).slice(4,15),
        dateOut: String(valueData[1]).slice(4,15),
        time: String(value).slice(16,24),
        anotherPerson: checked,
      };



      setUsersStorage([...usersStorage, guest]);
      localStorage.setItem("GUEST_DATA", JSON.stringify(usersStorage));
    } else {
      localStorage.setItem("GUEST_DATA", JSON.stringify(usersStorage));
      setIsDisableBtn(true);
    }

  };

  useEffect(() => {
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
      if (validState.filter((state) => !state).length) setIsDisableBtn(true); else setIsDisableBtn(false);
    });
    if (localStorage.GUEST_DATA) setUsersStorage(JSON.parse(localStorage.getItem("GUEST_DATA")));
  }, [formState]);


  return (<div className={classes.background} onClick={closeModal}>
    <div
        className={classes.background__card}
        onClick={(e) => e.stopPropagation()}
    >
      <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
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
                renderInput={(startProps, endProps) => (<>
                  <TextField {...startProps} color="success"/>
                  <Box sx={{mx: 2}}> до </Box>
                  <TextField {...endProps} color="success"/>
                </>)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <TimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={value}
                  label="Время заезда"
                  onChange={(newValueTime) => validationTime(newValueTime)}
              />
              <TimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={value}
                  label="Время выезда"
                  onChange={(newValueTime) => validationTime(newValueTime)}
              />
            </Stack>
          </LocalizationProvider>
          <div className={classes.switch}>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{'aria-label': 'controlled'}}
            />
            <p>Для другого человека</p>
          </div>
          <Button text="Бронировать" type="submit" disabled={!formValid && isDisableBtn} onClick={(e) => submitForm(e)}
          />
        </form>
        <form className={classes.background__card__form}>
          <div style={hiddenInput}>
            <Input
                text="ФИО"
                name="FIO"
                type="text"
                notValidText="Введите ФИО"
                placeholder="Иванов Иван Иванович"
                inputValue={inputValue}
                setInputValue={setInputValue}
                formState={formState}
                setFormState={setFormState}
            />

          </div>
          <div style={hiddenInput}>
            <Input
                text="Адресс электронной почты"
                name="email"
                type="email"
                placeholder="supermegapochta03@gmail.com"
                notValidText="Введите адресс электронной почты"

                inputValue={inputValue}
                setInputValue={setInputValue}
                formState={formState}
                setFormState={setFormState}
            />


          </div>
          <div style={hiddenInput}>
            <Input
                text="Дата рождения"
                name="date"
                type="text"
                notValidText="Введите дату рождения"
                placeholder="26.07.2003"
                inputValue={inputValue}
                setInputValue={setInputValue}
                formState={formState}
                setFormState={setFormState}
            />

          </div>
          <div style={hiddenInput}>
            <Input
                text="Номер телефона"
                name="number"
                type="number"
                notValidText="Введите номер телефона"
                placeholder="89289933939"
                inputValue={inputValue}
                setInputValue={setInputValue}
                formState={formState}
                setFormState={setFormState}
            />

          </div>
        </form>
      </div>
    </div>
  </div>)
}

export default Modal
