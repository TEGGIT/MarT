import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from '../UI/Input/Input'
import classes from './Login.module.scss'
import Button from "../UI/Button/Button";

const Login = () => {
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
                  name="email"
                  type="email"
                  title="Адрес электронной почты:"
                  placeholder="ymenya.netprav32@gmail.com"
              />
              <Input
                  name="password"
                  type="password"
                  title="Пароль"
                  placeholder="absd123"
              />
              <Button
                  type="submit"
                  text="Войти"
              />

            </form>
          </div>
        </main>
        <Footer/>
      </>
  );
};

export default Login;