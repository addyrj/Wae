import "./home.scss";
// import React, { useState } from 'react';
// import { FaRupeeSign } from 'react-icons/fa'; 
import {
  logo,
  main,
  result,
  program2,
  program1,
  logo1,
  logo2,
} from "../assets/index";
import { FaYoutube } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Home = () => {

  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <div className="mainlogo">
            <img src={logo} alt="" />
          </div>
          <div className="ul-main">
            <li>Programs</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Connect</li>
            <li>Donate</li>
          </div>
        </nav>
      </header>
      <div className="mainhome" style={{ backgroundImage: `url(${main})` }}>
        <div className="text-container">
          <h1>
            The All-In-One
            <br />
            Wireframing <br />
            Kit
          </h1>
          <h3>
            Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
            massa vitae auctor mi massa. Sodales libero viverra cursus sed duis
            luctus nulla. In malesuada vulputate pharetra ipsum orci.
          </h3>
          <button>Donate</button>
        </div>
      </div>
      <div className="main-result">
        <div className="result-img">
          <img src={result} alt="" />
        </div>
        <div className="result-text">
          <div className="result-text-main">
            <h1>Our results in numbers</h1>
            <p>
              Lorem ipsum dolor sit amet consectet adipiscing elit eget
              quamumto.
            </p>
            <div className="numbers">
              <div className="customer">
                <h1>
                  99<span>%</span>
                </h1>
                <p>Customer satisfaction</p>
              </div>
              <div className="customer">
                <h1>
                  32<span>M</span>
                </h1>
                <p>Active users</p>
              </div>
              <div className="customer">
                <h1>
                  125<span>+</span>
                </h1>
                <p>Team members</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="programs-main">
        <div className="program">
          <h1>Programs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis. Sed tincidunt enim quis
            aliquam ornare.
          </p>
          <img src={program1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis. Sed tincidunt enim quis
            aliquam ornare. Vivamus ut urna elementum, auctor purus sit amet,
            vulputate ipsum. Ut dictum semper arcu, non vehicula enim cursus et
            urna elementum, auctor purus sit amet.
          </p>
          <img src={program2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis. Sed tincidunt enim quis
            aliquam ornare. Vivamus ut urna elementum, auctor purus sit amet,
            vulputate ipsum. Ut dictum semper arcu, non vehicula enim cursus et
            urna elementum, auctor purus sit amet.
          </p>
          <span>Konw More</span>
        </div>
      </div>
      <div className="good-time">
        <div className="text-good">
          <h1>
            Do good any time,
            <br />
            they still need your
            <br />
            help a lot
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis.
          </p>
        </div>
        <div className="text-image">
          <img src={logo1} alt="" />
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo2} alt="" />
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe-top">
          <h1>Subscribe to our Newsletter</h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed.
            <br /> Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet
            scelerisque nullam sagittis, pulvinar.
          </p>
          <div className="input">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="subscribe-bottom">
        <div className="donation">
      <h1>Your Donation will <br />make a difference</h1>
      <div className="oneTime">
  <button className="btn">One-time</button>
  <button className="btn">Monthly</button>
</div>
<hr />
<div className="rupees">
<button className="btz">₹2500</button>
<button className="btz">₹5000</button>
<button className="btz">₹6000</button>
</div>
<div className="rs">
<input type="text" placeholder="₹" />
</div>
<div className="rs1">
  <select className="personSelect">
    <option value="">Select a person</option>
    <option value="person1">Person 1</option>
    <option value="person2">Person 2</option>
    <option value="person3">Person 3</option> 

  </select>
</div>
<div className="rs2">
<input type="text" placeholder="Leave a Comment" />
</div>
<div className="rs3">
<button >Donate</button>
</div>




   
    </div>
        </div>
      </div>
      <footer className="main-footer">
      <nav className="main-nav">
          <div className="mainlogo">
            <img src={logo} alt="" />
          </div>
          <div className="ul-main">
            <li>Eleven</li>
            <li>Twelve</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
            <li>Six</li>
          </div>
          <div className="social">
          <FaYoutube />
          <SlSocialFacebook />
          <TfiTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          </div>
        </nav>
        <p>CompanyName @ 202X. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
