import React from 'react'
import './home.css'
import image from '../../Assets/bg.jpg'

const Home = () => {
  return (
    <section className='home'>

      <div className='overLay'></div>
      <img className='bgimg' src={image}></img>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Our Package
          </span>
          
          <h1 className="homeTitle">
            Search your location
          </h1>

        </div>
      </div>

    </section>
  );
}

export default Home
