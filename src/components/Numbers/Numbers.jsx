import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import classes from './Numbers.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import mainImage from '../../assets/BackNumbers.png'
import CardHostel from '../CardHostel/CardHostel'
import ButtonNav from '../UI/Nav/Nav'

const Numbers = () => {
  const catalog = useSelector((state) => state.catalogReducer)

  const [filteredCatalog, setFilteredCatalog] = useState(catalog)

  const filtered = (e) => {
    e.target.name === 'All'
        ? setFilteredCatalog(catalog)
        : setFilteredCatalog(catalog.filter((el) => el.filter === e.target.name))
  }

  return (
      <>
        <Header/>
        <main className={classes.main}>
          <section className={classes.main__section}>
            <div
                className={classes.main__section__contentTop}
                style={{backgroundImage: `url(${mainImage})`}}
            >
              <div className={classes.main__section__contentTop__container}>
                <div
                    className={classes.main__section__contentTop__container__title}
                >
                  <h1>Номера</h1>
                </div>

                <nav
                    className={classes.main__section__contentTop__container__nav}
                >
                  <ButtonNav name="All" onClick={(e) => filtered(e)} text="All"/>
                  <ButtonNav
                      name="Family room"
                      onClick={(e) => filtered(e)}
                      text="Family room"
                  />
                  <ButtonNav
                      name="Deluxe"
                      onClick={(e) => filtered(e)}
                      text="Deluxe"
                  />
                  <ButtonNav
                      name="Presidential Suite"
                      onClick={(e) => filtered(e)}
                      text="Presidential Suite"
                  />
                </nav>
              </div>
            </div>
            <div className={classes.main__section__content}>
              <div className={classes.main__section__content__cardHostel}>
                {filteredCatalog.map((number) => (
                    <CardHostel number={number}/>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </>
  )
}

export default Numbers
