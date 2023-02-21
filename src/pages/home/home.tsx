import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Sidebar from 'src/components/common/Sidebar'
// import { RODEO_PAGE_NAME, URLS } from 'src/_config'
import moment from 'moment';
import NamajTimingForm from './components/NamajTimingForm';
import Sidebar from '../common/Sidebar';

export default function Home() {

  const day = moment(new Date()).format("DD")
  const month = moment(new Date()).format("MMMM")
  const [time, setTime] = useState<any>()
  
  useEffect(()=>{
  },[])

  return (
    <React.Fragment>
      <Sidebar />
      <section className="main-container">
        {/* <h1>Home</h1>
        <h2>Page</h2>
        <h3>{time}</h3> */}
        <NamajTimingForm />
      </section>
    </React.Fragment>

  )
}
