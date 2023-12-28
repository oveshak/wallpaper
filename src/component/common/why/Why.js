import React from 'react'
import "./why.css"
import Headss from '../headss/Headss'
import { why } from '../../data/Data'
const Why = () => {
    const url="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frsintl%2Fvideos%2F612535400840208%2F&show_text=false&width=560&t=0"
  return (
    <>
        <div className='why'>
            <div className='container'>
                <Headss title="আমরাই কেন?" subtitle="জানুন, দেখুন এবং সিদ্ধান্ত নিন। আপনার বিশ্বস্ততা এবং সন্তুষ্টই আমাদের কাম্য।"/>
                <div className='row'>
                    <div className='left'>
                        {
                            why.map((item)=>(
                                <div className='box'>
                                    <span>{item.title}</span>
                                     {item.subtitle}
                                </div>
                            ))
                        }
                    </div>
                    <div className='right'>
                        <iframe src={url} allowFullScreen="true">#document (https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frsintl%2Fvideos%2F612535400840208%2F&show_text=false&width=560&t=0)</iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Why