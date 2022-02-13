import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 12;
const eyeOffsetX = 90;
const eyeOffsetY = 60;
const eyeRadius = 20;
const pupilRadius = 5;

const mouthWidth = 10;
const mouthRadius = 30;

const mouthArc = d3.arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2);

const earArc = d3.arc()
  .outerRadius(90)
  .innerRadius(0)
  .startAngle(-Math.PI / 2)
  .endAngle(Math.PI / 2);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <ellipse
        rx="250" 
        ry="230" 
        fill="white"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <ellipse 
        cx={eyeOffsetX-20}
        cy={-eyeOffsetY-30}
        rx="90" 
        ry="70" 
        fill="grey"
        transform = "rotate(35)"
      />
      <ellipse 
        cx={-eyeOffsetX+20}
        cy={-eyeOffsetY-30}
        rx="90" 
        ry="70" 
        fill="grey"
        transform = "rotate(-35)"
      />
      <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={-eyeOffsetX+5}
        cy={-eyeOffsetY-5}
        r={pupilRadius}
        fill="white"
      />
      <circle
        cx={eyeOffsetX+5}
        cy={-eyeOffsetY-5}
        r={pupilRadius}
        fill="white"
      />
      <ellipse 
        cy={40}
        rx="20" 
        ry="15" 
        fill="black"
      />
      <path
        d={mouthArc()}
        transform = "translate(35,50)"
      />
      <path
        d={mouthArc()}
        transform = "translate(-35, 50)"
      />
      <path
        d={earArc()}
        transform = "rotate(-45) translate(-18,-230)"
      />
      <path
        d={earArc()}
        transform = "rotate(45) translate(18,-230)"
      />

    </g>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



