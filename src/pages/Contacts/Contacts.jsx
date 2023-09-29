import s from './Contacts.module.css'
import Img from '../../assets/contacts-img.png'
export const Contacts = () => {
  return <div className={s.contacts}>
    <div className="container">
      <h3 className={s.title}>Контакты</h3>
      <div className={s.inner}>
        <img src={Img} alt=""/>
        <ul className={s.adressList}>
          <li className={s.street}><a target="_blank" href="http://surl.li/lpbtw">Чуйский просп., 115/3</a></li>
          <li className={s.city}><a target="_blank" href="http://surl.li/lpbtw">г. Бишкек</a></li>
          <li className={s.phone}><a target="_blank" href="tel:+996708833338">+996 708 83 33 38</a></li>
        </ul>
      </div>
    </div>
  </div>
}