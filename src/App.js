import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './App.css';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import treemapData from './data/treemapData'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import chart from "tui-chart";
import "tui-chart/dist/tui-chart.css";

export default () => {
  const [content, setContent] = useState("");
  const [rendered, setRendered] = useState(false);
  const titleRef = useRef()
  const treeMapRef = useRef()
  const worldMapRef = useRef()
  const scatterRef = useRef()

  useEffect(() => {
    if (!rendered) {
      var options = {
        chart: { width: 1400, height: 800 },
        series: { showLabel: true, zoomable: true, useLeafLabel: false },
        tooltip: { suffix: "guns", offsetY: -40},
        chartExportMenu: { visible: false }
      };
      var theme = {
        series: {
          colors: [ "#83b14e", "#458a3f", "#295ba0", "#2a4175", "#289399", "#289399", "#617178", "#8a9a9a", "#516f7d", "#dddddd" ],
          borderColor: "#cccccc",
          borderWidth: 5
        }
      };
      var container = document.getElementById("chart-area");
      chart.registerTheme("newTheme", theme);
      chart.treemapChart(container, treemapData, options);
      setRendered(true)
    }
  }, [rendered])

  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="App">
      <div className="floating-nav">
        <div className="floating-nav-button" onClick={() => scrollTo(titleRef)}>1</div>
        <div className="floating-nav-button" onClick={() => scrollTo(treeMapRef)}>2</div>
        <div className="floating-nav-button" onClick={() => scrollTo(worldMapRef)}>3</div>
        <div className="floating-nav-button" onClick={() => scrollTo(scatterRef)}>4</div>
      </div>
      <div className='height-90 middle-text' ref={titleRef}>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={200} duration={2}>
          <h1>How Bad Is America's Gun Problem?</h1>
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(treeMapRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={treeMapRef}>
        <ScrollAnimation animateIn='bounceIn' animateOut='zoomOutRight'>
          Where Are The World's Guns?
          <div id="chart-area" />
        </ScrollAnimation>
      </div>
      <div className='arrow bounce' onClick={() => scrollTo(worldMapRef)}>
        <ArrowDownwardIcon className='arrow-icon'/>
      </div>
      <div className='height-90 middle-text' ref={worldMapRef}>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <div className='worldmap-legend'>
          <div className='worldmap-legend-number'>0</div>
          <div className='worldmap-legend-gradient'>
            <svg width="1000px" height="20px">
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
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(scatterRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={scatterRef}>
        <ScrollAnimation animateIn='fadeInRight' animateOut='zoomOutDown'>
          This is some example text
        </ScrollAnimation>
      </div>
    </div>
  );
}