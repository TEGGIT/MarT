import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from '../UI/Input/Input'
import classes from './Login.module.scss'
import Button from "../UI/Button/Button";
import {loginData} from "../../appConstants";


const Login = () => {
  const [formState, setFormState] = useState(loginData);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
  const navigate = useNavigate();
  const validState = [];


  const clickLoginBth = (e) => {
    e.preventDefault();
    const thisUser = usersStorage.find(
        (item) => item.email === formState.email.value
    );
    if (thisUser && formState.password.value === thisUser.password) {
      localStorage.setItem("LOGIN_USER", JSON.stringify(thisUser));
      navigate("/main-page", { replace: true });
    } else {
      e.preventDefault();
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
  }, [validState, formState]);
  return (
      <>
        <Header/>
        <main className={classes.main}>
          <div className={classes.container}>
            <div className={classes.container__title}>
              <h3>Вход</h3>
            </div>

            <form className={classes.container__form}>
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
              <Button
                  type="submit"
                  text="Войти"
                  onClick={(e) => {
                    clickLoginBth(e);
                  }}
                  disabled={isDisableBtn}
              />
              <div className={classes.container__form_borderText}>
              <p>У вас нет учетной записи MarT? <NavLink to="/registration-page"><span
                  className={classes.create}>Создайте!</span></NavLink></p>
          </div>
            </form>
          </div>
        </main>
        <Footer/>
      </>
  );
};

export default Login;