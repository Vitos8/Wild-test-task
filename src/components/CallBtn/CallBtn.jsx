import {useState} from "react";
import "./CallBtn.scss";
import Modal from "../Modal/Modal"
import CallBody from "../Modal/Bodies/CallBody"

import CallSvg from "../../assets/icons/call.svg";

const CallBtn = () => {
     const [callModal, setCallModal] = useState(false);

     return (
          <div className="call-btn" id="mag" onClick={() =>setCallModal(true)}>
          <Modal active={callModal} setActive={setCallModal} body={<CallBody/>} />
               <div className="call-btn__row">
                    <img
                         className="call-btn__img"
                         src={CallSvg}
                         alt="call-btn"
                    />
                    <span className="call-btn__title">кнопка связи</span>
               </div>
          </div>
     );
};

export default CallBtn;
