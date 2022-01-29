import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Home/components/Dashboard';

import './charts/ChartjsConfig';


function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
