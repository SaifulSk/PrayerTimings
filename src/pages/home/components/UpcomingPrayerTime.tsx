import React, { useEffect, useState } from 'react'
import data from '../../../config/data.json'
import moment from 'moment';

export default function UpcomingPrayerTime() {

    const day = moment(new Date()).format("D")
    const month = moment(new Date()).format("MMMM")
    const time = moment(new Date()).format("HH:mm")
    const [upcomingTime, setUpcomingTime] = useState<any>()
    const [waqt, setWaqt] = useState<any>()
    
    useEffect(()=>{
        let x:any = data
        let y:any
        Object.keys(x[month][day]).map((w:any,i:any)=>{
            console.log(time)
            if(time<=x[month][day][w]["Start"] && !y) {
                y=w
            }
        })
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