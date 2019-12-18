import '../App.css';

export const options6 = {
  chart: {
    stacked: true,
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ["Australia (1996)", "Australia (2016)", "USA (2016)", "USA (2036 Prediction)"]
  },
  yaxis: {
    title: {
      text: "Rate of Gun Deaths / 100,000 persons"
    },
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom',
  }
}

export const series6 = [{
  name: 'Homocide',
  data: [0.57, 0.18, 4.46, 1.41]
}, {
  name: 'Suicide',
  data: [2.09, 0.8, 7.1, 2.72]
}, {
  name: 'Other',
  data: [0.16, 0.02, 0.15, 0.02]
}]