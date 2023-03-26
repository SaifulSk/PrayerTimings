
import React, { useEffect } from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import momentHijri from 'moment-hijri'

export default function HijriCalendar() {

    useEffect(()=>{
        console.log(momentHijri(new Date()).format("iD/iM/iYY"))
    },[])

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <h2 className="page-title">Hijri Calendar</h2>

            </section>
        </React.Fragment>
    )
}

