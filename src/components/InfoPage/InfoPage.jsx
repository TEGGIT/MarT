import React from 'react';
import classes from "./InfoPage.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const InfoPage = () => {
  return (
      <>
        <Header/>
      <main className={classes.test}>
      На, ебись
      </main>
        <Footer/>
      </>
  );
};

export default InfoPage;