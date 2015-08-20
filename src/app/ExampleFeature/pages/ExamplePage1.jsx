// Modules
import React from 'react/addons';
import ReactD3 from 'react-d3-components';

// Store
import ExampleRefluxStore from '../stores/ExampleRefluxStore.jsx';

export default React.createClass({

  // Local Method
  uiMethod() {
    ExampleRefluxStore.setStoreData({testData: 'THIS IS A TEST'});
  },

  render() {

    return (
      <div className = "page-1">
        <main>
          <h2>THIS IS PAGE 1</h2>
          <button onClick={this.uiMethod}>Button specific to page 1</button>
        </main>0,
      </div>,

      <div id="barchart"></div>,

      <ReactD3.BarChart
          data={this.props.storeData}
          width={400}
          height={400}
          tooltipHtml={(x, y0, y, total) => {return y.toString(); }}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
    );
  }
});
