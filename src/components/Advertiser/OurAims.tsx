import ourAims1 from '../../assets/our-aims1.svg'
import ourAims2 from '../../assets/our-aims2.svg'
import ourAims3 from '../../assets/our-aims3.svg'
import ourAims4 from '../../assets/our-aims4.svg'
import ourAims5 from '../../assets/our-aims5.svg'
import ourAims6 from '../../assets/our-aims6.svg'



import '../../styles/Advertiser/OurAims.css'

const OurAims = () => {
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
    </div>
  )
}

export default OurAims