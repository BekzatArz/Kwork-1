import Connect from "../components/Advertiser/Connect"
import OurAims from "../components/Advertiser/OurAims"

import Background2 from '../assets/Background2.svg'
import '../styles/Advertiser/Advertiser.css'
import Formats from "../components/Formats"
import React, { Dispatch, SetStateAction, useEffect } from "react"
import { RenderedItem } from "./pagesRender"

const Advertiser:React.FC<{format: string, setFormat: Dispatch<SetStateAction<string>>, rendered:RenderedItem, setRendered:Dispatch<SetStateAction<RenderedItem>>}> = ({format, setFormat, rendered, setRendered}) => {
  useEffect(() => {
    console.log(rendered)
    setTimeout(() => {
      setRendered(prev => ({...prev, advertiser: true}))
    }, 3000)
  }, [])
  return (
    <>
      <img src={Background2} className="background2" alt="" />
      <Connect rendered={rendered} />
      <OurAims />
      <Formats setFormat={setFormat} format={format}/>
    </>
  )
}

export default Advertiser