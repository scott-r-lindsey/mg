import React from 'react';
import GridLayout from 'react-grid-layout';

export default function GridATest() {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 10, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 12, y: 0, w: 1, h: 2},
    {i: 'd', x: 0, y: 1, w: 1, h: 2},
    {i: 'e', x: 1, y: 1, w: 10, h: 2},
    {i: 'f', x: 12, y: 1, w: 1, h: 2},
  ];
  return (
    <div style={{paddingTop: "40px"}}>
      <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1128}
          margin={[24,24]}
        >
        <div key="a" style={{backgroundColor: 'red'}}>a</div>
        <div key="b" style={{backgroundColor: 'blue'}}>b</div>
        <div key="c" style={{backgroundColor: 'green'}}>c</div>

        <div key="d" style={{backgroundColor: 'red'}}>a</div>
        <div key="e" style={{backgroundColor: 'blue'}}>b</div>
        <div key="f" style={{backgroundColor: 'green'}}>c</div>
      </GridLayout>

      <p>This is a test of <a href="https://strml.github.io/react-grid-layout/examples/0-showcase.html">React Grid Layout</a></p>
    </div>
  )
}
