import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './AboutPage.scss'

export default function AboutPage() {
  return (
    <div className="App about-page">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="order-wrapper order-custom">
        <div className="container">
          <h2 className="orders">О компании</h2>
        </div>
      </div>
      <div className="about-page__main-info container">
        <p className="about-page__main-info-row">
          Компания Impulse работает с 2017 года. Специалисты организации оказывают услуги в области экспертизы промышленной безопасности на объектах всех типов. Направления деятельности включают решение проблем с документацией, а также другие вопросы, связанные с безопасностью при эксплуатации опасных производственных объектов
        </p>
        <p className="about-page__main-info-row">
          У нас можно заказать профессиональную оценку объекта на соответствие действующим стандартам и требованиям, подготовку полного пакета документов для госорганов.
        </p>
        <p className="about-page__main-info-row">
          Все работы проводятся с предварительным заключением договора и оценкой стоимости работ. Для заказа доступны как разовые задачи, так и комплексная работа на объекте. Мы гарантируем строгое соблюдение сроков и профессионализм. Эксперты Impulse отлично знакомы с законодательной стороной вопроса и актуальными изменениями.
        </p>
        <p className="about-page__main-info-row">
          Отличное знание всех нюансов безопасности на производствах позволяет нам браться за срочные и сложные проекты. К нам вы можете обращаться с любой задачей — мы сделаем все возможное, чтобы она была решена быстро и качественно!
        </p>
      </div>
      <Footer />
    </div>
  )
}
