import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { URLS } from './config';
import Home from './pages/home';
import LearnArabic from './pages/learnArabic';
import Page404 from './pages/page-404';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path={URLS.HOME} element={<Home />} />
                    <Route path={URLS.LEARN_ARABIC} element={<LearnArabic />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
