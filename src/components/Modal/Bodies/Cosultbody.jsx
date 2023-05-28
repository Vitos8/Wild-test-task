import "./Body.scss";
import Button from "../../Button/Button";

const Cosultbody = () => {
     return (
          <div className="consult-body">
               <h2 className="consult-body__title">
                    Закажите бесплатную <br /> консультацию по сайту
               </h2>
               <div className="consult-body__form">
                    <input type="text" className="consult-body__input"  placeholder="Ваше имя*"/>
                    <input type="text" className="consult-body__input"  placeholder="Номер телефона*"/>
                    <input type="text" className="consult-body__input"  placeholder="Email"/>
                    <div className="consult-body__btn">
                         <Button text={'Заказать '}/>
                    </div>
               </div>
          </div>
     );
};

export default Cosultbody;
