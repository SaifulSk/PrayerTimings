import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { URLS } from '../../config';
import ConfirmModal from './ConfirmModal';
import moment from 'moment';
import RamadanModal from '../home/components/RamadanModal';
import InsightsModal from '../home/components/InsightsModal';
import { useToaster } from '../../_common/hooks/common/appToasterHook';

function Sidebar() {

    const [showConfirmModal,setShowConfirmModal] = useState<boolean>(false)
    const [showRamadanModal,setShowRamadanModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const toast = useToaster()

    const [showInsightsModal, setShowInsightsModal] = useState<boolean>(false)

    const toogleSideBarOnOff = (status: boolean) => {
        var sidebarCollapseElement = document.getElementById("sidebarCollapse");
        var sidebarElement = document.getElementById("sidebar");
        var overlayElement = document.getElementById("overlay");
        if (status) {
            if (sidebarCollapseElement) {
                sidebarElement?.classList.add("active");
                overlayElement?.classList.add("active");
            }
        } else {
            if (sidebarCollapseElement) {
                sidebarElement?.classList.remove("active");
                overlayElement?.classList.remove("active");
            }
        }
    }

    const openConfirmModal = () => {
        setShowConfirmModal(true)
    }

    const onConfirmModalClose = () => {
        setShowConfirmModal(false)
    }

    const onConfirmModalSuccess = () => {
        window.open("https://quran.com","_blank")
        setShowConfirmModal(false)
    }

    const goToHome = () => {
        navigate(URLS.HOME)
    }

    const checkLocationAndGotoGMap = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(gotoGMap,()=>toast.error("Please turn on the location"));
        } else {     
        }
    }

    const gotoGMap = (position: any) => {
        console.log({position})
        window.open("https://www.google.com/maps/search/mosque+nearby/@"+position.coords.latitude + 
        "," + position.coords.longitude,"_blank")
    }

    useEffect(()=>{
        let loc = localStorage.getItem("location")
        if(!loc) {
            localStorage.setItem("location",JSON.stringify({label: "Kolkata", value: "+00:00:00"}))
        }
    },[])    

    //Ramadan
    useEffect(()=>{
        // let date = localStorage.getItem("ramadanDate")
        // let d = moment(new Date()).format("DD-MM")
        // if(date) {
        //     if(d!=date) {
        //         setShowRamadanModal(true)
        //         localStorage.setItem("ramadanDate", d)
        //     }
        // } else {
        //     setShowRamadanModal(true)
        //     localStorage.setItem("ramadanDate", d)
        // }
        // // setShowRamadanModal(true)
    },[])

    useEffect(()=>{
        // if(showRamadanModal) {
        //     setTimeout(()=>{
        //         setShowRamadanModal(false)
        //     },30000)
        // }
    },[showRamadanModal])

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
        <section className="top-nav">
            {/*LEFT MENU*/}
            {/*Navbar*/}
            <nav id="sidebar" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style={{ overflow: 'visible' }}>
                <div id="dismiss" onClick={() => toogleSideBarOnOff(false)}>
                    <i className="fa fa-times" />
                </div>
                <div className="sidebar-header" style={{fontWeight: "bold"}}>
                    {/* <img src="/PrayerTimings/images/logo.png" alt="" /> */}
                    Islamic <span style={{color:"#0a9246"}}>KnowHow</span>
                </div>
                <ul className="list-unstyled components">
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.NAMES_OF_ALLAH}>99 Names Of Allah</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a onClick={openConfirmModal}>Go to Quran.com</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a href="https://sunnah.com" target="_blank">Hadiths</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a href="https://myislam.org/qibla-ar" target="_blank">Qibla Direction</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.DUAS}>Duas</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a href="https://www.youtube.com/playlist?list=PLqIZQ02Yb0hmre39-7qk-4e3-eJ4WtM1c" target="_blank">Prophets' Life Videos</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.HOME}>Prayer Timings</Link>
                    </li>
                    <li onClick={() => {toogleSideBarOnOff(false);window.open("/PrayerTimings/qaida.pdf", "_blank")}}>
                        {/* <Link to={URLS.LEARN_ARABIC}>Learn Arabic</Link> */}
                        <a>Learn Arabic</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.TASBIH_COUNTER}>Tasbih Counter</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.HIJRI_CALENDAR}>Hijri Calendar</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a href="https://muslimnames.com" target="_blank">Muslim Names</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a onClick={checkLocationAndGotoGMap}>Mosques Near Me</a>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn-none">
                        <span className="open-nav"
                            onClick={() => toogleSideBarOnOff(true)}
                        >
                        <img src="/PrayerTimings/images/menu.png" alt="menu" />
                        </span>
                    </button>
                    <button className="navbar-toggler btn-none d-inline-block ml-auto user-image" type="button" onClick={goToHome}>
                        <img src="/PrayerTimings/images/logo.png" />
                    </button>
                </div>
            </nav>
            <div className="insight-btn-wrap">
                <button className="btn insight-btn" onClick={()=>setShowInsightsModal(true)}>Insights of the Day</button>
            </div>
            <div className="overlay" id="overlay" onClick={() => toogleSideBarOnOff(false)} />

            {
                showConfirmModal &&
                    <ConfirmModal
                        shouldShow={showConfirmModal}
                        onClose={onConfirmModalClose}
                        onSuccess={onConfirmModalSuccess}
                        message={"Wudu is must for opening Al Qur'an. Have you done wudu?"}
                        type={2}
                    />
            }
            {
                showInsightsModal && 
                <InsightsModal
                    shouldShow={showInsightsModal}
                    setShowInsightsModal={setShowInsightsModal}
                />
            }

            {/* { showRamadanModal &&
                <RamadanModal
                    shouldShow={showRamadanModal}
                    setShowRamadanModal={setShowRamadanModal}
                />
            } */}
            
        </section>
    )
}

export default Sidebar
