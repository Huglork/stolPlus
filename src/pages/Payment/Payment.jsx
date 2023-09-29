import s from './Payment.module.css'
import visa from '../../assets/visa.png'
import mir from '../../assets/mir.svg'
import mastercard from '../../assets/master-card.svg'
export const Payment = () => {
  return (
      <div className={s.payment}>
          <div className="container">
              <div className={s.payment__inner}>
                  <h3 className={s.payment__title}>Способы оплаты:</h3>
                  <p>Команда StolPlus предоставляет услугу доставки только оригинальных товаров c
                      крупнейшего российского маркетплейса Ozon, чтобы наши клиенты экономили
                      более 40% на каждой покупке.
                  </p>
                  <h4 className={s.payment__subtitle}>Мы принимаем оплату банковскими картами:</h4>
                  <ul className={s.payment__list}>
                      <li className={s.payment__listItem}><img src={mastercard} alt="master-card"/></li>
                      <li className={s.payment__listItem}><img src={visa} alt="visa"/></li>
                      <li className={s.payment__listItem}><img src={mir} alt="mir"/></li>
                  </ul>
                  <p>Стоимость каждого товара окончательная. В нее входит выкуп товара на Ozon, доставка его
                      на наш склад в Казахстане, доставка из Казахстана до склада в городе Бишкек, все таможенные сборы
                      и пошлины уже включены в стоимость.
                  </p>
                  <p>
                      Если вам нужно отправить товар по России, вы сможете выбрать адрес доставки во время оформления
                      заказа. Доставка оплачивается отдельно при получении посылки, обычно это не более 350 рублей</p>
              </div>
          </div>
      </div>
  )
}