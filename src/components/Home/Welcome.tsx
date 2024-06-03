import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import money from '../../assets/money.svg';
import '../../styles/Home/Welcome.css';
import { useRenderedContext } from '../../pages/RenderedContext';

import iluha from '../../assets/iluha2.svg'

const Welcome: React.FC = () => {
  const { rendered } = useRenderedContext();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('monetize');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const variants: Variants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: {
      opacity: 1,
      scale: [1, 1.1, 1],
      transition: {
        opacity: { delay: rendered.home ? 0 : 2, duration: 1 },
        scale: {
          delay: rendered.home ? .2 : 2,
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }
      }
    }
  };

  return (
    <motion.div className="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: !rendered.home ? 1.6 : 0, duration: .8 }}>
      <img className='iluha' src={iluha} alt="" style={{width: "90%"}} />
      <h1 className="welcome__h1">Boost Your Reach: Join Our <br /> Advertising Network<br /> Today!</h1>
      <img src={money} width={200} className='welcome__money' alt="money" />
      <button onClick={() => navigate('/signup')} className='start-now__btn white'>Start Now!</button>
      <motion.div
        className='welcome__reg'
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <h2>Create account</h2>
        <p>It's time to get down to business <br />right now.</p>
        <div className='welcome__switch'>
          <button
            className={selectedOption === 'monetize' ? 'selected' : ''}
            onClick={() => handleOptionChange('monetize')}
          >
            Monetize
          </button>
          <button
            className={selectedOption === 'advertize' ? 'selected' : ''}
            onClick={() => handleOptionChange('advertize')}
          >
            Advertize
          </button>
        </div>
        <input
          autoComplete='off'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='welcome__inputs welcome__i-first'
          placeholder='Name'
          maxLength={50}
          type="text"
        />
        <input
          autoComplete='off'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="welcome__inputs welcome__i-second"
          placeholder='Email'
          maxLength={60}
          type="email"
        />
        <button className='welcome__sign-in'>Sign Up</button>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
