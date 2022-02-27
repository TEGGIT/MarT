import React from 'react';

import classes from '../Contact/Contact.module.scss'
import BackImg from '../../assets/BackContactImg.png'
import iconP from '../../assets/iconP.svg'
import iconM from '../../assets/iconM.svg'
import iconT from '../../assets/iconT.svg'
import iconG from '../../assets/iconG.svg'


import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Contact = () => {
    return (
        <>

            {/*//todo: Выровнить wrapper по центру*/}
            {/*//todo: Перенести стили для main в файл*/}
            <main className={classes.contact_info} style={{backgroundImage: `url(${BackImg})`}}>
                <div className={classes.wrapper}>
                    <div className={classes.contact_info__contact}>
                        <img className={classes.contact_info__img} src={iconP}/>
                        <p>89001373398 | 89287562664</p>
                    </div>
                    <div className={classes.contact_info__contact}>
                        <img className={classes.contact_info__img} src={iconM}/>
                        <p>ymenya.netprav32@gmail.com</p>
                    </div>
                    <div className={classes.contact_info__contact}>
                        <img className={classes.contact_info__img} src={iconG}/>
                        <p>Братский пер., 44 Ростов-на-Дону, Ростовская обл</p>
                    </div>
                    <div className={classes.contact_info__contact}>
                        <img className={classes.contact_info__img} src={iconT}/>
                        <p>Прием гостей с 6:00-22:30</p>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Contact;