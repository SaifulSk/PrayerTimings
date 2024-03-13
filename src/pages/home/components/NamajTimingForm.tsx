import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormTextInput from '../../../_common/components/form-elements/textinput/formTextInput';
import DateInput from '../../../_common/components/form-elements/datepicker/dateInput';
import SelectInput from '../../../_common/components/form-elements/selectinput/selectInput';
import { TIMING_VIEW_OPTIONS, WAQT_OPTIONS } from '../../../config';
import StartEndTimeModal from './StartEndTimeModal';
import getCurrentWaqt from '../../../config/functions';
import SetLocationModal from './SetLocationModal';
import RadioInput from '../../../_common/components/form-elements/radioinput/radioInput';
import DaywiseTiming from './TimingTypes/DaywiseTiming';
import WeekwiseTiming from './TimingTypes/WeekwiseTiming';
import MonthwiseTiming from './TimingTypes/MonthwiseTiming';

interface NamajTimingFormValues {
    type: any;
}

const NamajTimingSchema = yup.object().shape({
    waqt: yup
        .object()
        .nullable(),
})

export default function NamajTimingForm() {

    const { control, formState: { errors }, formState, setValue, handleSubmit } = useForm<NamajTimingFormValues>({
        resolver: yupResolver(NamajTimingSchema),
        defaultValues: {
            type: 'Daywise',
        },
    })

    const [showSetLocationModal, setShowSetLocationModal] = useState<boolean>(false)
    const [selectedTimingType, setSelectedTimingType] = useState<any>('Daywise')

    const radioChange = (e:any) => {
        setSelectedTimingType(e)
    }

    const onCloseSetLocationModal = () => {
        setShowSetLocationModal(false)
    }
    
    useEffect(()=>{
        
    },[])

    return (
        <>
            <h2 className="page-title">
                Prayer Timings
                <a style={{right: "15px",position: "absolute"}} onClick={()=>{setShowSetLocationModal(true)}}>
                    <i className="fa-solid fa-location-dot" />
                </a>
            </h2>    
            <div className="mb-3 text-white">
                <label className="form-label">Type</label>
                <Controller
                    control={control}
                    name="type"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                    }) => (
                        <RadioInput
                            name={name}
                            onChange={(e:any)=>{
                                onChange(e)
                                radioChange(e)
                            }}
                            onBlur={onBlur}
                            inputRef={ref}
                            options={TIMING_VIEW_OPTIONS}
                            value={value}
                            // error={errors.waqt}
                        />
                    )}
                />
            </div> 
            {selectedTimingType=="Daywise" ?
                <DaywiseTiming />
                : 
                selectedTimingType=="Weekwise" ?
                    <WeekwiseTiming />
                    :
                    <MonthwiseTiming />
            }
            {   showSetLocationModal &&
                <SetLocationModal
                    shouldShow={showSetLocationModal}
                    onClose={onCloseSetLocationModal}
                />
            }
        </>
    )
}