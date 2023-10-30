import React, { useEffect, useState } from 'react'
import { ZIKRS } from '../../../config'

export default function Zikr() {

    const totalZikrs = Array.from({length: 12}, (_, i) => i + 1)

    const [zikrCounts, setZikrCounts] = useState<any>(Array.from({length: 12}, (_, i) => 0))

    const changeCount = (item: any) => {
        let x: any = {...zikrCounts}
        x[item-1] = x[item-1] + 1
        setZikrCounts(x)
        localStorage.setItem("zikr",JSON.stringify(x))
    }

    const resetCount = (item: any) => {
        let x: any = {...zikrCounts}
        x[item-1] = 0
        setZikrCounts(x)
        localStorage.setItem("zikr",JSON.stringify(x))
    }

    useEffect(()=>{
        let val = localStorage.getItem("zikr")
        if(val) {
            setZikrCounts(JSON.parse(val))
        }
    },[])
    
    return (
        <>
            <h3 className="page-title">Zikr Counters</h3>
            <div className="desc-text">The remembrance of Allah. The effort of total concentration with sincerity on God, to realise His nearness and company, and removing all other thoughts is called zikr. Everything which can be instrumental in invoking God, such as a name, a sign, an act, a word, a prayer, or recitations of the Holy Quran, or invoking blessings on the Holy Quran, or invoking blessings on the Holy Prophet (durood sharif), or entreaties, or spiritual conditions and similar acts which enhance the remembrance of the beloved and increase communion with Him, are covered by the term zikr.</div>
            {totalZikrs.map((x:any)=>
                <>
                    <h4>{x}. {Object.keys(ZIKRS)[x-1]}</h4>
                    <div className="zikr-wrap">
                        <div className="zikr-img">
                            <img src={"images/Zikr/"+x+".png"} />
                        </div>
                        <div className="zikr-meaning">{Object.values(ZIKRS)[x-1]}</div>
                        <div className="row">
                            <div className="col-6">
                                <span className="count-val">{zikrCounts[x-1]}</span>
                            </div>
                            <div className={"col-"+(zikrCounts[x-1]>0 ? "3" : "6")}>
                                <div className="plus-btn-wrap">
                                    <a onClick={()=>changeCount(x)}><i className="fa fa-plus"/></a>
                                </div>
                            </div>
                            {
                                zikrCounts[x-1]>0 ?
                                    <div className="col-3">
                                        <div className="plus-btn-wrap reset-btn-wrap">
                                            <a onClick={()=>resetCount(x)}><img src="/PrayerTimings/images/reset.png"/></a>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}