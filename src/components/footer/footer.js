import React, { PureComponent } from "react";
import "./footer.css";
import logo from "../../images/logo.png";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import iso from "../../images/appstoreiOS.png";
import playstore from "../../images/appstoreAndroid.png";

export class Footer extends PureComponent {
  render() {
    return (
      <div>
        {/* footer  */}
        <div className="row footer text-white pt-5">
          <div className="col-2">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>About Us </h3>
              <ul>Our Heritage</ul>
              <ul>Our company</ul>
              <ul>Coffehouse</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>Responsibility</h3>
              <ul>Community</ul>
              <ul>Ethical Sourcing</ul>
              <ul>Envirnment</ul>
              <ul>Diversity</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>Quicks links</h3>
              <ul>Delivery</ul>
              <ul>Season Gifts</ul>
              <ul>Careers</ul>
              <ul>Customer Service</ul>
              <ul>FAQs</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>Social Media</h3>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="col-2">
            <a href="#">
              <img src={iso} alt="iso" />
            </a>
            <a href="#">
              <img src={playstore} alt="playstore" />
            </a>
          </div>
        </div>

        {/* last div  */}
      </div>
    );
  }
}

export default Footer;
