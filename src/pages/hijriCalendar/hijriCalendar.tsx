import React, { useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import momentHijri from 'moment-hijri'

export default function HijriCalendar() {

    const [hijriDate, setHijriDate] = useState<any>()

    useEffect(() => {
        console.log(momentHijri().format("iD/iM/iYY"))
        setHijriDate(momentHijri().format('iD/iM/iYY'))
    },[])

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <h2 className="page-title">Hijri Calendar</h2>
                <div className="content text-white">
                    {hijriDate}
                </div>                    
            </section>
        </React.Fragment>
    )
}

