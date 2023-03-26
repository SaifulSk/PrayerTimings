import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import names from '../../../config/data/namesOfAllah.json'

export default function AllahNamesList() {

    useEffect(()=>{
        console.log({names})
    },[])

    return (
        <>
            <h2 className="page-title">99 Names Of Allah</h2>
            {names.map((n:any, i:any)=>
                <>
                    <h4>{i+1}. {n.transliteration}</h4>
                    <div className="zikr-wrap">
                        <div className="zikr-img">
                            {/* <img src={"images/Zikr/"+n+".png"} /> */}
                            {parse(n.name)}
                        </div>
                        <div className="zikr-meaning">{n.en.meaning}</div>
                    </div>
                </>
            )}
        </>
    )
}

