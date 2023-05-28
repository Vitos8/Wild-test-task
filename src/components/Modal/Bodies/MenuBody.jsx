import React from "react";
import Insta from "../../../assets/icons/insta.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import LinkIn from "../../../assets/icons/link.svg";

const items = [
     {
          name: "О НАС",
          color: "white",
          id: "01",
     },
     {
          name: "КЕЙСЫ",
          color: "red",
          id: "02",
     },
     {
          name: "УСЛУГИ",
          color: "white",
          id: "03",
     },
     {
          name: "ПРАЙС",
          color: "red",
          id: "04",
     },
     {
          name: "КОНТАКТЫ",
          color: "white",
          id: "05",
     },
     {
          name: "БОНУС",
          color: "red",
          id: "06",
     },
];

const MenuBody = () => {
     return (
          <div className="menu-body">
               <div className="menu-body__row">
                    {items.map((item) => (
                         <div
                              key={item.id}
                              className={`menu-body__item  + ${
                                   item.color === "red"
                                        ? " menu-body__item-red"
                                        : ""
                              }`}>
                              <span className="menu-body__number">
                                   {item.id}
                              </span>
                              <span className="menu-body__title">
                                   {item.name}
                              </span>
                         </div>
                    ))}
               </div>
               <div className="menu-body__social-row">
                    <div className="menu-body__social">
                         <img src={Facebook} alt="social-link" />
                    </div>
                    <div className="menu-body__social">
                         <img src={Insta} alt="social-link" />
                    </div>
                    <div className="menu-body__social">
                         <img src={LinkIn} alt="social-link" />
                    </div>
               </div>
          </div>
     );
};

export default MenuBody;
