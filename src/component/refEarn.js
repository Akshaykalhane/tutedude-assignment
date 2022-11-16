import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Data from '../data/howdoeswork.json';
import './refearn.css';

function RefEarn() {
  const [list, setList] = useState(Data);
  const arrow = ">"
  return (
    <>
      <div className="ref-earn">
        <p>UI/UX {arrow}  Refer & Earn</p>
      </div>
      <div className="ref-box">
        <div class="ref-stat">
          <div className="ref-earning">
            <p>Referral Earning</p>
            <h1>₹ 2,500</h1>
          </div>
          <div className="ref-earning">
            <p>Total Referrals</p>
            <h1>7</h1>
          </div>
          <div className="ref-earning">
            <p>Wallet Balance</p>
            <h1>₹ 500</h1>
          </div>
          <div className="ref-earning btn-wid">
            <button>Withdraw Balance</button>
          </div>
        </div>
        <div className="ref-num">
          <h1>Your Referral Code </h1>
          <div className="ref-id">
            EDCH54
          </div>
        </div>
      </div>

      <div className="work">

        <h2>How does it work ?</h2>

        <div className="work-items">
          {list.map((el, index) => {
            return (
              <div className='work-item' key={index}>

                <div className='work-item-img'>
                  <img src={el.img} alt='picture' />
                </div>
                <div>
                  <p class="item-head">{el.title}</p>
                  <p>{el.desc}</p>
                </div>

              </div>
            )
          })}
     
        </div>


      </div>
      <div className="footer">
        <Link style={{textDecoration:"none"}} to={'/ref'}><p>Friends Who Enrolled</p></Link>
        
        <p>Terms & Conditions</p>
      </div>

    </>
  )
}

export default RefEarn