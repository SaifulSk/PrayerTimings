
import React from 'react'
import Sidebar from '../common/Sidebar'
import Counter from './components/Counter'

export default function TasbihCounter() {
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <Counter />            
            </section>
        </React.Fragment>
    )
}

