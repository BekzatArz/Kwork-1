import '../../styles/Home/Welcome.css'

const Welcome = () => {
  return <div className="welcome">
    <h1 className="welcome__h1">Boost Your Reach: Join Our <br /> Advertising Network<br /> Today!</h1>
    <div className='welcome__reg'>
        <h2>Create account</h2>
        <p>It's time to get down to business <br />right now.</p>
        <div className='welcome__switch'>
            <button>Monetize</button>
            <button>Advertize</button>
        </div>
        <input className='welcome__inputs' type="text" />
        <input className="welcome__inputs" type="email" />
        <button className='welcome__sign-in'>Sign In</button>
    </div>
</div>
}

export default Welcome