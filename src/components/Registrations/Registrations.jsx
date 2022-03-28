import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";

import classes from './Registrations.module.scss'
import Button from "../UI/Button/Button";


const Registrations = () => {
  return (
      <>
        <Header/>
        <main>
          <div className={classes.registrations}>
            <div className={classes.registrations_title}>
              <h3>Регистрация</h3>
            </div>
            <form className={classes.registrations_form}>
              <Input type={'text'} title='ФИО:'/>
              <Input type={'text'} title={'Адрес электронной почты:'}/>
              <Input type={'date'} title={'Дата рождения:'}/>
              <Input type={'number'} title={'Номер телефона:'}/>
              <Button type={'submit'} text={'Зарегистрироваться'}/>
            </form>
          </div>
        </main>
        <Footer/>
      </>
  );
};

export default Registrations;