import '../App.css';

export const options4 = {
  dataLabels: {
    enabled: false
  },
  yaxis: {
    title: {
      text: "Rate of Gun Deaths / 100,000 persons (2016)",
    },
    tickAmount: 10
  },
  tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return  '<div class="arrow_box">' +
                '<span><b>' + dataLabels[dataPointIndex] + '</b></span>' +
                '<br/>' +
                '<span> Gun Rate: ' + series[seriesIndex][dataPointIndex] + '</span>' +
              '</div>'
    }
  },
  xaxis: {
    title: {
      text: "Top Countries by Human Development Index",
    },
    categories: [
      "United States of America",
      "Switzerland",
      "Finland",
      "France",
      "Austria",
      "Canada",
      "Israel",
      "Estonia",
      "Slovenia",
      "Belgium",
      "Czech Republic",
      "Lithuania",
      "Norway",
      "Iceland",
      "Greece",
      "Sweden",
      "Denmark",
      "Italy",
      "Luxembourg",
      "United Arab Emirates",
      "Malta",
      "New Zealand",
      "Australia",
      "Saudi Arabia",
      "Germany",
      "Andorra",
      "Ireland",
      "Netherlands",
      "Spain",
      "Poland",
      "Korea, Republic of (South)",
      "Qatar",
      "United Kingdom",
      "Japan",
      "Singapore",
      "Hong Kong SAR, China",
      "Liechtenstein"
    ]
  }
}

const dataLabels = [
  "United States of America",
  "Switzerland",
  "Finland",
  "France",
  "Austria",
  "Canada",
  "Israel",
  "Estonia",
  "Slovenia",
  "Belgium",
  "Czech Republic",
  "Lithuania",
  "Norway",
  "Iceland",
  "Greece",
  "Sweden",
  "Denmark",
  "Italy",
  "Luxembourg",
  "United Arab Emirates",
  "Malta",
  "New Zealand",
  "Australia",
  "Saudi Arabia",
  "Germany",
  "Andorra",
  "Ireland",
  "Netherlands",
  "Spain",
  "Poland",
  "Korea, Republic of (South)",
  "Qatar",
  "United Kingdom",
  "Japan",
  "Singapore",
  "Hong Kong SAR, China",
  "Liechtenstein"
]

export const series4 = [{
  data: [
    10.6,
    2.8,
    2.7,
    2.7,
    2.1,
    2.1,
    2.1,
    1.9,
    1.8,
    1.7,
    1.5,
    1.5,
    1.5,
    1.4,
    1.3,
    1.3,
    1.2,
    1.2,
    1.2,
    1.2,
    1.1,
    1.1,
    1,
    1,
    0.9,
    0.8,
    0.7,
    0.6,
    0.6,
    0.5,
    0.4,
    0.4,
    0.3,
    0.2,
    0.1,
    0,
    0
  ]
}]