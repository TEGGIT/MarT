import React from 'react'

import classes from './Service.module.scss'
import BackImg from '../../assets/BackServiceImg.png'
import Food from '../../assets/food.png'
import Bar from '../../assets/bar.png'
import Clean from '../../assets/cleaning.png'
import WiFi from '../../assets/wifi.png'
import Library from '../../assets/library.png'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Service = () => (
    <>
      <Header />
      <main>
        <div
          className={classes.serviceBack}
          style={{ backgroundImage: `url(${BackImg})` }}
        >
          <div className={classes.serviceBack__title}>
            <h1>Услуги</h1>
          </div>
        </div>
        <section>
          <div className={classes.content}>
            <div className={classes.content_info}>
              <div className={classes.content_info__conteiner}>
                <img src={Food} alt="Картинка еды" />

                <div className={classes.content_info__conteiner_text}>
                  <h3>Еда в номер</h3>
                  <p>
                    Закажите завтрак в постели или полезные для организма
                    закуски. Мы накроем для вас стол в номере.
                  </p>
                </div>
              </div>
              <div>
                <div className={classes.content_info__conteiner}>
                  <div className={classes.content_info__conteiner_revers}>
                    <img src={Bar} alt="Картинка бара" />
                    <div className={classes.content_info__conteiner_text}>
                      <h3>Лобби-бар</h3>
                      <p>
                        Для Вас работает Лобби-бар, где Вы можете приятно
                        провести время, читая свежую прессу или насладиться
                        отличным кофе.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={classes.content_info__conteiner}>
                    <img src={Clean} alt="Картинка уборки" />
                    <div className={classes.content_info__conteiner_text}>
                      <h3>Клининг</h3>
                      <p>
                        Наши сотрудники используют профессиональные моющие
                        средства и инвентарь для того чтобы ваш номер был
                        идеальной чистоте
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.content_info__conteiner}>
                  <div className={classes.content_info__conteiner_revers}>
                    <img src={WiFi} alt="Картинка WI-FI" />
                    <div className={classes.content_info__conteiner_text}>
                      <h3>Сеть WI-FI</h3>
                      <p>
                        Вы можете воспользоваться бесплатным wi-fi соединением в
                        пределах гостиницы
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={classes.content_info__conteiner}>
                    <img src={Library} alt="Картинка библиотеки" />
                    <div className={classes.content_info__conteiner_text}>
                      <h3>Библиотека</h3>
                      <p>
                        Для наших гостей у нас есть сообственная библиотека где
                        каждый найдёт себе книгу по вкусу
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

export default Service
