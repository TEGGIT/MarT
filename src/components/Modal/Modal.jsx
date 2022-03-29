import React, {useEffect, useState} from 'react';
import classes from './Modal.module.scss'
import Input from "../UI/Input/Input";
import Button from '../UI/Button/Button'
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "none",
    border: '1px solid black',
    fontSize: 16,
    padding: '16.5px 12px 16.5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  const [hiddenInput, setHiddenInput] = useState({display: 'none'})
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked = checked) {
      setHiddenInput({display: 'none'})
    } else {
      setHiddenInput({display: 'block'})// Костыль))) У меня сейчас нет времени сидеть по 2 часа над такими вещами
    }
  };

  const templateDate = (e) => {
  //тут будет шаблонизатор
  }

  const [age, setAge] = React.useState('');
  const inputDate = (event) => {
    setAge(event.target.value);
  };



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
    } else {
      setPhoneError("")
    }
  }

  const dataBirtdayValue = (e) => {
    setDataBirthday(e.target.value)
    if (e.target.value.length > 10) {
      setErrorDataBirthday("Неккоретная дата рождения")
    } else {
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
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  '& .MuiTextField-root': { width: '18ch' },
                }}
            >
            <TextField label={'Дата прибытия'} id="inputDate" value="В РАЗРАБОТКЕ"/>
              <FormControl sx={{ m: 0 }} variant="standard">
                <InputLabel id="demo-customized-select-label">Заезд</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={inputDate}
                    input={<BootstrapInput />}
                    MenuProps={MenuProps}
                >
                  <MenuItem value={10}>12:00</MenuItem>
                  <MenuItem value={10}>13:00</MenuItem>
                  <MenuItem value={10}>14:00</MenuItem>
                  <MenuItem value={20}>15:00</MenuItem>
                  <MenuItem value={30}>16:00</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 0 }} variant="standard">
                <InputLabel id="demo-customized-select-label">Выезд</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={inputDate}
                    input={<BootstrapInput />}
                    MenuProps={MenuProps}
                >
                  <MenuItem value={10}>12:00</MenuItem>
                  <MenuItem value={10}>13:00</MenuItem>
                  <MenuItem value={10}>14:00</MenuItem>
                  <MenuItem value={20}>15:00</MenuItem>
                  <MenuItem value={30}>16:00</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div style={hiddenInput}><Input title="ФИО:" name="text" type="text" placeholder={'Иванов Иван Иванович'}
                                            onBlur={e => inputBlur(e)}
                                            onChange={e => fioValue(e)} value={fio}/>
              {(visidFio && fioError) && <div style={{color: ("red")}}>{fioError}</div>}
            </div>
            <div style={hiddenInput}>
              <Input onChange={e => emailValue(e)} onBlur={e => inputBlur(e)} title="Адрес электронной почты:"
                     name="email" type="email"
                     placeholder={'ymenya.netprav32@gmail.com'} value={email}/>
              {(visidEmail && emailError) && <div style={{color: ("red")}}>{emailError}</div>}
            </div>
            <div style={hiddenInput}>
              <Input onKeyUp={e => templateDate(e)} onChange={e => dataBirtdayValue(e)} onBlur={e => inputBlur(e)} title="Дата рождения:"
                     name="dataBirthday" type="data" placeholder={'дд.мм.гггг'} value={dataBirthday}/>
              {(visidDataBirthday && errorDataBirthday) && <div style={{color: "red"}}>{errorDataBirthday}</div>}
            </div>
            <div style={hiddenInput}>
              <Input onChange={e => phoneValue(e)} onBlur={e => inputBlur(e)} title="Номер телефона:" name="phone"
                     type="number" value={phone}
                     placeholder={'+79999999999'}/>
              {(visidPhone && phoneError) && <div style={{color: ("red")}}>{phoneError}</div>}
            </div>
            <div className={classes.switch}>
              <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{'aria-label': 'controlled'}}
              />
              <p>Для другого человека</p>
            </div>
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