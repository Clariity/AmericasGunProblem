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
  const textRef9 = useRef()
  const textRef10 = useRef()
  const textRef11 = useRef()
  const textRef12 = useRef()
  const textRef13 = useRef()
  const textRef14 = useRef()

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
        <h3><u>How to use the Site</u></h3>
        <p className='no-margin-top'>Scroll down to progress through the story or click on the arrows to scroll everything into view.</p>
        <h4><u>Quick Navigation</u></h4>
        <p className='no-margin-top'>Want to see a chart again? Scroll directly to it with the navigation bar on the left.</p>
        <h4><u>Source Information</u></h4>
        <p className='no-margin-top'>Every chart will have an information icon next to it like the one below. Clicking on this will reveal all additional chart information and sources.</p>
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
          There are often stories in the news about shootings in America. In fact in 2019 there have been more mass shootings in America than days in the year <a href="https://www.cbsnews.com/news/mass-shootings-2019-more-mass-shootings-than-days-so-far-this-year/" rel="noopener noreferrer" target="_blank">as reported by CBS news</a>.
        </p>
        <p>
          However, looking at the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title" rel="noopener noreferrer" target="_blank">statistics from 2016</a> (most complete data), there are 19 countries that are equal to or above America in terms of deaths by firearm per 100,000 persons.
        </p>
        <p>
          That means ~1/10 countries have worse death rates by firearm than America, so how bad is America's gun problem really?
        </p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef}>
        <h3><u>Where Are The World's Guns?</u></h3>
        <p>To start to answer the question on how bad Americas gun problem is, let us first look at some factors that will help us to answer questions along the way.</p>
        <p>America is notorious for the sheer volume of firearms it owns. So how do these numbers stack up against the rest of the world? How many of the world's civilian owned guns are in America?</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(treeMapRef)}/>
      </div>

      <div className='height-90 middle-text' ref={treeMapRef}>
        <ScrollAnimation animateIn='bounceIn'>
          <h3 className='chart-title'>Global Distribution of Civilian Held Firearms</h3>
          <div id="chart-area" className="scatter-background"/>
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Click on regions to zoom in to sub regions and zoom again for countries</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 1)}/>
        <Dialogs openDialogs={openDialogs} id='1' close={() => setDialog(false, 1)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              <a href='http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf' rel="noopener noreferrer" target="_blank">
                http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf
              </a>
            </p>
            <b>Additional Information</b>
            <p>Some countries or regions have very low gun numbers and as such their labels might overflow and not be readable.</p>
            <p>Tool tips have been added to address this. By hovering over a section you can clearly see the name and value for that section.</p>
          </div>
        }/>
      </div>
      <div className='arrow bounce'>
        <ArrowDownwardIcon className='arrow-icon' onClick={() => scrollTo(textRef2)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef2}>
        <h3><u>What About the Population?</u></h3>
        <p>This may already seem like an extraordinary amount of guns for one country to own and this tree map chart reflects the distribution of guns around the world. However, population is another factor.</p>
        <p>Let us look at the number of civilian owned guns in each country per 100 persons to demonstrate how many guns there are per capita.</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(worldMapRef)}/>
      </div>

      <div className='height-90 middle-text' ref={worldMapRef}>
        <h3 className='chart-title'>Number of Civilian Held Firearms per 100 Persons</h3>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <MapLegend/>
        <div className='interactivity2'>
          <p><u>Interactivity</u></p>
          <p>Hover over countries and regions to see their name and value</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 2)}/>
        <Dialogs openDialogs={openDialogs} id='2' close={() => setDialog(false, 2)} content={
          <div className='dialog-text'>
          <b>Sources</b>
          <p>
            <a href='http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf' rel="noopener noreferrer" target="_blank">
              http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf
            </a>
          </p>
          <b>Additional Information</b>
          <p>Countries and territories highlighted in grey indicate that there was no data for these regions.</p>
        </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef3)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef3}>
        <h3><u>Conclusions on Gun Numbers</u></h3>
        <p>As you can see, America stands out strongly once again, having over 1.2 guns for every person in the country. The 2nd worst country (Yemen) has less than half of that at ~0.53.</p>
        <p>There are more civilian held guns in America than there are civilians!</p>
        <p>Of the ~857,000,000 civilian held guns in the world, 393,347,000 (~46%) are owned by Americans. ~4% of the world live in the US.</p>
        <p>4% of the world own 46% of the world’s guns!</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef4)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef4}>
        <h3><u>How Large of a Factor is Gun Numbers on Firearm Death Rates?</u></h3>
        <p>With such extreme gun prevalence, it would be interesting to see the correlation between the rate of civilian held firearms and the rate of deaths by firearm.</p>
        <p>Do more guns cause more firearm deaths?</p>
        <p>To answer this, let us see how gun prevalence affects gun violence globally.</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef)}/>
      </div>

      <div className='height-90 middle-text' ref={scatterRef}>
        <ScrollAnimation animateIn='fadeInRight' >
          <h3 className='chart-title'>The Effect of Gun Prevalence on Firearm Death Rates</h3>
          <ApexChart 
            options={options} 
            series={series} 
            type="line" 
            width="900"
            height="550" 
            className="scatter-background"
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Click the information icon below to view all interactivity</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 3)}/>
        <Dialogs openDialogs={openDialogs} id='3' close={() => setDialog(false, 3)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              X-Axis:
              <a href='http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf' rel="noopener noreferrer" target="_blank">
                http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf
              </a>
            </p>
            <p>
              Y-Axis:
              <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title'>
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title
              </a>
            </p>
            <b>Interactivity</b>
            <ul style={{"textAlign": "left"}}>
              <li>
                Hover: Hover over individual points to see the country and XY values. 
              </li>
              <li>
                Zoom: Click and hold to draw a square over the area of the chart you wish to zoom in on. To get back, click the house icon in the top right of the chart. 
              </li>
              <li>
                Highlighting: To highlight and make specific regions stand out, simply hover over them in the legend. 
              </li>
              <li>
                Removal: To remove a region from the graph, click on its colour in the chart legend. Click on it again to put it back. Multiple regions and the trendline can be removed by clicking on each in turn. 
              </li>
            </ul>
            <b>Additional Information</b>
            <p>Unfortunately the trendline doesn't re-adjust its value when countries are removed or the chart is zoomed in, only its position.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef5)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef5}>
        <h3><u>What Does This Tell Us?</u></h3>
        <p>There is a surprisingly low correlation between the prevalence of civilian held firearms and death rates by firearm (0.12).</p>
        <p>But what is happening with all those Central American countries with such high death rates?</p>
        <p>It turns out there is a common theme with these countries... They are all <a href="https://obamawhitehouse.archives.gov/the-press-office/2016/09/12/presidential-determination-major-drug-transit-or-major-illicit-drug" rel="noopener noreferrer" target="_blank">major drug transit or major illicit drug producing countries</a>.</p>
        <p>This is a major external factor causing a significant rise in gun violence statistics.</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef6)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef6}>
        <h3><u>So What Happens When We Remove Outliers?</u></h3>
        <p>Greenland has been identified as an outlier due to having such a small population that any incident causes a heavy skew in the data.</p>
        <p>So what happens to the correlation if we remove these 22 drug transit and producing countries along with any outliers?</p>
        <p>It increases to 0.14...?</p>
        <p>This indicates that something is heavily affecting the data even with 23 countries removed, so what happens if we then remove America too?</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef2)}/>
      </div>

      <div className='height-90 middle-text' ref={scatterRef2}>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h3 className='chart-title'>The Effect of Gun Prevalence on Firearm Death Rates (Adjusted)</h3>
          <ApexChart 
            options={options2} 
            series={series2} 
            type="line" 
            width="900"
            height="550" 
            className="scatter-background"
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Click the information icon below to view all interactivity</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 4)}/>
        <Dialogs openDialogs={openDialogs} id='4' close={() => setDialog(false, 4)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              X-Axis:
              <a href='http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf' rel="noopener noreferrer" target="_blank">
                http://www.smallarmssurvey.org/fileadmin/docs/Weapons_and_Markets/Tools/Firearms_holdings/SAS-BP-Civilian-held-firearms-annexe.pdf
              </a>
            </p>
            <p>
              Y-Axis:
              <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title' rel="noopener noreferrer" target="_blank">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title
              </a>
            </p>
            <p>
              Drug Transit and Producing Countries:
              <a href='https://obamawhitehouse.archives.gov/the-press-office/2016/09/12/presidential-determination-major-drug-transit-or-major-illicit-drug' rel="noopener noreferrer" target="_blank">
                https://obamawhitehouse.archives.gov/the-press-office/2016/09/12/presidential-determination-major-drug-transit-or-major-illicit-drug
              </a>
            </p>
            <b>Interactivity</b>
            <ul style={{"textAlign": "left"}}>
              <li>
                Hover: Hover over individual points to see the country and XY values. 
              </li>
              <li>
                Zoom: Click and hold to draw a square over the area of the chart you wish to zoom in on. To get back, click the house icon in the top right of the chart. 
              </li>
              <li>
                Highlighting: To highlight and make specific regions stand out, simply hover over them in the legend. 
              </li>
              <li>
                Removal: To remove a region from the graph, click on its colour in the chart legend. Click on it again to put it back. Multiple regions and the trendline can be removed by clicking on each in turn. 
              </li>
            </ul>
            <b>Additional Information</b>
            <p>Unfortunately the trendline doesn't re-adjust its value when countries are removed or the chart is zoomed in, only its position.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef7)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef7}>
        <h3><u>Conclusions on Gun Numbers affecting Firearm Death Rates?</u></h3>
        <p>The effect of also removing America takes the correlation from 0.14 to 0.003.</p>
        <p>The rest of the world show that there is no correlation between gun prevalence and firearm death rates.</p>
        <p>With the correlation being affected this much from America alone, it starts to indicate the severity of America's problem with gun violence.</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef8)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef8}>
        <h3><u>What is the Extent of America's Gun Problem in Comparison to the Well Developed World?</u></h3>
        <p>We have now identified that America has a large problem with gun violence, and it turns out America really doesn't have an excuse.</p>
        <p>America is in the top 6% of the world in terms of development based on their <a href='http://hdr.undp.org/en/indicators/137506' rel="noopener noreferrer" target="_blank">Human Development Index</a> (2016).</p>
        <p>If we take a look at the top 20% of well developed countries in the world, we see a common trend in gun violence with the exception of one country...</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(scatterRef3)}/>
      </div>

      <div className='height-90 middle-text' ref={scatterRef3}>
        <ScrollAnimation animateIn='zoomIn'>
          <h3 className='chart-title-reduced'>The Effect of Human Development on Firearm Death Rates For Top 20% of Countries</h3>
          <ApexChart 
            options={options3} 
            series={series3} 
            type="scatter" 
            width="900"
            height="550"
            className="scatter-background" 
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Click the information icon below to view all interactivity</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 5)}/>
        <Dialogs openDialogs={openDialogs} id='5' close={() => setDialog(false, 5)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              X-Axis:
              <a href='http://hdr.undp.org/en/indicators/137506' rel="noopener noreferrer" target="_blank">
                http://hdr.undp.org/en/indicators/137506
              </a>
            </p>
            <p>
              Y-Axis:
              <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title' rel="noopener noreferrer" target="_blank">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title
              </a>
            </p>
            <b>Interactivity</b>
            <ul style={{"textAlign": "left"}}>
              <li>
                Hover: Hover over individual points to see the country and XY values. 
              </li>
              <li>
                Zoom: Click and hold to draw a square over the area of the chart you wish to zoom in on. To get back, click the house icon in the top right of the chart. 
              </li>
            </ul>
            <b>Additional Information</b>
            <p>The plot point for America has been highlighted in red to make it easier to see.</p>
            <p>Human Development Index is scored between 0 and 1.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef9)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef9}>
        <h3><u>If that wasn't clear enough....</u></h3>
        <p>Here is the same data but ordered to better show the jump to America from even the 2nd worst country...</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(barRef)}/>
      </div>

      <div className='height-90 middle-text' ref={barRef}>
        <ScrollAnimation animateIn='zoomIn'>
          <h3 className='chart-title'>Firearm Death Rates For Top 20% of Countries</h3>
          <ApexChart 
            options={options4} 
            series={series4} 
            type="bar" 
            width="900"
            height="550" 
            className="scatter-background"
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Hover over each bar to see the country and Y-Axis value</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 6)}/>
        <Dialogs openDialogs={openDialogs} id='6' close={() => setDialog(false, 6)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              X-Axis:
              <a href='http://hdr.undp.org/en/indicators/137506' rel="noopener noreferrer" target="_blank">
                http://hdr.undp.org/en/indicators/137506
              </a>
            </p>
            <p>
              Y-Axis:
              <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title' rel="noopener noreferrer" target="_blank">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6143020/#H1-3-JOI180081title
              </a>
            </p>
            <b>Additional Information</b>
            <p>The countries along the X-Axis are still the same top 20% of countries by Human Development Index.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef10)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef10}>
        <h3><u>Conclusions on the Extent of America's Gun Problem in Comparison to the Well Developed World</u></h3>
        <p>America can be seen as a significant outlier in the modern well developed world, with nearly 4 times worse death rates than the next worst country in the selection.</p>
        <p>With America being such a well developed country, there is no reason why they can't follow the trend set by all the other well developed coutries.</p>
        <p>It is clear that America is in need of stricter gun control. Let us explore an example showing the effect of stricter gun laws...</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef11)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef11}>
        <h3><u>Will Gun Control Help? Australia Case Study</u></h3>
        <p>In 1996, Australia suffered a horrific gun massacre where 35 people were killed. In response to this, the Australian government passed the National Firearms Agreement that tightened gun laws and purchased guns back off its citizens to reduce the number of civilian owned guns.</p>
        <p>Let us examine how this impacted the rate of deaths by firearm...</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(lineRef)}/>
      </div>

      <div className='height-90 middle-text' ref={lineRef}>
        <ScrollAnimation animateIn='slideInLeft'>
          <h3 className='chart-title'>Australia Firearm Death Rates 1979 - 2016</h3>
          <ApexChart 
            options={options5} 
            series={series5} 
            type="line" 
            width="900"
            height="550" 
            className="scatter-background"
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Hover over the line to see the X and Y-Axis values at each point</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 7)}/>
        <Dialogs openDialogs={openDialogs} id='7' close={() => setDialog(false, 7)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              <a href='https://www.gunpolicy.org/firearms/region/australia' rel="noopener noreferrer" target="_blank">
                https://www.gunpolicy.org/firearms/region/australia
              </a>
            </p>
            <b>Additional Information</b>
            <p>Gun death rates for this source are calculated in pure numbers compared to age-standardised death rates in the NCBI source used on previous charts. As such, values may vary slightly.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef12)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef12}>
        <h3><u>The Results of Gun Laws</u></h3>
        <p>In 2016, firearm death rates were nearly 1/3rd of what they were 20 years prior.</p>
        <p>It is predicted that the Australian government's buy back scheme took <a href="https://edition.cnn.com/2012/12/16/opinion/australia-gun-laws/index.html" rel="noopener noreferrer" target="_blank">1/3rd</a> of the national stock of guns and destroyed them.</p>
        <p>What would American death rates by firearm look like if they followed in the footsteps of Australia with same success?</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(barRef2)}/>
      </div>

      <div className='height-90 middle-text' ref={barRef2}>
        <ScrollAnimation animateIn='slideInRight'>
          <h3 className='chart-title'>Predicted American Firearm Death Rates</h3>
          <ApexChart 
            options={options6} 
            series={series6} 
            type="bar" 
            width="900"
            height="550" 
            className="scatter-background"
          />
        </ScrollAnimation>
        <div className='interactivity'>
          <p><u>Interactivity</u></p>
          <p>Click the information icon below to view all interactivity</p>
        </div>
        <InfoOutlinedIcon className='info-icon child' data-tip='Click for information' onClick={() => setDialog(true, 8)}/>
        <Dialogs openDialogs={openDialogs} id='8' close={() => setDialog(false, 8)} content={
          <div className='dialog-text'>
            <b>Sources</b>
            <p>
              <a href='https://www.gunpolicy.org/firearms/region/australia' rel="noopener noreferrer" target="_blank">
                https://www.gunpolicy.org/firearms/region/australia
              </a>
            </p>
            <b>Interactivity</b>
            <ul style={{"textAlign": "left"}}>
              <li>
                Hover: Hover over individual parts of the stacked bars to see their category name and Y-Axis values in a tooltip. 
              </li>
              <li>
                Highlighting: To highlight and make specific categories stand out, simply hover over them in the legend. 
              </li>
              <li>
                Removal: To remove a cateory from the graph, click on its colour in the chart legend. Click on it again to put it back. Multiple categories can be removed by clicking on each in turn. 
              </li>
            </ul>
            <b>Additional Information</b>
            <p>To better see values for "Other", remove "Homocide" and "Suicide" in the legend.</p>
            <p>Gun death rates for this source are calculated in pure numbers compared to age-standardised death rates in the NCBI source used on previous charts. As such, values may vary slightly.</p>
            <p>America's 2036 prediction was calculated assuming America would follow the same rate of decrease in death rate as Australia did over 20 years.</p>
          </div>
        }/>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef13)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef13}>
        <h3><u>Conclusions on "Will Gun Control Help?"</u></h3>
        <p>The case study on Australia shows that the introduction of the National Firearms Agreement saw 68% less homicides and 62% less suicides by firearms over the course of 20 years.</p>
        <p>If America saw the same success rates, then in the year 2036 there would be 24,000 fewer deaths by firearm (~37,000 now).</p> 
        <p>That is 66 fewer people per day! (~101 now).</p>
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef14)}/>
      </div>

      <div className='height-90 middle-text side-margins' ref={textRef14}>
        <h3><u>So How Bad Is America's Gun Problem?</u></h3>
        <p>Perhaps America's most severe problem with guns is its unwillingness to change.</p>
        <p>Tens of thousands of lives could be easily saved if America would just follow in the footsteps of countries that have realised they have a problem and acted upon it.</p>
        <p>Not doing anything to save one life is a problem, but not trying to save potentially tens of thousands of lives speaks greater volumes.</p>
        <br/>
        <h1 style={{"fontSize": "50px"}}>End</h1>
      </div>
    </div>
  );
}