import React, { useState } from 'react'
import "./asking.css"
import Headss from '../../common/headss/Headss'
import { asking } from '../../data/Data'
const Asking = () => {
  const [select ,setSelect]=useState(null)
  const toggle=(i)=>{
    if(select===i){
      return setSelect(null)
    }
    setSelect(i)
    
  }
  return (
    <>
        <div className='asking'>
            <div className='container'>
                <Headss title="আপনার জিজ্ঞাসা" subtitle="আপনার কোন জিজ্ঞাসা থাকলে এখান থেকে জেনে নিতে পারেন।"/>
                <div className='row'>
                  <div className='left'>
                     {
                      asking.map((item ,i)=>(
                       <div className='title'>
                           <div className='item' onClick={()=>toggle(i)}>
                              <h2>{item.qs}</h2>
                              <span>{select===i ? '-':"+"}</span>                  
                        </div>
                        <div className={select===i ? 'content show' : 'content'}>
                          {item.ans.map((item1)=>(
                         <div>
                             <p>{item1.list}</p>
                           
                         </div>
                          ))}
                          <span>{item.con}</span>
                        
                        </div>
                       </div>
                      ))
                     }
                  </div>
                  <div className='right'>
                    <img src='./images/faq-bg.jpg' alt=''/>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Asking