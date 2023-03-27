import React, { useEffect, useState } from 'react'
import NamajTimingForm from './components/NamajTimingForm';
import Sidebar from '../common/Sidebar';
import UpcomingPrayerTime from './components/UpcomingPrayerTime';

export default function Home() {

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <NamajTimingForm />
                <UpcomingPrayerTime />
                <h3 className="page-title">Hadith of the Day</h3>
                <div style={{ height: 220,  textAlign: "center" }}>
                    <iframe
                        src="https://www.alim.org/hadith-of-the-day/widget/"
                        height="100%"
                        width="100%"
                        // style={{ border: "none" }}
                    />
                </div>
            </section>
        </React.Fragment>
    )
}
