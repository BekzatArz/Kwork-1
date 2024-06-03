import React, { useContext, useEffect } from "react";
import Connect from "../components/Advertiser/Connect";
import OurAims from "../components/Advertiser/OurAims";
import Background2 from '../assets/Background2.svg';
import '../styles/Advertiser/Advertiser.css';
import Formats from "../components/Formats";
import { RenderedContext } from "../pages/RenderedContext";

const Advertiser: React.FC<{ format: string, setFormat: React.Dispatch<React.SetStateAction<string>> }> = ({ format, setFormat }) => {
  const context = useContext(RenderedContext);

  if (!context) {
    throw new Error("RenderedContext must be used within a RenderedProvider");
  }

  const { rendered, setRendered } = context;

  useEffect(() => {
    if (!rendered.advertiser) {
      setTimeout(() => {
        setRendered((prev) => ({ ...prev, advertiser: true }));
      }, 1000);
    }
  }, [rendered.advertiser, setRendered]);

  return (
    <>
      <img src={Background2} className="background2" alt="" />
      <Connect />
      <OurAims />
      <Formats setFormat={setFormat} format={format} />
    </>
  );
}

export default Advertiser;
