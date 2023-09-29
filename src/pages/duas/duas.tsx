import React, { useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import { useIslamicApi } from '../../_common/hooks/islamic/appIslamicApiHook'
import duas from '../../config/data/duas.json'
import axios from 'axios';
import jsesc from 'jsesc'
import SelectInput from '../../_common/components/form-elements/selectinput/selectInput'

export default function Duas() {    

    const islamicApi = useIslamicApi()
    const [type, setType] = useState<any>()
    const [data, setData] = useState<any>()

    const changeType = (e:any) => {
        // console.log({e})
        setType(e)
    }

    useEffect(()=>{
        console.log({duas})
        // let params = {
        //     slug: "quranic"
        // }
        // islamicApi.callGetDuas(params,
        //     (message:any,resp:any)=>{
        //         console.log({resp})
        //     },
        //     (message:any,resp:any)=>{

        //     },
        // )
        // console.log(jsesc('الرَّحْمَنُ'))
    },[])
    
    useEffect(()=>{
        console.log({type})
        if(type?.value) {
            if(type?.value=='masnoon') {
                setData(duas['masnoon'])
            } else if(type?.value=='ramadan') {
                setData(duas['ramadan'])
            }else if(type?.value=='rabbana') {
                setData(duas['rabbana'])
                console.log(duas['rabbana'])
            }
        } else {
            setData(null)
        }
    },[type])

    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <h2 className="page-title">Duas</h2>
                    <div className="mb-3">
                        <SelectInput
                            onChange={changeType}
                            options={["masnoon","ramadan","rabbana"].map((x:any)=>{return {label:x.charAt(0).toUpperCase()+x.substring(1),value:x}})}
                            value={type}
                            placeholder="Select Dua Type"
                        />
                    </div>
                {/* {duas.map((d:any)=>
                    <>
                        <h4>{d.transliteration}</h4>
                        <div className="zikr-wrap">
                            <div className="zikr-img">
                                {parse(n.name)}
                            </div>
                            <div className="zikr-meaning">{n.en.meaning}</div>
                        </div>
                    </>
                )} */}
                {
                    data ? Object.keys(data).map((item:any)=>
                        <>
                            <h3 className="page-title">{item}</h3>
                            <div className="zikr-wrap">
                                <div className="zikr-img">
                                    {data[item].arabic}
                                </div>
                                <div className="zikr-meaning text-white">{data[item].transliteration}</div>
                                <div className="zikr-meaning">{data[item].translation}</div>
                            </div>
                            {data[item]["recommended-use"] && <div className="desc-text">{data[item]["recommended-use"]}</div>}
                        </>
                    ) : <div className="desc-text">No dua selected</div>
                }
            </section>
        </React.Fragment>
    )
}

