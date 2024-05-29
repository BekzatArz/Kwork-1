import React, { useState } from 'react'
import '../../styles/Home/Welcome.css'

const Welcome:React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
  return <div className="welcome">
    <h1 className="welcome__h1">Boost Your Reach: Join Our <br /> Advertising Network<br /> Today!</h1>
    <div className='welcome__reg'>
        <h2>Create account</h2>
        <p>It's time to get down to business <br />right now.</p>
        <div className='welcome__switch'>
            <button className={``}>Monetize</button>
            <button className={``}>Advertize</button>
        </div>
        <input value={name} onChange={(e) => setName(e.target.value)} className='welcome__inputs welcome__i-first' placeholder='Name' maxLength={50} type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="welcome__inputs  welcome__i-second" placeholder='Email' maxLength={60}  type="email" />
        <button className='welcome__sign-in'>Sign Up</button>
    </div>
</div>
}

export default Welcome