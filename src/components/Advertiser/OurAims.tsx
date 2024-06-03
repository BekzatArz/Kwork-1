import { useEffect, useState } from 'react'
import ourAims1 from '../../assets/our-aims1.svg'
import ourAims2 from '../../assets/our-aims2.svg'
import ourAims3 from '../../assets/our-aims3.svg'
import ourAims4 from '../../assets/our-aims4.svg'
import ourAims5 from '../../assets/our-aims5.svg'
import ourAims6 from '../../assets/our-aims6.svg'



import '../../styles/Advertiser/OurAims.css'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const OurAims = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        if(count < 0) {
            setCount(500)
        }
        if (count > 500){
            setCount(0)
        }
    }, [count, setCount])
  return (
    <div className="our-aims">
        <h2>Benefits of our advertising network for advertisers:</h2>
        <div className='our-aims-aims'>
            <div className="our-aims-childs">
                <img src={ourAims5} alt="" />
                <div className='our-aims-des'>
                    <h3>1. Precise Targeting</h3>
                    <p>Precise targeting: We offer precise targeting options to reach your specific audience based on their interests, behavior, and demographics.</p>
                </div>
            </div>
            <div className="our-aims-childs">
                <img src={ourAims4} alt="" />
                <div className='our-aims-des'>
                    <h3>2. Wide audience reach</h3>
                    <p>Wide audience reach: Our network encompasses multiple platforms and channels, ensuring your message reaches a broad audience at the right time and place.</p>
                </div>
            </div>
            <div className="our-aims-childs">
                <img src={ourAims1} alt="" />
                <div className='our-aims-des'>
                    <h3>3. Variety of ad formats</h3>
                    <p>Variety of ad formats: We support various ad formats including POP, PUSH, NATIVE, INPAGE allowing you to choose the most suitable format for your campaign.</p>
                </div>
            </div>
            <div className="our-aims-childs">
                <img src={ourAims6} alt="" />
                <div className='our-aims-des'>
                    <h3>4. Detailed analytics:</h3>
                    <p>High traffic quality: We provide flexible rates and collaboration terms, allowing you to optimize your budget and maximize results.</p>
                </div>
            </div>
            <div className="our-aims-childs">
                <img src={ourAims2} alt="" />
                <div className='our-aims-des'>
                    <h3>5. High traffic quality</h3>
                    <p>Detailed analytics: We offer comprehensive performance reports for your campaigns, enabling you to assess the effectiveness of your investments and make necessary adjustments.</p>
                </div>
            </div>
            <div className="our-aims-childs">
                <img src={ourAims3} alt="" />
                <div className='our-aims-des'>
                    <h3>6. Professional support:</h3>
                    <p>Professional support: Our team of experts is always available to assist you with any questions or concerns related to your advertising campaigns.</p>
                </div>
            </div>
        </div>
        <div className="our-benefits__slider our-aims-slider">
            <button onClick={() => setCount(count - 100)} className='arrow-left arrow' >
                <MdKeyboardArrowLeft color="#ffe500" size={70} />
            </button>
            <button onClick={() => setCount(count + 100)} className='arrow-right arrow'>
                <MdOutlineKeyboardArrowRight color="#ffe500" size={70}  />
            </button>
            <div className="our-slider">
                <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims5} alt="targeting" width={100} />
                        <h2 style={{marginTop: '20px'}}>1. Precise Targeting</h2>
                        <p className='our-contain__p'>Precise targeting: We offer precise targeting options to reach your specific audience based on their interests, behavior, and demographics.</p>
                    </div>
                    <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims4} alt="targeting" width={100} />
                        <h2 style={{marginTop: '35px'}}>2. Wide audience reach</h2>
                        <p className='our-contain__p'>Wide audience reach: Our network encompasses multiple platforms and channels, ensuring your message reaches a broad audience at the right time and place.</p>
                    </div>
                    <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims1} alt="targeting" className='child3' width={150} />
                        <h2>3. Variety of ad formats</h2>
                        <p className='our-contain__p'>Variety of ad formats: We support various ad formats including POP, PUSH, NATIVE, INPAGE allowing you to choose the most suitable format for your campaign.</p>
                    </div>
                    <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims6} alt="targeting" width={100} />
                        <h2 style={{marginTop: '20px'}}>4. Detailed analytics:</h2>
                        <p className='our-contain__p'>High traffic quality: We provide flexible rates and collaboration terms, allowing you to optimize your budget and maximize results.</p>
                    </div>
                    <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims2} alt="targeting" width={100} />
                        <h2 style={{marginTop: '20px'}}>5. High traffic quality</h2>
                        <p className='our-contain__p'>Detailed analytics: We offer comprehensive performance reports for your campaigns, enabling you to assess the effectiveness of your investments and make necessary adjustments.</p>
                    </div>
                    <div className="our-contain__child" style={{translate: `-${count}%`}}>
                        <img src={ourAims3} alt="targeting" width={100} />
                        <h2 style={{marginTop: '20px'}}>6. Professional support:</h2>
                        <p className='our-contain__p'>Professional support: Our team of experts is always available to assist you with any questions or concerns related to your advertising campaigns.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default OurAims