// Modules
import React   from 'react/addons';
import Reflux  from 'reflux';
import Request from 'axios';
import _       from 'lodash';
import ReactD3 from 'react-d3-components';

export default Reflux.createStore({

  data : {
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
  },

  init() {
    // Broadcast Store is ready
    this.trigger({
        store: 'DocumentRefluxStore',
        event: 'initStore',
        data: 'DocumentRefluxStore Initialized'
    });

    // this.callAPI('serverEndPoint',{ json: 'data'});
  },

  setStoreData(data) {

    // Merge new data
    _.assign(this.data, data);

    // Trigger global update
    this.updatedStoreData('setStoreData', this.data[data]);
  },

  updatedStoreData(data) {
    this.trigger({
        store: 'DocumentRefluxStore',
        event: 'updatedStoreData',
        data: data
    });
  },

  getAccounts() {
    // Request({
    //   method: 'get',
    //   url: "http://stablenet.blockapps.net/query/account"
    // }).then((data) => {
    //   this.setStoreData(data.data);
    // }).catch((data) => {
    //   console.log(data);
    // });
  },
  getTransactions() {
    // Request({
    //   method: 'get',
    //   url: "http://stablenet.blockapps.net/query/block"
    // }).then((data) => {
    //   this.setStoreData(data.data);
    // }).catch((data) => {
    //   console.log(data);
    // });
  },
  getBlocks() {
    // Request({
    //   method: 'get',
    //   url: "http://stablenet.blockapps.net/query/transaction"
    // }).then((data) => {
    //   this.setStoreData(data.data);
    // }).catch((data) => {
    //   console.log(data);
    // });
  }
});
