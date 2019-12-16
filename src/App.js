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
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import ApexChart from "react-apexcharts";
import chart from "tui-chart";
import ScrollAnimation from 'react-animate-on-scroll';
import MapChart from "./components/MapChart";
import MapLegend from './components/MapLegend';
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
import Dialogs from './components/Dialogs';

export default () => {
  const [content, setContent] = useState("");
  const [rendered, setRendered] = useState(false);
  const [openDialogs, setOpenDialogs] = useState([false,false,false,false,false,false,false,false,false]);
  const titleRef = useRef()
  const treeMapRef = useRef()
  const worldMapRef = useRef()
  const scatterRef = useRef()
  const scatterRef2 = useRef()
  const scatterRef3 = useRef()
  const barRef = useRef()
  const lineRef = useRef()
  const barRef2 = useRef()
  const introRef = useRef()
  const introRef2 = useRef()
  const textRef = useRef()
  const textRef2 = useRef()
  const textRef3 = useRef()
  const textRef4 = useRef()
  const textRef5 = useRef()
  const textRef6 = useRef()
  const textRef7 = useRef()
  const textRef8 = useRef()

  useEffect(() => {
    if (!rendered) {
      var container = document.getElementById("chart-area");
      chart.registerTheme("newTheme", treeMapTheme);
      chart.treemapChart(container, treeMapData, treeMapOptions);
      setRendered(true)
    }
  }, [rendered])

  const setDialog = (state, index) => {
    let newDialogs = [...openDialogs]
    newDialogs[index] = state
    setOpenDialogs(newDialogs)
    console.log(openDialogs)
  }

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
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(introRef)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={introRef}>
        <h3><u>How to use the site</u></h3>
        <p>Scroll down to progress through the story or click on the arrows to scroll everything into view for you.</p>
        <h4><u>Quick Navigation</u></h4>
        <p>Want to see a chart again? Scroll directly to them with the navigation bar on the left.</p>
        <h4><u>Source Information</u></h4>
        <p>Every chart will have an information icon by it like the one below. Clicking on this will reveal all additional chart information and sources.</p>
        <InfoOutlinedIcon className='info-icon' data-tip='Click for information' onClick={() => setDialog(true, 0)}/>
        <Dialogs openDialogs={openDialogs} id='0' close={() => setDialog(false, 0)} content={
          <div className='dialog-text'>
            This is where additional chart information and links to data sources will go.
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(introRef2)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={introRef2}>
        <p>
          There are often stories in the news about shootings in America. In fact in 2019 there have been more mass shootings in America than days in the year <a href="https://www.cbsnews.com/news/mass-shootings-2019-more-mass-shootings-than-days-so-far-this-year/">as reported by CBS news</a>.
        </p>
        <p>
          However, looking at the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title">statistics from 2016</a> (most complete data), there are 19 countries that are equal to or above America in terms of deaths by firearm per 100,000 persons.
        </p>
        <p>
          That means ~1/10 countries have worse death rates by firearm than America, so how bad is America's gun problem really?
        </p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef}>
        <h3><u>Gun Numbers</u></h3>
        <p>To start to answer this question, let us first look at some factors that will help us to answer questions along the way.</p>
        <p>America is notorious for the sheer volume of firearms it owns. So how do these numbers stack up against the rest of the world. How many of the world's civilian owned gun are in America?</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(treeMapRef)}/>
      </div>

      <div className='height-90 middle-text' ref={treeMapRef}>
        <ScrollAnimation animateIn='bounceIn'>
          Where Are The World's Guns?
          <div id="chart-area" className="scatter-background"/>
        </ScrollAnimation>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 1)}/>
        <Dialogs openDialogs={openDialogs} id='1' close={() => setDialog(false, 1)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className='arrow bounce'>
        <ArrowDownwardIcon className='arrow-icon' onClick={() => scrollTo(textRef2)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef2}>
        <h3><u>What about the population?</u></h3>
        <p>This may already seem like an extraordinary amount of guns for one country to own and this tree map chart reflects the distribution of guns around the world. However, population is another factor.</p>
        <p>Let us look at the rate of civilian owned guns in each country per 100 persons to demonstrate how many guns there are per capita.</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(worldMapRef)}/>
      </div>

      <div className='height-90 middle-text' ref={worldMapRef}>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <MapLegend/>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 2)}/>
        <Dialogs openDialogs={openDialogs} id='2' close={() => setDialog(false, 2)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef3)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef3}>
        <h3><u>Conclusions</u></h3>
        <p>As you can see, America stands out strongly once again, having over 1.2 guns for every person in the country. The 2nd worst country (Yemen) has less than half of that at ~0.53.</p>
        <p>Of the ~857,000,000 civilian held guns in the world, 393,347,000 (~46%) are owned by Americans. ~4% of the world live in the US.</p>
        <p>4% of the world own 46% of the world’s guns!</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 3)}/>
        <Dialogs openDialogs={openDialogs} id='3' close={() => setDialog(false, 3)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef2)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 4)}/>
        <Dialogs openDialogs={openDialogs} id='4' close={() => setDialog(false, 4)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef3)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 5)}/>
        <Dialogs openDialogs={openDialogs} id='5' close={() => setDialog(false, 5)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(barRef)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 6)}/>
        <Dialogs openDialogs={openDialogs} id='6' close={() => setDialog(false, 6)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(lineRef)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 7)}/>
        <Dialogs openDialogs={openDialogs} id='7' close={() => setDialog(false, 7)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(barRef2)}/>
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
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 8)}/>
        <Dialogs openDialogs={openDialogs} id='8' close={() => setDialog(false, 8)} content={
          <div className='dialog-text'></div>
        }/>
      </div>
    </div>
  );
}