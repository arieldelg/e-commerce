import './App.css';
import { DataProvider } from './Components/Context';
import React from 'react';
import { AppUI } from './AppUI';



function App({ openPortal }) {

  return (
    <DataProvider>
      <AppUI/>
    </DataProvider>
  )
}

export default App
