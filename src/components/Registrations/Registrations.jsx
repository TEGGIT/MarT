import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { signinData } from "../../appConstants";


import classes from './Registrations.module.scss'

const Registrations = () => {
  const [usersStorage, setUsersStorage] = useState([]);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [formState, setFormState] = useState(signinData);
  const navigate = useNavigate();
  const validState = [];
  const submitForm = (e) => {
    e.preventDefault();
    const checkUser = usersStorage.find(
        (item) => item.email === formState.email.value
    );
    if (!checkUser) {
      const newUser = {
        FIO: formState.FIO.value,
        email: formState.email.value,
        password: formState.password.value,
        date: formState.date.value,
        number: formState.number.value,
      };
      usersStorage.push(newUser);
      localStorage.setItem("USERS_DATA", JSON.stringify(usersStorage));
      localStorage.setItem("LOGIN_USER", JSON.stringify(newUser));
      navigate("/main-page", { replace: true });
    } else {
      localStorage.setItem("USERS_DATA", JSON.stringify(usersStorage));
      setIsDisableBtn(true);
    }
  };
  useEffect(() => {
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
      if (validState.filter((state) => !state).length) setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
  }, [formState]);

  useEffect(() => {
    if (localStorage.USERS_DATA)
      setUsersStorage(JSON.parse(localStorage.getItem("USERS_DATA")));
  });

  return (
      <>
        <Header/>
        <main className={classes.main}>
          <div className={classes.registrations}>
            <div className={classes.registrations_title}>
              <h3>Регистрация</h3>
            </div>
            <form noValidate={true} className={classes.registrations_form}>
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
              <Input
                  text="Пароль"
                  name="password"
                  type="password"
                  notValidText="Введите пароль"
                  placeholder="abcd123_$"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  formState={formState}
                  setFormState={setFormState}
              />
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
              <Button
                  text="Зарегистрироваться"
                  name="Create account"
                  isDisable={isDisableBtn}
                  onClick={(e) => submitForm(e)}
              />
            </form>
          </div>
        </main>
        <Footer/>
      </>
  )
}

export default Registrations;