export const treeMapTheme = {
  series: {
    colors: [ "#83b14e", "#458a3f", "#295ba0", "#2a4175", "#289399", "#289399", "#617178", "#8a9a9a", "#516f7d", "#dddddd" ],
    borderColor: "#cccccc",
    borderWidth: 5
  }
};

export const treeMapOptions = {
  chart: { width: 1600, height: 900 },
  series: { showLabel: true, zoomable: true, useLeafLabel: false },
  tooltip: { suffix: "guns", offsetY: -40},
  chartExportMenu: { visible: false }
};

export const treeMapData = { 
  "series": [
    {
      "label": "Asia",
      "children": [
        { 
          "label": "Southern Asia", 
          "children": [
            {
              "label": "Afghanistan",
              "value": 4270000
            },
            {
              "label": "Bangladesh",
              "value": 659000
            },
            {
              "label": "Bhutan",
              "value": 6000
            },
            {
              "label": "India",
              "value": 71101000
            },
            {
              "label": "Iran, Islamic Republic of",
              "value": 5890000
            },
            {
              "label": "Maldives",
              "value": 23000
            },
            {
              "label": "Nepal",
              "value": 444000
            },
            {
              "label": "Pakistan",
              "value": 43917000
            },
            {
              "label": "Sri Lanka",
              "value": 494000
            },
          ] 
        },
        { 
          "label": "Western Asia", 
          "children": [
            {
              "label": "Armenia",
              "value": 186000
            },
            {
              "label": "Azerbaijan",
              "value": 362000
            },
            {
              "label": "Bahrain",
              "value": 181000
            },
            {
              "label": "Cyprus",
              "value": 346000
            },
            {
              "label": "Georgia",
              "value": 402000
            },
            {
              "label": "Iraq",
              "value": 7588000
            },
            {
              "label": "Israel",
              "value": 557000
            },
            {
              "label": "Jordan",
              "value": 1473000
            },
            {
              "label": "Kuwait",
              "value": 685000
            },
            {
              "label": "Lebanon",
              "value": 1927000
            },
            {
              "label": "Oman",
              "value": 792000
            },
            {
              "label": "Palestinian Territories",
              "value": 56000
            },
            {
              "label": "Qatar",
              "value": 390000
            },
            {
              "label": "Saudi Arabia",
              "value": 5468000
            },
            {
              "label": "Syrian Arab Republic",
              "value": 1547000
            },
            {
              "label": "Turkey",
              "value": 13249000
            },
            {
              "label": "United Arab Emirates",
              "value": 1569000
            },
            {
              "label": "Yemen",
              "value": 14859000
            },
          ] 
        },
        { 
          "label": "South-eastern Asia", 
          "children": [
            {
              "label": "Brunei Darussalam",
              "value": 6000
            },
            {
              "label": "Cambodia",
              "value": 717000
            },
            {
              "label": "Indonesia",
              "value": 82000
            },
            {
              "label": "Lao, People's Democratic Republic",
              "value": 215000
            },
            {
              "label": "Malaysia",
              "value": 217000
            },
            {
              "label": "Myanmar",
              "value": 877000
            },
            {
              "label": "Philippines",
              "value": 3776000
            },
            {
              "label": "Singapore",
              "value": 20000
            },
            {
              "label": "Thailand",
              "value": 10342000
            },
            {
              "label": "Timor-Leste",
              "value": 3000
            },
            {
              "label": "Vietnam",
              "value": 1562000
            },
          ] 
        },
        { 
          "label": "Eastern Asia", 
          "children": [
            {
              "label": "China",
              "value": 49735000
            },
            {
              "label": "Hong Kong SAR, China",
              "value": 265000
            },
            {
              "label": "Japan",
              "value": 377000
            },
            {
              "label": "Korea, North",
              "value": 76000
            },
            {
              "label": "Korea, South",
              "value": 79000
            },
            {
              "label": "Mongolia",
              "value": 242000
            },
            {
              "label": "Taiwan (Republic of China)",
              "value": 10000
            },
          ] 
        },
        { 
          "label": "Central Asia", 
          "children": [
            {
              "label": "Kazakhstan",
              "value": 504000
            },
            {
              "label": "Kyrgyzstan",
              "value": 171000
            },
            {
              "label": "Tajikistan",
              "value": 37000
            },
          
            {
              "label": "Turkmenistan",
              "value": 23000
            },
            {
              "label": "Uzbekistan",
              "value": 127000
            },
          ] 
        },
      ]
    },
    {
      "label": "Americas",
      "children": [
        {
          "label": "Caribbean",
          "children": [
            {
              "label": "Antigua and Barbuda",
              "value": 5000
            },
            {
              "label": "Bahamas",
              "value": 74000
            },
            {
              "label": "Barbados",
              "value": 10000
            },
            {
              "label": "Cuba",
              "value": 234000
            },
            {
              "label": "Dominica",
              "value": 5000
            },
            {
              "label": "Dominican Republic",
              "value": 795000
            },
            {
              "label": "Grenada",
              "value": 5000
            },
            {
              "label": "Haiti",
              "value": 291000
            },
            {
              "label": "Jamaica",
              "value": 246000
            },
            {
              "label": "Puerto Rico",
              "value": 422000
            },
            {
              "label": "Saint Kitts and Nevis",
              "value": 2000
            },
            {
              "label": "Saint Lucia",
              "value": 6000
            },
            {
              "label": "Saint Vincent and the Grenadines",
              "value": 4000
            },
            {
              "label": "Trinidad and Tobago",
              "value": 43000
            },
          ]
        },
        {
          "label": "South America",
          "children": [
            {
              "label": "Argentina",
              "value": 3256000
            },
            {
              "label": "Bolivia",
              "value": 218000
            },
            {
              "label": "Brazil",
              "value": 17510000
            },
            {
              "label": "Chile",
              "value": 2220000
            },
            {
              "label": "Colombia",
              "value": 4971000
            },
            {
              "label": "Ecuador",
              "value": 402000
            },
            {
              "label": "French Guiana",
              "value": "55000"
            },
            {
              "label": "Guyana",
              "value": 122000
            },
            {
              "label": "Paraguay",
              "value": 1140000
            },
            {
              "label": "Peru",
              "value": 633000
            },
            {
              "label": "Suriname",
              "value": 88000
            },
            {
              "label": "Uruguay",
              "value": 1198000
            },
            {
              "label": "Venezuela",
              "value": 5895000
            },
          ]
        },
        {
          "label": "Central America",
          "children": [
            {
              "label": "Belize",
              "value": 37000
            },
            {
              "label": "Costa Rica",
              "value": 493000
            },
            {
              "label": "El Salvador",
              "value": 737000
            },
            {
              "label": "Guatemala",
              "value": 2062000
            },
            {
              "label": "Honduras",
              "value": 1171000
            },
            {
              "label": "Mexico",
              "value": 16809000
            },
            {
              "label": "Nicaragua",
              "value": 323000
            },
            {
              "label": "Panama",
              "value": 436000
            },
          ]
        },
        {
          "label": "Northern America",
          "children": [
            {
              "label": "Canada",
              "value": 12708000
            },
            {
              "label": "Greenland",
              "value": 13000
            },
            {
              "label": "United States of America",
              "value": 393347000
            },
          ]
        }
      ]
    },
    {
      "label": "Europe",
      "children": [
        { 
          "label": "Southern Europe", 
          "children": [
            {
              "label": "Albania",
              "value": 350000
            },
            {
              "label": "Andorra",
              "value": 10000
            },
            {
              "label": "Bosnia and Herzegovina",
              "value": 1185000
            },
            {
              "label": "Croatia",
              "value": 576000
            },
            {
              "label": "Gibraltar",
              "value": 1000
            },
            {
              "label": "Greece",
              "value": 1920000
            },
            {
              "label": "Holy See",
              "value": 0
            },
            {
              "label": "Italy",
              "value": 8609000
            },
            {
              "label": "Kosovo",
              "value": 436000
            },
            {
              "label": "Macedonia",
              "value": 621000
            },
            {
              "label": "Malta",
              "value": 119000
            },
            {
              "label": "Montenegro",
              "value": 245000
            },
            {
              "label": "Portugal",
              "value": 2186000
            },
            {
              "label": "San Marino",
              "value": 5000
            },
            {
              "label": "Serbia",
              "value": 2719000
            },
            {
              "label": "Slovenia",
              "value": 324000
            },
            {
              "label": "Spain",
              "value": 3464000
            },
          ] 
        },
        {
          "label": "Western Europe",
          "children": [
            {
              "label": "Austria",
              "value": 2577000
            },
            {
              "label": "Belgium",
              "value": 1451000
            },
            {
              "label": "France",
              "value": 12732000
            },
            {
              "label": "Germany",
              "value": 15822000
            },
            {
              "label": "Liechtenstein",
              "value": 11000
            },
            {
              "label": "Luxembourg",
              "value": 110000
            },
            {
              "label": "Monaco",
              "value": 7000
            },
            {
              "label": "Netherlands",
              "value": 442000
            },
            {
              "label": "Switzerland",
              "value": 2332000
            },
          ]
        },
        {
          "label": "Eastern Europe",
          "children": [
            {
              "label": "Belarus",
              "value": 581000
            },
            {
              "label": "Bulgaria",
              "value": 590000
            },
            {
              "label": "Czech Republic",
              "value": 1323000
            },
            {
              "label": "Hungary",
              "value": 1023000
            },
            {
              "label": "Moldova, Republic of",
              "value": 121000
            },
            {
              "label": "Poland",
              "value": 968000
            },
            {
              "label": "Romania",
              "value": 506000
            },
            {
              "label": "Russian Federation",
              "value": 17620000
            },
            {
              "label": "Slovakia",
              "value": 355000
            },
            {
              "label": "Ukraine",
              "value": 4396000
            },
          ]
        },
        {
          "label": "Northern Europe",
          "children": [
            {
              "label": "Denmark",
              "value": 567000
            },
            {
              "label": "Estonia",
              "value": 65000
            },
            {
              "label": "Finland",
              "value": 1793000
            },
            {
              "label": "Iceland",
              "value": 106000
            },
            {
              "label": "Ireland",
              "value": 342000
            },
            {
              "label": "Latvia",
              "value": 205000
            },
            {
              "label": "Lithuania",
              "value": 385000
            },
            {
              "label": "Norway",
              "value": 1537000
            },
            {
              "label": "Sweden",
              "value": 2296000
            },
            {
              "label": "United Kingdom",
              "value": 3242000
            },
          ]
        }
      ]
    },
    {
      "label": "Africa",
      "children": [
        {
          "label": "Northern Africa",
          "children": [
            {
              "label": "Algeria",
              "value": 877000
            },
            {
              "label": "Egypt",
              "value": 3931000
            },
            {
              "label": "Libya",
              "value": 851000
            },
            {
              "label": "Morocco",
              "value": 1690000
            },
            {
              "label": "Sudan",
              "value": 2768000
            },
            {
              "label": "Tunisia",
              "value": 123000
            }
          ]
        },
        {
          "label": "Middle Africa",
          "children": [
            {
              "label": "Angola",
              "value": 2982000
            },
            {
              "label": "Cameroon",
              "value": 510000
            },
            {
              "label": "Central African Republic",
              "value": 94000
            },
            {
              "label": "Chad",
              "value": 151000
            },
            {
              "label": "Republic of Congo",
              "value": 119000
            },
            {
              "label": "Democratic Republic of Congo",
              "value": 946000
            },
            {
              "label": "Equatorial Guinea",
              "value": 112000
            },
            {
              "label": "Gabon",
              "value": 61000
            },
            {
              "label": "São Tomé and Principe",
              "value": 7000
            }
          ]
        },
        {
          "label": "Western Africa",
          "children": [
            {
              "label": "Benin",
              "value": 33000
            },
            {
              "label": "Burkina Faso",
              "value": 175000
            },
            {
              "label": "Cabo Verde",
              "value": 31000
            },
            {
              "label": "Côte d'Ivoire",
              "value": 1049000
            },
            {
              "label": "Gambia",
              "value": 137000
            },
            {
              "label": "Ghana",
              "value": 2280000
            },
            {
              "label": "Guinea",
              "value": 130000
            },
            {
              "label": "Guinea-Bissau",
              "value": 29000
            },
            {
              "label": "Liberia",
              "value": 97000
            },
            {
              "label": "Mali",
              "value": 206000
            },
            {
              "label": "Mauritania",
              "value": 120000
            },
            {
              "label": "Niger",
              "value": 117000
            },
            {
              "label": "Nigeria",
              "value": 6154000
            },
            {
              "label": "Senegal",
              "value": 323000
            },
            {
              "label": "Sierra Leone",
              "value": 35000
            },
            {
              "label": "Togo",
              "value": 58000
            },
          ]
        },
        {
          "label": "Southern Africa",
          "children": [
            {
              "label": "Botswana",
              "value": 97000
            },
            {
              "label": "Lesotho",
              "value": 105000
            },
            {
              "label": "Namibia",
              "value": 396000
            },
            {
              "label": "South Africa",
              "value": 5351000
            },
            {
              "label": "Swaziland",
              "value": 64000
            },
          ]
        },
        {
          "label": "Eastern Africa",
          "children": [
            {
              "label": "Burundi",
              "value": 238000
            },
            {
              "label": "Comoros",
              "value": 12000
            },
            {
              "label": "Djibouti",
              "value": 28000
            },
            {
              "label": "Eritrea",
              "value": 23000
            },
            {
              "label": "Ethiopia",
              "value": 377000
            },
            {
              "label": "Kenya",
              "value": 750000
            },
            {
              "label": "Madagascar",
              "value": 168000
            },
            {
              "label": "Malawi",
              "value": 47000
            },
            {
              "label": "Mauritius",
              "value": 106000
            },
            {
              "label": "Mozambique",
              "value": 1337000
            },
            {
              "label": "Rwanda",
              "value": 66000
            },
            {
              "label": "Seychelles",
              "value": 4000
            },
            {
              "label": "Somalia",
              "value": 1145000
            },
            {
              "label": "South Sudan",
              "value": 1255000
            },
            {
              "label": "Tanzania",
              "value": 427000
            },
            {
              "label": "Uganda",
              "value": 331000
            },
            {
              "label": "Zambia",
              "value": 158000
            },
            {
              "label": "Zimbabwe",
              "value": 455000
            },
          ]
        }
      ]
    },
    {
      "label": "Oceania",
      "children": [
        {
          "label": "Australia/New Zealand",
          "children": [
            {
              "label": "Australia",
              "value": 3573000
            },
            {
              "label": "New Zealand",
              "value": 1212000
            },
          ]
        },
        {
          "label": "Polynesia",
          "children": [
            {
              "label": "Samoa",
              "value": 20000
            },
            {
              "label": "Tonga",
              "value": 9000
            },
            {
              "label": "Tuvalu",
              "value": 100
            },
          ]
        },
        {
          "label": "Melanesia",
          "children": [
            {
              "label": "Fiji",
              "value": 5000
            },
            {
              "label": "Kiribati",
              "value": 900
            },
            {
              "label": "Marshall Islands",
              "value": 300
            },
            {
              "label": "Nauru",
              "value": 0
            },
            {
              "label": "New Caledonia",
              "value": 115000
            },
            {
              "label": "Palau",
              "value": 100
            },
            {
              "label": "Papua New Guinea",
              "value": 79000
            },
            {
              "label": "Solomon Islands",
              "value": 1000
            },
            {
              "label": "Vanuatu",
              "value": 11000
            },
          ]
        },
        {
          "label": "Micronesia",
          "children": [
            {
              "label": "Micronesia, Fed. Sts.",
              "value": 700
            },
          ]
        }
      ]
    }
  ]
}