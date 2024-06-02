import Connect from "../components/Advertiser/Connect"
import OurAims from "../components/Advertiser/OurAims"

import Background2 from '../assets/Background2.svg'
import '../styles/Advertiser/Advertiser.css'
import Formats from "../components/Formats"
import React, { Dispatch, SetStateAction } from "react"

const Advertiser:React.FC<{format: string, setFormat: Dispatch<SetStateAction<string>>}> = ({format, setFormat}) => {
  return (
    <>
      <img src={Background2} className="background2" alt="" />
      <Connect />
      <OurAims />
      <Formats  setFormat={setFormat} format={format}/>
    </>
  )
}

export default Advertiser