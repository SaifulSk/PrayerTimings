import React, { useEffect, useState } from 'react'

function Sidebar() {

  return (
    <section className="top-nav">
      {/*LEFT MENU*/}
      {/*Navbar*/}
      <nav id="sidebar" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style={{ overflow: 'visible' }}>
        <div id="dismiss"
        // onClick={() => toogleSideBarOnOff(false)}
        >
          <i className="fa fa-arrow-left" />
        </div>
        <div className="sidebar-header">
          <img src="/images/logo.png" alt="Inside Rodeo" /> Inside Rodeo
        </div>
        {/* {
          userDetails &&
          <div className="head-user">
            Welcome, {userDetails && userDetails.full_name && userDetails.full_name !== " " ? userDetails.full_name : ' User'}
          </div>
        } */}
        {/* <ul className="list-unstyled components">
          <li>
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
          }
          <li>
            <a href="https://sa.insiderodeo.com" target="_blank">Contact Us</a>
          </li>
          {
            userDetails ?
              <li>
                <Link to="#" onClick={(e) => logOut(e)}>Logout</Link>
              </li> : null
          }

        </ul> */}
      </nav>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn-none">
            <span className="open-nav"
              // onClick={() => toogleSideBarOnOff(true)}
            >
              <img src="images/menu.svg" alt="menu" />
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
              <img src="images/logo.png" alt="User" style={{width: "50%",position: "relative",right: "-20px"}}/>
            </button>
          }
        </div>
      </nav>
      <div className="overlay" id="overlay"
        // onClick={() => toogleSideBarOnOff(false)}
      />
      {/* IOS Scrren Add to home scrren option popup */}
      
    </section>
  )
}

export default Sidebar
