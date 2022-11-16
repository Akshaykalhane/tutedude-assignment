import React, { useState } from 'react';
import './enroll.css';
import Data from '../data/enrolldata.json';
import { Link } from 'react-router-dom';

function Enroll() {
  const arrow = ">";
  const [list, setList] = useState(Data);

  return (
    <>
      <div className="ref-earn">
        <p>UI/UX {arrow} Refer & Earn {arrow} Friends Referred </p>
        <div className="back-btn">
          <img src="./images/Arrow 17.png" alt="" />
          <Link style={{textDecoration:"none"}} to={'/'}><p>go back</p></Link>
        </div>
      </div>

      <div className="ref-info">
        <div className="refcode">
          <p>Your Referral Code</p>
          <div className="ref-code">
            <p>EDCH54</p>
          </div>
        </div>
        <div className="wallet">
          <p className="wal">Wallet Balance</p>
          <p className="balance">₹ 500</p>
        </div>
      </div>

      <div className="enroll-container">
        <h4>Friends who enrolled<span className="count">(3)</span></h4>
        <div className="friends-list">

          {list.map((el, index) => {
            return (
              <>
                <div className="friend-box" key={index}>

                  <div className="acc-head">
                    <p className="name">{el.name}</p>
                    <p className="date">{el.date}</p>
                  </div>
                  <h4>Courses Enrolled(6)</h4>
                  <div className="course-enroll">
                    {el.courses.map((item) => {
                      return (
                        <>
                          <p>{item}</p>
                        </>
                      )
                    })}
                  </div>
                  <div className="ref-amt">
                    <p>Referral Amount <span>{el.refamt}</span></p>
                  </div>
                </div>

              </>
            )
          })}
        </div>
      </div>

      <div className="footer">
        Terms & Conditions
      </div>

    </>
  )
}

export default Enroll