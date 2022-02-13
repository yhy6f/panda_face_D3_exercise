(function (React, ReactDOM, d3$1) {
  'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

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
    React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
        React.createElement( 'ellipse', {
          rx: "250", ry: "230", fill: "white", stroke: "black", 'stroke-width': strokeWidth }),
        React.createElement( 'ellipse', { 
          cx: eyeOffsetX-20, cy: -eyeOffsetY-30, rx: "90", ry: "70", fill: "grey", transform: "rotate(35)" }),
        React.createElement( 'ellipse', { 
          cx: -eyeOffsetX+20, cy: -eyeOffsetY-30, rx: "90", ry: "70", fill: "grey", transform: "rotate(-35)" }),
        React.createElement( 'circle', {
          cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', {
          cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', {
          cx: -eyeOffsetX+5, cy: -eyeOffsetY-5, r: pupilRadius, fill: "white" }),
        React.createElement( 'circle', {
          cx: eyeOffsetX+5, cy: -eyeOffsetY-5, r: pupilRadius, fill: "white" }),
        React.createElement( 'ellipse', { 
          cy: 40, rx: "20", ry: "15", fill: "black" }),
        React.createElement( 'path', {
          d: mouthArc(), transform: "translate(35,50)" }),
        React.createElement( 'path', {
          d: mouthArc(), transform: "translate(-35, 50)" }),
        React.createElement( 'path', {
          d: earArc(), transform: "rotate(-45) translate(-18,-230)" }),
        React.createElement( 'path', {
          d: earArc(), transform: "rotate(45) translate(18,-230)" })

      )
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG5jb25zdCBzdHJva2VXaWR0aCA9IDEyO1xuY29uc3QgZXllT2Zmc2V0WCA9IDkwO1xuY29uc3QgZXllT2Zmc2V0WSA9IDYwO1xuY29uc3QgZXllUmFkaXVzID0gMjA7XG5jb25zdCBwdXBpbFJhZGl1cyA9IDU7XG5cbmNvbnN0IG1vdXRoV2lkdGggPSAxMDtcbmNvbnN0IG1vdXRoUmFkaXVzID0gMzA7XG5cbmNvbnN0IG1vdXRoQXJjID0gZDMuYXJjKClcbiAgLmlubmVyUmFkaXVzKG1vdXRoUmFkaXVzKVxuICAub3V0ZXJSYWRpdXMobW91dGhSYWRpdXMgKyBtb3V0aFdpZHRoKVxuICAuc3RhcnRBbmdsZShNYXRoLlBJIC8gMilcbiAgLmVuZEFuZ2xlKE1hdGguUEkgKiAzIC8gMik7XG5cbmNvbnN0IGVhckFyYyA9IGQzLmFyYygpXG4gIC5vdXRlclJhZGl1cyg5MClcbiAgLmlubmVyUmFkaXVzKDApXG4gIC5zdGFydEFuZ2xlKC1NYXRoLlBJIC8gMilcbiAgLmVuZEFuZ2xlKE1hdGguUEkgLyAyKTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnRlclh9LCR7Y2VudGVyWX0pYH0+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICByeD1cIjI1MFwiIFxuICAgICAgICByeT1cIjIzMFwiIFxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgIHN0cm9rZS13aWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAvPlxuICAgICAgPGVsbGlwc2UgXG4gICAgICAgIGN4PXtleWVPZmZzZXRYLTIwfVxuICAgICAgICBjeT17LWV5ZU9mZnNldFktMzB9XG4gICAgICAgIHJ4PVwiOTBcIiBcbiAgICAgICAgcnk9XCI3MFwiIFxuICAgICAgICBmaWxsPVwiZ3JleVwiXG4gICAgICAgIHRyYW5zZm9ybSA9IFwicm90YXRlKDM1KVwiXG4gICAgICAvPlxuICAgICAgPGVsbGlwc2UgXG4gICAgICAgIGN4PXstZXllT2Zmc2V0WCsyMH1cbiAgICAgICAgY3k9ey1leWVPZmZzZXRZLTMwfVxuICAgICAgICByeD1cIjkwXCIgXG4gICAgICAgIHJ5PVwiNzBcIiBcbiAgICAgICAgZmlsbD1cImdyZXlcIlxuICAgICAgICB0cmFuc2Zvcm0gPSBcInJvdGF0ZSgtMzUpXCJcbiAgICAgIC8+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGN4PXstZXllT2Zmc2V0WH1cbiAgICAgICAgY3k9ey1leWVPZmZzZXRZfVxuICAgICAgICByPXtleWVSYWRpdXN9XG4gICAgICAvPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBjeD17ZXllT2Zmc2V0WH1cbiAgICAgICAgY3k9ey1leWVPZmZzZXRZfVxuICAgICAgICByPXtleWVSYWRpdXN9XG4gICAgICAvPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBjeD17LWV5ZU9mZnNldFgrNX1cbiAgICAgICAgY3k9ey1leWVPZmZzZXRZLTV9XG4gICAgICAgIHI9e3B1cGlsUmFkaXVzfVxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgY3g9e2V5ZU9mZnNldFgrNX1cbiAgICAgICAgY3k9ey1leWVPZmZzZXRZLTV9XG4gICAgICAgIHI9e3B1cGlsUmFkaXVzfVxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxlbGxpcHNlIFxuICAgICAgICBjeT17NDB9XG4gICAgICAgIHJ4PVwiMjBcIiBcbiAgICAgICAgcnk9XCIxNVwiIFxuICAgICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9e21vdXRoQXJjKCl9XG4gICAgICAgIHRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDM1LDUwKVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD17bW91dGhBcmMoKX1cbiAgICAgICAgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTM1LCA1MClcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9e2VhckFyYygpfVxuICAgICAgICB0cmFuc2Zvcm0gPSBcInJvdGF0ZSgtNDUpIHRyYW5zbGF0ZSgtMTgsLTIzMClcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9e2VhckFyYygpfVxuICAgICAgICB0cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NSkgdHJhbnNsYXRlKDE4LC0yMzApXCJcbiAgICAgIC8+XG5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTtcblxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7RUFJQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0VBQ25CLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7RUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztF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