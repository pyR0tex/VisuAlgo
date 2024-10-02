import React, { useState } from 'react';
import SortVisualizer from './components/VisualSort';
import './styles.css';

function App() {
    return(
        <div className="VisuAlgo">
            <h1>VisuAlgo</h1>
            <SortVisualizer/>
        </div>
    );
}

export default App;