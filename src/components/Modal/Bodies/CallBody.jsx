import "./Body.scss";
import WhatsUp from "../../../assets/whatsapp.png";
import Telegram from "../../../assets/telegram.png";
import Viber from "../../../assets/viber.png";
import Email from "../../../assets/icons/email.svg";

const CallBody = () => {
     return (
          <div className="call-body">
               <div className="call-body__item">
                    <img src={WhatsUp} alt="call-body-item" />
               </div>
               <div className="call-body__item">
                    <img src={Telegram} alt="call-body-item" />
               </div>
               <div className="call-body__item">
                    <img src={Viber} alt="call-body-item" />
               </div>
               <div className="call-body__item">
                    <img src={Email} alt="call-body-item" />
               </div>
          </div>
     );
};

export default CallBody;
