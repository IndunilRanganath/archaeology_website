import React,{useEffect} from 'react'
import './home.css'
import image from '../../Assets/bg.jpg'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])


  return (
    <section className='home'>

      <div className='overLay'></div>
      <img className='bgimg' src={image}></img>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText" data-aos="fade-up">
          Explore the sri lanka </span>
          
          <h1 className="homeTitle" data-aos="fade-up" >
            Search your location
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label className="city" htmlFor='city' >Search your destination:</label>
            <div className='input flex'>
              <input className="dest1" type='text' placeholder='Enter name here...'></input>
              <GrLocation className="icon" />
            </div>
        </div>

        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
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
