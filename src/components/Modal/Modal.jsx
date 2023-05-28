import "./Modal.scss";
import Close from "../../assets/close.png";

// eslint-disable-next-line react/prop-types
const Modal = ({ body, active, setActive }) => {
     return (
          <div
               className={`modal-overlay ${
                    !active ? "modal-overlay-hide" : ""
               }`}
               onClick={() => setActive(false)}
			>
               <div
                    onClick={(e) => e.stopPropagation()}
                    className={`modal ${active ? "modal-active" : ""}`}>
                    <div
                         className="modal__close"
                         onClick={() => setActive(false)}
					>
                         <img src={Close} alt="cross" />
                    </div>
                    <div className="modal__body">{body}</div>
               </div>
          </div>
     );
};

export default Modal;
