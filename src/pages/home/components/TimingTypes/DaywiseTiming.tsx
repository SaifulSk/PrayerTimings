import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DateInput from '../../../../_common/components/form-elements/datepicker/dateInput';
import SelectInput from '../../../../_common/components/form-elements/selectinput/selectInput';
import { WAQT_OPTIONS } from '../../../../config';
import StartEndTimeModal from '../StartEndTimeModal';
import getCurrentWaqt from '../../../../config/functions';

interface DaywiseTimingValues {
    date: any;
    waqt: any;
}

const DaywiseTimingSchema = yup.object().shape({
    date: yup
        .string(),
    waqt: yup
        .object()
        .nullable(),
})

export default function DaywiseTiming() {

    const { control, formState: { errors }, formState, setValue, handleSubmit } = useForm<DaywiseTimingValues>({
        resolver: yupResolver(DaywiseTimingSchema),
        defaultValues: {
            date: new Date(),
            waqt: '',
        },
    })

    const [showStartEndTimeModal, setShowStartEndTimeModal] = useState<boolean>(false)
    const [showSetLocationModal, setShowSetLocationModal] = useState<boolean>(false)
    const [formValues, setFormValues] = useState<any>()

    const onSubmit = (values: any) => {
        console.log({values})
        setShowStartEndTimeModal(true)
        setFormValues(values)
    }

    const onCloseStartEndTimeModal = () => {
        setShowStartEndTimeModal(false)
    }

    const onCloseSetLocationModal = () => {
        setShowSetLocationModal(false)
    }
    
    useEffect(()=>{
        let y = getCurrentWaqt()
        setValue("waqt",{value:y,label:y})
    },[])

    return (
        <>
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
                                    onChange={(e:any) => {
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