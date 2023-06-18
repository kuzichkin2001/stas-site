import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './ServicesPage.scss'

export default function ServicesPage() {
  return (
    <div className="App services-page">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="order-wrapper order-custom">
        <div className="container">
          <h2 className="orders">Услуги</h2>
        </div>
      </div>
      <div className="about-page__main-info container">
        <p className="about-page__main-info-row">
          В нашей компании вы можете заказать проведение экспертизы промышленной безопасности полного цикла с выдачей заключения и регистрацией в реестре Ростехнадзора. Экспертиза проводится на основании утвержденного порядка. Объект оценивается по всем необходимым критериям безопасности, указанным в федеральных нормах.
        </p>
        <p className="about-page__main-info-row">
          Компания Impulse является лицензированным предприятием, которое имеет полномочия проводить профессиональные экспертизы для объектов всех типов на территории РФ. Стандартный срок проведения оценки объекта — от 7 дней. Регистрация проводится в течение 5 рабочих дней. Точные сроки вы можете уточнить у наших консультантов после сообщения особенностей объекта.
        </p>
        <p className="about-page__main-info-row">
          Наши эксперты проводят следующие типы оценки промбезопасности:
        </p>
        <ul className="about-page__main-info-list">
          <li className="about-page__main-info-list-item">технические устройства на предприятии;</li>
          <li className="about-page__main-info-list-item">здания и сооружения промышленного объекта;</li>
          <li className="about-page__main-info-list-item">проектная документация.</li>
        </ul>
        <p className="about-page__main-info-row">
          По действующему законодательству проходить экспертизу должен каждый опасный производственный объект. Периодичность мероприятия определяется контролирующими органами. Оценка безопасности в обязательном порядке проводится после аварий, изменений технического оснащения, перепланировке сооружений, расширения производства, а также в других случаях, утвержденных в действующих актах.
        </p>
        <p className="about-page__main-info-row">
          Проводить оценку промбезопасности могут только компании, имеющие соответствующую лицензию. Процедура проходит в несколько этапов:
        </p>
        <ul className="about-page__main-info-list">
          <li className="about-page__main-info-list-item">проходит сбор документов об организации, перечень которых определяется законодательными актами и типом объекта;</li>
          <li className="about-page__main-info-list-item">проводится проверка документов, осуществляется выезд на объект, ведется наблюдение и проверка процесса работы, состояния сооружений, оборудования;</li>
          <li className="about-page__main-info-list-item">составляется проект экспертизы промбезопасности (и копия, которая выдается клиенту), в котором указываются выводы о состоянии объекта, устанавливается срок следующей экспертизы;</li>
          <li className="about-page__main-info-list-item">проводится регистрация экспертизы в Ростехнадзоре.</li>
        </ul>
        <p className="about-page__main-info-row">
          Эксплуатация объекта возможна только в том случае, если коллектив экспертов вынес заключение о соответствии его требованиям промбезопасности. Если проверяемый объект не в полной степени соответствует требованиям, даются рекомендации об изменениях, которые необходимо внести, после чего выдается разрешительное заключение.
        </p>
        <p className="about-page__main-info-row">
          Если у вас есть вопросы по экспертизе промбезопасности или вы хотите заказать услуги профессиональных экспертов, обращайтесь в компанию Impulse!
        </p>
        <ul className="about-page__expertises">
          <li className="about-page__expertises-item">Химически опасные производственные объекты систем водоподготовки </li>
          <li className="about-page__expertises-item">Опасные производственные объекты хранения, переработки и использования растительного сырья </li>
          <li className="about-page__expertises-item">Опасные производственные объекты, на которых используются стационарно установленные грузоподъемные механизмы </li>
          <li className="about-page__expertises-item">Опасные производственные объекты металлургической промышленности и производства черных и цветных металлов </li>
          <li className="about-page__expertises-item">Опасные производственные объекты пищевой и масложировой промышленности </li>
          <li className="about-page__expertises-item">Опасные производственные объекты тепло и электроэнергетики </li>
          <li className="about-page__expertises-item">Опасные производственные объекты нефтепродуктообеспечения </li>
          <li className="about-page__expertises-item">Опасные производственные объекты химической, нефтехимической и нефтеперерабатывающей промышленности, а также других взрывопожароопасных и вредных производств </li>
          <li className="about-page__expertises-item">Общие требования к эксплуатации объектов систем газораспределения и газопотребления. </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности подземного газопровода </li>
          <li className="about-page__expertises-item">Техническое обследование кирпичных труб </li>
          <li className="about-page__expertises-item">Техническое обследование металлических труб </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности паровых котлов </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности дымовых труб </li>
          <li className="about-page__expertises-item">Техническая экспертиза дымовых труб </li>
          <li className="about-page__expertises-item">Техническое диагностирование водогрейных котлов </li>
          <li className="about-page__expertises-item">Экспертиза по безопасности внешнего газопровода в промышленности </li>
          <li className="about-page__expertises-item">Оценка безопасности газопровода</li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности газового оборудования котла </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности ГРУ </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности ГРП </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности козловых кранов </li>
          <li className="about-page__expertises-item">Восстановление паспорта ТУ (оборудования) </li>
          <li className="about-page__expertises-item">Техническое освидетельствование сосудов </li>
          <li className="about-page__expertises-item">Техническая диагностика оборудования </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности проектной документации </li>
          <li className="about-page__expertises-item">Обследование зданий </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности образец </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности мостового крана </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности зданий и сооружений опо </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности котлов водогрейных </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности — правила </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности мостовых кранов </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности трубопроводов </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности устройств </li>
          <li className="about-page__expertises-item">Экспертиза промышленной безопасности опасных производственных объектов </li>
          <li className="about-page__expertises-item">Экспертиза промбезопасности проектной документации </li>
          <li className="about-page__expertises-item">Экспертиза промбезопасности зданий и сооружений </li>
          <li className="about-page__expertises-item">Экспертиза промбезопасности технических устройств </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
