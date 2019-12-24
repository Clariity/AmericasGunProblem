import '../App.css';

export const options = {
  chart: {
    toolbar: {
      show: true,
      tools: {
        zoomin: false,
        zoomout: false,
        pan: false,
      },
      autoSelected: 'zoom' 
    },
    zoom: {
      enabled: true,
      type: 'xy'
    }
  },
  colors:[ "#00bd9f", "#000000", "#ffb840", "#00a9ff", "#ff5a46", "#785fff"],
  xaxis: {
    title: {
      text: "Rate of Civilian Gun Ownership / 100 persons (2017)",
    },
    tickAmount: 10,
    labels: {
      formatter: function(val) {
        return parseFloat(val).toFixed(1)
      }
    }
  },
  yaxis: {
    title: {
      text: "Rate of Gun Deaths / 100,000 persons (2016)",
    },
    tickAmount: 7
  },
  fill: {
    type: 'solid',
  },
  stroke: {
    width: 1
  },
  markers: {
    size: [5,0],
    strokeWidth: 1,
    strokeColors: '#000',
  },
  tooltip: {
    shared: false,
    intersect: true,
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return  '<div class="arrow_box">' +
                '<span><b>' + dataLabels[seriesIndex].data[dataPointIndex][0] + '</b></span>' +
                '<br/>' +
                '<span> Gun Rate: ' + dataLabels[seriesIndex].data[dataPointIndex][1] + '</span>' +
                '<br/>' +
                '<span> Death Rate: ' + dataLabels[seriesIndex].data[dataPointIndex][2] + '</span>' +
              '</div>'
    }
  },
}

const dataLabels = [{
  name: "Africa",
  data: [
    ["Algeria",2.1,1],
    ["Angola",11.2,2.5],
    ["Benin",0.3,4.6],
    ["Botswana",4.1,3.8],
    ["Burkina Faso",0.9,2.5],
    ["Burundi",2,2.4],
    ["Cabo Verde",5.7,10.4],
    ["Cameroon",2.1,4.8],
    ["Central African Republic",1.8,4.9],
    ["Chad",1,5.5],
    ["Comoros",1.5,3.3],
    ["Côte d'Ivoire",4.4,5],
    ["Democratic Republic of Congo",1.2,2.9],
    ["Djibouti",3.1,2.9],
    ["Egypt",4.1,0.6],
    ["Equatorial Guinea",12.5,1.7],
    ["Eritrea",0.4,4.4],
    ["Ethiopia",0.4,4.3],
    ["Gabon",3.4,2.3],
    ["Gambia",6.5,2.7],
    ["Ghana",8,3.6],
    ["Guinea",1,5],
    ["Guinea-Bissau",1.5,7.4],
    ["Kenya",1.5,3.2],
    ["Lesotho",4.8,8.9],
    ["Liberia",2.1,4.7],
    ["Libya",13.3,1.3],
    ["Madagascar",0.7,2.1],
    ["Malawi",0.3,2.4],
    ["Mali",1.1,4.1],
    ["Mauritania",2.8,2.7],
    ["Mauritius",8.3,0.4],
    ["Morocco",4.8,1],
    ["Mozambique",4.5,3.7],
    ["Namibia",15.4,3.9],
    ["Niger",0.5,5.1],
    ["Nigeria",3.2,1.8],
    ["Republic of Congo",2.4,2.4],
    ["Rwanda",0.5,2.2],
    ["São Tomé and Principe",3.4,4.4],
    ["Senegal",2,4],
    ["Seychelles",4.1,2.1],
    ["Sierra Leone",0.5,3.8],
    ["Somalia",12.4,4.6],
    ["South Africa",9.7,6.9],
    ["South Sudan",9.6,3.6],
    ["Sudan",6.6,1.8],
    ["Swaziland",4.8,5.1],
    ["Tanzania",0.8,2.8],
    ["Togo",0.8,5],
    ["Tunisia",1.1,0.8],
    ["Uganda",0.8,3.1],
    ["Zambia",0.9,4.3],
    ["Zimbabwe",2.8,6.3]
  ]
}, {

}, {
  name: "Americas",
  data: [
    ["Antigua and Barbuda",5.4,5.4],
    ["Argentina",7.4,7],
    ["Bahamas",18.8,13.6],
    ["Barbados",3.5,4.5],
    ["Belize",10,14.2],
    ["Bolivia",2,5],
    ["Brazil",8.3,19.4],
    ["Canada",34.7,2.1],
    ["Chile",12.1,2.6],
    ["Colombia",10.1,25.9],
    ["Costa Rica",10,5.9],
    ["Cuba",2.1,1.5],
    ["Dominica",6.2,4.1],
    ["Dominican Republic",7.4,10.6],
    ["Ecuador",2.4,9.2],
    ["El Salvador",12,39.2],
    ["French Guiana",19.6,2.7],
    ["Greenland",22.3,25.9],
    ["Grenada",4.6,2.6],
    ["Guatemala",12.1,32.3],
    ["Guyana",15.8,10.7],
    ["Haiti",2.6,6.6],
    ["Honduras",14.1,22.5],
    ["Jamaica",8.8,18.1],
    ["Mexico",12.9,11.8],
    ["Nicaragua",5.2,6.1],
    ["Panama",10.8,11],
    ["Paraguay",16.7,10.7],
    ["Peru",2,2.9],
    ["Puerto Rico",11.5,17.1],
    ["Saint Lucia",3.4,9.2],
    ["Saint Vincent and the Grenadines",3.4,10.3],
    ["Suriname",15.9,5],
    ["Trinidad and Tobago",3.2,12.7],
    ["United States of America",120.5,10.6],
    ["Uruguay",34.7,9.5],
    ["Venezuela",18.5,38.7]
  ]
}, {
  name: "Asia",
  data: [
    ["Afghanistan",12.5,14.2],
    ["Armenia",6.1,2],
    ["Azerbaijan",3.6,2.8],
    ["Bahrain",12.8,0.9],
    ["Bangladesh",0.4,0.7],
    ["Bhutan",0.8,1],
    ["Brunei Darussalam",1.4,0.7],
    ["Cambodia",4.5,1.5],
    ["China",3.6,0.2],
    ["Cyprus",29.1,1.7],
    ["Georgia",10.1,2.9],
    ["India",5.3,2.1],
    ["Indonesia",0,0.4],
    ["Iran, Islamic Republic of",7.3,1.1],
    ["Iraq",19.6,9.8],
    ["Israel",6.7,2.1],
    ["Japan",0.3,0.2],
    ["Jordan",18.7,2.8],
    ["Kazakhstan",2.8,1.9],
    ["Korea, North",0.3,0.5],
    ["Korea, South",0.2,0.4],
    ["Kuwait",16.7,0.5],
    ["Kyrgyzstan",2.8,1.4],
    ["Lao, People's Democratic Republic",3,1.2],
    ["Lebanon",31.9,1.4],
    ["Malaysia",0.7,1.1],
    ["Maldives",6.2,0.4],
    ["Mongolia",7.9,1.1],
    ["Myanmar",1.6,1.1],
    ["Nepal",1.5,1.3],
    ["Oman",16.7,0.2],
    ["Pakistan",22.3,1.5],
    ["Palestinian Territories",1.1,2.8],
    ["Philippines",3.6,8.3],
    ["Qatar",16.7,0.4],
    ["Saudi Arabia",16.7,1],
    ["Singapore",0.3,0.1],
    ["Sri Lanka",2.4,1.9],
    ["Syrian Arab Republic",8.2,1.8],
    ["Taiwan (Republic of China)",0,0.3],
    ["Tajikistan",0.4,1.3],
    ["Thailand",15.1,5.2],
    ["Timor-Leste",0.3,1.2],
    ["Turkey",16.5,3],
    ["Turkmenistan",0.4,1.3],
    ["United Arab Emirates",16.7,1.2],
    ["Uzbekistan",0.4,0.6],
    ["Vietnam",1.6,0.5],
    ["Yemen",52.8,2.7]
  ]
},{
  name: "Europe",
  data: [
    ["Albania",12,3.2],
    ["Andorra",14.1,0.8],
    ["Austria",30,2.1],
    ["Belarus",6.1,1.5],
    ["Belgium",12.7,1.7],
    ["Bosnia and Herzegovina",31.2,1.3],
    ["Bulgaria",8.4,1.7],
    ["Croatia",13.7,2.6],
    ["Czech Republic",12.5,1.5],
    ["Denmark",9.9,1.2],
    ["Estonia",5,1.9],
    ["Finland",32.4,2.7],
    ["France",19.6,2.7],
    ["Germany",19.6,0.9],
    ["Greece",17.6,1.3],
    ["Hungary",10.5,0.7],
    ["Iceland",31.7,1.4],
    ["Ireland",7.2,0.7],
    ["Italy",14.4,1.2],
    ["Latvia",10.5,1.7],
    ["Lithuania",13.6,1.5],
    ["Luxembourg",18.9,1.2],
    ["Macedonia",29.8,2.1],
    ["Malta",28.3,1.1],
    ["Moldova, Republic of",3,0.9],
    ["Montenegro",39.1,5.1],
    ["Netherlands",2.6,0.6],
    ["Norway",28.8,1.5],
    ["Poland",2.5,0.5],
    ["Portugal",21.3,1.8],
    ["Romania",2.6,0.3],
    ["Russian Federation",12.3,2.6],
    ["Serbia",39.1,3.9],
    ["Slovakia",6.5,1.6],
    ["Slovenia",15.6,1.8],
    ["Spain",7.5,0.6],
    ["Sweden",23.1,1.3],
    ["Switzerland",27.6,2.8],
    ["Ukraine",9.9,1.6],
    ["United Kingdom",4.9,0.3]
  ]
},{
  name: "Oceania",
  data: [
    ["Australia",14.5,1],
    ["Fiji",0.5,0.6],
    ["Kiribati",0.8,1.2],
    ["Marshall Islands",0.5,3.1],
    ["Micronesia, Fed. Sts.",0.7,3.5],
    ["New Zealand",26.3,1.1],
    ["Papua New Guinea",1,4.5],
    ["Samoa",10.1,2.4],
    ["Solomon Islands",0.2,4.3],
    ["Tonga",8,1.6],
    ["Vanuatu",3.9,2.8]
  ]
}]

export const series = [{
  name: "Africa",
  type: 'scatter',
  data: [
    {x:2.1,y:1},
    {x:11.2,y:2.5},
    {x:0.3,y:4.6},
    {x:4.1,y:3.8},
    {x:0.9,y:2.5},
    {x:2,y:2.4},
    {x:5.7,y:10.4},
    {x:2.1,y:4.8},
    {x:1.8,y:4.9},
    {x:1,y:5.5},
    {x:1.5,y:3.3},
    {x:4.4,y:5},
    {x:1.2,y:2.9},
    {x:3.1,y:2.9},
    {x:4.1,y:0.6},
    {x:12.5,y:1.7},
    {x:0.4,y:4.4},
    {x:0.4,y:4.3},
    {x:3.4,y:2.3},
    {x:6.5,y:2.7},
    {x:8,y:3.6},
    {x:1,y:5},
    {x:1.5,y:7.4},
    {x:1.5,y:3.2},
    {x:4.8,y:8.9},
    {x:2.1,y:4.7},
    {x:13.3,y:1.3},
    {x:0.7,y:2.1},
    {x:0.3,y:2.4},
    {x:1.1,y:4.1},
    {x:2.8,y:2.7},
    {x:8.3,y:0.4},
    {x:4.8,y:1},
    {x:4.5,y:3.7},
    {x:15.4,y:3.9},
    {x:0.5,y:5.1},
    {x:3.2,y:1.8},
    {x:2.4,y:2.4},
    {x:0.5,y:2.2},
    {x:3.4,y:4.4},
    {x:2,y:4},
    {x:4.1,y:2.1},
    {x:0.5,y:3.8},
    {x:12.4,y:4.6},
    {x:9.7,y:6.9},
    {x:9.6,y:3.6},
    {x:6.6,y:1.8},
    {x:4.8,y:5.1},
    {x:0.8,y:2.8},
    {x:0.8,y:5},
    {x:1.1,y:0.8},
    {x:0.8,y:3.1},
    {x:0.9,y:4.3},
    {x:2.8,y:6.3}
  ]
}, {
  name: 'Trendline',
  type: 'line',
  data: [{
    x: 0,
    y: 3.78
  }, {
    x: 120.5,
    y: 10.90
  }]
}, {
  name: "Americas",
  type: 'scatter',
  data: [
    {x:5.4,y:5.4},
    {x:7.4,y:7},
    {x:18.8,y:13.6},
    {x:3.5,y:4.5},
    {x:10,y:14.2},
    {x:2,y:5},
    {x:8.3,y:19.4},
    {x:34.7,y:2.1},
    {x:12.1,y:2.6},
    {x:10.1,y:25.9},
    {x:10,y:5.9},
    {x:2.1,y:1.5},
    {x:6.2,y:4.1},
    {x:7.4,y:10.6},
    {x:2.4,y:9.2},
    {x:12,y:39.2},
    {x:19.6,y:2.7},
    {x:22.3,y:25.9},
    {x:4.6,y:2.6},
    {x:12.1,y:32.3},
    {x:15.8,y:10.7},
    {x:2.6,y:6.6},
    {x:14.1,y:22.5},
    {x:8.8,y:18.1},
    {x:12.9,y:11.8},
    {x:5.2,y:6.1},
    {x:10.8,y:11},
    {x:16.7,y:10.7},
    {x:2,y:2.9},
    {x:11.5,y:17.1},
    {x:3.4,y:9.2},
    {x:3.4,y:10.3},
    {x:15.9,y:5},
    {x:3.2,y:12.7},
    {x:120.5,y:10.6},
    {x:34.7,y:9.5},
    {x:18.5,y:38.7}
  ]
}, {
  name: "Asia",
  type: 'scatter',
  data: [
    {x:12.5,y:14.2},
    {x:6.1,y:2},
    {x:3.6,y:2.8},
    {x:12.8,y:0.9},
    {x:0.4,y:0.7},
    {x:0.8,y:1},
    {x:1.4,y:0.7},
    {x:4.5,y:1.5},
    {x:3.6,y:0.2},
    {x:29.1,y:1.7},
    {x:10.1,y:2.9},
    {x:5.3,y:2.1},
    {x:0,y:0.4},
    {x:7.3,y:1.1},
    {x:19.6,y:9.8},
    {x:6.7,y:2.1},
    {x:0.3,y:0.2},
    {x:18.7,y:2.8},
    {x:2.8,y:1.9},
    {x:0.3,y:0.5},
    {x:0.2,y:0.4},
    {x:16.7,y:0.5},
    {x:2.8,y:1.4},
    {x:3,y:1.2},
    {x:31.9,y:1.4},
    {x:0.7,y:1.1},
    {x:6.2,y:0.4},
    {x:7.9,y:1.1},
    {x:1.6,y:1.1},
    {x:1.5,y:1.3},
    {x:16.7,y:0.2},
    {x:22.3,y:1.5},
    {x:1.1,y:2.8},
    {x:3.6,y:8.3},
    {x:16.7,y:0.4},
    {x:16.7,y:1},
    {x:0.3,y:0.1},
    {x:2.4,y:1.9},
    {x:8.2,y:1.8},
    {x:0,y:0.3},
    {x:0.4,y:1.3},
    {x:15.1,y:5.2},
    {x:0.3,y:1.2},
    {x:16.5,y:3},
    {x:0.4,y:1.3},
    {x:16.7,y:1.2},
    {x:0.4,y:0.6},
    {x:1.6,y:0.5},
    {x:52.8,y:2.7}
  ]
}, {
  name: "Europe",
  type: 'scatter',
  data: [
    {x:12,y:3.2},
    {x:14.1,y:0.8},
    {x:30,y:2.1},
    {x:6.1,y:1.5},
    {x:12.7,y:1.7},
    {x:31.2,y:1.3},
    {x:8.4,y:1.7},
    {x:13.7,y:2.6},
    {x:12.5,y:1.5},
    {x:9.9,y:1.2},
    {x:5,y:1.9},
    {x:32.4,y:2.7},
    {x:19.6,y:2.7},
    {x:19.6,y:0.9},
    {x:17.6,y:1.3},
    {x:10.5,y:0.7},
    {x:31.7,y:1.4},
    {x:7.2,y:0.7},
    {x:14.4,y:1.2},
    {x:10.5,y:1.7},
    {x:13.6,y:1.5},
    {x:18.9,y:1.2},
    {x:29.8,y:2.1},
    {x:28.3,y:1.1},
    {x:3,y:0.9},
    {x:39.1,y:5.1},
    {x:2.6,y:0.6},
    {x:28.8,y:1.5},
    {x:2.5,y:0.5},
    {x:21.3,y:1.8},
    {x:2.6,y:0.3},
    {x:12.3,y:2.6},
    {x:39.1,y:3.9},
    {x:6.5,y:1.6},
    {x:15.6,y:1.8},
    {x:7.5,y:0.6},
    {x:23.1,y:1.3},
    {x:27.6,y:2.8},
    {x:9.9,y:1.6},
    {x:4.9,y:0.3}
  ]
}, {
  name: "Oceania",
  type: 'scatter',
  data: [
    {x:14.5,y:1},
    {x:0.5,y:0.6},
    {x:0.8,y:1.2},
    {x:0.5,y:3.1},
    {x:0.7,y:3.5},
    {x:26.3,y:.1},
    {x:1,y:4.5},
    {x:10.1,y:.4},
    {x:0.2,y:4.3},
    {x:8,y:1.6},
    {x:3.9,y:2.8}
  ]
}]