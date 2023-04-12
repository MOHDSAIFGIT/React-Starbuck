import React, { PureComponent } from "react";
import './Bestseller.css'

export class Bestseller extends PureComponent {
  render() {
    return (
      <div>
        <div className="row justify-content-evenly">
          <div className="col-10 pt-4 pb-3">
            <div className="">
              <h4>Handcrafted Curations</h4>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-evenly flex-wrap">
            <div className="text-center">
              <img
                className="rounded-circle"
                src="images/Bestseller(1).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Bestseller</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src="images/Drinks(2).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Drinks</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src="images/Food(3).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Foods</p>
            </div>

            <div>
              <img
                className="rounded-circle"
                src="images/Merchandise(4).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Merchandise</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src="images/CoffeeAtHome(5).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Coffee At Home</p>
            </div>

            <div className="text-center">
              <img
                className="rounded-circle"
                src="images/ReadyToEat(6).jpg"
                width="100px"
                height="100px"
                alt="image"
              />
              <p className="pt-2">Ready to Eat</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bestseller;
