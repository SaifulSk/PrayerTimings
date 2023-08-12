import React, { useEffect, useState } from 'react'

interface InsightsProps {
    type?: string
}

export default function Insights({type}: InsightsProps) {

    return (
        <>
            <h4>{type || "Qur'an"}</h4>
            <div style={{ height: 220,  textAlign: "center" }}>
                <iframe
                    src={"https://devl.stage.alim.org/"+(type?.toLowerCase() || "insight")+"-of-the-day/widget/"}
                    height="100%"
                    width="100%"
                    // style={{ border: "none" }}
                />
            </div>
        </>
    )
}