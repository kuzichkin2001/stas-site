import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { Link } from 'react-router-dom'

import arrowNext from '../../assets/imgs/arrow-next.svg'
import galochka from '../../assets/imgs/galochka.svg'

import license1 from '../../assets/imgs/license1.png'
import license2 from '../../assets/imgs/license2.png'
import license3 from '../../assets/imgs/license3.png'

import './MainPage.scss'
import { attestation, expertises } from '../../constants'

export default function MainPage() {
  return (
    <div className="App main-page">
      <div className="header__wrapper">
        <Header withSwiper />
      </div>
      <div className="expertise-wrapper">
        <div className="container">
          <h2 className="expertises">Осуществляемые экспертизы</h2>
        </div>
      </div>
      <div className="main-page__expertises container">
        {expertises.map(({ id, image, title, caption }) => (
          <div className="main-page__expertises-item" key={id}>
            <img src={image} alt={`Expertise item ${id}`} className="main-page__expertises-item-img" />
            <h2 className="main-page__expertises-item-title">{title}</h2>
            <p className="main-page__expertises-item-caption">{caption}</p>
          </div>
        ))}
      </div>
      <div className="order-wrapper">
        <div className="container">
          <h2 className="orders">Порядок проведения экспертизы</h2>
        </div>
        <div className="main-page__expertise-order container">
        <p className="main-page__expertise-order-text">Звонок</p>
        <span className="main-page__expertise-order-img">
          <img src={arrowNext} alt="Arrow next" />
        </span>
        <p className="main-page__expertise-order-text">Заключение договора</p>
        <span className="main-page__expertise-order-img">
          <img src={arrowNext} alt="Arrow next" />
        </span>
        <p className="main-page__expertise-order-text">Выезд на объект</p>
        <span className="main-page__expertise-order-img">
          <img src={arrowNext} alt="Arrow next" />
        </span>
        <p className="main-page__expertise-order-text">Заключения ЭПБ</p>
        <span className="main-page__expertise-order-img">
          <img src={arrowNext} alt="Arrow next" />
        </span>
        <p className="main-page__expertise-order-text">Включение в реестр ЭПБ</p>
      </div>
      </div>
      <div className="expertise-wrapper">
        <div className="container">
          <h2 className="expertises">Области аттестации</h2>
        </div>
      </div>
      <div className="main-page__attestation container">
        {attestation.map(({ id, title, caption }) => (
          <div className="main-page__attestation-item" key={id}>
            <div className="main-page__attestation-item-info">
              <img src={galochka} alt="Galochka" className="main-page__attestation-item-img" />
              <h2 className="main-page__attestation-item-title">{title}</h2>
            </div>
            <p className="main-page__attestation-item-caption">{caption}</p>
          </div>
        ))}
      </div>
      <div className="call-us-wrapper">
        <h2 className="call-us__phrase">Остались вопросы?</h2>
        <p className="call-us__desc">Вы можете нам позвонить и мы Вас проконсультируем.</p>
        <span className="call-us__phone">+7 (905) 385-76-71</span>
        <div className="call-us__controls">
          <Link to="/services" className="call-us__to-services">Наши услуги</Link>
          <Link to="/contacts" className="call-us__to-contacts">Контакты</Link>
        </div>
      </div>
      <div className="expertise-wrapper">
        <div className="container">
          <h2 className="expertises">Наши лицензии</h2>
        </div>
      </div>
      <div className="main-page__licences container">
        <img src={license1} alt="License 1" className="main-page__licence" />
        <img src={license2} alt="License 2" className="main-page__licence" />
        <img src={license3} alt="License 3" className="main-page__licence" />
      </div>
      <Footer />
    </div>
  )
}
