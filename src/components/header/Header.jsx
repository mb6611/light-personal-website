import React from 'react'
import './Header.css'
import MatthewHeadshot from '../../assets/Matthew Headshot large.png'

const Header = () => {
    return (
        <div className="header">
            <img className="matthew-headshot" alt="Matthew headshot" src={MatthewHeadshot}/>
            <p>
                Hey, I’m Matthew. <span className="emoji">👋</span><br/><br/>
                I build AI tech and startups.<span className="emoji">⚡</span>
            </p>
        </div>
    )
}

export default Header