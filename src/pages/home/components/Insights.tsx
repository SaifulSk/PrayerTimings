import React, { useEffect, useState } from 'react'

interface InsightsProps {
    type?: string
}

export default function Insights({type}: InsightsProps) {

    return (
        <>
            {/* <h4 className='msg-text'>{type || "Qur'an"}</h4> */}
            <div style={{ height: '160vh',  textAlign: "center", paddingBottom: 10 }}>
                <iframe
                    src={"https://alim.org/widgets/"+(type?.toLowerCase() || "insight")}
                    height="100%"
                    width="100%"
                    // style={{ border: "none" }}
                />
            </div>
        </>
    )
}