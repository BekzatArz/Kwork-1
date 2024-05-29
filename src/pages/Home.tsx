import Welcome from '../components/Home/Welcome'
import '../styles/Home/Home.css'

import backgroundWhite from '../assets/background.svg'

const Home = () => {
  return (
    <>
        <img src={backgroundWhite} className='background-white' alt="" />
        <Welcome/>
    </>
  )
}

export default Home