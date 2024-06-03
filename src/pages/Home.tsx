import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Welcome from '../components/Home/Welcome'
import OurInfo from '../components/Home/OurInfo'
import { RenderedItem } from './pagesRender'
import '../styles/Home/Home.css'

import Background from '../assets/Background'
import OurBenefits from '../components/Home/OurBenefits'
import Formats from '../components/Formats'


const Home:React.FC<{rendered: RenderedItem, setRendered: Dispatch<SetStateAction<RenderedItem>>, format: string, setFormat: Dispatch<SetStateAction<string>>}> = ({rendered, setRendered, format, setFormat}) => {
  useEffect(() => {
    setRendered(prev => ({...prev, home: true}))
  }, [])
  return (
    <>
        <Background className='background-white' />
        <Welcome rendered={rendered}/>
        <OurInfo />
        <OurBenefits />
        <Formats setFormat={setFormat} format={format}/>
    </>
  )
}

export default Home