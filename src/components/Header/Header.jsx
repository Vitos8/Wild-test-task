import { useState } from "react";
import "./Header.scss";

import LogoSvg from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import Button from "../Button/Button";
import LineSvg from "../../assets/icons/line.svg";
import Modal from "../../components/Modal/Modal";
import ConsultBody from "../Modal/Bodies/Cosultbody"

const Header = () => {
     const [consultModal, setConsultModal] = useState(false);
     //const [menuModal, setMenuModal] = useState(false);

     console.log(consultModal);
     return (
          <div className="header">
               <nav className="header__items">
                    <img className="header__logo" src={LogoSvg} alt="logo" />
                    <div className="header__menu">
                         <img
                              className="header__menu-img"
                              src={menu}
                              alt="menu"
                         />
                    </div>
                    <div className="header__row">
                         <div className="header__btn">
                              <Modal
                                   active={consultModal}
                                   setActive={setConsultModal}
                                   body={<ConsultBody/>}
                              />
                              <div
                                   className=""
                                   onClick={() => {
                                        setConsultModal(true);
                                   }}>
                                   <Button text="Консультация" />
                              </div>
                         </div>
                         <div className="header__lang-btn">
                              EN
                              <img
                                   className="header__line"
                                   src={LineSvg}
                                   alt="line"
                              />
                         </div>
                    </div>
               </nav>
          </div>
     );
};

export default Header;
