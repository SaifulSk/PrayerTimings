import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [value, setValue] = useState<number>(0)

    return (
        <>
            <h2 className="page-title">Tasbih Counter</h2>
            <span className="count-val">{value}</span>
            <div className="plus-btn-wrap">
                <a onClick={()=>setValue(value+1)}><i className="fa fa-plus"/></a>
            </div>
            {(value>0) &&
                <div className="reset-btn-wrap">
                    <a onClick={()=>setValue(0)}><img src="/PrayerTimings/images/reset.png"/></a>
                </div>
            }
        </>
    )
}