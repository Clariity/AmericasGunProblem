import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './App.css';

export default () => {
  return (
    <div className="App">
      <div className='height-90 background-blue middle-text'>
        <ScrollAnimation animateIn='fadeIn' animateOut='zoomOutLeft' delay={500} duration={2}>
          <h1>How Bad Is America's Gun Problem?</h1>
        </ScrollAnimation>
      </div>
      <div className='height-90 background-red middle-text'>
        <ScrollAnimation animateIn='bounceIn' animateOut='zoomOutRight'>
          This is some example text
        </ScrollAnimation>
      </div>
      <div className='height-90 background-yellow middle-text'>
        <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'>
          This is some example text
        </ScrollAnimation>
      </div>
      <div className='height-90 background-green middle-text'>
        <ScrollAnimation animateIn='bounceInUp' animateOut='zoomOutDown'>
          This is some example text
        </ScrollAnimation>
      </div>
    </div>
  );
}