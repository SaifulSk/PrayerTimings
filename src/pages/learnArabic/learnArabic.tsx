
import React from 'react'
import Sidebar from '../common/Sidebar'

export default function LearnArabic() {
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <h2 className="page-title">Learn Arabic</h2>
                <img src={"/PrayerTimings/images/letters.jpg"} style={{width:"100%",marginTop:"25px"}}/>              
            </section>
        </React.Fragment>
    )
}

