import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import names from '../../../config/namesOfAllah.json'

export default function AllahNamesList() {

    useEffect(()=>{
        console.log({names})
    },[])

    return (
        <>
            <h2 className="page-title">99 Names Of Allah</h2>

        </>
    )
}

