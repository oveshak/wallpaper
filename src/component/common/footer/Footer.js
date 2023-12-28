import React from 'react'
import "./footer.css"
import { nav } from '../../data/Data'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='left'>
                    <div className='icon'>
                    <FaFacebookF className='icon1'/>
                    <FaYoutube className='icon1'/>
                    <FaWhatsapp className='icon1'/> 
                    </div>
                    <div className='menu'>
                        {
                            nav.map((item)=>(
                                <li path={item.path}>{item.text}</li>
                            ))
                        }
                    </div>
                </div>
                <div className='right'>
                    <h1>হেল্পলাইন</h1>
                    <p>+880 1976 600300</p>
                    <p className='pa'>+880 1973 600700</p>
                </div>
            </div>
            
        </div>
        <div className='legal '>
                <div className='row1 container'>
                    <div className='left'>
                        <p>© 2023 RS 3d Wallpaper And Floor. All rights reserved.</p>
                    </div>
                    <div className='right'>
                        <p>Developed by oveshak</p>
                    </div>
                </div>
            </div>
    </footer>
    </>
  )
}
