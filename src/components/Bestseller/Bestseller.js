import React, { PureComponent } from "react";
import "./Bestseller.css";
import BS from "../../images/Bestseller(1).jpg";
import Drink from "../../images/Drinks(2).jpg";
import Food from "../../images/Food(3).jpg";
import Merchendise from "../../images/Merchandise(4).jpg";
import coffee from "../../images/CoffeeAtHome(5).jpg";
import readytoeat from "../../images/ReadyToEat(6).jpg";
import vegicon from "../../images/veg.svg";

export class Bestseller extends PureComponent {
  render() {
    return (
      <div>
        <div className="row justify-content-evenly mb-5 mt-3">
          <div className="col-10 pt-4 pb-3">
            <div className="">
              <h4>Handcrafted Curations</h4>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-evenly flex-wrap">
            <div className="text-center">
              <img
                className="rounded-circle"
                src={BS}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Bestseller</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src={Drink}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Drinks</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src={Food}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Foods</p>
            </div>

            <div>
              <img
                className="rounded-circle"
                src={Merchendise}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Merchandise</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src={coffee}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Coffee At Home</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src={readytoeat}
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Ready to Eat</p>
            </div>
          </div>
        </div>

        {/* BR-section */}
        <div className="BR-container">
          <div className="br-upperSection d-flex align-content-center justify-content-between">
            <div className="br-heading">
              <h3>Barista Recommends</h3>
            </div>
            <div className="view-menu">
              <a href="#">View Menu</a>
            </div>
          </div>

          {/* cards  */}
          <div className="cards d-flex mt-4 mb-4 justify-content-between">
            <div className="cards-content">
              <div className="upper-content d-flex">
                <div className="card-img">
                  <img src={BS} alt="image" />
                </div>
                <div className="card-about">
                  <div>
                    <img src={vegicon} alt="veg-symbol" />
                  </div>
                  <div className="card-title">
                    <h3>Java Chip Frappuccino</h3>
                  </div>
                  <div className="card-subtitle">
                    <span> TALL(354 ML) </span>
                  </div>
                </div>
              </div>

              <div className="card-bottom d-flex mt-1">
                <div className="card-price">
                  <h6>₹ 351</h6>
                </div>
                <div className="card-add-item">
                  <button className="text-white">Add Item</button>
                </div>
              </div>
            </div>

            {/* <!-- card2 --> */}
            <div className="cards-content">
              <div className="upper-content d-flex">
                <div className="card-img">
                  <img src={BS} alt="image" />
                </div>
                <div className="card-about">
                  <div>
                    <img src={vegicon} alt="veg-symbol" />
                  </div>
                  <div className="card-title">
                    <h3>Cold coffee</h3>
                  </div>
                  <div className="card-subtitle">
                    <span> TALL(354 ML) </span>
                  </div>
                </div>
              </div>

              <div className="card-bottom d-flex mt-1">
                <div className="card-price">
                  <h6>₹ 351</h6>
                </div>
                <div className="card-add-item">
                  <button className="text-white">Add Item</button>
                </div>
              </div>
            </div>

            {/* <!-- card3 --> */}
            <div className="cards-content">
              <div className="upper-content d-flex">
                <div className="card-img">
                  <img src={BS} alt="image" />
                </div>
                <div className="card-about">
                  <div>
                    <img src={vegicon} alt="veg-symbol" />
                  </div>
                  <div className="card-title">
                    <h3>Vanilla Sweet Cream Cold Brew</h3>
                  </div>
                  <div className="card-subtitle">
                    <span> TALL(354 ML) </span>
                  </div>
                </div>
              </div>

              <div className="card-bottom d-flex mt-1">
                <div className="card-price">
                  <h6>₹ 383</h6>
                </div>
                <div className="card-add-item">
                  <button className="text-white">Add Item</button>
                </div>
              </div>
            </div>

            {/* <!-- card-end --> */}
          </div>

          {/* br-card-end  */}
        </div>
      </div>
    );
  }
}

export default Bestseller;
