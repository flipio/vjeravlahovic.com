import React from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';
import { BusinessCard } from './components/BusinessCard';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Vjera Vlahović</title>
      </Helmet>

      <BusinessCard />
    </div>
  );
}

export default App;
