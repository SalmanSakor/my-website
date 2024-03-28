import "boxicons";
import { useState } from "react";
import me from "../assets/me.jpg";

const Banner = () => {
  const [phone, setPhone] = useState(true);
  const handleClick = () => {
    setPhone((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-flex">
          <img src={me} alt="photo" className="banner-img" />

          <h1>Salman Sakor</h1>

          <h3>And I'm a</h3>
          <h3 className="text">Front End Developer</h3>
          <p>Let's connect</p>

          <div className="icons">
            <a href="https://github.com/SalmanSakor" target="_blank">
              <box-icon name="github" type="logo"></box-icon>
            </a>
            <a href="mailto:salmansakor111@gmail.com" target="_blank">
              <box-icon name="gmail" type="logo"></box-icon>
            </a>
            <a onClick={handleClick} style={{ cursor: "pointer" }}>
              <box-icon name="phone" type="solid"></box-icon>
            </a>
          </div>

          {!phone && <div className="btn">+963 0985533957</div>}

          <a href="./salman.pdf" download className="btn">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
