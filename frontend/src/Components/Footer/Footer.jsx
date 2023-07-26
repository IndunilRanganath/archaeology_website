import React, {useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  
  return (
    <section className='footer'>
      <div className="secContent container">
        <div className="contactDiv flex"  data-aos="fade-up"  >
          <div className="text" >
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
            <div className="footerSocials flex"  data-aos="fade-up"  >
              <FiFacebook className='icon'/>
              <AiOutlineYoutube className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid"  >

             {/* Group one  */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
              <span className="groupTitle">Quick Links
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                President of Sri Lanka
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Presidential Secretariat
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Cabinet of Ministers
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Government of Sri Lanka
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Government News Portal
              </li>
              
            </div>

            {/* Group two */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
              <span className="groupTitle">Resources
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Archaeological Sites
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                District Dashboard
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Regional Office
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Ruwanweliseya Web Map
              </li>
              
            </div>

            {/* Group three */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000" >
              <span className="groupTitle">Website
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Cookies Policy
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Privacy Policy
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Site Map
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
