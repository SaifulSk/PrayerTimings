import React, { useEffect, useState } from 'react'
import data from '../../../config/data/data.json'
import moment from 'moment';
import getCurrentWaqt from '../../../config/functions';

export default function UpcomingPrayerTime() {
    const [upcomingTime, setUpcomingTime] = useState<any>()
    const [waqt, setWaqt] = useState<any>()
    const [remainingTime, setRemainingTime] = useState<any>()

    const pad = (num: any) => {
        return ("0"+num).slice(-2)
    }
    const hhmmss = (secs: any) => {
      var minutes = Math.floor(secs / 60)
      secs = secs%60
      var hours = Math.floor(minutes/60)
      minutes = minutes%60
      return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
      // return pad(hours)+":"+pad(minutes)+":"+pad(secs) for old browsers
    }
    
    useEffect(()=>{

        let currentDate = moment()

        let day = currentDate.format("D")
        let month = currentDate.format("MMMM")

        let x:any = data
        let y = getCurrentWaqt()
        let waqts = Object.keys(x[month][day])
        let i = waqts.indexOf(y)
        if(i==(waqts.length-1)) {
            y=waqts[0]
            let t = currentDate.format("HH:mm")
            if(t>"22:00") {
                day = moment().add(1,'days').format("D")
                month = moment().add(1,'days').format("MMMM")
            }
        } else {
            y=waqts[i+1]
        }
        setWaqt(y)
        console.log(month,day)
        let tm = moment(x[month][day][y]["Start"], "HH:mm").format("h:mm a")
        setUpcomingTime(tm)
        let sec = moment(tm,"h:mm a").diff(moment(),'seconds')
        // console.log()
        let id = setInterval(()=>{
            setRemainingTime(hhmmss(sec))
            sec--
        },1000)

        return () => {
            clearInterval(id)
        }
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
            <div className="content text-white">
                Time Left: <span>{remainingTime}</span>
            </div>
        </>
    )
}