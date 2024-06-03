import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Guy from '../../assets/guy.svg';
import { motion } from 'framer-motion';
import { RenderedContext } from '../../pages/RenderedContext';
import '../../styles/Advertiser/Connect.css';

const Connect: React.FC = () => {
  const context = useContext(RenderedContext);

  if (!context) {
    throw new Error("RenderedContext must be used within a RenderedProvider");
  }

  const { rendered } = context;
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: .4, delay: rendered.advertiser ? .2 : 1, ease: "easeInOut" }} 
      className="connect"
    >
      <h1>Connect with Your Audience Like Never Before!
        (Unlock the Power of Precision Marketing with Our Advertising Network.)</h1>
      <h2>Reach Your Ideal Audience and Drive Results with High quality traffic and from around the world! ( Tailored Campaigns, Advanced Targeting, and Expert Support.)</h2>
      <img src={Guy} alt="" />
      <button onClick={() => navigate('/signup')} className='start-now__btn'>Start Maximizing Your ROI Today!</button>
    </motion.div>
  );
}

export default Connect;
