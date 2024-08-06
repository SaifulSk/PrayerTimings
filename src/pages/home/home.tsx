import React, { useEffect, useState } from "react";
import NamajTimingForm from "./components/NamajTimingForm";
import Sidebar from "../common/Sidebar";
import UpcomingPrayerTime from "./components/UpcomingPrayerTime";
import Insights from "./components/Insights";
import InsightsModal from "./components/InsightsModal";

export default function Home() {
  return (
    <React.Fragment>
      <Sidebar />
      <section className="main-container">
        <NamajTimingForm />
        {/* <UpcomingPrayerTime type="current"/> */}
        <UpcomingPrayerTime />
        {/* <div className="btn-wrap">
            <button className="rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3" onClick={()=>setShowInsightsModal(true)}>Insights of the Day</button>
        </div> */}
        {/* <Insights />
        <Insights type="Hadith" /> */}
      </section>
    </React.Fragment>
  );
}
