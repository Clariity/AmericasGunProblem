export const options5 = {
  annotations: {
    xaxis: [{
      x: 18,
      strokeDashArray: 0,
      borderColor: '#000',
      label: {
        borderColor: '#000',
        style: {
          color: '#fff',
          background: '#000',
        },
        text: 'Firearms Agreement Passed',
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  xaxis: {
    categories: [ 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016 ],
    title: {
      text: "Year",
    }
  },
  yaxis: {
    title: {
      text: "Rate of Gun Deaths / 100,000 persons",
    }
  },
}

export const series5 = [{
  data: [ 3.29, 4.7, 4.14, 4.54, 4.2, 4.35, 4.35, 4.26, 4.3, 4.11, 3.29, 3.51, 3.59, 3.49, 2.91, 2.9, 2.61, 2.84, 2.32, 1.68, 1.84, 1.7, 1.69, 1.49, 1.46, 1.22, 1.09, 1.2, 1.14, 1.12, 1.08, 1.1, 0.87, 1.05, 0.96, 1.07, 0.96, 1.04 ]
}]