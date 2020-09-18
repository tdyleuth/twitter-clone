import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div className='app'>
            <header className='App-header'>
                <h1>Twitty</h1>
                <Sidebar />
            </header>
        </div>
    );
}

export default App;
