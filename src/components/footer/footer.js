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
        <div className="row footer text-white pt-5 pb-5">
          <div className="col-2">
            <div>
              <img src={logo} alt="" className="footer-logo" />
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>About Us </h3>
              <ul className="pt-2">Our Heritage</ul>
              <ul className="pt-2">Our company</ul>
              <ul className="pt-2">Coffehouse</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>Responsibility</h3>
              <ul className="pt-2">Community</ul>

              <ul className="pt-2">Ethical Sourcing</ul>

              <ul className="pt-2">Envirnment</ul>
              <ul className="pt-2">Diversity</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3>Quicks links</h3>
              <ul className="pt-2">Delivery</ul>
              <ul className="pt-2">Season Gifts</ul>
              <ul className="pt-2">Careers</ul>
              <ul className="pt-2">Customer Service</ul>
              <ul className="pt-2">FAQs</ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3 className="pb-2">Social Media</h3>
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

          <hr />

          <hr />
        </div>

        {/* last div  */}
      </div>
    );
  }
}

export default Footer;
