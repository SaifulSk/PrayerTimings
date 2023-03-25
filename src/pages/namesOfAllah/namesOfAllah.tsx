import React from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import AllahNamesList from './components/AllahNamesList'

export default function NamesOfAllah() {
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <AllahNamesList />
            </section>
        </React.Fragment>
    )
}

