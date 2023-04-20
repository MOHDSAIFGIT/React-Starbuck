import React, { PureComponent } from "react";
import "./Bestseller.css";
import BS from "../../images/Bestseller(1).jpg";
import Drink from "../../images/Drinks(2).jpg";
import Food from "../../images/Food(3).jpg";
import Merchendise from "../../images/Merchandise(4).jpg";
import coffee from "../../images/CoffeeAtHome(5).jpg";
import readytoeat from "../../images/ReadyToEat(6).jpg";
import vegicon from "../../images/veg.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import promo from "../../images/Group_1087_b1db5faed6.png"

export class Bestseller extends PureComponent {
  render() {
    // for carousel
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    // end carousel
    return (
      <div>
        {/* Handcrafted Curations */}
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

          {/* carousel  */}
          <Carousel responsive={responsive} className="carousel-section">
            {/* cards  */}
            {/* <div className="cards d-flex mt-4 mb-4 justify-content-between">

            {/* <!-- card-end --> 
          </div> */}

            <div>
              {/* card 1 */}
              {/* Item 1 */}
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
            </div>
            <div>
              {/* <!-- card2  start from here--> */}
              {/* Item 2 */}
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
            </div>
            <div>
              {/* <!-- card3 start from here--> */}
              {/* Item 3 */}
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
            </div>
            <div>
              {/* Item 4 */}
              {/* <!-- card3 start from here--> */}
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
            </div>
          </Carousel>

          {/* br-card-end  */}
        </div>

        {/* promotion-poster */}

        <div className="row promo-row justify-content-evenly">
            <div className="col-10 promo-col mt-5 mb-5">
              <div className="promo-container d-flex text-white">
                  <div><img src={promo} alt="group food image" /></div>
                  <div className="promo-text">
                      <div><p>Don't Miss Out!</p></div>
                      <div><h4>Something Big is Brewing</h4></div>
                      <div><p>Get ready to be vowed with our game changing new menu.</p></div>
                  </div>

              </div>
            </div>
        </div>

        {/* end div  */}
      </div>
    );
  }
}

export default Bestseller;
