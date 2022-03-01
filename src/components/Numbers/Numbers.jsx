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
          <div className={classes.main__section__contentTop__container}>
          <div className={classes.main__section__contentTop__container__title}>
         <h1>Номера</h1>
        </div>

            <nav className={classes.main__section__contentTop__container__nav}>
             <ul>
               <li>All</li>
               <li >Family room</li>
               <li >Delux</li>
               <li >Presidential Suite</li>
             </ul>
            </nav>
        </div>
        </div>
        </section>
      </main>
        <Footer/>
      </>
  );
};

export default Numbers;