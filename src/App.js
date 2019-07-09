import React from 'react';
import './assets/css/App.css';
import Container from '@material-ui/core/Container';

import Table from './components/Table'
import AppBar from './components/AppBar'

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar/>
        <Table/>
      </Container>
    </div>
  );
}

export default App;
