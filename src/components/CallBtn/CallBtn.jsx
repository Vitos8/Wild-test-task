import {useState} from "react";
import "./CallBtn.scss";
import Modal from "../Modal/Modal"
import CallBody from "../Modal/Bodies/CallBody"
import { DispatchCursor, CURSOR_STICKY, CURSOR_COLOR} from 'haspr-cursor'


import CallSvg from "../../assets/icons/call.svg";

const CallBtn = () => {
     const [callModal, setCallModal] = useState(false);
     const dispatch = DispatchCursor()


     return (
          <>
          <Modal active={callModal} setActive={setCallModal} body={<CallBody/>} />
          <div className="call-btn" id="mag" onClick={() =>setCallModal(true)} onMouseEnter={() => {
               CURSOR_STICKY(dispatch, 'mag', 'SMALL')
               }} onMouseLeave={() => CURSOR_STICKY(dispatch, 'END')}>
               <div className="call-btn__row">
                    <img
                         className="call-btn__img"
                         src={CallSvg}
                         alt="call-btn"
                    />
                    <span className="call-btn__title">кнопка связи</span>
               </div>
          </div>
          </>
     );
};

export default CallBtn;
