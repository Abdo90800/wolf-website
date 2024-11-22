// src/components/molecules/Navbar.js
import React from "react";
import Imgatom from "../Atoms/Imgatom";
const Footer = () => (
  <div className="Footer">
    <div className="footer-logo  mt-5 w-[500px] h-[90px] gap-[32px] flex items-center justify-center relative bottom-[20px] ">
      <Imgatom
        className="absolute w-[131px] h-[40px] md:w-[150px] md:h-[50px] lg:w-[186px] lg:h-[57px] "
        src="/FooterLogo.png"
        alt="logo"
        width={186}
        height={57}
      />
      <span
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(2, 132, 199, 0.65) 50%, rgba(0, 0, 0, 0) 100%);",
        }}
        className="flex mt-36 bg-backgroundImage-custom-gradient w-[320px] md:w-[450px] lg:w-[500px] h-[1px]"
      ></span>
    </div>
  </div>
);

export default Footer;
