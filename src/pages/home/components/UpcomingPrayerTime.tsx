import React, { useEffect, useState } from 'react'
import data from '../../../config/data/data.json'
import moment from 'moment';
import getCurrentWaqt from '../../../config/functions';
import AzanModal from './AzanModal';

export default function UpcomingPrayerTime({type}:any) {
    const [upcomingTime, setUpcomingTime] = useState<any>()
    const [waqt, setWaqt] = useState<any>()
    const [remainingTime, setRemainingTime] = useState<any>()
    const [intervalId, setIntervalId] = useState<any>()
    const [showAzanModal, setShowAzanModal] = useState<boolean>(false)
    const dataa:any = data

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

    const openAzanModal = () => {
        setShowAzanModal(true)
    }

    const closeAzanModal = () => {
        setShowAzanModal(false)
        // window.location.reload()
        findUpcomingWaqt()
    }
    
    const findUpcomingWaqt = () => {
        
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
        countDown(tm)
    }

    const countDown = (tm: any) => {
        let sec = (moment(tm,"h:mm a").diff(moment(),'seconds')+86400)%86400
        // let sec = 3
        console.log({sec})
        let id=setInterval(()=>{
            setIntervalId(id)
            setRemainingTime(hhmmss(sec))
            sec--
            if(sec<0) {
                clearInterval(id)
                openAzanModal()
            }
        },1000)
    }

    useEffect(()=>{

        findUpcomingWaqt()

        return () => {
            clearInterval(intervalId)
        }

    },[])

    return (
        <>
            <div className="highlight-text content">
                Current Waqt <span>({getCurrentWaqt()})</span> ends at <span>{dataa[moment().format("MMMM")][moment().format("D")]["End"] || moment(upcomingTime,"h:mm a").subtract(1,"minutes").format("h:mm a")}</span>
            </div>
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

            {
                showAzanModal && waqt && waqt!="Tahajjud" &&
                <AzanModal
                    shouldShow={showAzanModal}
                    closeAzanModal={closeAzanModal}
                    waqt={waqt}
                />
            }
        </>
    )
}