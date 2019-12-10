import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import mapData from './data/mapData'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// const colorScale = scaleLinear().domain([0, 120.5]).range(["#ffedea", "#ff5233"]);
// const colorScale = scaleLinear().domain([0, 120.5]).range(["#ffffff", "#bc2210"]);
const colorScale = scaleLinear().domain([0, 120.5]).range(["#ffedea", "#8b0f00"]);

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
      {mapData.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = mapData.find(s => s.ISO3 === geo.properties.ISO_A3 || (s.ISO3 === "SOM" && geo.properties.NAME === "Somaliland") || (s.ISO3 === "RKS" && geo.properties.NAME === "Kosovo") || (s.ISO3 === "CYP" && geo.properties.NAME === "N. Cyprus"));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["value"]) : "#757575"}
                  onMouseEnter={() => {
                    if(d !== undefined)
                      setTooltipContent(d['name'] + " - " + d["value"]);
                    else
                      setTooltipContent(geo.properties.NAME + " - No data");
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{hover: { opacity: "0.7" }}}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default memo(MapChart);