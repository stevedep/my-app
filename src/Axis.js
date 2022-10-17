import React from "react";
import * as d3 from "d3";
//import "babel-polyfill";
import "@reach/tabs/styles.css";
import Playground from "@agney/playground";



const AxisApp = () => {
    const snippet = {
        markup: `
<svg class="start" width=300px height=150px>

</svg>`,
        css: `div { color: red }`,
        javascript: `
    import * as d3 from "d3";
    let visconfig = {
                top: 10,
                right: 10,
                bottom: 10,
                left: 20,
                barheight: 40,
                axisheight: 40
        }

    export function createXaxis(ref, visconfig) {
    //the svg node (the most parent) has a viewbox using a scale of 0 to 100. The below range is used on this scale.
    // the values are converted to values that consider the margins
    var xAxis = d3.scaleLinear().domain([0, 100]).range([visconfig.left, 99 - visconfig.right]).nice(); //99 because the line has a thickness of 1



    let x_axis = ref.append("svg")
        .style("font", "1vh verdana") //https://www.w3schools.com/css/css_font_size.asp#midcontentadcontainer
        .attr('class', 'axis')
        .call(d3.axisBottom(xAxis).ticks(5))
        .attr('y', String(visconfig.top + visconfig.barheight) + '%')

    x_axis.selectAll('.axis > path').remove(); //remove the horizontal line in the axis
    var y2 = x_axis.selectAll('.tick > line'); //line alone is also ok, since we are looking into the axis selection already
    y2.attr("y2", 3); //not optimal, 3 is based on scale of viewbox, but height is not ranging from 0-100, because the canvas aspect ratio is applied.
    // perhaps using the linear scale things can be improved.
    x_axis.selectAll('text').attr("transform", "translate(0,-4)"); //same here.

}


createXaxis(
d3
  .select(".start"), visconfig)  // select the elements that have the class

    `,
    };
    return (
        <div style={{ width: "100%", margin: "0 auto" }}>
            <Playground
                initialSnippet={snippet}
                defaultEditorTab="javascript"
                defaultResultTab="result"
                mode="dark"
                transformJs
            />
        </div>
    );
};

export default AxisApp;