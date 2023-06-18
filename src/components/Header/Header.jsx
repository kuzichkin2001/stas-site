/* eslint-disable no-restricted-globals */
import React from 'react'
import helios from '../../assets/imgs/helios.jpg'

import phone from '../../assets/imgs/phone.svg'
import viber from '../../assets/imgs/viber.svg'
import whatsapp from '../../assets/imgs/whatsapp.svg'

import arrowPrev from '../../assets/imgs/arrow-prev.svg'
import arrowNext from '../../assets/imgs/arrow-next.svg'

import { Link, matchPath } from 'react-router-dom'

import { additionalInfo, swiperSlides } from '../../constants'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import './Header.scss'

export default function Header({ withSwiper }) {
  return (
    <header className="header">
      <div className="header__general general container">
        <Link to="/" className="general__link-back">
          <div className="general__logo">
            <img src={helios} alt="" className="general__logo-img" />
            <div className="general__logo-info">
              <h1 className="general__logo-caption">Гелиос</h1>
              <p className="general__logo-desc">Экспертная компания</p>
            </div>
          </div>
        </Link>
        <nav className="general__navigation navigation">
          <ul className="navigation__list">
            <li className={!!matchPath(location.pathname, '/') ? "navigation__list-item active-item" : "navigation__list-item"}>
              <Link
                to="/"
                className="navigation__list-link"
              >
                Главная
              </Link>
            </li>
            <li className={!!matchPath(location.pathname, '/about') ? "navigation__list-item active-item" : "navigation__list-item"}>
              <Link
                to="/about"
                className="navigation__list-link"
              >
                О компании
              </Link>
            </li>
            <li className={!!matchPath(location.pathname, '/services') ? "navigation__list-item active-item" : "navigation__list-item"}>
              <Link
                to="/services"
                className="navigation__list-link"
              >
                Услуги
              </Link>
            </li>
            <li className={!!matchPath(location.pathname, '/contacts') ? "navigation__list-item active-item" : "navigation__list-item"}>
              <Link
                to="/contacts"
                className="navigation__list-link"
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className="navigation__socials">
            <Link className="navigation__socials-link">
              <img src={phone} alt="Phone" className="navigation__socials-link-img" />
            </Link>
            <Link className="navigation__socials-link viber">
              <img src={viber} alt="Viber" className="navigation__socials-link-img" />
            </Link>
            <Link className="navigation__socials-link whatsapp">
              <img src={whatsapp} alt="Whats App" className="navigation__socials-link-img" />
            </Link>
          </div>
        </nav>
      </div>
      {withSwiper && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-slider__slide-next',
            prevEl: '.swiper-slider__slide-prev',
          }}
          onSwiper={(swiper) => console.log(swiper)}
          slideClass="swiper-slide"
          className="swiper-slider"
          loop
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {swiperSlides.map(({ id, caption, img }) => (
            <SwiperSlide key={id} className="swiper-slide">
              <h2 className="swiper-slide__caption">{caption}</h2>
              <img src={img} alt={`SwiperSlide + ${id}`} className="swiper-slide__img" />
            </SwiperSlide>
          ))}
          <div className="swiper-slider__slide-prev">
            <img src={arrowPrev} alt="Arrow prev" className="swiper-slider__slide-prev-icon" />
          </div>
          <div className="swiper-slider__slide-next">
            <img src={arrowNext} alt="Arrow next" className="swiper-slider__slide-next-icon" />
          </div>
        </Swiper>
      )}
      <div className="header__contacts-wrapper">
        <div className="header__contacts contacts container">
          {additionalInfo.map(({ id, caption, info, icon }) => (
            <div className="contacts__item" key={id}>
              <img src={icon} alt={`InfoItem ${id}`} className="contacts__item-icon" />
              <div className="contacts__item-info">
                <h4 className="contacts__item-caption">{caption}</h4>
                <p className="contacts__item-text">{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
