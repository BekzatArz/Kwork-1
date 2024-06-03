import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import Guy from '../../assets/guy.svg'
import { motion } from 'framer-motion'

import { RenderedItem } from '../../pages/pagesRender'
import '../../styles/Advertiser/Connect.css'


const Connect:React.FC<{rendered: RenderedItem}> = ({rendered}) => {
    const navigate = useNavigate()
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .4 , delay: !rendered? 1 : 10 , ease: "easeInOut"}} className="connect">
        <h1>Connect with Your Audience Like Never Before!
            (Unlock the Power of Precision Marketing with Our Advertising Network.)</h1>
        <h2>Reach Your Ideal Audience and Drive Results with High quality traffic and from around the world! ( Tailored Campaigns, Advanced Targeting, and Expert Support.)</h2>
        <img src={Guy} alt="" />
        <button onClick={() => navigate('/signup')} className='start-now__btn'>Start Maximizing Your ROI Today!</button>
    </motion.div>
  )
}

export default Connect