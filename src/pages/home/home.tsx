import React, { useEffect, useState } from 'react'
import NamajTimingForm from './components/NamajTimingForm';
import Sidebar from '../common/Sidebar';
import UpcomingPrayerTime from './components/UpcomingPrayerTime';
import InsightHadith from './components/InsightHadith';

export default function Home() {

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <NamajTimingForm />
                <UpcomingPrayerTime />
                <InsightHadith type="Insight" />
                <InsightHadith type="Hadith" />
            </section>
        </React.Fragment>
    )
}
