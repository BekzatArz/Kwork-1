
import targeting from '../../assets/targeting.svg'
import varietyOfFormats from '../../assets/variety-of-formats.svg'
import flexOptions from '../../assets/flex-options.svg'
import secure from  '../../assets/secure.svg'
import support from  '../../assets/support.svg'


import '../../styles/Home/OurBenefits.css'

const OurBenefits = () => {
  return (
      <div className='our-benefits'>
        <h1>Our Benefits</h1>
        <div className="our-benefits__contain">
            <div className="our-contain1">
                <div className="our-contain__child">
                    <img src={targeting} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>Precise Targeting</h2>
                    <p className='our-contain__p'>We provide powerful targeting tools that allow advertisers to reach their target audience with high precision.</p>
                </div>
                <div className="our-contain__child">
                    <img src={varietyOfFormats} alt="targeting" width={100} />
                    <h2 style={{marginTop: '35px'}}>Variety of formats:</h2>
                    <p className='our-contain__p'>Whether you're looking for text ads, graphical inpage, engaging native or something else, we have the right format for your campaign.</p>
                </div>
                <div className="our-contain__child">
                    <img src={flexOptions} alt="targeting" className='child3' width={150} />
                    <h2 >Flexible customization options</h2>
                    <p className='our-contain__p'>We offer personalized solutions that meet your unique needs and budget.</p>
                </div>
            </div>
            <div className="our-contain2">
                <div className="our-contain__child">
                    <img src={secure} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>High Level of  Security</h2>
                    <p className='our-contain__p'>We ensure protection against fraud and unwanted content, providing a safe and reliable environment for advertising campaigns.</p>
                </div>
                    <button className='start-now__btn black'>Start Now!</button>
                <div className="our-contain__child">
                    <img src={support} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>Customer support</h2>
                    <p className='our-contain__p'>Our friendly and competent team is always ready to assist you with any questions and requests.</p>
                </div>
            </div>
        </div>
        <div className="our-benefits__slider">
                <div className="our-contain__child">
                    <img src={targeting} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>Precise Targeting</h2>
                    <p className='our-contain__p'>We provide powerful targeting tools that allow advertisers to reach their target audience with high precision.</p>
                </div>
                <div className="our-contain__child">
                    <img src={varietyOfFormats} alt="targeting" width={100} />
                    <h2 style={{marginTop: '35px'}}>Variety of formats:</h2>
                    <p className='our-contain__p'>Whether you're looking for text ads, graphical inpage, engaging native or something else, we have the right format for your campaign.</p>
                </div>
                <div className="our-contain__child">
                    <img src={flexOptions} alt="targeting" className='child3' width={150} />
                    <h2 >Flexible customization options</h2>
                    <p className='our-contain__p'>We offer personalized solutions that meet your unique needs and budget.</p>
                </div>
                <div className="our-contain__child">
                    <img src={secure} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>High Level of  Security</h2>
                    <p className='our-contain__p'>We ensure protection against fraud and unwanted content, providing a safe and reliable environment for advertising campaigns.</p>
                </div>
                <div className="our-contain__child">
                    <img src={support} alt="targeting" width={100} />
                    <h2 style={{marginTop: '20px'}}>Customer support</h2>
                    <p className='our-contain__p'>Our friendly and competent team is always ready to assist you with any questions and requests.</p>
                </div>
        </div>
    </div>
  )
}

export default OurBenefits