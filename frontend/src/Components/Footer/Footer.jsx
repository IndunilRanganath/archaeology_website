import React from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

export const Footer = () => {
  return (
    <section className='footer'>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With US</h2>
          </div>
          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Your Email' />
            <button className='btn flex' type='submit'>SEND<FiSend className="icon"/></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className="logo flex" >
                <MdTravelExplore/>Travel
              </a>
            </div>
            <div className='footerParagraph'> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:d.md</div>
            <div className="footerSocials flex">
              <FiFacebook className='icon'/>
              <AiOutlineYoutube className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group one */}
            <div className="linkGroup">
              <span className="groupTitle">OUR Agency
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourisum
              </li>
              
            </div>

            {/* Group two */}
            <div className="linkGroup">
              <span className="groupTitle">PARTERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Booking
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                RentCar
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
              
            </div>

            {/* Group three */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Sri Lanka
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                India
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                UK
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                USA
              </li>
              
            </div>

            <div className="footerDiv flex">
              <small>BEST WEBSIE</small>
              <small>COPYRIGHT RESEVIED - GIS SOLUTION - 2023</small>
            </div>

          </div>



        </div>

      </div>
    </section>
  )
}

export default Footer
