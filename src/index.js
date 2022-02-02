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
if(host.length >= 3){
  const subDomain = host[0];
  if (subDomain === 'www') {
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
