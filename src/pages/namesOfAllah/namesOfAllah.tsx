import React, { useEffect } from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import { useIslamicApi } from '../../_common/hooks/islamic/appIslamicApiHook'
import names from '../../config/data/namesOfAllah.json'

export default function NamesOfAllah() {    

    const islamicApi = useIslamicApi()

    useEffect(()=>{
        console.log({names})
        // islamicApi.callGetNamesOfAllah(
        //     (message:any,resp:any)=>{
        //         console.log({resp})
        //     },
        //     (message:any,resp:any)=>{

        //     },
        // )
    },[])
    
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
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
            </section>
        </React.Fragment>
    )
}

