import React,{useEffect} from 'react'
import "./hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
        <section className='hero'>
            <div className='container'>
            <div className="row">
            <div className="">
              <div className="header-content ">
                  <h2 data-aos="zoom-in">বেস্ট থ্রিডি ওয়ালপেপার ডিজাইন ফর ইউর হোম</h2>
                  <p data-aos="fade-up" >টাইলস ও রঙের ঝামেলা এড়িয়ে আমাদের<strong> থ্রিডি ওয়ালপেপার</strong>, <strong>থ্রিডি সিলিং পেপার</strong> এবং <strong>থ্রিডি ইপোক্সি ফ্লোর</strong> দিয়ে আপনার বাসাকে দিন আভিজাত্যের ছোয়া। থ্রিডি ওয়ালপেপার, থ্রিডি সিলিং পেপারে পাবেন ১০ বছরের গ্যারান্টি  এবং থ্রিডি ফ্লোরে পাবেন লাইফটাইম গ্যারান্টি।</p>
                  <div className='button1'>
                  <a href="#faq"  data-aos="fade-right"><button>আরো জানুন</button></a>
                  <a href="#faq"  data-aos="fade-left"><button>আনুমানিক খরচ</button></a>
                  </div>
              </div>
            </div>
          </div>
            </div>
        </section>
    </>
  )
}

export default Hero