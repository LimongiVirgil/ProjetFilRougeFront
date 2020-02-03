import React, {Component} from 'react';
import * as d3 from "d3";
// import * as h from "d3";
// import * as d from "d3";

class TreeMap extends Component {
  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {

    const data = {"children": this.props.data}

    // set the dimensions and margins of the graph
    const sizeWindow = window.innerWidth - 115;

    var margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },

    width = sizeWindow - margin.left - margin.right - 20,
    height = 650 - margin.top - margin.bottom;
    

    // append the svg object to the body of the page
    var svg = d3.select(".treeMap")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Give the data to this cluster layout:
    var root = d3.hierarchy(data).sum((d) =>
      d.nbTrilibs + d.nbTrimobiles
    ) // Here the size of each leave is given in the 'value' field in input data

    // Then d3.treemap computes the position of each element of the hierarchy
    d3.treemap()
      .size([width + 50, height + 50])
      .padding(20)
      (root)

    // use this information to add rectangles:
    svg.selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
      .attr('class', "vignette")
      .attr('x', function (d) {
        return d.x0;
      })
      .attr('y', function (d) {
        return d.y0;
      })
      .attr('width', function (d) {
        return (d.x1 - d.x0);
      })
      .attr('height', function (d) {
        return (d.y1 - d.y0);
      })
      .style("fill", "#ffffff")

    // and to add the text labels
    svg.selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
      .attr("x", function (d) {
        return d.x0 + 5
      }) // +10 to adjust position (more right)
      .attr("y", function (d) {
        return d.y0 + 20
      }) // +20 to adjust position (lower)
      .text(function (d) {
        return d.data.name
      })
      .attr("font-size", "15px")
      .attr("fill", "black")


    // //d3.select('.treeMap')
    //   svg.append('svg')
    //   .attr('class', 'circle opacity')
    //   .attr("width", 200)
    //   .attr("height", 270)
    //   .append('circle')
    //   .attr('cx', '0')
    //   .attr('cy', '140')
    //   .attr('r', '120')
    //   .attr('stroke-width', '0')
    //   .attr('fill', '#FB8070')

    // //d3.select('.treeMap')
    //   svg.append('svg')
    //   .attr('class', 'circle littleCircle')
    //   .attr("width", 200)
    //   .attr("height", 210)
    //   .append('circle')
    //   .attr('cx', '0')
    //   .attr('cy', '100')
    //   .attr('r', '65')
    //   .attr('stroke-width', '0')
    //   .attr('fill', '#F3F8F9')
  }

  render(){
    return <div className="treeMap"></div>
  }
}

export default TreeMap;