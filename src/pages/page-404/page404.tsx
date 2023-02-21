import React from 'react'
// import { Link } from 'react-router-dom'
// import Sidebar from 'src/components/common/Sidebar'
// import { RODEO_PAGE_NAME, URLS } from 'src/_config'

export default function Page404() {
  return (
    <React.Fragment>
      {/* <Sidebar page={RODEO_PAGE_NAME.NOT_FOUND_PAGE} /> */}
      <div className="main-container not-found-wrap">
        <h1>404</h1>
        <h2>Not Found</h2>
      </div>
      {/* <p className="home-link">
        <Link to={URLS.HOME}>Go to Home</Link>
      </p> */}
    </React.Fragment>

  )
}
