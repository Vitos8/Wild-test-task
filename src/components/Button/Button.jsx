import "./Button.scss";

const Button = ({ text }) => {
     return (
          <div className="btn">
               <span className="btn__text">{text}</span>
          </div>
     );
};

export default Button;
