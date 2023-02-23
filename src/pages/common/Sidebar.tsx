import React, { useEffect, useState } from 'react'
import ConfirmModal from '../home/components/ConfirmModal';

function Sidebar() {

    const [showConfirmModal,setShowConfirmModal] = useState<boolean>(false)

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

    return (
        <section className="top-nav">
            {/*LEFT MENU*/}
            {/*Navbar*/}
            <nav id="sidebar" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style={{ overflow: 'visible' }}>
                <div id="dismiss" onClick={() => toogleSideBarOnOff(false)}>
                    <i className="fa fa-arrow-left" />
                </div>
                <div className="sidebar-header" style={{color:"#000"}}>
                    {/* <img src="/PrayerTimings/images/logo.png" alt="" /> */}
                    <span style={{color:"#0a9246",fontWeight: "bold"}}>Islamic </span>Know How
                </div>
                {/* {
                    userDetails &&
                    <div className="head-user">
                        Welcome, {userDetails && userDetails.full_name && userDetails.full_name !== " " ? userDetails.full_name : ' User'}
                    </div>
                } */}
                <ul className="list-unstyled components">
                    {/* <li>
                        <Link to={URLS.HOME}>Rodeo Events</Link>
                    </li>
                    {userDetails ? (
                        <li>
                        <Link to={URLS.USER.PROFILE}>My Profile</Link>
                        </li>
                    ): <li>
                        <Link to={URLS.LOGIN}>Login</Link>
                    </li>
                    }
                    {
                        cmsList && cmsList.length ? 
                        cmsList.map((cms: any) =>
                            <li key={cms.id}>
                                <a onClick={()=>gotoCmsPage(cms.id)}>
                                    {cms.title}
                                </a>
                            </li>
                        )
                        : null
                    } */}
                    <li>
                        <a onClick={openConfirmModal}>Go to Quran.com</a>
                    </li>
                    <li>
                        <a href="https://muslimnames.com" target="_blank">Muslim Baby Names</a>
                    </li>
                    {/* {
                        userDetails ?
                        <li>
                            <Link to="#" onClick={(e) => logOut(e)}>Logout</Link>
                        </li> : null
                    } */}

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
                {/* {
                    [RODEO_PAGE_NAME.EVENT_GAME_LIST, RODEO_PAGE_NAME.EVENT_GAME_DETAILS].includes(page) && (
                    // statusMessageSelector && statusMessageSelector.status_text &&
                    statusMessageSelector && statusMessageSelector.length &&
                    <div className="status-bar-wrap">
                        <Marquee direction="left" loop={0} pauseOnHover={true} speed={60}>
                        {statusMessageSelector}
                        </Marquee>
                    </div>
                    )} */}

                {
                    // userDetails &&
                    <button
                    className="navbar-toggler btn-none d-inline-block ml-auto user-image"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    // onClick={toogleProfileMenuBarOnOff}
                    // onClick={goToHome}
                    >
                        <img src="/PrayerTimings/images/logo.png" />
                    </button>
                }
                </div>
            </nav>
            <div className="overlay" id="overlay" onClick={() => toogleSideBarOnOff(false)} />
            {/* IOS Scrren Add to home scrren option popup */}
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
