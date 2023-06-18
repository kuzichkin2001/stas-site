import React from 'react'

import phone from '../../assets/imgs/phone-small.svg'
import mail from '../../assets/imgs/mail-small.svg'

import './Footer.scss'

export default function Footer() {
  return (
    <>
      <div className="call-us-wrapper">
        <h2 className="call-us__phrase">Позвоните нам: +7 (905) 385-76-71</h2>
      </div>
      <div className="footer-wrapper">
        <div className="footer container">
          <div className="footer__first">
            <p className="footer__first-caption">
              Разработка сайта - <a href="https://t.me/kuzichkin_pa" target="_blank" className="footer__first-link">
                @kuzichkin_pa
              </a>
            </p>
          </div>
          <div className="footer__second">
            <div className="footer__second-item">
              <img src={phone} alt="Phone small" className="footer__second-item-img" />
              <p className="footer__second-item-caption">+7 (905) 385-76-71</p>
            </div>
            <div className="footer__second-item">
              <img src={mail} alt="Mail small" className="footer__second-item-img" />
              <p className="footer__second-item-caption">heliossar@yandex.ru</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
