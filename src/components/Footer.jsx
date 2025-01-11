import React from "react";

const Footer = (props) => {
  const icons = [
    {
      icon: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/fauji-sirajuddin",
    },
    {
      icon: "fa fa-skype",
      link: "https://join.skype.com/invite/x6hEOBuO7Lpm",
    },
    {
      icon: "fa fa-facebook",
      link: "https://www.facebook.com/anup.manwatkar",
    },
    {
      icon: "fa fa-telegram",
      link: "https://t.me/anup_manwatkar",
    },
    {
      icon: "fa fa-github",
      link: "https://github.com/iamanup17?tab=repositories",
    },
  ];
  return (
    <section className="footer">
      <span className="disclaimer">
        © 2024 Designed & Developed by <span>Fauji</span>
      </span>
    </section>
  );
};

export default Footer;
