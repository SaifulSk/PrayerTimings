import React, { useEffect, useState } from 'react'
import NamajTimingForm from './components/NamajTimingForm';
import Sidebar from '../common/Sidebar';
import UpcomingPrayerTime from './components/UpcomingPrayerTime';
import Insights from './components/Insights';
import InsightsModal from './components/InsightsModal';

export default function Home() {

    const [showInsightsModal, setShowInsightsModal] = useState<boolean>(false)

    useEffect(()=>{
        let day = localStorage.getItem("day")
        let today = (new Date()).getDate()+""
        if(day) {
            if(today!=day) {
                setShowInsightsModal(true)
                localStorage.setItem("day",today)
            }
        } else {
            setShowInsightsModal(true)
            localStorage.setItem("day",today)
        }
    },[])

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <NamajTimingForm />
                <UpcomingPrayerTime />
                {/* <div className="btn-wrap">
                    <button className="rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3" onClick={()=>setShowInsightsModal(true)}>Insights of the Day</button>
                </div> */}
                <div className="insight-btn-wrap">
                    <button className="btn insight-btn" onClick={()=>setShowInsightsModal(true)}>Insights</button>
                </div>
                {/* <Insights />
                <Insights type="Hadith" /> */}
            </section>
            {
                showInsightsModal && 
                <InsightsModal
                    shouldShow={showInsightsModal}
                    setShowInsightsModal={setShowInsightsModal}
                />
            }
        </React.Fragment>
    )
}
