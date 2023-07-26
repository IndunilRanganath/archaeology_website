import React, { useEffect } from 'react';
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardList} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [

  {
    id:1,
    imgSrc: img1,
    destTitle: 'Galle Fort',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Sigiriya',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Sigiriya',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Sigiriya',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Sigiriya',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Sigiriya',
    location: 'Anuradapura',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo'
  }
]


export const Main = () => {


  useEffect(() => {
    Aos.init({duration:2000});
    }, [])


  return (
    <section className='main container section' data-aos="fade-up" >
      <div className="secTitle">
        <h3 className='title' data-aos="fade-right">
          Most Visited Destination
        </h3>
      </div>
      <div className='secContent grid'>
        {Data.map(({id,imgSrc,destTitle,location,description})=>{
            return(
              <div key={id}
                className='singleDestination'>
                
                <div className="imageDiv">
                  
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                      <HiOutlineLocationMarker className="icon"/>
                      <span className='name'>{location}</span>
                  </span>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    More Details<HiOutlineClipboardList className="icon"/>
                  </button>
                </div>

              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Main
