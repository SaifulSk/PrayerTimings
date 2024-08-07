import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { URLS } from './config';
import NamesOfAllah from './pages/namesOfAllah';
import HijriCalendar from './pages/hijriCalendar';
import Home from './pages/home';
import LearnArabic from './pages/learnArabic';
import Page404 from './pages/page-404';
import TasbihCounter from './pages/tasbihCounter';
import Dictaphone from './SpeechToText';
import Duas from './pages/duas';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path={URLS.HOME} element={<Home />} />
                    <Route path={URLS.LEARN_ARABIC} element={<LearnArabic />} />
                    <Route path={URLS.TASBIH_COUNTER} element={<TasbihCounter />} />
                    <Route path={URLS.HIJRI_CALENDAR} element={<HijriCalendar />} />
                    <Route path={URLS.NAMES_OF_ALLAH} element={<NamesOfAllah />} />
                    <Route path={URLS.DUAS} element={<Duas />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
            {/* <Dictaphone/> */}
        </React.Fragment>
    );
}

export default App;
