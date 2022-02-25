import React from 'react';
import classes from "./MainContent.module.scss"
import mainFon from "../../assets/main.png"
import logoCont from "../../assets/MarTCont.svg"
import star from "../../assets/star.svg"
import image1 from "../../assets/mainImage1.png"
import image2 from "../../assets/mainImage2.png"
import image3 from "../../assets/mainImage3.png"
const MainContent = () => {
  return (
      <main className={classes.main}>
        <section className={classes.main__section}>
          <div className={classes.main__section__contentTop} style={{backgroundImage: `url(${mainFon})`}}>
            <div className={classes.main__section__contentTop__present}>
              <img src={logoCont} alt="Логотип"/>
              <div className={classes.main__section__contentTop__present__text}>
                <p>
                  Our priority is <span
                    className={classes.main__section__contentTop__present__text_green}>comfort</span>
                </p>
              </div>
              <img src={star} alt="звезды" style={{marginTop: "1.188rem"}}/>
            </div>
          </div>
          <div className={classes.main__section__content}>
            <div className={classes.main__section__content__container}>
              <div className={classes.main__section__content__container__text}>
                <p className={classes.main__section__content__container__text_top}>
                  Гостиница «‎<span className={classes.main__section__content__container__text_top_color}>MarT</span>»
                </p>
                <p className={classes.main__section__content__container__text_top}>
                  Г. РОСТОВ-НА-ДОНУ
                </p>
                <p className={classes.main__section__content__container__text_main}>

                  Расположившись с самом сердце Ростова, Гостиница «MarT» окружена очарованием истории и
                  достопримечательностями Ростова. Прекрасные прогулки по паркам. Построеная в 2022 году гостиница
                  располагает комфортными номерами. Мы предлагаем путешественникам новый уровень комфорта, сервиса и
                  современности.
                  Красивый фасад, 10 комфортных номера - все это сделало Гостиница «MarT» одним из самых привлекательных
                  гостиниц Ростова.<br/><br/>

                  В шаговой доступности станции Главный вокзал и парк Горького, а также река Дон.

                  <br/><br/>«Почему мы лучшие?»<br/><br/>

                  -Мы считаем нашей отличительной особенностью внимательный высокопрофессиональный персонал и отношение
                  к нашим гостям. Мы уделяем максимум внимания каждому гостю и его индивидуальным потребностям! У нас
                  нет «клиентов», только Гости и Друзья! Все, кто останавливается в нашем отеле, чувствует себя «как
                  дома». Благодаря радушному приему, у нас огромное количество постоянных гостей, которые
                  останавливаются у нас на долгий срок. Мы очень гордимся нашим уровнем гостеприимства!
                </p>
              </div>
              <div className={classes.main__section__content__image}>
                <img src={image1} alt="отель1"/>
                <img src={image2} alt="отель2"/>
                <img src={image3} alt="отель3"/>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default MainContent;