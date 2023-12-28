import React,{useEffect} from 'react'
import Headss from '../../common/headss/Headss'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NumberCounter from 'number-counter';
export const About = () => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
       <div className='about'>
        <div className='container'>
        <Headss  title="আমাদের সফলতা" subtitle="আমরা বিগত ৭ বছর যাবৎ বিশ্বস্ততার সাথে সেবা দিয়ে যাচ্ছি সারা বাংলাদেশে ।"/>
        <div className='row1'> 
        <div className='row'>
          <div data-aos="fade-up" className='box'>
          <NumberCounter start={0} end={7} delay={2} className="increment" />
          <p>বছরের অভিজ্ঞতা</p>
          </div>
          <div data-aos="fade-up" className='box'>
          <NumberCounter start={2000} end={4000} delay={2} className="increment"  postFix="+"/>
          <p>হ্যাপি ক্লায়েন্ট</p>
          </div>
          <div data-aos="fade-up" className='box'>
          <NumberCounter start={3000} end={5000} delay={3} className="increment"  postFix="+"/>
          <p>প্রজেক্ট সম্পন্ন</p>
          </div>
          
        </div>
        </div>
        </div>
       </div>
    </>
  )
}
