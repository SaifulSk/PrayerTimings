import React, { useEffect, useState } from 'react'
import data from '../../../config/data.json'
import moment from 'moment';
import getCurrentWaqt from '../../../config/functions';

export default function UpcomingPrayerTime() {
    const [upcomingTime, setUpcomingTime] = useState<any>()
    const [waqt, setWaqt] = useState<any>()
    
    useEffect(()=>{

        let day = moment(new Date()).format("D")
        let month = moment(new Date()).format("MMMM")

        let x:any = data
        let y = getCurrentWaqt()
        let waqts = Object.keys(x[month][day])
        let i = waqts.indexOf(y)
        if(i==(waqts.length-1)) {
            y=waqts[0]
            day = moment(new Date()).add(1,'days').format("D")
            month = moment(new Date()).add(1,'days').format("MMMM")
        } else {
            y=waqts[i+1]
        }
        setWaqt(y)
        setUpcomingTime(moment(x[month][day][y]["Start"], "HH:mm").format("h:mm a"))
    },[])

    return (
        <>
            <h3 className="page-title">Upcoming Prayer</h3>
            <div className="content text-white">
                Waqt: <span>{waqt}</span>
            </div>
            <div className="content text-white">
                Time: <span>{upcomingTime}</span>
            </div>
        </>
    )
}