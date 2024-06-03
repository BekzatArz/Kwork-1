import React, { useEffect } from 'react';
import Welcome from '../components/Home/Welcome';
import OurInfo from '../components/Home/OurInfo';
import { useRenderedContext } from '../pages/RenderedContext';
import '../styles/Home/Home.css';

import Background from '../assets/Background';
import OurBenefits from '../components/Home/OurBenefits';
import Formats from '../components/Formats';

const Home: React.FC<{ format: string, setFormat: React.Dispatch<React.SetStateAction<string>> }> = ({ format, setFormat }) => {
  const { rendered, setRendered } = useRenderedContext();

  useEffect(() => {
    setRendered(prev => ({ ...prev, home: true }));
  }, [setRendered]);

  return (
    <>
      <Background className='background-white' />
      <Welcome />
      <OurInfo />
      <OurBenefits />
      <Formats setFormat={setFormat} format={format} />
    </>
  );
}

export default Home;
