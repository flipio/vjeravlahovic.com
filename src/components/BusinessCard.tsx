import React from "react";
import { FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import "./BusinessCard.scss";

export function BusinessCard() {
  return (
    <div className="content">
      <div className="card">
        <div className="card__side card__side--front">
          {/* <!-- Front Content --> */}
          <div className="card__cont">
            <div className="card-wrapper">
              <p className="card-name uppercase">Vjera Vlahović</p>
              <p className="profession uppercase">attorney at law</p>

              <div className="other-information">
                <div className="left-side">
                  <span className="email"><FaEnvelope />  vjeravlahovic@yahoo.com</span>
                  <span className="phone"><FaPhone />+381 65 800 88 88</span>
                </div>
                <div className="right-side">
                  <span className="address"><FaBuilding />Makedonska 19,</span>
                  <span className="city">11000 Belgrade, Serbia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__side card__side--back">
          {/* <!-- Back Content --> */}
          <div className="card__cta">
            <div className="card-wrapper">
              <span className="first-inital">V</span>
              <span className="second-initial">V</span>
              <p className="website">www.vjeravlahovic.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
