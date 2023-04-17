import React, { PureComponent } from "react";
import "./green_header.css";

export class Green_header extends PureComponent {
  render() {
    return (
      <div>
        <div className="green-header d-flex justify-content-between align-items-center">
          <div className="text-white">
            <h5> Avail benefits! Sign up for My Starbucks Rewards. </h5>
          </div>
          <div>
            <button>know more</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Green_header;
