import React, { useState, useRef, useEffect } from 'react';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import InsertChartIcon from '@material-ui/icons/InsertChart';

import ApexChart from "react-apexcharts";
import chart from "tui-chart";
import ScrollAnimation from 'react-animate-on-scroll';
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";

import { treeMapData, treeMapOptions, treeMapTheme } from './data/treemapData'
import { options, series } from './data/scatter1Data'
import { options2, series2 } from './data/scatter2Data'
import { options3, series3 } from './data/scatter3Data'
import { options4, series4 } from './data/bar1Data'
import { options5, series5 } from './data/lineData'
import { options6, series6 } from './data/bar2Data'

import "tui-chart/dist/tui-chart.css";
import "animate.css/animate.min.css";
import './App.css';
import MapLegend from './components/MapLegend';

export default () => {
  const [content, setContent] = useState("");
  const [rendered, setRendered] = useState(false);
  const titleRef = useRef()
  const treeMapRef = useRef()
  const worldMapRef = useRef()
  const scatterRef = useRef()
  const scatterRef2 = useRef()
  const scatterRef3 = useRef()
  const barRef = useRef()
  const lineRef = useRef()
  const barRef2 = useRef()

  useEffect(() => {
    if (!rendered) {
      var container = document.getElementById("chart-area");
      chart.registerTheme("newTheme", treeMapTheme);
      chart.treemapChart(container, treeMapData, treeMapOptions);
      setRendered(true)
    }
  }, [rendered])

  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="App">
      <div className="floating-nav">
        <div className="floating-nav-button" onClick={() => scrollTo(titleRef)}><HomeIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(treeMapRef)}><DashboardIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(worldMapRef)}><ExploreIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(scatterRef)}><TrendingUpIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(scatterRef2)}><TrendingFlatIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(scatterRef3)}><ScatterPlotIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(barRef)}><BarChartIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(lineRef)}><TimelineIcon/></div>
        <div className="floating-nav-button" onClick={() => scrollTo(barRef2)}><InsertChartIcon/></div>
      </div>
      <div className='height-90 middle-text' ref={titleRef}>
        <ScrollAnimation animateIn='fadeIn' delay={200} duration={2}>
          <h1>How Bad Is America's Gun Problem?</h1>
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(treeMapRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={treeMapRef}>
        <ScrollAnimation animateIn='bounceIn' className="scatter-background">
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
        <MapLegend/>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(scatterRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={scatterRef}>
        <ScrollAnimation animateIn='fadeInRight' className="scatter-background">
          <ApexChart 
            options={options} 
            series={series} 
            type="line" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(scatterRef2)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={scatterRef2}>
        <ScrollAnimation animateIn='fadeInLeft' className="scatter-background">
          <ApexChart 
            options={options2} 
            series={series2} 
            type="line" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(scatterRef3)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={scatterRef3}>
        <ScrollAnimation animateIn='zoomIn' className="scatter-background">
          <ApexChart 
            options={options3} 
            series={series3} 
            type="scatter" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(barRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={barRef}>
        <ScrollAnimation animateIn='zoomIn' className="scatter-background">
          <ApexChart 
            options={options4} 
            series={series4} 
            type="bar" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(lineRef)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={lineRef}>
        <ScrollAnimation animateIn='slideInLeft' className="scatter-background">
          <ApexChart 
            options={options5} 
            series={series5} 
            type="line" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
      <div className="arrow bounce" onClick={() => scrollTo(barRef2)}>
        <ArrowDownwardIcon className="arrow-icon"/>
      </div>
      <div className='height-90 middle-text' ref={barRef2}>
        <ScrollAnimation animateIn='slideInRight' className="scatter-background">
          <ApexChart 
            options={options6} 
            series={series6} 
            type="bar" 
            width="1400"
            height="800" 
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}