
import React from 'react'
import Sidebar from '../common/Sidebar'
import Counter from './components/Counter'
import Zikr from './components/Zikr'

export default function TasbihCounter() {
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <Counter />       
                <Zikr />
            </section>
        </React.Fragment>
    )
}

