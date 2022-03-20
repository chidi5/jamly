import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './css/index.css';
import './charts/ChartjsConfig';
import App from './App';
import SubDomainApp from './SubDomainApp'
import reportWebVitals from './reportWebVitals';

const host = window.location.host.split(".");
console.log(host)
if(host.length >= 3 && host.length <= 4){
  let subDomain = host[0];
  if (subDomain === 'www' && host[1] !== 'joshuaigbokwe.shop') {
    subDomain = host[1];
    ReactDOM.render(
      <Provider store={store}>
        <SubDomainApp subDomain={subDomain} />
      </Provider>,
      document.getElementById('root')
    );
  }else if (subDomain === 'www' && host[1] === 'joshuaigbokwe.shop' ) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  }else {
    ReactDOM.render(
      <Provider store={store}>
        <SubDomainApp subDomain={subDomain} />
      </Provider>,
      document.getElementById('root')
    );
  }
}else{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
