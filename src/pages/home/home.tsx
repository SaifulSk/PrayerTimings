import React, { useEffect, useState } from 'react'
import NamajTimingForm from './components/NamajTimingForm';
import Sidebar from '../common/Sidebar';
import UpcomingPrayerTime from './components/UpcomingPrayerTime';
import Insights from './components/Insights';

export default function Home() {

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <NamajTimingForm />
                <UpcomingPrayerTime />
                <h3 className="page-title">Insights of the Day</h3>
                <Insights />
                <Insights type="Hadith" />
            </section>
        </React.Fragment>
    )
}
