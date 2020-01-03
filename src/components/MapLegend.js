import React from 'react'

export default () => {
  return (
    <div className='worldmap-legend'>
      <div className='worldmap-legend-number'>0</div>
      <div className='worldmap-legend-gradient'>
        <svg width="800px" height="20px">
          <defs>
            <linearGradient id="Gradient-1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffedea" />
              <stop offset="100%" stopColor="#8b0f00" />
            </linearGradient>
          </defs>
          <rect width="1000" height="20" fill="url(#Gradient-1)"/>
        </svg>
      </div>
      <div className='worldmap-legend-number'>120.5</div>
    </div>
  )
}