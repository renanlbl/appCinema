import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
