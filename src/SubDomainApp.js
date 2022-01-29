import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Main from './Sub/components/Main';


function SubDomainApp({subDomain}) {
  return (
    <Router>
      <Main subDomain={subDomain} />
    </Router>
  );
}

export default SubDomainApp;
