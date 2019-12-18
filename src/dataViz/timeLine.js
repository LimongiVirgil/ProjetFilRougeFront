import React, {Component} from 'react';
import * as d3 from "d3";
import * as w from "d3";
import * as h from "d3";

class TimeLine extends Component {

  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    
    const svg = d3.select(".timeLine")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }
        
  render(){
    return <div className="timeLine" id={"#" + this.props.id}></div>
  }

}

export default TimeLine;