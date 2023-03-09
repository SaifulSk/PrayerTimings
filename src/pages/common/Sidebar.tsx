import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { URLS } from '../../config';
import ConfirmModal from './ConfirmModal';

function Sidebar() {

    const [showConfirmModal,setShowConfirmModal] = useState<boolean>(false)
    const navigate = useNavigate()

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
    }

    const goToHome = () => {
        navigate(URLS.HOME)
    }

    return (
        <section className="top-nav">
            {/*LEFT MENU*/}
            {/*Navbar*/}
            <nav id="sidebar" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style={{ overflow: 'visible' }}>
                <div id="dismiss" onClick={() => toogleSideBarOnOff(false)}>
                    <i className="fa fa-arrow-left" />
                </div>
                <div className="sidebar-header" style={{fontWeight: "bold"}}>
                    {/* <img src="/PrayerTimings/images/logo.png" alt="" /> */}
                    Islamic <span style={{color:"#0a9246"}}>KnowHow</span>
                </div>
                <ul className="list-unstyled components">
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a onClick={openConfirmModal}>Go to Quran.com</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.HOME}>Prayer Timings</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <a href="https://muslimnames.com" target="_blank">Muslim Baby Names</a>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.LEARN_ARABIC}>Learn Arabic</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.TASBIH_COUNTER}>Tasbih Counter</Link>
                    </li>
                    <li onClick={() => toogleSideBarOnOff(false)}>
                        <Link to={URLS.HIJRI_CALENDAR}>Hijri Calendar</Link>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn-none">
                        <span className="open-nav"
                            onClick={() => toogleSideBarOnOff(true)}
                        >
                        <img src="/PrayerTimings/images/menu.svg" alt="menu" />
                        </span>
                    </button>
                    <button className="navbar-toggler btn-none d-inline-block ml-auto user-image" type="button" onClick={goToHome}>
                        <img src="/PrayerTimings/images/logo.png" />
                    </button>
                </div>
            </nav>
            <div className="overlay" id="overlay" onClick={() => toogleSideBarOnOff(false)} />
            {
                showConfirmModal &&
                    <ConfirmModal
                        shouldShow={showConfirmModal}
                        onClose={onConfirmModalClose}
                        onSuccess={onConfirmModalSuccess}
                        message={"Wudu is must before opening this. Are you ready?"}
                        type={2}
                    />
            }
            
        </section>
    )
}

export default Sidebar
