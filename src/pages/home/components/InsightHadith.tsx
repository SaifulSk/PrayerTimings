import React, { useEffect, useState } from 'react'

export default function InsightHadith({type}:any) {

    return (
        <>
            <h3 className="page-title">{type} of the Day</h3>
            <div style={{ height: 220,  textAlign: "center" }}>
                <iframe
                    src={"https://www.alim.org/"+type.toLowerCase()+"-of-the-day/widget/"}
                    height="100%"
                    width="100%"
                    // style={{ border: "none" }}
                />
            </div>
        </>
    )
}