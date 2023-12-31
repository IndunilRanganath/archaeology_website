import React,{useState} from 'react'
import './navbar.css'
import { MdTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import img from '../../Assets/qr.png'



const Navbar = () => {

  const [active, setActive] = useState('navBar')

  //Function to toggle navBar
  const showNav = ()=> {
    setActive('navBar activeNavbar')
  }

  //Function to remove navBar
   const removeNavbar = () =>{
    setActive('navBar')
   }



  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1><MdTravelExplore className="icon"/>Archaeology</h1>
            </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>

            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Package</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Destination</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>About</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>

            <button className='btn'>
              <img className='qrimg' src={img} alt='qrimg'/>
            </button>
          </ul>

          <div onClick={removeNavbar}
            className="closeNavbar">
             <AiFillCloseCircle className="icon"/>
          </div>

        </div>
        

        <div onClick={showNav}
        className="toggleNavbar">
         <TbGridDots className="icon" />
        </div>

      </header>
    </section>
    )
  }

export default Navbar
