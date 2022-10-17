import React from "react";
import * as d3 from "d3";
//import "babel-polyfill";
import "@reach/tabs/styles.css";
import Playground from "@agney/playground";



const HomeApp = () => {
    const snippet = {
        markup: `
<svg class="start" width=200px height=50px>

</svg>`,
        css: `div { color: red }`,
        javascript: `import * as d3 from "d3";
function createWhiteCanvas(ref) {

    let whiteCanvas = ref.append("rect")
        .attr("width", '100%')
        .attr("height", '100%')
        //.attr("height", (d) => d.data.AnyHighlights == 1 ? scaleHeight(height,d.data.treeHeightLines, 0.6) : scaleHeight(height,d.data.treeHeightLines, 0.3))
        .attr('class', 'subVizGroup-stacked-canvas')        //.attr('rx', 1)
        .attr('fill', 'red')
        .attr('stroke', '#d8d8d8')

}

createWhiteCanvas(
d3
  .select(".start"))  // select the elements that have the class

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

export default HomeApp;