import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormTextInput from '../../../_common/components/form-elements/textinput/formTextInput';
import DateInput from '../../../_common/components/form-elements/datepicker/dateInput';
import SelectInput from '../../../_common/components/form-elements/selectinput/selectInput';
import { WAQT_OPTIONS } from '../../../config';
import StartEndTimeModal from './StartEndTimeModal';
import moment from 'moment';
import data from '../../../config/data.json'

interface NamajTimingFormValues {
    date: any;
    waqt: any;
}

const NamajTimingSchema = yup.object().shape({
    date: yup
        .string(),
    waqt: yup
        .object()
        .nullable(),
})

export default function NamajTimingForm() {

    const { control, formState: { errors }, formState, setValue, handleSubmit } = useForm<NamajTimingFormValues>({
        resolver: yupResolver(NamajTimingSchema),
        defaultValues: {
            date: new Date(),
            waqt: '',
        },
    })

    const [showStartEndTimeModal, setShowStartEndTimeModal] = useState<boolean>(false)
    const [formValues, setFormValues] = useState<any>()

    const onSubmit = (values: any) => {
        console.log({values})
        setShowStartEndTimeModal(true)
        setFormValues(values)
    }

    const onCloseStartEndTimeModal = () => {
        setShowStartEndTimeModal(false)
    }

    const day = moment(new Date()).format("D")
    const month = moment(new Date()).format("MMMM")
    const time = moment(new Date()).format("HH:mm")
    
    useEffect(()=>{
        let x:any = data
        let y:any
        Object.keys(x[month][day]).map((w:any,i:any)=>{
            console.log(time)
            if(time>x[month][day][w]["Start"]) {
                y=w
            }
        })
        setValue("waqt",{value:y,label:y})
    },[])

    return (
        <>
            <h2 className="page-title">Prayer Timings</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-box-new">
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        {/* <input type="date" className="form-control react-datepicker"/> */}
                        <Controller
                            control={control}
                            name="date"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <DateInput
                                    onChange={(e) => {
                                        onChange(e)
                                    }}
                                    onBlur={onBlur}
                                    value={value}
                                    // maxDate={new Date()}
                                    dateFormat={"dd-MMMM-yyyy"}
                                    inputRef={ref}
                                    // error={errors.date}
                                    placeholder="Select Date"
                                />
                            )}
                        />
                        {/* {errors?.date?.message && <div className="invalid-feedback">{String(errors?.date?.message)}</div>} */}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Namaj Waqt</label>
                        <Controller
                            control={control}
                            name="waqt"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <SelectInput
                                    name={name}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                    options={WAQT_OPTIONS}
                                    value={value}
                                    // error={errors.waqt}
                                    placeholder="Select Waqt"
                                />
                            )}
                        />
                    </div>
                    <div className="btn-wrap">
                        <button type="submit" className="rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3">View Timing</button>
                    </div>
                </div>
                {   showStartEndTimeModal && formValues &&
                    <StartEndTimeModal
                        shouldShow={showStartEndTimeModal}
                        formValues={formValues}
                        onClose={onCloseStartEndTimeModal}
                    />
                }
            </form>
        </>
    )
}