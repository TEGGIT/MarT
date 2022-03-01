import React from 'react';
import classes from "./Numbers.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImage from "../../assets/BackNumbers.png"

const Numbers = () => {
  return (
      <>
        <Header/>
      <main className={classes.main}>
        <section className={classes.main__section}>
        <div className={classes.main__section__contentTop} style={{backgroundImage: `url(${mainImage})`}}>

        </div>
        </section>
      </main>
        <Footer/>
      </>
  );
};

export default Numbers;