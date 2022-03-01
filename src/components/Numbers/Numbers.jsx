import React from 'react';
import classes from "./Numbers.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImage from "../../assets/BackNumbers.png"
import imageOne from "../../assets/imageNumbers1.png"
import iconOne from "../../assets/IconNumbers1.svg"
import iconTwo from "../../assets/iconNumbers2.svg"
import iconThree from "../../assets/iconNumbers3.svg"
import iconFour from "../../assets/iconNumbers4.svg"

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
            <div className={classes.main__section__content}>
                <div className={classes.main__section__content__container}>
                    <div className={classes.main__section__content__container__card}>

                        <div className={classes.main__section__content__container__card__image}>
                            <img src={imageOne} alt="Изображение номера"/>

                        </div>
                        <div className={classes.main__section__content__container__card__info}>
                            
                            <p className={classes.main__section__content__container__card__info__text_top}>
                               Семейный номер
                            </p>
                            
                            <div className={classes.main__section__content__container__card__info__text}>
                                fff
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
        <Footer/>
      </>
  );
};

export default Numbers;