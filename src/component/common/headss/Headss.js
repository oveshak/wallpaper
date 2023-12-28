import React,{useEffect} from 'react'
import "./headss.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Headss = ({title,subtitle}) => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
        <div data-aos="fade-up" className='headingss'>
            <h1>{title}</h1>
            <p>
                {subtitle}
            </p>
        </div>
    </>
  )
}

export default Headss