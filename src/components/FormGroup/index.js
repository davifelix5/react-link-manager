import React, { useState, useEffect } from 'react'

const FormGroup = ({ label, name, data, type }) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined
        if (initialValue !== undefined) setValue(initialValue)
    }, [name, data])

    const handleChange = event => {
        if (value === event.target.value) return
        setValue(event.target.value)
    }

    return (
        <div className="form-group">
            <label htmlFor="nome">{label}</label>
            <input className="form-control" type={type} name={name} id={name} value={value} onChange={handleChange} />
        </div>
    )
}

export default FormGroup
