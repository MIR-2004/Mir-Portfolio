import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mir.saif.ali2004@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/saifa_li2345/"><Insta color="white" size={"3rem"}/></a>
          <a href="https://www.facebook.com/profile.php?id=100085895424529"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/MIR-2004"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
