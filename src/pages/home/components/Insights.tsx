import React, { useEffect, useState } from 'react'

interface InsightsProps {
    type?: string
}

export default function Insights({type}: InsightsProps) {

    return (
        <>
            <h4 className='msg-text'>{type || "Qur'an"}</h4>
            <div style={{ height: 230,  textAlign: "center" }}>
                <iframe
                    src={"https://alim.org/"+(type?.toLowerCase() || "insight")+"-of-the-day/widget/"}
                    height="100%"
                    width="100%"
                    // style={{ border: "none" }}
                />
            </div>
        </>
    )
}