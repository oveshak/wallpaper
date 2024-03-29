import React from "react";
import "./design.css";
import Headss from "../../common/headss/Headss";
import { design } from "../../data/Data";
import { Link } from "react-router-dom";
 
const Design = () => {
  return (
    <>
      <div className="design">
        <div className="container">
          <Headss
            title="ডিজাইন সমূহ"
            subtitle="আমাদের প্রায় ৫০০০ এর বেশি ডিজাইন আছে সেখান থেকে আপনার কাঙ্খিত ডিজাইনটি বেছে নিতে পারবেন।"
          />
          <div className="design-container">
            <div className="row">
              {design.map((item) => (
                <div className= "box" >
                  <Link to='/design'><img src={item.icon} alt=""/></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
