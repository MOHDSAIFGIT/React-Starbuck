import React, { PureComponent } from 'react'
import './green_header.css'

export class Green_header extends PureComponent {
  render() {
    return (
      <div>
        <div className='green-header d-flex justify-content-around align-items-center'>
          <div className='text-white'><h5>A world of rewards awaits you! Sign up now.</h5></div>
          <div><button >know more</button></div>
          </div>
      </div>
    )
  }
}

export default Green_header