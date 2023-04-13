import React, { PureComponent } from "react";
import BS from "../../images/Bestseller(1).jpg";
import Drink from "../../images/Drinks(2).jpg";
import Food from "../../images/Food(3).jpg";
import Merchendise from "../../images/Merchandise(4).jpg";
import coffee from "../../images/CoffeeAtHome(5).jpg";
import readytoeat from "../../images/ReadyToEat(6).jpg";

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
        

        
      </div>
    );
  }
}

export default Bestseller;
