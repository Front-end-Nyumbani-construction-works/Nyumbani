import React from 'react';
import Header from './components/pages/header';
import Homepage from './components/pages/homepage';

function App() {
  return (
    <>
      <Header />
      <div className="orange-bridge-rectangle"></div> {/* The bridging orange rectangle */}
      <Homepage />
    </>
  );
}

export default App;
