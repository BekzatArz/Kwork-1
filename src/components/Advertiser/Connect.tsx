import { useNavigate } from 'react-router-dom'
import Guy from '../../assets/guy.svg'

import '../../styles/Advertiser/Connect.css'


const Connect = () => {
    const navigate = useNavigate()
  return (
    <div className="connect">
        <h1>Connect with Your Audience Like Never Before!
            (Unlock the Power of Precision Marketing with Our Advertising Network.)</h1>
        <h2>Reach Your Ideal Audience and Drive Results with High quality traffic and from around the world! ( Tailored Campaigns, Advanced Targeting, and Expert Support.)</h2>
        <img src={Guy} alt="" />
        <button onClick={() => navigate('/signup')} className='start-now__btn'>Start Maximizing Your ROI Today!</button>
    </div>
  )
}

export default Connect