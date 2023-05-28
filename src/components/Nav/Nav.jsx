import "./Nav.scss";

const Links = [
     {
          name: "БОНУС",
          id: 1,
     },
     {
          name: "ПРАЙС",
          id: 2,
     },
     {
          name: "КЕЙСЫ",
          id: 3,
     },
     {
          name: "О НАС",
          id: 4,
     },
     {
          name: "КОНТАКТЫ",
          id: 5,
     },
];

const Nav = () => {
     return (
          <nav className="nav">
               <ul className="nav__list">
                    {Links.map((link) => (
                         <li key={link.id} className="nav__link">
                              {link.name}
                         </li>
                    ))}
               </ul>
          </nav>
     );
};

export default Nav;
