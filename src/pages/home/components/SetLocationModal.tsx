import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import SelectInput from '../../../_common/components/form-elements/selectinput/selectInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LOCATIONS } from '../../../config';

interface SetLocationModalProps {
    onClose: () => void;
    shouldShow: boolean;
}

interface SetLocationModalValues {
    location: any;
}

const NamajTimingSchema = yup.object().shape({
    location: yup
        .object()
        .nullable(),
})

export default function SetLocationModal({ onClose, shouldShow }: SetLocationModalProps) {
    
    const { control, formState: { errors }, formState, setValue, handleSubmit } = useForm<SetLocationModalValues>({
        resolver: yupResolver(NamajTimingSchema),
        defaultValues: {
            location: undefined,
        },
    })

    const onSubmit = () => {

        onClose()
    }

    useEffect(()=>{
        let loc = localStorage.getItem("location")
        if(loc) {
            setValue("location",{value:loc, label: loc})
        }
    },[])

    return (
        <React.Fragment>
            <Modal
                show={shouldShow}
                backdrop="static"
                keyboard={false}
                // className="dark-modal"
                centered
                contentClassName='custom-modal'
            >
                <Modal.Header>
                    Set Location
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body content">
                    <Controller
                        control={control}
                        name="location"
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
                                options={Object.keys(LOCATIONS).map((l:any)=>({value:l,label:l}))}
                                value={value}
                                placeholder="Select location"
                            />
                        )}
                    />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-wrap mb-3">
                        <button type="button"
                            className="rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3"
                            onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}