import React, { useEffect } from 'react'
import Sidebar from '../common/Sidebar'
import parse from 'html-react-parser'
import { useIslamicApi } from '../../_common/hooks/islamic/appIslamicApiHook'
import duas from '../../config/data/duas.json'
import axios from 'axios';
import jsesc from 'jsesc'

export default function Duas() {    

    const islamicApi = useIslamicApi()

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
    
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">
                <h2 className="page-title">Duas</h2>
                
            </section>
        </React.Fragment>
    )
}

