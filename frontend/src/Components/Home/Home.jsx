import React from 'react'
import './home.css'
import image from '../../Assets/bg.jpg'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <section className='home'>

      <div className='overLay'></div>
      <img className='bgimg' src={image}></img>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
          Explore the sri lanka </span>
          
          <h1 className="homeTitle">
            Search your location
          </h1>

        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label className="city" htmlFor='city' >Search your destination:</label>
            <div className='input flex'>
              <input className="dest1" type='text' placeholder='Enter name here...'></input>
              <GrLocation className="icon" />
            </div>
        </div>

        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineYoutube className="icon"/>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Home
