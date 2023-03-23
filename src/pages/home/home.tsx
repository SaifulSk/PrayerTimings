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
            </section>
        </React.Fragment>
    )
}
