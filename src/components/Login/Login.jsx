import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from '../UI/Input/Input'
import classes from './Login.module.scss'
import Button from "../UI/Button/Button";
import {signinData} from "../../appConstants";


const Login = () => {
  const [usersStorage, setUsersStorage] = useState([]);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [formState, setFormState] = useState(signinData);
  const navigate = useNavigate();
  const validState = [];
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
                  notValidText="Введите адресс электронной почты"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  formState={formState}
                  setFormState={setFormState}
              />
              <Input
                  text="Password"
                  name="password"
                  type="password"
                  notValidText="Введите пароль"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  formState={formState}
                  setFormState={setFormState}
              />
              <Button
                  type="submit"
                  text="Войти"
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