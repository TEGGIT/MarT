import React from 'react';
import classes from "./MainContent.module.scss"
import mainFon from "../../assets/main.png"
import logoCont from "../../assets/MarTCont.svg"
import star from "../../assets/star.svg"
const MainContent = () => {
  return (
      <main className={classes.main}>
        <section className={classes.main__section}>
          <div className={classes.main__section__contentTop} style={{ backgroundImage: `url(${mainFon})` }}>
            <div className={classes.main__section__contentTop__present} >
               <img src={logoCont} alt="Логотип"/>
              <div className={classes.main__section__contentTop__present__text}>
                <p>
                  Our priority is <span className={classes.main__section__contentTop__present__text_green}>comfort</span>
                </p>
              </div>
              <img src={star} alt="звезды" style={{marginTop: "1.188rem"}}/>
            </div>
          </div>
        </section>
      </main>
  );
};

export default MainContent;