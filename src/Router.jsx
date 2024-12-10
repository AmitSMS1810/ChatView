import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StatusPage from './Components/Status';
import CommunitiesPage from './Components/Communities';
import CallsPage from './Components/Calls';
import Home from './Components/Home'

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/comm" element={<CommunitiesPage />} />
                <Route path="/call" element={<CallsPage />} />
                {/* Redirect to Chats ("/") if no matching route */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      
    );
}

export default App;
