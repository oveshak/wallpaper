import React from "react";
import "./address.css";
import Headss from "../../common/headss/Headss";
import { addressbook } from "../../data/Data";
const Address = () => {
  const map='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.149939507119!2d90.42092100000002!3d23.815933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d6c928a207%3A0x497d7dd3cb4ecd8c!2sRS%203D%20Wallpaper%20and%20Floor!5e0!3m2!1sen!2sbd!4v1702961110479!5m2!1sen!2sbd" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <div className="address">
        <div className="container">
          <Headss title="যোগাযোগ" />
          <div className="row">
            <div className="left">
              {addressbook.map((item) => (
                <div className="box">
                  <div className="header-box">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <span>{item.subtitle}</span>
                    <p>{item.phone}</p>
                  </div>
                  {item.title.map((item1) => (
                    <div className="sub-box">
                      <div className="sup-box">
                        <img src={item1.icon} alt="" />
                        <h4>{item1.post}</h4>
                      </div>
                      <p>{item1.place}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="right">
            <iframe src={map} alt="" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
