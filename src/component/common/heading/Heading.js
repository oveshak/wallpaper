import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {  FaTimes } from "react-icons/fa";
import "./heading.css"
export const Heading = () => {
    const[heading,setHeading]=useState(true);
    const headings=()=>{
        setHeading(!heading);
    }
  return (
    <>
        <div className={heading ? "heading" :"close"}>
            <div>
            <div className='container flex'>
                <div className='icon'>
                    <FaFacebookF className='icon1'/>
                    <FaYoutube className='icon1'/>
                    <FaWhatsapp className='icon1'/>
                </div>
                <div className='details'>
                    <p className='number'><span className='color1'>যোগাযোগঃ </span><span className='color2'>+880-1772-132818</span></p>
                    
                </div>
                
            </div>
            <div className='toggles'>
                    <button onClick={headings} >
                            <FaTimes/> 
                    </button>
                </div>
            </div>
            
        </div>
    </>
  )
}
