import React from 'react'
import './Marquee.css'

const Marquee = ({ items, speed = 28 }) => (
  <div className="marquee" style={{ '--marquee-speed': `${speed}s` }}>
    <div className="marquee-track">
      {[...items, ...items].map((item, index) => (
        <span className="marquee-item" key={`${item}-${index}`}>
          {item}
        </span>
      ))}
    </div>
  </div>
)

export default Marquee
