import '../App.css';

export const options3 = {
  chart: {
    zoom: {
      enabled: true,
      type: 'xy'
    }
  },
  legend: {
    show: false
  },
  colors:["#ff0000", "#00bd9f"],
  xaxis: {
    title: {
      text: "Human Development Index (2016)",
    },
    tickAmount: 10,
    labels: {
      formatter: function(val) {
        return parseFloat(val).toFixed(3)
      }
    }
  },
  yaxis: {
    title: {
      text: "Rate of Gun Deaths / 100,000 persons (2016)",
    },
    tickAmount: 5
  },
  markers: {
    size: [5,5],
    strokeWidth: 1,
    strokeColors: '#000',
  },
  tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return  '<div class="arrow_box">' +
                '<span><b>' + dataLabels[seriesIndex].data[dataPointIndex][0] + '</b></span>' +
                '<br/>' +
                '<span> Human Development Index: ' + dataLabels[seriesIndex].data[dataPointIndex][1] + '</span>' +
                '<br/>' +
                '<span> Death Rate: ' + dataLabels[seriesIndex].data[dataPointIndex][2] + '</span>' +
              '</div>'
    }
  }
}

const dataLabels = [{
  data: [
    ["United States of America",0.922,10.6],
  ]
}, {
  data: [
    ["Switzerland",0.943,2.8],
    ["Finland",0.918,2.7],
    ["France",0.899,2.7],
    ["Austria",0.906,2.1],
    ["Canada",0.922,2.1],
    ["Israel",0.902,2.1],
    ["Estonia",0.868,1.9],
    ["Slovenia",0.894,1.8],
    ["Belgium",0.915,1.7],
    ["Czech Republic",0.885,1.5],
    ["Lithuania",0.855,1.5],
    ["Norway",0.951,1.5],
    ["Iceland",0.933,1.4],
    ["Greece",0.868,1.3],
    ["Sweden",0.932,1.3],
    ["Denmark",0.928,1.2],
    ["Italy",0.878,1.2],
    ["Luxembourg",0.904,1.2],
    ["United Arab Emirates",0.862,1.2],
    ["Malta",0.875,1.1],
    ["New Zealand",0.915,1.1],
    ["Australia",0.938,1],
    ["Saudi Arabia",0.854,1],
    ["Germany",0.934,0.9],
    ["Andorra",0.856,0.8],
    ["Ireland",0.934,0.7],
    ["Netherlands",0.928,0.6],
    ["Spain",0.889,0.6],
    ["Poland",0.86,0.5],
    ["Korea, Republic of (South)",0.9,0.4],
    ["Qatar",0.855,0.4],
    ["United Kingdom",0.92,0.3],
    ["Japan",0.907,0.2],
    ["Singapore",0.93,0.1],
    ["Hong Kong SAR, China",0.93,0],
    ["Liechtenstein",0.915,0],
    ["Cyprus",0.867,1.7]
  ]
}]

export const series3 = [{
  data: [
    [0.922,10.6],
  ]
}, {
  data: [
    [0.943,2.8],
    [0.918,2.7],
    [0.899,2.7],
    [0.906,2.1],
    [0.922,2.1],
    [0.902,2.1],
    [0.868,1.9],
    [0.894,1.8],
    [0.915,1.7],
    [0.885,1.5],
    [0.855,1.5],
    [0.951,1.5],
    [0.933,1.4],
    [0.868,1.3],
    [0.932,1.3],
    [0.928,1.2],
    [0.878,1.2],
    [0.904,1.2],
    [0.862,1.2],
    [0.875,1.1],
    [0.915,1.1],
    [0.938,1],
    [0.854,1],
    [0.934,0.9],
    [0.856,0.8],
    [0.934,0.7],
    [0.928,0.6],
    [0.889,0.6],
    [0.86,0.5],
    [0.9,0.4],
    [0.855,0.4],
    [0.92,0.3],
    [0.907,0.2],
    [0.93,0.1],
    [0.93,0],
    [0.915,0],
    [0.867,1.7]
  ]
}]