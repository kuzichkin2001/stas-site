import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './ContactsPage.scss'

export default function ContactsPage() {
  return (
    <div className="App contacts-page">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="order-wrapper order-custom">
        <div className="container">
          <h2 className="orders">Контакты</h2>
        </div>
      </div>
      <div className="contacts-page__contacts container">
        <p className="contacts-page__text">Телефон: <a href="tel:+79053857671" className="contacts-page__text-value">
            +7 (905) 385-76-71
          </a>
        </p>
        <p className="contacts-page__text">Email: <a href="mailto:heliossar@yandex.ru" className="contacts-page__text-value">
            heliossar@yandex.ru
          </a>
        </p>
        <p className="contacts-page__text">Юридический адрес: <span className="contacts-page__text-regular-value">
            410005, Саратовская область, г. Саратов, ул. Им. Пугачева Е.И., д. 161, оф. 321
          </span>
        </p>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A407a33206d19b11617cd4bdb02981caba69337d1aefbb71ecd5c641be5c147d9&amp;source=constructor" width="100%" height="542" frameborder="0"></iframe>
      </div>
      <Footer />
    </div>
  )
}
